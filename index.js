var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

var overlay = document.getElementById("overlay");

window.addEventListener('load', function(){
  overlay.style.display = 'none';
})

$(document).ready(function() {
    $(window).scroll( function(){
        $('.fade').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},250);       
            }
        });  
    });
});

$(document).ready(function() {
  $(window).scroll( function(){
      $('.footer-fade').each( function(i){
          var bottom_of_object = $(this).position().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          if( bottom_of_window > bottom_of_object ){
              $(this).animate({'opacity':'1'},150);       
          }
      });  
  });
});
