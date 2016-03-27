/*globals jQuery*/
jQuery(document).ready(function () {
    jQuery('ul.sf-menu').superfish({
        animation: {height: 'show'}, // slide-down effect without fade-in
        delay: 800 // 1.2 second delay on mouseout
    });
});

jQuery('.carousel').carousel({
    interval: 8000,
    scrollerAlignment: 'vertical',
    autoScroll: true
});
