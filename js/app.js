// Global jQuery references
$projectLinks = null;

var onDocumentLoad = function() {
    $projectLinks = $('.project a');

    $('.portrait').addClass('is-visible');
    $(".lazy").lazyload({
          effect : "fadeIn"
    });

    $projectLinks.on('click', onProjectLinkClick);
    $(window).on('resize', sizeTitleCard);
    $('.nav a').on('click', onNavClick);
    // $(document).foundation();
}

var sizeTitleCard = function() {
    var windowHeight = $(window).height();
    $('.title-card').css({
        height: windowHeight
    });
}

var scrollToElement = function($el) {
    var subNavHeight = $('.sub-nav').height();
    var rowMargin = parseInt($('.work').css('margin-top'));

    $('html, body').animate({
        scrollTop: $el.offset().top
    }, 500);
    return false;
}

var onHomeRoute = function() {
    scrollToElement($('#intro'));
}

var onWorkRoute = function() {
    scrollToElement($('#work'));
}

var onResumeRoute = function() {
    scrollToElement($('#resume'));
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

var trackEvent = function(category, eventName, label, value, custom1, custom2) {
    var args = ['_trackEvent', category];

    args.push(eventName);

    if (label) {
        args.push(label);
    } else if (value || custom1 || custom2) {
        args.push('');
    }

    if (value) {
        args.push(value);
    } else if (custom1 || custom2) {
        args.push(0);
    }

    if (custom1) {
        args.push(custom1)
    } else if (custom2) {
        args.push('');
    }

    if (custom2) {
        args.push(custom2);
    }

    _gaq.push(args);
}

var router = Router(routes);
router.init();

$(onDocumentLoad);
sizeTitleCard();