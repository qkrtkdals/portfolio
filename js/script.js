var smPortfolio = (function (d, w, $) {
  var smPortfolio = smPortfolio || {};

  var test = function() {
    
  };

  var getJSONInit = function (data) {
    var html = '';
    $.each(data.list, function (itemIndex, item) {
      html += '<li class="thumbItem">';
      html += '    <img src="" alt="">';
      html += '    <div class="thumbCover">';
      html += '        <p class="thumbCoverTitle">' + item.title + '</p>';
      html += '        <p class="thumbCoverDate">' + item.date + '</p>';
      html += '    </div>';
      html += '</li>';
    });

    $('.thumb').html(html);
  };

  smPortfolio.init = function () {
    // 로컬용
    // var jsonSrc = '../json/data.json';

    // 운영용
    var jsonSrc = '//raw.githubusercontent.com/qkrtkdals/portfolio/master/json/data.json';

    test();
    includeHTML();

    if ($('#home').length) {
      $.getJSON(jsonSrc, getJSONInit);
    }

  };

  return smPortfolio;
})(document, window, jQuery);

$(document).ready(function () {
  smPortfolio.init();
});