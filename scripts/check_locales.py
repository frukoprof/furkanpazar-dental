"""Locale denetimi: tr/ru/en JSON dosyalarinin gecerli oldugunu ve
ayni anahtar setine sahip oldugunu dogrular.

Kullanim:  python scripts/check_locales.py
Cikis kodu 0 = sorun yok.
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LANGS = ("tr", "ru", "en")


def flatten(d, prefix=""):
    keys = set()
    for name, value in d.items():
        path = f"{prefix}{name}"
        if isinstance(value, dict):
            keys |= flatten(value, path + ".")
        else:
            keys.add(path)
    return keys


def main():
    keysets = {}
    for lang in LANGS:
        path = ROOT / "locales" / f"{lang}.json"
        try:
            data = json.loads(path.read_text(encoding="utf-8"))
        except json.JSONDecodeError as e:
            print(f"HATA: {path.name} gecersiz JSON: {e}")
            return 1
        keysets[lang] = flatten(data)

    base = keysets[LANGS[0]]
    ok = True
    for lang in LANGS[1:]:
        missing = base - keysets[lang]
        extra = keysets[lang] - base
        if missing:
            ok = False
            print(f"HATA: {lang}.json eksik anahtarlar: {sorted(missing)}")
        if extra:
            ok = False
            print(f"HATA: {lang}.json fazla anahtarlar: {sorted(extra)}")

    if ok:
        print(f"OK: {len(base)} anahtar, {'/'.join(LANGS)} esit.")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
