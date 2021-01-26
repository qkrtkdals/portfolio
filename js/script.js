var smPortfolio = (function (d, w, $) {
  var smPortfolio = smPortfolio || {};

  var test = function() {
    
  };

  var getJSONInit = function (data) {
    var html = '';
    $.each(data.list, function (itemIndex, item) {
      html += '<li>';
      html += '<p>' + item.name + '</p>';
      html += '</li>';
    });

    $('ul').html(html);
  };

  smPortfolio.init = function () {
    $.getJSON('../json/data.json', getJSONInit);
    test();
  };

  return smPortfolio;
})(document, window, jQuery);

$(document).ready(function () {
  smPortfolio.init();
});