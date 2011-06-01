var ua = $.browser;
var color = $.cookie("color");
var hour = new Date(new Date().getTime() + 3600 * 1000);

if (ua.msie) {
  var h5="article,nav,header,footer".split(",");
  for(var i=0; i < h5.length; ++i) {
    document.createElement(h5[i]);
  }
}

$(function(){
  if (ua.msie) {
    $("body").addClass("msie").addClass("msie" + ua.version.slice(0,1));
  }
  if (color == "red") {
    $("body").removeClass("blue").addClass("red");
  } else if (color == "blue") {
    $("body").addClass("blue").removeClass("red");
  }
  color = $("body").hasClass("red") ? "red" : "blue";
  var color_switch = $('<p class="right"><a href="' + window.location + '" id="color-switch"><span>toggle</span></a></p>');
  $("header").prepend(color_switch);
  $("#color-switch").click(function(){
    if (color == "red") {
      $("body").addClass("blue").removeClass("red");
      color = "blue";
    } else {
      $("body").removeClass("blue").addClass("red");
      color = "red";
    }
    $.cookie("color", color, { expires: hour });
    return false;
  });
});
