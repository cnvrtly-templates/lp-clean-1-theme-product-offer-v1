'use strict';

angular.module('tagyCmsClientApp')
  .directive('backgroundImageLoader', function () {
    return {
      restrict: 'A',
        scope:false,
      link: function postLink(scope, element, attrs) {
          scope.$on("soundPlayer:start",function(event, soundId, trackObj){
             // element.css({"background-image":"none"})
          })
      }
    };
  });
