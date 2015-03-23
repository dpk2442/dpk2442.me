(function () {
    'use strict';

    var navToggle = {
        toggleLink: $('#nav-mobile-toggle'),
        nav: $('#nav'),
        init: function () {
            this.toggleLink.show();
            this.nav.hide();
            this.toggleLink.on('click', navToggle.toggleNav);
        },
        toggleNav: function (e) {
            e.preventDefault();
            navToggle.nav.slideToggle(200);
        }
    };
    navToggle.init();

})();
