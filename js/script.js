if (window.innerWidth > 1000) {

	$(window).on("load",function() {

        // SMOOTH SCROLL
        $('.smooth-anchor').click(function(e){
            e.preventDefault();
            var target = $($(this).attr('href'));
            if(target.length){
            var scrollTo = target.offset().top-70;
            $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
            }
        });


        // ANIMATION : FADE IN
        $(window).scroll(function() {
            var windowBottom = $(this).scrollTop() + $(this).innerHeight();

            $(".animation-fadeIn").each(function() {
              var objectBottom = $(this).offset().top + $(this).outerHeight()*.4;
              
              if (objectBottom < windowBottom) {
                $(this).removeClass("fadeOut");
                  $(this).addClass("animated fadeIn");
                  if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
              } else {
                $(this).removeClass("fadeIn");
                $(this).addClass("fadeOut");
                  if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
              }
            });

            $(".animation-fadeInRight").each(function() {
                var objectBottom = $(this).offset().top + $(this).outerHeight()*.5;
                
                if (objectBottom < windowBottom) {
                //   $(this).removeClass("fadeOut");
                    // $(this).addClass("animated fadeInRight");
                    if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
                } else {
                //   $(this).removeClass("fadeInRight");
                //   $(this).addClass("fadeOut");
                    if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
                }
              });
          }).scroll();


        // CHANGE ICON ON SCROLL ET CHANGE MENU ALPHA ON SCROLL
        $(window).scroll(function() {
          var windowBottom = $(this).scrollTop() + $(this).innerHeight();
          var icon = $(".main-btn img");
          var menu = $("header.nav-head");
          var headerHeight = 70;
          var screenHeight = $(this).innerHeight();

          var heroHeight = $(".hero").outerHeight();
          var veriteSection = $($("#verite")).offset().top + screenHeight - headerHeight-1;
          var doigtsSection = $($("#doigts")).offset().top + screenHeight - headerHeight-1;
          var interditSection = $($("#interdit")).offset().top + screenHeight - headerHeight-1;
          var universSection = $($("#univers")).offset().top + screenHeight - headerHeight-1;
          var manifesteSection = $($("#manifeste")).offset().top + screenHeight - headerHeight*2;
          
          if ((veriteSection < windowBottom) && (doigtsSection > windowBottom)) {
            icon.attr("src", "Links/svg/nav-verite.svg");
          } else if ((doigtsSection < windowBottom) && (interditSection > windowBottom)) {
            icon.attr("src", "Links/svg/nav-entrelesdoigts.svg");
          } else if ((interditSection < windowBottom) && (universSection > windowBottom)) {
            icon.attr("src", "Links/svg/nav-interdit.svg");
          } else if ((universSection < windowBottom) && (manifesteSection > windowBottom)) {
            icon.attr("src", "Links/svg/nav-universarenouveau.svg");
          } else if ((manifesteSection < windowBottom)) {
            icon.attr("src", "Links/svg/nav-manif.svg");
          } else {
            icon.attr("src", "Links/svg/nav-manif.svg");
          }
          
          if (windowBottom-screenHeight > heroHeight) {
            menu.css({'background-color':'rgba(255,255,255,1)','border-bottom':'1px solid rgba(0,0,0,1)'});
          } else {
            menu.css({'background-color':'rgba(255,255,255,0)','border-bottom':'1px solid rgba(0,0,0,0)'});
          }
        }).scroll();
        

        // MOVE TITLE ON SCROLL
        $(window).scroll(function() {
          var windowBottom = $(this).scrollTop() + $(this).innerHeight();
          var title = $("span.title-anim-scroll");
          var screenHeight = $(this).innerHeight();

          $("#verite").each(function() {
            var objectTop = $(this).offset().top;
            var objectBottom = $(this).offset().top + $(this).outerHeight()*1;

            if ((objectTop < windowBottom) && (objectBottom > windowBottom-screenHeight)) {
              title.eq(0).css('left',(100-((windowBottom-objectTop)/10)-10)+'vw');
              title.eq(1).css('left',(100-((windowBottom-objectTop)/10)-5)+'vw');
              title.eq(2).css('left',(100-((windowBottom-objectTop)/10))+'vw');
              if ((100-((windowBottom-objectTop)/10)-10) < 0){
                title.eq(0).css('left','0vw');
              }
              if ((100-((windowBottom-objectTop)/10)-5) < 0){
                title.eq(1).css('left','0vw');
              }
              if ((100-((windowBottom-objectTop)/10)) < 0){
                title.eq(2).css('left','0vw');
              }
            }
          });
          $("#interdit").each(function() {
            var objectTop = $(this).offset().top+600;
            var objectBottom = $(this).offset().top + $(this).outerHeight()*1;

            if ((objectTop < windowBottom) && (objectBottom > windowBottom-screenHeight)) {
              console.log('allo');
              title.eq(3).css('left',(100-((windowBottom-objectTop)/10)-10)+'vw');
              title.eq(4).css('left',(100-((windowBottom-objectTop)/10)-5)+'vw');
              title.eq(5).css('left',(100-((windowBottom-objectTop)/10))+'vw');
              if ((100-((windowBottom-objectTop)/10)-10) < 0){
                title.eq(3).css('left','0vw');
              }
              if ((100-((windowBottom-objectTop)/10)-5) < 0){
                title.eq(4).css('left','0vw');
              }
              if ((100-((windowBottom-objectTop)/10)) < 0){
                title.eq(5).css('left','0vw');
              }
            }
          });


        }).scroll();


	});
  
  }


