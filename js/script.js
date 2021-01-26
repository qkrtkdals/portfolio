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
    // 로컬용
    // var jsonSrc = '../json/data.json';

    // 운영용
    var jsonSrc = '//raw.githubusercontent.com/qkrtkdals/portfolio/master/json/data.json';

    $.getJSON(jsonSrc, getJSONInit);
    test();
  };

  return smPortfolio;
})(document, window, jQuery);

$(document).ready(function () {
  smPortfolio.init();
});