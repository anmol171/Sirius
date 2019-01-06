
/*=========header============*/

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 110) {
        $(".header").addClass("header-fixed");
    } else {
        $(".header").removeClass("header-fixed");
    }
});


  /*==========form===========*/

  $('.has-empty').each(function (index, elm) {
      $(elm).on('blur', function () {
          if ($(this).val().trim().length) {
              $(this).addClass('active');
          } else {
              $(this).removeClass('active');
          }
      });
  });

  /*========Mobile Menu==========*/

$(document).ready(function(){
          $(".responsive-icon i").click(function(){
              $(".custom-nav-none").slideToggle("slow");
          });
      });


  //  -------------- WOW Js  --------------
    wow = new WOW(
    {
      animateClass: 'animated',
      offset:       100,
      mobile:       false
    }
  );
  wow.init();
 

/*===smooth-scrool======*/

 $(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+0
        }, 1000, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
   
}







