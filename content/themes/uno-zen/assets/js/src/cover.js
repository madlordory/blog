/**
 * Created by madlord on 16/4/25.
 */
'use strict';
$(function () {
    var isOpen, _animate, _expand;
    isOpen = location.hash === '#open';
    _animate = function () {
        return setTimeout(function () {
            return $('.cover').addClass('animated');
        }, 1000);
    };
    _expand = function (options) {
        $('main, .cover, .links > li, html').toggleClass('expanded');
        $('#avatar-link').attr('href',$('html').hasClass('expanded')&&'/#open'||'/#');
        return Uno.search.form(options.form);
    };
    $('#menu-button').click(function () {
        return $('.cover, main, #menu-button, html').toggleClass('expanded');
    });
    $("" + window.open_button + ", #avatar-link").click(function (event) {
        if (Uno.is('page', 'home')) {
            event.preventDefault();
            location.hash = location.hash === '' ? '#open' : '';
            if (!Uno.is('device', 'desktop')) {
                return $('#menu-button').trigger('click');
            }
            return _expand({
                form: 'toggle'
            });
        }
    });
    if ((Uno.is('device', 'desktop')) && (Uno.is('page', 'home'))) {
        _animate();
        if (location.hash!='#open') {
            setTimeout(function(){
                $('#avatar-link').click();
            },2000);
            return _expand({
                form: !isOpen ? 'hide' : 'show'
            });
        }

    }
});