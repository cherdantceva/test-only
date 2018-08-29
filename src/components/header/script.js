import scrollLock from 'scroll-lock';

$(function () {
    $('.b-header').each(function () {
        let component = $(this),
            headerMenu = component.find('b-header-menu');

        function scrollHeader() {
            if ($(window).scrollTop() > 25) {
                component.addClass('scroll');
            }

            else {
                component.removeClass('scroll');
            }
        }

        scrollHeader();

        $(window).on('scroll', scrollHeader);

        $('.js-show-menu', component).on('click', function () {
            scrollLock.toggle();
            console.log(scrollLock.getState());
            component.toggleClass('show-menu');
            // scrollLock.setScrollableTargets(headerMenu);
            // $(document.body).toggleClass('modal-open');
        });

    });
});
