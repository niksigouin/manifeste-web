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


        // CHANGE ICON ON SCROLL
        $(window).scroll(function() {
          var windowBottom = $(this).scrollTop() + $(this).innerHeight();
          var icon = $(".main-btn img");
          var headerHeight = 70;
          var screenHeight = $(this).innerHeight();

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
        }).scroll();


	});
  
  }


