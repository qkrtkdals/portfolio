var smPortfolio = (function (d, w, $) {
  var smPortfolio = smPortfolio || {};

  var getParam = function(paramName) {
    var params = location.search.substr(location.search.indexOf("?") + 1);
    var paramValue = "";

    params = params.split("&");

    for (var i = 0; i < params.length; i++) {
        temp = params[i].split("=");
        if ([temp[0]] == paramName) { paramValue = temp[1]; }
    }

    return paramValue;
  };

  var getJSONHome = function (data) {
    var html = '';
    $.each(data, function (itemIndex, item) {
      html += '<li class="thumbItem">';
      html += '    <a href="./detail.html?detail=' + item.id + '">';
      html += '        <img src="" alt="">';
      html += '            <div class="thumbCover">';
      html += '                <p class="thumbCoverTitle">' + item.title + '<br>- ' + item.subTitle + '</p>';
      html += '                <p class="thumbCoverDate">' + item.date + '</p>';
      html += '        </div>';
      html += '    </a>';
      html += '</li>';
    });

    $('.thumb').html(html);
  };

  var getJSONDetail = function (data) {
    var obj = data.filter(function(item) {
      return item.id === getParam('detail');
    });

    var motionHTML =
      '<li>Director - ' + obj[0].visualDetail.motion.director + '</li>' +
      '<li>Design - ' + obj[0].visualDetail.motion.design + '</li>' +
      '<li>Animation - ' + obj[0].visualDetail.motion.animation + '</li>' +
      '<li>Character Design & Compositing - ' + obj[0].visualDetail.motion.design2 + '</li>' +
      '<li>Sound - ' + obj[0].visualDetail.motion.sound + '</li>';

    var styleHTML =
      '<ul>' +
        '<li>CLIENT  - ' + obj[0].visualDetail.client.toUpperCase() + '</li>' +
        '<li>PRODUCTION - ' + obj[0].visualDetail.production.toUpperCase() + '</li>' +
        '<li class="motion">MOTION GRAPHIC - ' + obj[0].visualDetail.motion.motionGraphic.toUpperCase() + '</li>' +
        '<li>DIRECTOR - ' + obj[0].visualDetail.motion.director.toUpperCase() + '</li>' +
        '<li>DESIGN - ' + obj[0].visualDetail.motion.design.toUpperCase() + '</li>' +
        '<li>ANIMATION - ' + obj[0].visualDetail.motion.animation.toUpperCase() + '</li>' +
        '<li>CHARACTER DESIGN & COMPOSITING - ' + obj[0].visualDetail.motion.design2.toUpperCase() + '</li>' +
        '<li>SOUND - ' + obj[0].visualDetail.motion.sound.toUpperCase() + '</li>' +
      '</ul>' +
      '<p>' + obj[0].visualDetail.text + '</p>';

    $('.visualTitle').html('<p>' + obj[0].title + '</p><span>' + obj[0].subTitle + '</span>');
    $('.visualDetail .client p').text(obj[0].visualDetail.client);
    $('.visualDetail .production p').text(obj[0].visualDetail.production);
    $('.visualDetail .motion ul').html(motionHTML);
    $('.visualDetail .column:last-child').html(obj[0].visualDetail.text);
    $('.styleFrame .styleInfo').html(styleHTML);
  };

  smPortfolio.init = function () {
    // 로컬용
    // var jsonSrc = '../json/data.json';

    // 운영용
    var jsonSrc = '//raw.githubusercontent.com/qkrtkdals/portfolio/master/json/data.json';

    includeHTML();

    if ($('#home').length) {
      $.getJSON(jsonSrc, getJSONHome);
    }

    if ($('#detail').length) {
      $.getJSON(jsonSrc, getJSONDetail);
    }
  };

  return smPortfolio;
})(document, window, jQuery);

$(document).ready(function () {
  smPortfolio.init();
});