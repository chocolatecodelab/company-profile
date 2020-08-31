const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 600,
    interval: 3000
});

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);


const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);

const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
  scrollOffset: 50
});

$(window).scroll(function() {
    const wScroll = $(this).scrollTop();

    if (wScroll > $('.about').offset().top - 250) {
        $('.about .scroll').each(function(i) {
            setTimeout(function () {
                $('.about .scroll').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });
    }
    if (wScroll > $('.services').offset().top - 250) {
        $('.services .scroll').each(function(i) {
            setTimeout(function () {
                $('.services .scroll').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });
    }
    if (wScroll > $('.portfolio').offset().top - 250) {
        $('.portfolio .scroll').each(function(i) {
            setTimeout(function () {
                $('.portfolio .scroll').eq(i).addClass('muncul');
            }, 400 * (i + 1));
        });
    }
});

