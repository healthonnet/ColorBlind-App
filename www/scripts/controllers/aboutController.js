angular.module('app').controller('AboutController', function($rootScope) {
  console.log('AboutController');

  setTimeout(function() {
    var links = Array.prototype.slice.call(
      document.querySelectorAll('a.button--quiet'));
    links.forEach(function(link) {
      link.addEventListener('click', function() {
        $rootScope.openExternalLink(link.innerHTML);
      }, false);
    });
  },10);
});
