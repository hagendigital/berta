(function(window, document) {
  'use strict';

  window.getQueryParams = function getQueryParams() {
    var pairs = location.search.slice(1).split('&');
    var result = {};

    pairs.forEach(function(pair) {
      if (pair[0]) {
        pair = pair.split('=');
        result[pair[0]] = decodeURIComponent(pair[1] || '');
      }
    });

    return result;
  };

  window.getCurrentSite = function getCurrentSite() {
    var q = getQueryParams();
    return q.site === undefined ?  '0' : q.site;
  };

})(window, document);
