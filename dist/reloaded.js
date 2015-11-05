(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function ($) {
    // Image replacement
    'use strict';

    var images = {},
        imageMapping = [
            {
                selector: 'img.icon-blue.icon-sm',
                image: 'success16.png'
            },
            {
                selector: 'img.icon-yellow.icon-sm',
                image: 'warning16.png'
            },
            {
                selector: 'img.icon-red.icon-sm',
                image: 'fail16.png'
            },
            {
                selector: 'img.icon-nobuilt.icon-sm',
                image: 'nobuilt16.png'
            },
            {
                selector: 'img.icon-blue.icon-lg',
                image: 'success.png'
            },
            {
                selector: 'img.icon-yellow.icon-lg',
                image: 'warning.png'
            },
            {
                selector: 'img.icon-red.icon-lg',
                image: 'fail.png'
            },
            {
                selector: 'img.icon-nobuilt.icon-lg',
                image: 'nobuilt.png'
            },
            {
                selector: 'img.icon-health-00to19.icon-sm',
                image: 'health-00to19-16.png'
            },
            {
                selector: 'img.icon-health-20to39.icon-sm',
                image: 'health-20to39-16.png'
            },
            {
                selector: 'img.icon-health-40to59.icon-sm',
                image: 'health-40to59-16.png'
            },
            {
                selector: 'img.icon-health-60to79.icon-sm',
                image: 'health-60to79-16.png'
            },
            {
                selector: 'img.icon-health-80plus.icon-sm',
                image: 'health-80plus-16.png'
            },
            {
                selector: 'img.icon-health-00to19.icon-lg',
                image: 'health-00to19.png'
            },
            {
                selector: 'img.icon-health-20to39.icon-lg',
                image: 'health-20to39.png'
            },
            {
                selector: 'img.icon-health-40to59.icon-lg',
                image: 'health-40to59.png'
            },
            {
                selector: 'img.icon-health-60to79.icon-lg',
                image: 'health-60to79.png'
            },
            {
                selector: 'img.icon-health-80plus.icon-lg',
                image: 'health-80plus.png'
            },
        ];

    images.replace = function (baseUrl) {
        $.each(imageMapping, function (index, element) {
            $(element.selector)
                .attr('src', baseUrl + 'images/' + element.image);
        })
    };

    module.exports = images;

}(jQuery));

},{}],2:[function(require,module,exports){
(function (jQuery) {
    'use strict';

    jQuery(function($) {

        var images = require('./images'),
            myBaseUrl = $('script[src$="reloaded.min.js"]').attr('src').replace('reloaded.min.js','');

        $('#jenkins #side-panel-content .task img').css({
            position: 'relative',
            top: '4px',
            left: '0',
            width: '14px',
            height: '14px'
        });

        $('#bottom-sticker').css({
            width: $('#main-panel-content').width() + 45,
        });

        // Replace icons
        images.replace(myBaseUrl);

    });
}(jQuery));

},{"./images":1}]},{},[2]);
