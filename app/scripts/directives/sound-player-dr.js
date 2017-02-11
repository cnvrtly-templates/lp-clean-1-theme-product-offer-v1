'use strict';

angular.module('tagyCmsClientApp')
  .directive('soundPlayerDr', ['$rootScope','$http',function ($rootScope, $http) {
    return {
      template: '<div>' +
          '<div class="jp-holder"></div> ' +
          '<p class="text-center " style="margin-top: 39px"><a href="" class="button round fat-border" ng-click="togglePlay()"  title="{{soundTitle}}"><i class="fa fa-play-circle-o fa-2x"></i><span style="line-height: 23px"> play & work</span></a> </p>' +
          '</div>',
      restrict: 'E',
        scope:{},
        link: function (scope, element, attrs) {

            var clientId = "544b20e8aacbdf132f9402611f42f7ba";
            scope.soundId = "undara-morning-chorus";
            var lastSoundId = null;
            scope.playingSoundId = null;
            scope.autoPlay = true;
            scope.player = $(element).find(".jp-holder").jPlayer({

                solution: 'html',
                preload: 'none',
                volume: 0.2,
                muted: false, loop: true, supplied: "mp3"

            });

            var startPlaying = function (soundId) {
                if (soundId == null){
                    soundId = scope.soundId;
                }
                if (soundId == null) {
                    alert("OOOOps no sound set.");
                    return;
                }
                $http.get("http://api.soundcloud.com/tracks/" + soundId + ".json", {params: {client_id: clientId}}).success(function (res) {
                    $rootScope.$broadcast("soundPlayer:start", soundId, res);
                    scope.playingSoundId = soundId;
                    scope.soundTitle = res.title + " by " + res.user.username;
                    scope.player.jPlayer("setMedia", {mp3: res.stream_url + "?client_id=544b20e8aacbdf132f9402611f42f7ba"});
                    scope.player.jPlayer("play");
                });
            };

            var stopPlaying = function () {
                scope.player.jPlayer("stop");
                $rootScope.$broadcast("soundPlayer:stop");
                lastSoundId = scope.playingSoundId;
                scope.playingSoundId = null;
            };




            scope.togglePlay = function () {
                if (scope.playingSoundId == null) {
                    startPlaying(lastSoundId);
                } else {
                    stopPlaying();
                }


            };
            scope.$watch("soundId", function (val) {

                if (val != null && scope.playingSoundId != val) {

                    if (scope.playingSoundId != null){
                        stopPlaying();
                    }

                    startPlaying(val);
                }

            });
            /*
             scope.$watch("playingSoundId", function (val) {
             //var x= val == null ? "stop" : "play";
             });*/
            /*
             scope.$watch("autoPlay", function (val) {
             *//*scope.isPlaying=!val
             scope.togglePlay()*//*
             });*/
        }
    };
  }]);
