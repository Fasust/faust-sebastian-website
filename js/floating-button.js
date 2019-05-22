
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 200) { 
            $('.btn-fader').fadeIn(500); 
        } else { 
            $('.btn-fader').fadeOut(500); 
        } 
    }); 
    
  
    $(".btn-go-up").on("click", function(event) {
        event.preventDefault();
  
        $("html, body").animate(
          {
            scrollTop: $("html").offset().top
          },
          500,
          "easeInOutExpo"
        );
  
        return false;
      });
});