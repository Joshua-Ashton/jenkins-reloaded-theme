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
