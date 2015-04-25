(function ($) {

    $.fn.menumaker = function (options) {

        var mymenu = $(this), settings = $.extend({
            title: "Menu",
            format: "dropdown",
            breakpoint: 768,
            sticky: false
        }, options);

        return this.each(function () {
            mymenu.find('li ul').parent().addClass('has-sub');
            if (settings.format != 'select') {
                mymenu.prepend('<div id="menu-button">' + settings.title + '</div>');
                $(this).find("#menu-button").on('click', function () {
                    $(this).toggleClass('menu-opened');
                    var mainmenu = $(this).next('ul');
                    if (mainmenu.hasClass('open')) {
                        mainmenu.hide().removeClass('open');
                    }
                    else {
                        mainmenu.show().addClass('open');
                        if (settings.format === "dropdown") {
                            mainmenu.find('ul').show();
                        }
                    }
                });

                multiTg = function () {
                    mymenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
                    mymenu.find('.submenu-button').on('click', function () {
                        $(this).toggleClass('submenu-opened');
                        if ($(this).siblings('ul').hasClass('open')) {
                            $(this).siblings('ul').removeClass('open').hide();
                        }
                        else {
                            $(this).siblings('ul').addClass('open').show();
                        }
                    });
                };

                if (settings.format === 'multitoggle') multiTg();
                else mymenu.addClass('dropdown');
            }

            else if (settings.format === 'select') {
                mymenu.append('<select style="width: 100%"/>').addClass('select-list');
                var selectList = mymenu.find('select');
                selectList.append('<option>' + settings.title + '</option>', {
                    "selected": "selected",
                    "value": ""
                });
                mymenu.find('a').each(function () {
                    var element = $(this), indentation = "";
                    for (i = 1; i < element.parents('ul').length; i++) {
                        indentation += '-';
                    }
                    selectList.append('<option value="' + $(this).attr('href') + '">' + indentation + element.text() + '</option');
                });
                selectList.on('change', function () {
                    window.location = $(this).find("option:selected").val();
                });
            }

            if (settings.sticky === true) mymenu.css('position', 'fixed');

            resizeFix = function () {
                if ($(window).width() > settings.breakpoint) {
                    mymenu.find('ul').show();
                    mymenu.removeClass('small-screen');
                    if (settings.format === 'select') {
                        mymenu.find('select').hide();
                    }
                    else {
                        mymenu.find("#menu-button").removeClass("menu-opened");
                    }
                }

                if ($(window).width() <= settings.breakpoint && !mymenu.hasClass("small-screen")) {
                    mymenu.find('ul').hide().removeClass('open');
                    mymenu.addClass('small-screen');
                    if (settings.format === 'select') {
                        mymenu.find('select').show();
                    }
                }
            };
            resizeFix();
            return $(window).on('resize', resizeFix);

        });
    };
})(jQuery);

(function ($) {
    $(document).ready(function () {

        $(window).load(function () {
            $("#mymenu").menumaker({
                title: "Menu",
                format: "dropdown"
            });


            $('#mymenu').prepend("<div id='menu-indicator'></div>");

            var foundActive = false, activeElement, indicatorPosition, indicator = $('#mymenu #menu-indicator'), defaultPosition;

            $("#mymenu > ul > li").each(function () {
                if ($(this).hasClass('active')) {
                    activeElement = $(this);
                    foundActive = true;
                }
            });

            if (foundActive === false) {
                activeElement = $("#mymenu > ul > li").first();
            }

            defaultPosition = indicatorPosition = activeElement.position().left + activeElement.width() / 2 - 5;
            console.log(activeElement);
            console.log(activeElement.position().left);
            console.log(activeElement.width());
            indicator.css("left", indicatorPosition);

            $("#mymenu > ul > li").hover(function () {
                activeElement = $(this);
                indicatorPosition = activeElement.position().left + activeElement.width() / 2 - 5;
                indicator.css("left", indicatorPosition);
            },
            function () {
                indicator.css("left", defaultPosition);
            });

        });

    });
})(jQuery);
