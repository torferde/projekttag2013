## iTac

<p class="logo"><img src="assets/img/projects/itac.png" /></p>

### Thema und Namensgebung
In allen Bereichen hat die Informationsflut lawinenartig zugenommen. E‐Mails, Webseiten, Dokumente, soziale Netzwerke,
Blogs, Zeitungen und diese Liste lässt sich beliebig fortsetzen. Die zentrale Gemeinsamkeit all dieser Informationsquellen
ist Text. Täglich muss man dabei die relevante Information finden bzw. extrahieren. Um der Lage Herr zu werden, wird als
Lösungsstrategie der Text überflogen, gefiltert oder einfach ignoriert. Dabei liegt der Text ja eigentlich bereits "verarbeitbar"
im Rechner vor. Betrachtet man hier beispielsweise aktuelle Textverarbeitungssoftware, so beherrscht diese Rechtschreib‐ und
Grammatikprüfung ziemlich gut. Im Kontext von Programmiersprachen entspräche dies aber etwa dem Niveau von Type‐Checking also der
Überprüfung auf mögliche Typverletzung. Im Projekt "iTac" (interpret Text and conclude) wollen wir Text automatisch durch Software
verstehen und es ermöglichen Schlussfolgerungen zu ziehen. Damit schaffen wir die Basis für vielfältige Anwendungen: von der Zusammenfassung
von Texten, dem Vergleich zweier Texte, die Steuerung per Texteingabe bis hin zum Entwurf eines Systems mit Hilfe natürlicher Sprache.

### Aufgabenbeschreibung und Projektziele
In "iTac" sollen neue Verfahren entstehen, um dem Rechner Textverständnis zu ermöglichen. Darüber hinaus sollen auch die
verschiedenen Anwendungen implementiert werden. Zu Beginn des Projektes haben wir uns in die Materie eingearbeitet. Dies beinhaltet
einerseits das Kennenlernen von existierenden Ansätzen zur Analyse von Text und Repräsentation von Wissen.
Beispielsweise können wir Werkzeuge wie den Stanford Parser zum Parsen von Texten verwenden.
Die Abbildung auf der nächsten Seiten zeigt den resultierenden Baum für den Satz "iTac is a cool and exciting project.".
Wie zu erkennen wird jedem Wort (Blätter im Baum) ein Tag zugeordnet, welches die Wortart beschreibt (z.B. Nomen, Verb, etc.).
Natürlich gibt es auch Werkzeuge um semantische Information zu gewinnen. Ein Beispiel dafür ist WordNet (entwickelt in Princeton),
eine Datenbank für Substantive, Verben, Adjektive und Adverbien. Dabei unterteilt WordNet englische Worte in Synonym‐Gruppen, stellt
Definitionen bereit und kennt semantische Beziehungen. Hier zwei einfache Beispiele zu den Synonymgruppen:
"person, individual, someone" und "life form, organism, being". Neben den Ansätzen zum Einlesen und zur Verarbeitung von Texten
werden wir auch (automatische) Beweismethoden betrachten, die sehr erfolgreich im Schaltkreis- und Systementwurf eingesetzt werden.
Die Idee dabei ist, die beiden Welten zusammenzubringen und so automatisch Schlussfolgerungen ziehen zu können.
Insbesondere soll auch der Entwurf eines Systems betrachtet werden. Weiß man was das System können soll, so wird die Spezifikation
in natürlichsprachlichen Text festgehalten. Im nächsten Schritt muss diese jedoch konkret umgesetzt werden, d.h. es muss ein
Verhaltensmodell (z.B. in C/C++) programmiert werden. Genau hier wollen wir mit "iTac" ansetzen und automatisch Teile des
Systemmodells erzeugen. Aufbauend auf diesen Konzepten sollen verschiedene Fragestellungen betrachtet und neue Ansätze entwickelt werden.
Thematisch umfasst dies zum Beispiel:

* Finden wichtiger Informationen (häufige Worte markieren, wichtige Worte erkennen, Querbezüge herstellen, ...)
* Automatisches Zusammenfassen von Texten
* Text Klassifikation (Wissenschaftlicher Artikel, Kindergeschichte, Roman, ...)
* Metrik Textähnlichkeit
* Aufdecken von Widersprüchen
* Cucumber: Verbindung natürlicher Sprache und Implementierung
