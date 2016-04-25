/**
 * Created by madlord on 16/4/25.
 */
var FastClick=require("fastclick") ;
'use strict';
$(function () {
    if (Uno.is('device', 'desktop')) {
        $('a').not('[href*="mailto:"]').click(function () {
            if (this.href.indexOf(location.hostname) === -1) {
                window.open($(this).attr('href'));
                return false;
            }
        });
    } else {
        FastClick.attach(Uno.app);
    }
    if (Uno.is('page', 'home') || Uno.is('page', 'paged') || Uno.is('page', 'tag')) {
        Uno.timeAgo('#posts-list time');
    }
    if (Uno.is('page', 'post')) {
        Uno.timeAgo('.post.meta > time');
        $('main').readingTime({
            readingTimeTarget: '.post.reading-time > span'
        });
        $('.content').fitVids();
    }
    if (Uno.is('page', 'error')) {
        return $('#panic-button').click(function () {
            var s;
            s = document.createElement('script');
            s.setAttribute('src', 'https://nthitz.github.io/turndownforwhatjs/tdfw.js');
            return document.body.appendChild(s);
        });
    }
});