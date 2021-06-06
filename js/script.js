// Activador de jQuery - Función principal de jQuery
$(document).ready(function(){

    // Funciones de Filtrado
    $('#todos').click(function(){
        $('main section#sistema-filtrado article img').show();

        $('#todos').addClass('filtro-activo');
        $('#todos').removeClass('filtro-inactivo');

        $('#habitacional, #comerciales, #corporativos, #paisajismo').removeClass('filtro-activo');
        $('#habitacional, #comerciales, #corporativos, #paisajismo').addClass('filtro-inactivo');
    });

    $('#habitacional').click(function(){
        $('main section#sistema-filtrado article img').hide();
        $('main section#sistema-filtrado article img.habitacional').show();

        $('#habitacional').addClass('filtro-activo');
        $('#habitacional').removeClass('filtro-inactivo');

        $('#todos, #comerciales, #corporativo, #paisajismo').removeClass('filtro-activo');
        $('#todos, #comerciales, #corporativo, #paisajismo').addClass('filtro-inactivo');
    });

    $('#comerciales').click(function(){
        $('main section#sistema-filtrado article img').hide();
        $('main section#sistema-filtrado article img.comerciales').show();

        $('#comerciales').addClass('filtro-activo');
        $('#comerciales').removeClass('filtro-inactivo');

        $('#todos, #habitacional, #corporativo, #paisajismo').removeClass('filtro-activo');
        $('#todos, #habitacional, #corporativo, #paisajismo').addClass('filtro-inactivo');
    });

    $('#corporativo').click(function(){
        $('main section#sistema-filtrado article img').hide();
        $('main section#sistema-filtrado article img.corporativo').show();

        $('#corporativo').addClass('filtro-activo');
        $('#corporativo').removeClass('filtro-inactivo');

        $('#todos, #habitacional, #comercial, #paisajismo').removeClass('filtro-activo');
        $('#todos, #habitacional, #comercial, #paisajismo').addClass('filtro-inactivo');
    });

    $('#paisajismo').click(function(){
        $('main section#sistema-filtrado article img').hide();
        $('main section#sistema-filtrado article img.paisajismo').show();

        $('#paisajismo').addClass('filtro-activo');
        $('#paisajismo').removeClass('filtro-inactivo');

        $('#todos, #habitacional, #comercial, #corporativo').removeClass('filtro-activo');
        $('#todos, #habitacional, #comercial, #corporativo').addClass('filtro-inactivo');
    });



    // Función de Posición fija de Filtros al hacer ScrollDown
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('main section#sistema-filtrado nav#filtros').css('position','fixed');
            $('main section#sistema-filtrado nav#filtros').css('left','0');
            $('main section#sistema-filtrado nav#filtros').css('z-index','999');
            $('main section#sistema-filtrado nav#filtros').css('top','80px');
            $('main section#sistema-filtrado nav#filtros').css('border-radius','0 0 5px 5px');
        } else {
            $('main section#sistema-filtrado nav#filtros').css('position','relative');
            $('main section#sistema-filtrado nav#filtros').css('left','0');
            $('main section#sistema-filtrado nav#filtros').css('z-index','1');
            $('main section#sistema-filtrado nav#filtros').css('top','0');
            $('main section#sistema-filtrado nav#filtros').css('border-radius','5px');
        }
    });
});