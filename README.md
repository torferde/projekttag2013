# Projekttag Informatik - Website-Generator

(German only, sorry).

## Kurz-Beschreibung

In diesem Repository finden sich die Quelldaten für die
[Informatik-Projekttagsseite](http://www.informatik.uni-bremen.de/projekttag)
für den Durchlauf im Jahre 2011 des [Studiengangs
Informatik](http://www.informatik.uni-bremen.de) im
Fachbereich 3 der [Universität Bremen](http://www.uni-bremen.de).

Dieses Repository dient primär dazu, eine frei verfügbare
Online-Ressource für das Deployment zu haben. Die hieraus
generierten Webseiten sind zudem statisch und daher nicht
sicherheitskritisch.

## How-to

Nur in aller Kürze:

1. Generieren der Webseite

       ~$  git clone git://github.com/dmke/pt11web.git
       ~$  cd pt11web/generator
       ~/pt11web/generator$  rake build
       ~/pt11web/generator$  open ../index.html

2. Deployment

       ~/pt11web/generator$  $EDITOR config.yml # setup deploy/repo, deploy/to
       ~/pt11web/generator$  rake deploy
       ~/pt11web/generator$  open http://example.com/wohin/config.yml/deploy/to/zeigt

## Quellcode-Lizenz

Dieses Projekt hat zwei wesentliche Bestandteile: Das
Generator-Skript und die Inhalte.

### Generator

Der *Quellcode zum Generieren* (das sind ausschließlich die
Dateie `generator/config.yml` und `generator/Rakefile`) der
Webseiten darf als **gemeinfrei (public domain)** angesehen
werden. Wesentliche Teile habe ich mir von bekannten Tools
wie [nanoc](http://nanoc.stoneship.org/) und
[Rake](http://rake.rubyforge.org), aber auch
[Capistrano](https://github.com/capistrano/capistrano),
[Ruby on Rails](http://www.rubyonrails.org) und anderen
abgesehen.

Der Sourcecode ist weder ordentlich getestet noch
dokumentiert. Wenn dies jemand übernehmen möchte: Nur zu!

### Inhalte

Die Inhalte (das sind alle anderen Texte, Bilder/Logos und
sonstige Dateien) sind von den einzelnen studentischen
Projekten zusammengetragen worden und daher (sofern nicht
ausdrücklich anders gekennzeichnet) urheberrechtlich
geschützt.

(c) 2011  Apollo 13.2.0.v3, BASS, B-Human, FIDIUS, Kibo,
          QBit, RADAU, SAHARA, Smart Energy, Spatial,
          Virtual Logistic Lab.
