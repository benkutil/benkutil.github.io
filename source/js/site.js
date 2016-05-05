(function(window, document, undefined) {
    'use strict';

    var supports = 'querySelector' in document && 'addEventListener' in window;
    if (!supports) {
        return
    };

    var contentAnchors = document.querySelectorAll( '#js-post-content [href*="#"]' );

    // Add smooth scroll to all anchors
    for ( var i = 0, len = contentAnchors.length; i < len; i++ ) {
        var url = new RegExp( window.location.hostname + window.location.pathname );
        console.log( !url.test( contentAnchors[i].href ) );
        if ( !url.test( contentAnchors[i].href ) ) {
            contentAnchors[i].setAttribute( 'data-scroll', true );
        }

    }

    // Initial smooth scroll (add your attributes as desired)
    smoothScroll.init();

})(window, document);
