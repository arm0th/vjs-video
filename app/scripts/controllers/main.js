/*global angular */
/**
 * @ngdoc function
 * @name vjsVideoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vjsVideoApp
 */
angular.module('vjsVideoApp')
    .controller('MainCtrl', ['$scope', function (scope) {
        'use strict';

        var mediaObj = {
                sources: [
                    {
                        src: 'http://video-js.zencoder.com/oceans-clip.mp4',
                        type: 'video/mp4'
                    },
                    {
                        src: 'http://video-js.zencoder.com/oceans-clip.webm',
                        type: 'video/webm'
                    }
                ],
                tracks: []
            },
            mediaAltObj = {
                sources: [
                    {
                        src: 'http://html5videoformatconverter.com/data/images/happyfit2.mp4',
                        type: 'video/mp4'
                    },
                    {
                        src: 'http://html5videoformatconverter.com/data/images/happyfit2.webm',
                        type: 'video/webm'
                    }
                ],
                tracks: []
            },
            isToggled = false;

        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        scope.toggleMedia = function () {
            isToggled = !isToggled;
            scope.mediaToggle = (isToggled) ? mediaObj : mediaAltObj;
        };

        scope.options = {
            loop: true
        };

        scope.media = mediaObj;

        scope.mediaToggle = mediaAltObj;

        scope.$on('vjsVideoReady', function (e, data) {
            //data contains `id` and `vid`
        });
    }]);
