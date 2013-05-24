## AIDE

<p class="logo"><img src="assets/img/aide.png" /></p>

Im Spätsommer 2010 startete das Projekt AIDE mit ambitionierten Zielen. Es 
sollten innerhalb der Projektlaufzeit von 2 Jahren bestehende Systeme zur 
Software-Architekturanalyse und zur Software-Klonanalyse in eine komplexe 
Software-Entwicklungsumgebung integriert werden.
Diese Funktionen sollen nach Projektende im Softwareprojekt, dass im 
Wintersemester 2012 startet, eingesetzt werden, um die Studenten bei der 
Entwicklung Ihrer Softwaresysteme wirkungsvoll zu unterstützen.

In der Veranstaltung Software-Projekt wie im echten Leben wird anfangs eine 
Architektur entworfen, die dann mehr oder minder wie geplant umgesetzt wird. 
Meist schon während der Entwicklung, spätestens aber in der Wartungsphase -- 
also nach der ersten Auslieferung des Programms -- werden dann Änderungen im 
Code gemacht, die aber in der Architektur nicht mehr nachgezogen werden. Die 
Architektur verliert damit ihren Wert. Große Systeme lassen sich aber nur mit 
erheblichem Mehraufwand ohne authentische Architekturbeschreibung verstehen und 
weiterentwickeln. Zu den Architekturverletzungen gesellen sich dann im Laufe der 
Zeit auch weitere Probleme auf der Code-Ebene hinzu, die häufig als Bad Smells 
bezeichnet werden. Dazu gehören toter Code, überlange Methoden, redundanter Code 
durch Copy&Paste, riesige Klassen und vieles mehr. Je mehr solche Probleme 
existieren, desto länger dauert es, die Software zu ändern. Dies sorgt für 
weiteren Zeitdruck, der dann wieder weniger Zeit für eine gute Strukturierung 
lässt. Der Teufelskreis schließt sich.

Aus diesem Grunde müssen Probleme im Quellcode frühzeitig aufgedeckt werden. 
Denn dann besteht noch eine reale Chance, dass sie beseitigt werden können.

Das Projekt AIDE entgegnet diesen Problemen mit den beiden beschriebenen 
Analysesystemen (Bauhaus-Werkzeuge 
<http://www.informatik.uni-bremen.de/st/projektedetails.php?id=201&projekt_id=100> 
für die Architekturanalyse und iClones <http://www.softwareclones.org/> für die 
Klonanalyse) und integriert diese in die etablierte Entwicklungsumgebung eclipse 
<http://www.eclipse.org/>.

- [Projekt-Webseite](http://aide.informatik.uni-bremen.de/)
