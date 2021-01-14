if (window.innerWidth > 1000) {
    
    $( document ).ready(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        
        // ANIMATION FADE IN DOWN
        // ARTICLE 15-16
        $(".animation-fadeInUp").each(function() {
            var objectBottom = $(this).offset().top + $(this).outerHeight()*.4;
            
            if (objectBottom < windowBottom) {
              $(this).removeClass("fadeOut");
                $(this).addClass("animated fadeInUp");
                if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
            } else {
              $(this).removeClass("fadeInUp");
              $(this).addClass("fadeOut");
                if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
            }
        });
    });

    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        var orangeIcon = $("img.img-anim-scroll");
        var soleil = $("div.text-soleil");
        var textManifesteLeft = $("section.texte-manifeste span");
        var textManifesteRight = $("section.texte-manifeste em");
        var screenHeight = $(this).innerHeight();

        // MOVE TITLE ON SCROLL
        // ARTICLE 15
        $("#orange-icon").each(function() {
            var objectTop = $(this).offset().top;
            var objectBottom = $(this).offset().top + $(this).outerHeight()*1;

            if ((objectTop < windowBottom) && (objectBottom > windowBottom-screenHeight)) {
                orangeIcon.eq(0).css('right',(50-(windowBottom-objectTop)/10)+'vw');
                orangeIcon.eq(1).css('left',(50-(windowBottom-objectTop)/10)+'vw');
                if ((50-(windowBottom-objectTop)/10) < 0){
                    orangeIcon.eq(0).css('right','0vw');
                    orangeIcon.eq(1).css('left','0vw');
                }
            }
        });
        // ARTICLE 16
        $("#soleil").each(function() {
            var objectTop = $(this).offset().top;
            var objectBottom = $(this).offset().top + $(this).outerHeight()*1;
            var soleilWidth = soleil.css('width');
            
            if ((objectTop < windowBottom) && (objectBottom > windowBottom-screenHeight)) {
                soleil.eq(0).css('left',(((windowBottom-objectTop)/10)-10)+'vw');
                soleil.eq(1).css('left',(((windowBottom-objectTop)/10)-15)+'vw');
                soleil.eq(2).css('left',(((windowBottom-objectTop)/10)-20)+'vw');
                soleil.eq(3).css('left',(((windowBottom-objectTop)/10)-25)+'vw');
                if ((((windowBottom-objectTop)/10)-10)>12.5){
                    soleil.eq(0).css('left','12.5vw');
                }
                if ((((windowBottom-objectTop)/10)-15)>37.5){
                    soleil.eq(1).css('left','37.5vw');
                }
                if ((((windowBottom-objectTop)/10)-20)>62.5){
                    soleil.eq(2).css('left','62.5vw');
                }
                if ((((windowBottom-objectTop)/10)-25)>87.5){
                    soleil.eq(3).css('left','87.5vw');
                }
            }
        });
        // ARTICLE MANIFESTE
        $("#orange-text").each(function() {
            var objectTop = $(this).offset().top;
            var objectBottom = $(this).offset().top + $(this).outerHeight()*1;
            
            if ((objectTop < windowBottom) && (objectBottom > windowBottom-screenHeight)) {                
                textManifesteLeft.css('left',(-75+(windowBottom-objectTop)/7)+'vw');
                textManifesteRight.css('left',(75-(windowBottom-objectTop)/7)+'vw');
                if ((75-(windowBottom-objectTop)/7) < 0){
                    textManifesteLeft.css('left','0vw');
                    textManifesteRight.css('left','0vw');
                }
            }
        });
    
    }).scroll();

}