function irParaSecao(secao) {
    secao = "#" + secao;

    var target_offset = $(secao).offset();
    var target_top = target_offset.top;
    $('html, body').animate({ scrollTop: target_top }, 500);

    var nav = secao + "Nav";
    $(".active").removeClass("active");
    $(nav).toggleClass("active");
}

function irParaTopo() {
    $(".active").removeClass("active");
    $('html, body').animate({ scrollTop: 0 }, 500);
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if(number >= 250 && number <= 539) {
        $(".active").removeClass("active");
        $("#PerfilNav").toggleClass("active");
    } else if(number >= 540 && number <= 1054) {
        $(".active").removeClass("active");
        $("#ExperienciasNav").toggleClass("active");
    } else if(number >= 1055 && number <= 1454) {
        $(".active").removeClass("active");
        $("#HabilidadesNav").toggleClass("active");
    } else if(number >= 1455 && number <= 1779) {
        $(".active").removeClass("active");
        $("#ProjetosNav").toggleClass("active");
    } else if(number >= 1780) {
        $(".active").removeClass("active");
        $("#ContatosNav").toggleClass("active");
    }

    if(number >= 600) {
        $("#topo").removeClass("d-none");
    } else {
        $("#topo").addClass("d-none");
    }
};