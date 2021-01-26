var smPortfolio = (function (d, w, $) {
  var smPortfolio = smPortfolio || {};

  var test = function() {
    console.log('test')
  };

  smPortfolio.init = function () {
    test();
  };

  return smPortfolio;
})(document, window, jQuery);

$(document).ready(function () {
  smPortfolio.init();
});