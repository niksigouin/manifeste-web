if (window.innerWidth > 1000) {

    // MOVE TITLE ON SCROLL : ARTICLE 15
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        var orangeIcon = $("img.img-anim-scroll");
        var screenHeight = $(this).innerHeight();

        $("#orange-icon").each(function() {
            var objectTop = $(this).offset().top;
            var objectBottom = $(this).offset().top + $(this).outerHeight()*1;

            if ((objectTop < windowBottom) && (objectBottom > windowBottom-screenHeight)) {
                orangeIcon.eq(0).css('right',(50-(windowBottom-objectTop)/10)+'vw');
                orangeIcon.eq(1).css('left',(50-(windowBottom-objectTop)/10)+'vw');
                console.log();
                if ((50-(windowBottom-objectTop)/10) < 0){
                    orangeIcon.eq(0).css('right','0vw');
                    orangeIcon.eq(1).css('left','0vw');
                }
            }
        });
    
    }).scroll();

}