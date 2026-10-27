"""Check repository Markdown file links and portable text formatting.

Uses only the standard library. Checks the inline links used in this repository;
it is not a complete Markdown parser or an external URL availability checker.
"""

from pathlib import Path
import re
import sys
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parents[1]
LINK = re.compile(r"\[[^\]]*\]\(([^\s)]+)\)")


def main() -> int:
    errors = []
    files = sorted(ROOT.rglob("*.md"))
    for path in files:
        if ".git" in path.relative_to(ROOT).parts:
            continue
        content = path.read_text(encoding="utf-8")
        name = path.relative_to(ROOT)
        if not content.endswith("\n"):
            errors.append(f"{name}: missing final newline")
        for number, line in enumerate(content.splitlines(), start=1):
            if line != line.rstrip():
                errors.append(f"{name}:{number}: trailing whitespace")
        for link in LINK.findall(content):
            parsed = urlsplit(link)
            if parsed.scheme or parsed.netloc or not parsed.path:
                continue
            target = (path.parent / unquote(parsed.path)).resolve()
            if not target.is_relative_to(ROOT):
                errors.append(f"{name}: link leaves repository: {link}")
            elif not target.exists():
                errors.append(f"{name}: missing link target: {link}")
    if errors:
        print("\n".join(errors), file=sys.stderr)
        return 1
    print(f"PASS: local file links and text formatting in {len(files)} Markdown files")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
