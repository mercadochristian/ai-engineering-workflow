(() => {
  const deck = document.querySelector('[data-deckframe]')
  const stage = deck?.querySelector('[data-stage]')
  const slides = [...(stage?.querySelectorAll(':scope > [data-slide]') ?? [])]
  if (!slides.length) return

  const root = document.documentElement
  const motion = matchMedia('(prefers-reduced-motion: reduce)')
  const controls = deck.querySelector('[data-controls]')
  const jump = deck.querySelector('[data-jump]')
  const back = deck.querySelector('[data-back]')
  const next = deck.querySelector('[data-next]')
  const replay = deck.querySelector('[data-replay]')
  const status = deck.querySelector('[data-status]')
  const steps = slides.map(slide => [...slide.querySelectorAll('[data-step]')])
  const titles = slides.map((slide, index) =>
    slide.getAttribute('aria-label') || slide.querySelector('h1, h2, h3')?.textContent.trim() || `Slide ${index + 1}`
  )
  let current = { index: 0, beat: 0 }
  let requested = current
  let transition

  const links = jump ? slides.map((slide, index) => {
    const button = document.createElement('button')
    button.type = 'button'
    button.textContent = index + 1
    button.setAttribute('aria-label', `Slide ${index + 1}, ${titles[index]}`)
    button.addEventListener('click', () => goTo(index))
    jump.append(button)
    return button
  }) : []

  function render(state) {
    const { index, beat } = state
    const old = current
    const focus = document.activeElement
    const slideChanged = index !== old.index
    if (slideChanged) {
      slides[old.index].hidden = true
      delete slides[old.index].dataset.enter
    }

    const slide = slides[index]
    slide.hidden = false
    if (slideChanged) slide.dataset.enter = ''
    const pieces = steps[index]
    pieces.forEach((piece, position) => {
      piece.hidden = position >= beat
      piece.toggleAttribute('data-revealed', !slideChanged && beat > old.beat && position === beat - 1)
    })

    current = state
    links.forEach((link, position) => {
      if (position === index) link.setAttribute('aria-current', 'step')
      else link.removeAttribute('aria-current')
    })
    const atEnd = index === slides.length - 1 && beat === pieces.length
    if (back) back.disabled = index === 0 && beat === 0
    if (next) {
      next.hidden = atEnd && Boolean(replay)
      next.disabled = atEnd
      next.textContent = beat < pieces.length ? 'Reveal' : 'Next'
    }
    if (replay) replay.hidden = !atEnd
    if (focus === next && next.hidden) replay.focus({ preventScroll: true })
    if (focus === replay && replay.hidden) (next || links[index])?.focus({ preventScroll: true })
    if (focus === back && back.disabled) (links[index] || next)?.focus({ preventScroll: true })
    if (slideChanged && slides[old.index].contains(focus)) {
      slide.focus({ preventScroll: true })
    }
    if (status) {
      status.textContent = `Slide ${index + 1} of ${slides.length}. ${titles[index]}.` +
        (pieces.length ? ` ${beat} of ${pieces.length} revealed.` : '')
    }
  }

  function morphElements(state) {
    const slide = slides[state.index]
    const visibleSteps = new Set(steps[state.index].slice(0, state.beat))
    const unique = new Map()
    for (const element of slide.querySelectorAll('[data-morph]')) {
      const name = element.getAttribute('data-morph').trim()
      if (!name) continue
      let ancestor = element
      while (ancestor !== slide) {
        if (ancestor.hasAttribute('data-step') ? !visibleSteps.has(ancestor) : ancestor.hidden) break
        ancestor = ancestor.parentElement
      }
      if (ancestor === slide) unique.set(name, unique.has(name) ? null : element)
    }
    return unique
  }

  async function update() {
    if (transition || requested === current) return
    const target = requested
    if (target.index === current.index || motion.matches || !document.startViewTransition) {
      render(target)
      return
    }

    const old = morphElements(current)
    const next = morphElements(target)
    const named = new Map()
    const tag = (element, name) => {
      named.set(element, element.style.viewTransitionName)
      element.style.viewTransitionName = name
    }
    const reverse = target.index < current.index
    const scene = slides[reverse ? current.index : target.index]
    const effect = scene.dataset.transition || 'fade'
    const animateScene = ['fade', 'slide', 'wipe'].includes(effect)
    if (animateScene) tag(stage, 'df-scene')
    let count = 0
    for (const [name, element] of old) {
      const destination = next.get(name)
      if (element && destination) {
        const group = `df-morph-${++count}`
        tag(element, group)
        tag(destination, group)
      }
    }
    if (!named.size) {
      render(target)
      return
    }

    root.dataset.dfTransition = effect
    root.style.setProperty('--df-slide-from', reverse ? '-100%' : '100%')
    root.style.setProperty('--df-wipe-from', reverse ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)')
    root.style.setProperty('--df-scene-radius', getComputedStyle(stage).borderRadius)
    transition = document.startViewTransition(() => render(target))
    transition.ready.catch(() => {}) // An interrupted capture can reject while navigation still succeeds.
    try {
      await transition.finished
    } finally {
      for (const [element, name] of named) element.style.viewTransitionName = name
      delete root.dataset.dfTransition
      root.style.removeProperty('--df-slide-from')
      root.style.removeProperty('--df-wipe-from')
      root.style.removeProperty('--df-scene-radius')
      transition = undefined
      update()
    }
  }

  function request(index, beat) {
    if (requested.index === index && requested.beat === beat) return
    requested = { index, beat }
    if (transition) transition.skipTransition()
    else update()
  }

  function goTo(index) {
    if (index !== requested.index) request(index, 0)
  }

  function advance() {
    const { index, beat } = requested
    if (beat < steps[index].length) request(index, beat + 1)
    else if (index < slides.length - 1) goTo(index + 1)
  }

  function retreat() {
    const { index, beat } = requested
    if (beat > 0) request(index, beat - 1)
    else if (index > 0) request(index - 1, steps[index - 1].length)
  }

  back?.addEventListener('click', retreat)
  next?.addEventListener('click', advance)
  replay?.addEventListener('click', () => request(0, 0))
  motion.addEventListener('change', () => transition?.skipTransition())
  document.addEventListener('keydown', event => {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return
    if (event.target.closest('input, select, textarea, [contenteditable], audio, video')) return
    const actions = {
      ArrowRight: advance, ArrowLeft: retreat,
      Home: () => request(0, 0), End: () => goTo(slides.length - 1)
    }
    const action = actions[event.key]
    if (typeof action === 'function') {
      event.preventDefault()
      action()
    }
  })

  slides.forEach((slide, index) => {
    if (!slide.hasAttribute('tabindex')) slide.tabIndex = -1
    slide.hidden = index !== 0
  })
  deck.dataset.deckframeReady = ''
  if (controls) controls.hidden = false
  render(current)
})()
