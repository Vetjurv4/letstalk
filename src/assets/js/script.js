// Preloader //

jQuery(document).ready(function($) {  

$(window).load(function(){
  $('#preloader').fadeOut('slow',function(){$(this).remove();});
});

});


// Closes the sidebar menu
$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Scrolls to the selected menu item on the page
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

// wow

new WOW().init();

// carousel

$(document).ready(function() {
 
  var owl = $("#screenshots");
 
  owl.owlCarousel({
    autoPlay: false,
    pagination: false,
    stopOnHover: true,
  });
 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
 
});

// Testimonial

$(document).ready(function() {
 
  $("#review").owlCarousel({
 
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});

// Set Header Background

$(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});


// Team overlay

// $(document).ready(function(){
//   $(".img-overlay").hover(function(){
//     $(".overlay").toggleClass("overlay_hover");
//   });

// });

   $(".subscribe-form").on('submit', function(event) {
       event.preventDefault();
      
       var actionUrl = $(this).attr('action')
       console.log('aa', actionUrl, $(this).serializeArray());

       $.ajax({
        url: actionUrl,
        data: $(this).serializeArray(),
        dataType: 'jsonp',
        //type:'POST'

        success: function(data, status){
        console.log('done', data, status);
        if(data['result'] === "success"){
			$('.modal-title').html('Success');
            $('.modal-body').html(data['msg']);
			$('.modal').modal('toggle');
        }else{
			$('.modal-title').html('Error');
            $('.modal-body').html(data['msg']);
			$('.modal').modal('toggle');
        }
       
       }
        })
   });
   
  //  //website post email for new contact form
  //   $(".contact-form").on('submit', function(event) {
  //       event.preventDefault();
  //       var actionUrl = $(this).attr('action')
  //       var formArray = $(this).serializeArray();
  //       // var objData = form_to_object(formArray)
  //       $('.modal-title').html('Sending');
  //       $('.modal-body').html('Sending your details, thanks!');
  //       $('.modal').modal('toggle');
        
  //       $.ajax({
  //        url: actionUrl,
  //        data: formArray,
  //        dataType: 'json',
  //        type:'POST',
  //        success : function(data, status){
  //         console.log('sent')
           
  //          }
        
  //        })
  //   });
