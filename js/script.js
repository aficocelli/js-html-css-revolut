// jquery ready

$(function( ){

  // al click sui link del right menu
  $(".show-menu").click(function() {

    var showBtn = $(".show-menu");

    showBtn.next().removeClass("active");

    $(this).next().toggleClass("active");


  });








});

// jquery ready
