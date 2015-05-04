// Global jQuery references
var $window = null;
var $projectLinks = null;
var $navLinks = null;
var $subNav = null;
var $titleCard = null;
var $projectsWrapper = null;
var $resumeWrapper = null;

// State
var windowWidth = null;

// Global
var IS_TOUCH = Modernizr.touch;

var deploymentTarget = (window.location.href).match('dannydebelius.com') ? 'prod' : 'dev';

// Initialize router
var router = Router(routes);
router.init();

var onDocumentLoad = function() {
    $window = $(window);
    $projectLinks = $('.project a');
    $navLinks = $('.nav a');
    $titleCard = $('.title-card');
    $subNav = $('.sub-nav');
    $projectsWrapper = $('.work');

    $('.portrait').addClass('is-visible');
    $(".lazy").lazyload({
        threshold : 300,
        effect : "fadeIn"
    });

    $projectLinks.on('click', onProjectLinkClick);
    $window.on('resize', sizeTitleCard);
    $navLinks.on('click', onNavClick);
    $(document).on('scroll', onDocScroll);

    sizeTitleCard();
}

var sizeTitleCard = function() {
    var windowHeight = Modernizr.touch ? window.innerHeight || $window.height() : $window.height();
    var newWindowWidth = $window.width();

    if (Modernizr.mq('(max-width: 667px) and (orientation: landscape)')) {
        windowWidth = newWindowWidth;
        $titleCard.css('height','auto');
        return;
    }

    if (IS_TOUCH && (windowWidth === null || windowWidth === newWindowWidth)) {
        return;
    }

    $titleCard.css({
        height: windowHeight
    });

    windowWidth = newWindowWidth;
}

var scrollToElement = function($el) {
    var subNavHeight = $subNav.height();
    var rowMargin = parseInt($projectsWrapper.css('margin-top'));

    $('html, body').animate({
        scrollTop: $el.offset().top
    }, 500);
    return false;
}

var onHomeRoute = function() {
    scrollToElement($titleCard);
}

var onWorkRoute = function() {
    scrollToElement($projectsWrapper);
}

var onResumeRoute = function() {
    scrollToElement($resumeWrapper);
}

var onNavClick = function(e) {
    e.preventDefault();
    var route = $(this).attr('href').split('/')[1];
    scrollToElement($($(this).data('target')));
    router.setRoute(route);

    trackEvent('navigation', 'nav-click', route);
}

var onProjectLinkClick = function(e) {
    trackEvent('portfolio', 'click-project-link', $(this).attr('href'));
}

var routes = {
    '/intro': onHomeRoute,
    '/work': onWorkRoute,
    '/resume': onResumeRoute
};

var trackEvent = function(category, eventName, label, value) {
    var args = {
      'hitType': 'event',
      'eventCategory': category,
      'eventAction': eventName
    }

    if (label) {
        args['eventLabel'] = label;
    }

    if (value) {
        args['eventValue'] = value;
    }

    ga('send', args);
}

/*
 * Track scroll depth for completion events.
 *
 * After: https://github.com/robflaherty/jquery-scrolldepth
 */
var onDocScroll = _.throttle(function(e) {
    var docHeight = $(document).height();
    var winHeight = window.innerHeight ? window.innerHeight : $window.height();
    var scrollDistance = $(document).scrollTop() + winHeight;

    var marks = {
        '25%' : parseInt(docHeight * 0.25),
        '50%' : parseInt(docHeight * 0.50),
        '75%' : parseInt(docHeight * 0.75),
        '100%': docHeight - 5
    };

    $.each(marks, function(mark, px) {
        if (trackedMarks.indexOf(mark) == -1 && scrollDistance >= px) {
            trackEvent('completion', 'scroll', mark);
            trackedMarks.push(mark);
        }
    });
}, 500);

$(onDocumentLoad);
