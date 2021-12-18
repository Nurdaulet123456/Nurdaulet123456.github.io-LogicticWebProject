$(function() {

    let intro = $("#intro");
    let header = $("#header");
    let introHight = intro.innerHeight();
    let headerHeight = header.innerHeight();
    let scrollTop = $(window).scrollTop();


    /* Header Scroll */

    headerScroll();

    $(window).on("scroll resize", function() {
        headerScroll();
    });

    function headerScroll() {
        introHight = intro.innerHeight();
        headerHeight = header.innerHeight();
        let topScroll = $(this).scrollTop();

        if (topScroll >= (introHight - headerHeight)) {
            header.addClass("header--darken");
        } else {
            header.removeClass("header--darken");
        }
    }


    /* Smooth scroll to sections */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let scrollElement = $(this).data("scroll");
        let scrollElementPosition = $(scrollElement).offset().top;

        $("body").removeClass('show-nav');
        navToggle.removeClass('active');
        nav.removeClass('show');

        $("html, body").animate({
            scrollTop: scrollElementPosition - headerHeight
        }, 1000);

    });

    /* ScrollSpy */

    let windowHeight = $(window).height();

    scrollSpy(scrollTop);

    $(window).on("scroll", function() {
        scrollTop = $(this).scrollTop();

        scrollSpy(scrollTop);
    });

    function scrollSpy(scrollTop) {
        $("[data-scrollspy]").each(function() {
            let secondId = $(this).data('scrollspy');
            let sectionOffset = $(this).offset().top;

            sectionOffset = sectionOffset - (windowHeight * 0.3);

            if (scrollTop >= sectionOffset) {
                $('#nav [data-scroll]').removeClass('active');

                $('#nav [data-scroll="' + secondId + '"]').addClass('active');
            }
        });
    }

    /* ModalClick */

    $('[data-modal]').on('click', function(event) {
        event.preventDefault();
        let modal = $(this).data('modal');

        $('body').addClass('no-scroll');
        $(modal).addClass('show');

        setTimeout(function() {
            $(modal).find('.modal__content').css({
                transform: 'rotate(0)',
                opacity: '1'
            });
        });

    });

    $('[data-close]').on('click', function(event) {
        event.preventDefault();

        let modal = $(this).parents('.modal');


        modal.find('.modal__content').css({
            transform: 'rotate(360deg)',
            opacity: '0'
        });


        setTimeout(function() {
            $('body').removeClass('no-scroll');
            modal.removeClass('show');
        }, 400);
    });

    $('.modal').on('click', function() {

        $('body').removeClass('no-scroll');
        $(this).removeClass('show');

    });

    $('.modal__content').on('click', function(event) {
        event.stopPropagation();
    });



    /* IntroSlider */

    $("#introSlider").slick({
        Infinity: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpleed: 3000,
        speed: 1000
    });

    $("#introSliderPrev").on("click", function() {
        $("#introSlider").slick('slickPrev');
    });

    $("#introSliderNext").on("click", function() {
        $("#introSlider").slick('slickNext');
    });


    /* ReviewsSlider */

    let reviewsSlider = $("#reviewsSlider");

    reviewsSlider.slick({
        Infinity: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        speed: 1000
    });



    /* BurgerToggle */

    let navToggle = $('#navToggle');
    let nav = $('#nav');

    navToggle.on('click', function(event) {
        event.preventDefault();

        $("body").toggleClass('show-nav');

        $(this).toggleClass('active');
        nav.toggleClass('show');
    });

    $(window).on('resize', function() {

        $("body").removeClass('show-nav');
        navToggle.removeClass('active');
        nav.removeClass('show');

    });




});