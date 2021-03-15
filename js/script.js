// jquery ready

$(function( ){

  // al click sui link del right menu
  $(".show-menu").click(function() {

    var showBtn = $(".show-menu").not(this);

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


  $(".hamburger-menu").click(function(){

    $("header").addClass("display-none");

    $(".responsive-menu").show();

  });

  $(".close-menu").click(function(){

    $("header").removeClass("display-none");

    $(".responsive-menu").hide();

  });






});

// jquery ready
