$(document).ready(function(){
    $(function () {
        $(document).scroll(function () {
          var $nav = $(".topnav");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
      });
  });


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  