# Projekttag Informatik - Website-Generator

(German only, sorry).

## Kurz-Beschreibung

In diesem Repository finden sich die Quelldaten für die
[Informatik-Projekttagsseite](http://www.informatik.uni-bremen.de/projekttag)
für den Durchlauf im Jahre 2013 des [Studiengangs Informatik](http://www.informatik.uni-bremen.de)
im Fachbereich 3 der [Universität Bremen](http://www.uni-bremen.de).

Dieses Repository dient primär dazu, eine frei verfügbare Online-Ressource für das Deployment zu
haben. Die hieraus generierten Webseiten sind zudem statisch und daher nicht sicherheitskritisch.

Der Sourcecode ist weder ordentlich getestet noch dokumentiert. Wenn dies jemand übernehmen
möchte: Nur zu!

## How-to

Nur in aller Kürze:

- Generieren der Webseite

```
~$ git clone https://github.com/mortzu/projekttag2013
~$ cd projekttag2013/generator
~/projekttag2013/generator$ ./projekttag build
~/projekttag2013/generator$ open ../dest/index.html
```

- Deployment

```
~/projekttag2013/generator$ $EDITOR config.yml  # setup serverpath
~/projekttag2013/generator$ ./projekttag deploy
~/projekttag2013/generator$ open http://example.com/wohin/config.yml/deploy/to/zeigt
```

## Quellcode-Lizenz

Dieses Projekt hat drei wesentliche Bestandteile: Das Generator-Skript, die
Fonts und die eigentlichen Inhalte.

### Generator

Der *Quellcode zum Generieren* (das sind ausschließlich die Dateien `generator/config.yml` und
`generator/projekttag`) der Webseiten darf als **gemeinfrei (public domain)** angesehen werden.
Wesentliche Teile habe ich mir von bekannten Tools wie [nanoc](http://nanoc.stoneship.org/) und
[Rake](http://rake.rubyforge.org), aber auch [Capistrano](https://github.com/capistrano/capistrano),
[Ruby on Rails](http://www.rubyonrails.org) und anderen abgesehen.

### Fonts

Dieses Repository beinhaltet die konvertierten Web-Fonts **Raleway** von Matt McInerney und
**Cabin** von Pablo Impallari aus dem [Google Webfont Repository](http://www.google.com/webfonts).

Beide Fonts stehen unter der [SIL Open Font License
(OFL)](http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL)

### Inhalte

Die Inhalte (das sind alle anderen Texte, Bilder/Logos und sonstige Dateien) sind von den einzelnen
studentischen Projekten zusammengetragen worden und daher (sofern nicht ausdrücklich anders
gekennzeichnet) urheberrechtlich geschützt.

(c) 2013  ACT, AUGMENT, AUV12, B-Human, Chip4U, eStudent, facil, GOBI, iTac, mobile4D, ParPro, Perzeption in und mit Spielen (Piri Piri), syncreal, VLL2.0
