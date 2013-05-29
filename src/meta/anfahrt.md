## Anfahrt

<address>
  Universität Bremen<br/>
  Bibliothekstraße 1<br />
  MZH, Ebene 1<br />
  28359 Bremen
</address>

<style type="text/css">
 div.olControlAttribution, div.olControlScaleLine {
  font-family: Verdana;
  font-size: 0.7em;
  bottom: 3px;
}

#basicMap img {
  max-width: none;
}
</style>
<script src="http://www.openlayers.org/api/OpenLayers.js"></script>
<script>
  window.onload = function(e){
    map = new OpenLayers.Map("basicMap");
    map.addLayer(new OpenLayers.Layer.OSM()); 
    var lonLat = new OpenLayers.LonLat(8.85244,53.106672)
          .transform(
            new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
            map.getProjectionObject() // to Spherical Mercator Projection
          ); 
    var zoom=17; 
    var markers = new OpenLayers.Layer.Markers( "MZH" );
    map.addLayer(markers); 
    markers.addMarker(new OpenLayers.Marker(lonLat)); 
    map.setCenter (lonLat, zoom);
  }
</script>
<noscript>
<a href="http://www.openstreetmap.org/?lat=53.10667&lon=8.85233&zoom=17&layers=O"><img alt="OpenStreetMap" src="assets/img/meta/openstreetmap.png" /></a>
</noscript>

<div id="basicMap" style="width: 500px; height: 400px;"></div>

### Anreise mit dem Auto

Wenn Sie von der A1 kommen, wechseln Sie am Bremer Kreuz auf die A27 in
Richtung Bremen-Bremerhaven. Sie verlassen die A27 an der Abfahrt
Universität/Horn-Lehe und fahren Richtung Centrum/Universität. Auf dem Campus
und im Technologiepark Universität sind ausreichend Parkplätze vorhanden
(ab 70 Cent/Tag).

### Anreise mit dem Zug

Sie verlassen Bremen Hbf. Richtung Süden (Stadtmitte). Taxi und Straßenbahn
fahren direkt vom Bahnhofsvorplatz aus. Für die Weiterfahrt zur Universität
Bremen mit dem Taxi Zahlen Sie ca. 15€. Günstiger ist es mit der Straßenbahn:
Sie nehmen die Straßenbahn Linie 6 Richtung Universität und steigen an der
Haltestelle "Universität/Zentralbereich" aus.

### Anreise mit dem Schiff
Wenn Sie aus der Nordsee mit dem Schiff anreisen wollen, fahren Sie einfach 
bei Bremerhaven in die Weser. Danach dem Flussverlauf bis zur Lesum folgen und 
auf diese wechseln. An der Vereinigung mit der Hamme und der W&uuml;mme, der 
Flussverlauf der W&uuml;mme folgen. Dann auf die Munte wechseln und im 
Sichtbereich der Uni einen klugen Anlegeplatz &uuml;berlegen. Danach sind 
es nur noch ein paar Meter zu Fu&szlig;.

### Anreise mit dem Raumschiff

Sollten Sie sich entscheiden mit dem eigenen Raumschiff anzureisen so steht 
hinter dem Cartesium eine gro&szlig;e Wiese zur Verf&uuml;gung, auf der Sie 
Ihr Raumschiff parken k&ouml;nnen. Leider wird auf der Wiese neben dem Cartesium 
momentan gebaut, weswegen Sie beim Landen aufpassen sollten.
