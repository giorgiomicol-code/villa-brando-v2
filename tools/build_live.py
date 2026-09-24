#!/usr/bin/env python3
"""Costruisce la versione pubblicabile su www.villabrando.com a partire dal branch di lavoro.
Uso: python3 tools/build_live.py <cartella_output>
- elegance/it -> /it, elegance/en -> /en, elegance/tour-eventi -> /tour-eventi
- percorsi /villa-brando-v2/elegance/ e /villa-brando-v2/ riscritti alla radice
- rimandi dai vecchi indirizzi del sito Google Sites
"""
import os, shutil, sys, re
SRC = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.abspath(sys.argv[1])
DOMAIN = 'www.villabrando.com'
if os.path.exists(OUT): shutil.rmtree(OUT)
os.makedirs(OUT)
shutil.copytree(os.path.join(SRC, 'assets'), os.path.join(OUT, 'assets'))
for a, b in [('elegance/it', 'it'), ('elegance/en', 'en'), ('elegance/tour-eventi', 'tour-eventi')]:
    shutil.copytree(os.path.join(SRC, a), os.path.join(OUT, b))

def fix(text):
    text = text.replace('https://villa-brando-new.giorgiomicol.chatgpt.site/elegance/', f'https://{DOMAIN}/')
    text = text.replace('/villa-brando-v2/elegance/', '/')
    text = text.replace('/villa-brando-v2/', '/')
    return text
for root, _, files in os.walk(OUT):
    for f in files:
        if f.endswith(('.html', '.css', '.js', '.xml', '.txt', '.json')):
            p = os.path.join(root, f)
            s = open(p, encoding='utf-8').read()
            n = fix(s)
            if n != s: open(p, 'w', encoding='utf-8').write(n)

def redirect_page(target):
    return f'''<!doctype html><html><head><meta charset="utf-8"><title>Villa Brando</title>
<meta name="robots" content="noindex"><link rel="canonical" href="https://{DOMAIN}{target}">
<meta http-equiv="refresh" content="0; url={target}"><script>location.replace({target!r}+location.search+location.hash)</script>
</head><body><p><a href="{target}">Villa Brando</a></p></body></html>'''
def write(path, content):
    full = os.path.join(OUT, path.strip('/'), 'index.html') if not path.endswith('.html') else os.path.join(OUT, path.strip('/'))
    os.makedirs(os.path.dirname(full), exist_ok=True)
    open(full, 'w', encoding='utf-8').write(content)

# Home: italiano o inglese in base alla lingua del browser
write('/', f'''<!doctype html><html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Villa Brando – Casa vacanze esclusiva a Latina, vicino a Sabaudia</title>
<link rel="canonical" href="https://{DOMAIN}/it/"><link rel="alternate" hreflang="it" href="https://{DOMAIN}/it/"><link rel="alternate" hreflang="en" href="https://{DOMAIN}/en/">
<meta http-equiv="refresh" content="1; url=/it/">
<script>var l=(navigator.language||'it').toLowerCase();location.replace(l.indexOf('it')===0?'/it/':'/en/');</script>
</head><body><p><a href="/it/">Italiano</a> · <a href="/en/">English</a></p></body></html>''')

OLD = {
 '/english': '/en/', '/english/gallery': '/en/villa/', '/english/gallery/livingrooms': '/en/villa/', '/english/gallery/garden': '/en/garden/',
 '/english/gallery/bedrooms': '/en/rooms/', '/english/gallery/game-room-bikes': '/en/gallery/', '/english/gallery/animal-amenities': '/en/info/',
 '/english/excursions': '/en/experiences/', '/english/excursions/touristic-infos': '/en/experiences/', '/english/excursions/hereabouts': '/en/experiences/',
 '/english/reviews': '/en/', '/english/contacts': '/en/info/', '/english/privacy': '/en/info/',
 '/italiano': '/it/', '/italiano/gallery': '/it/villa/', '/italiano/gallery/saloni': '/it/villa/', '/italiano/gallery/giardino': '/it/giardino/',
 '/italiano/gallery/camere': '/it/camere/', '/italiano/gallery/sala-giochi-e-bici': '/it/gallery/', '/italiano/gallery/animali-domestici': '/it/info/',
 '/italiano/escursioni': '/it/esperienze/', '/italiano/escursioni/info-turistiche': '/it/esperienze/', '/italiano/escursioni/nelle-vicinanze': '/it/esperienze/',
 '/italiano/recensioni': '/it/', '/italiano/contatti': '/it/info/', '/italiano/riservatezza': '/it/info/',
 '/book-your-stay': '/it/prenota/', '/house-rules': '/it/info/', '/electrical-system/tour-events': '/tour-eventi/',
}
for old, new in OLD.items(): write(old, redirect_page(new))

# Pagina non trovata: prova i vecchi indirizzi, altrimenti Home
write('404.html', '''<!doctype html><html lang="it"><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>Villa Brando</title>
<script>var m=%s;var p=location.pathname.replace(/\\/+$/,'').toLowerCase();location.replace(m[p]||(p.indexOf('/en')===0?'/en/':'/it/'));</script>
</head><body><p><a href="/it/">Villa Brando</a></p></body></html>''' % str(OLD).replace("'", '"'))

open(os.path.join(OUT, 'CNAME'), 'w').write(DOMAIN + '\n')
open(os.path.join(OUT, 'robots.txt'), 'w').write(f'User-agent: *\nAllow: /\nSitemap: https://{DOMAIN}/sitemap.xml\n')
pages = ['it/', 'it/villa/', 'it/camere/', 'it/giardino/', 'it/gallery/', 'it/esperienze/', 'it/info/', 'it/prenota/',
         'en/', 'en/villa/', 'en/rooms/', 'en/garden/', 'en/gallery/', 'en/experiences/', 'en/info/', 'en/book/', 'tour-eventi/']
open(os.path.join(OUT, 'sitemap.xml'), 'w').write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    ''.join(f'  <url><loc>https://{DOMAIN}/{p}</loc></url>\n' for p in pages) + '</urlset>\n')
open(os.path.join(OUT, '.nojekyll'), 'w').write('')
print('OK', OUT)
