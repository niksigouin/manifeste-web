if (window.innerWidth > 1000) {

    // MOVE TITLE ON SCROLL : ARTICLE 15
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        var orangeIcon = $("img.img-anim-scroll");
        var soleil = $("div.text-soleil");
        var textManifesteLeft = $("section.texte-manifeste span");
        var textManifesteRight = $("section.texte-manifeste em");
        var screenHeight = $(this).innerHeight();

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
        $("#orange-text").each(function() {
            var objectTop = $(this).offset().top;
            var objectBottom = $(this).offset().top + $(this).outerHeight()*1;
            
            if ((objectTop < windowBottom) && (objectBottom > windowBottom-screenHeight)) {                
                textManifesteLeft.css('left',(-75+(windowBottom-objectTop)/10)+'vw');
                textManifesteRight.css('left',(75-(windowBottom-objectTop)/10)+'vw');
                console.log("allo");
                if ((75-(windowBottom-objectTop)/10) < 0){
                    textManifesteLeft.css('left','0vw');
                    textManifesteRight.css('left','0vw');
                }
            }
        });
    
    }).scroll();

}