if ($.browser.msie) {
  var h5="article,nav,header,footer".split(",");
  for(var i=0; i < h5.length; ++i) {
    document.createElement(h5[i]);
  }
}

$(function(){
  var ua = $.browser;
  if (ua.msie) {
    $("body").addClass("msie").addClass("msie" + ua.version.slice(0,1));
  }
});
