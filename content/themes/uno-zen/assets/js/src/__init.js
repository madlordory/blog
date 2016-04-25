/**
 * Created by madlord on 16/4/25.
 */
'use strict';
var Uno;

window.Uno = Uno = {
    version: '2.7.8',
    app: (function () {
        return document.body;
    })(),
    is: function (k, v) {
        if (v == null) {
            v = !'undefined';
        }
        return this.app.dataset[k] === v;
    },
    context: function () {
        var className;
        className = document.body.className.split(' ')[0].split('-')[0];
        if (className === '') {
            return 'error';
        } else {
            return className;
        }
    },
    search: {
        container: function () {
            return $('#results');
        },
        form: function (action) {
            return $('#search-container')[action]();
        }
    },
    loadingBar: function (action) {
        return $('.pace')[action]();
    },
    timeAgo: function (selector) {
        return $(selector).each(function () {
            var postDate, postDateInDays,postHtml;
            postHtml=$(this).html();
            postDate = $(this).attr('datetime');
            postDateInDays = Math.floor((Date.now() - new Date(postDate)) / 86400000);
            if (postDateInDays === 0) {
                postDateInDays = '今天';
            } else if (postDateInDays === 1) {
                postDateInDays = '昨天';
            } else {
                postDateInDays = "" + postDateInDays + " 天前";
            }
            $(this).html(postDateInDays);
            $(this).mouseover(function () {
                return $(this).html(postHtml);
            });
            return $(this).mouseout(function () {
                return $(this).html(postDateInDays);
            });
        });
    },
    device: function () {
        var h, w;
        w = window.innerWidth;
        h = window.innerHeight;
        if (w <= 480) {
            return 'mobile';
        }
        if (w <= 1024) {
            return 'tablet';
        }
        return 'desktop';
    }
};
Uno.app.dataset.page = Uno.context();
Uno.app.dataset.device = Uno.device();
if (window.profile_title) {
    $('#profile-title').text(window.profile_title);
}
if (window.profile_resume) {
    $('#profile-resume').text(window.profile_resume);
}
if (window.posts_headline) {
    $('#posts-headline').text(window.posts_headline);
}
window.open_button = window.open_button || '.nav-posts > a';