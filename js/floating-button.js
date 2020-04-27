
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 200) { 
            $('.btn-fader').fadeIn(500); 
        } else { 
            $('.btn-fader').fadeOut(500); 
        } 
    }); 
    
  
    $(".scroll-to").on("click", function(event) {
        event.preventDefault();
        let destination = $(this).attr("href");

        console.log(destination);
  
        $("html, body").animate(
          {
            scrollTop: $(destination + '').offset().top
          },
          500,
          "easeInOutExpo"
        );
  
        return false;
      });
});