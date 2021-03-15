// jquery ready

$(function( ){

  // al click sui link del right menu
  $(".show-menu").click(function() {

    var showBtn = $(".show-menu");

    showBtn.next().removeClass("active");

    $(this).next().toggleClass("active");


  });

  $(".show-menu").mouseenter(function(){

    $(this).next().addClass("active");

    $(this).addClass("black");

  });

  $(".show-menu").mouseleave(function(){

    $(this).next().removeClass("active");

    $(this).removeClass("black");

  });







});

// jquery ready
