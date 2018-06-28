/*! GA v1.0 | (c) 2013 Renato Matos */
(function ($) {
    var init = false;
    var link;
    var category;
    var action;
    var label;
    //Inicia funcao do GA
    $.fn.ga = function (settings) {
        if (settings) { $.extend(config, settings); }
        return this.each(function () {
            $(this).click(function () {

                //identifica view/event
                //if ($(this).data('ga') == 'view') {

                    //Inicia parametros
                    //link = $(this).data('link');

                   // _gaq.push(['_trackPageView', link]);

                //} else {

                    //Inicia parametros
                    category = $(this).data('category');
                    action = $(this).data('action');
                    label = $(this).data('label');

                    //ga.push
                    ga('send', 'event', category,action,label);

                //}

                //click return
            });
        });

        /* IMPLEMENTAR PAGE VIEW FUNCTION */
    };
})(jQuery);