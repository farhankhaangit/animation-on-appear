$(window).on('load',function () {
     new Waypoint.Inview({
        element: $('.animation0')[0],
        enter: function() {
            $('.animation0').addClass('animate__animated');
            $('.animation0').addClass('animate__zoomInDown');
        }
    });

    new Waypoint.Inview({
        element: $('.animation1')[0],
        enter: function() {
            $('.animation1').addClass('animate__animated');
            $('.animation1').addClass('animate__backInLeft');
        }
    });

    new Waypoint.Inview({
        element: $('.animation2')[0],
        enter: function() {
            $('.animation2').addClass('animate__animated');
            $('.animation2').addClass('animate__backInRight');
        }
    });

    new Waypoint.Inview({
        element: $('.animation3')[0],
        enter: function() {
            $('.animation3').addClass('animate__animated');
            $('.animation3').addClass('animate__fadeInDown');
        }
    });

    new Waypoint.Inview({
        element: $('.animation4')[0],
        enter: function() {
            $('.animation4').addClass('animate__animated');
            $('.animation4').addClass('animate__fadeInUp');
        }
    });

    new Waypoint.Inview({
        element: $('.animation5')[0],
        enter: function() {
            $('.animation5').addClass('animate__animated');
            $('.animation5').addClass('animate__slideInDown');
        }
    });
});

