// JavaScript Document


jQuery(function(){
    var windowWidth = $(window).width();
    var headerHight = 80; 
    jQuery('a[href^=#]').click(function() {
    var speed = 1000;
    var href= jQuery(this).attr("href");
    var target = jQuery(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top-headerHight;
    jQuery('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
   });
});


//navi
$(function() {
  $('.btn-trigger').on("click", function(){
    $(this).toggleClass('open');
	  
    $('ul').toggleClass('open');
  });

});
// メニューをクリックされたら、非表示にする
$(function() {
  $('nav ul li a,.contact_btn').on("click", function(){
     $('.btn-trigger').removeClass('open');
     $('ul').removeClass('open');
  });
});



$(function(){
  $('#MONITOR h3').click(function(){
    $(this).next('.box').slideToggle();
    $(this).toggleClass("open");
  });
});