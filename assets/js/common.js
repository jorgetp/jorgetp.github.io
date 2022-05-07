$(document).ready(function() {
    /*$('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });*/
    $('a.reveal').click(function() {
        let block = document.getElementById('block-' + $(this).attr('id'));
        let open = $(this).hasClass('open');

        //close all open blocks
        $(this).parent().parent().find(".open").removeClass('open');

        if (open) {
            $(block).removeClass('open');
            $(this).removeClass('open');
        }
        else {
            $(block).addClass('open');
            $(this).addClass('open');
        }
    });

    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');
});
