

$(document).ready( function () {
  var width = $(window).width();

  $(".header").on('click', 'li', function(event) {
    event.preventDefault();
    var tabId = $(this).attr('id');
    $(this).addClass('active').siblings().removeClass('active');
    $("#"+tabId+"-content").addClass('active').siblings().addClass('hide');
    $("#"+tabId+"-content").removeClass('hide');
    if(width > 767){
      $('html, body').animate({scrollTop:0}, 'slow');
    }else {
      $('html, body').animate({scrollTop: $("#sidebar").width() + 33}, 'slow');
    }
    return false;
  });




  var year = new Date();

  var d = year.getDate().toString();
  var m = year.getMonth();
  // alert(d+"/"+m+"/");
  $(".year").html(year.getFullYear());

  $(".userName").on("mouseenter", function () {
    $(this).html("Suman Kumar").css("cursor", "pointer");
  }).on("mouseleave", function () {
    $(this).text("Kumar Suman");
  })
})
