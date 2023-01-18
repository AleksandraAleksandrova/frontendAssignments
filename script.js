function hideBanner() {
    $("#green-header").hide();
}

function manageWallpaperMenu(){
    let $wallpaperMenu = $("#wallpaper-menu");
    if($wallpaperMenu.is(":hidden")){
        $wallpaperMenu.show();
    } else {
        $wallpaperMenu.hide();
    }
}

function managePaintMenu(){
    let $paintMenu = $("#paint-menu");
    if($paintMenu.is(":hidden")){
        $paintMenu.show();
    } else {
        $paintMenu.hide();
    }
}

$(document).ready(function(){
    $(".customer-logos").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        dots: false,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});