webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(8);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);

	var App = function () {
	    function App() {
	        _classCallCheck(this, App);
	    }

	    _createClass(App, null, [{
	        key: "run",
	        value: function run() {}
	    }]);

	    return App;
	}();

	exports.default = App;


	App.run();

/***/ },
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */
/***/ function(module, exports) {

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

/***/ },
/* 10 */
/***/ function(module, exports) {

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

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by madlord on 16/4/25.
	 */
	var FastClick=__webpack_require__(1) ;
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

/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Created by madlord on 16/4/25.
	 */
	'use strict';
	$(function () {
	    var hideSearch, showSearch;
	    showSearch = function () {
	        $(".content").hide();
	        return $('#search-results').addClass('active');
	    };
	    hideSearch = function () {
	        $(".content").show();
	        return $('#search-results').removeClass('active');
	    };
	    return $("#search-field").ghostHunter({
	        results: "#search-results",
	        zeroResultsInfo: false,
	        onKeyUp: true,
	        displaySearchInfo: true,
	        result_template: "<a class=\"result\" href='{{link}}'>\n  <h2>{{title}}</h2>\n  <h4>{{pubDate}}</h4>\n</a>",
	        onComplete: function (query) {
	            if (query.length > 0) {
	                return showSearch();
	            } else {
	                return hideSearch();
	            }
	        }
	    });
	});

/***/ }
]);