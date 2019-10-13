(function($) {
  "use strict";

//------------------------------------- Waiting for the entire site to load ------------------------------------------------//

jQuery(window).load(function() {
		jQuery("#loaderInner").fadeOut();
		jQuery("#loader").delay(400).fadeOut("slow");
});

$(document).ready(function(){
	var header = $('.mainHeader'),
	pos = header.offset();

	$(window).scroll(function(){
		if($(this).scrollTop() > pos.top+20 && header.hasClass('default')){
			header.fadeOut('fast', function(){
				$(this).removeClass('default').addClass('switchedHeader').slideDown(200);
			});
		} else if($(this).scrollTop() <= pos.top+20 && header.hasClass('switchedHeader')){
			header.slideUp(200, function(){
				$(this).removeClass('switchedHeader').addClass('default').fadeIn(200);
			});
		}
});


//------------------------------------- Navigation setup ------------------------------------------------//

$('a.scroll').smoothScroll({
        speed: 800,
        offset: -63
});





//-------------Highlight the current section in the navigation bar------------//
	var sections = $("section");
		var navigation_links = $("nav#mainNav a");

		sections.waypoint({
			handler: function(event, direction) {

				var active_section;
				active_section = $(this);
				if (direction === "up") active_section = active_section.prev();

				var active_link = $('nav#mainNav a[href="#' + active_section.attr("id") + '"]');
				navigation_links.removeClass("active");
				active_link.addClass("active");

			},
			offset: '35%'
		});




//------------------------------------- End navigation setup ------------------------------------------------//



//---------------------------------- Main slider setup-----------------------------------------//

$('.mainSlider').flexslider({
	animation: "fade",
	slideshow: true,
	directionNav:false,
	controlNav: true,
	animationSpeed: 1500
});



$('.mainSlider .slides li').css('height', $(window).height());


for(var i = 0; i < $('.mainSlider .slides li').length; i++){

    var path = $('.mainSlider .slides li').eq(i).find('img.slide').attr('src');
	$('.mainSlider .slides li').eq(i).addClass('parallax');
    $('.mainSlider .slides li').eq(i).css('backgroundImage', 'url("' + path + '")');
    $('.mainSlider .slides li').eq(i).find('img.slide').detach();

}




$(document).scroll(function () {

        var treshhold = Math.round($(window).scrollTop() / 5);
        $('li.parallax').css('backgroundPosition', '50% ' + treshhold + 'px');
});


//---------------------------------- End main slider setup-----------------------------------------//




//---------------------------------- Parallax-----------------------------------------//

$(".wwdContent, .facts").parallax("50%", 0.3);
$(".ctFormHolder").parallax("100%", 0.1);


//---------------------------------- End parallax -----------------------------------------//



//---------------------------------- Team hover -----------------------------------------//


$(".thumbs li a span").css({ opacity: 0 });

$('.thumbs li a ').hover( function(){
	$(this).children('span ').stop().animate({ opacity: 1 }, 'slow');
	}, function(){
	$(this).children('span ').stop().animate({ opacity: 0 }, 'slow');
});


$('.testiThumbs').each(function () {
	    $('.testiThumbs li a').on('click', function(event){
			event.preventDefault();
		});

		$('.testiThumbs li a' ).hover(function() {
			if($('.testiThumbs li a' ).hasClass('tactive')){
				$('.thumbs li a span').stop().animate({ opacity: 0 }, 'slow');
				$('.testiThumbs li a').removeClass('tactive');
			}

			$(this).addClass('tactive');
			$('.testiDetails .td').hide();
			$($(this).attr('href')).show();
	});

});


//---------------------------------- End team hover-----------------------------------------//


//---------------------------------- Site slider-----------------------------------------//


$('.testiSlider').flexslider({
	animation: "slide",
	slideshow: true,
	directionNav:false,
	controlNav: true
});

$('.clientSlider').flexslider({
	animation: "slide",
	slideshow: true,
	directionNav:false,
 	itemWidth: 53,
    itemMargin: 0,
    minItems: 2,
    maxItems: 6,
	controlNav: false
});

$('.postSlider, .postSliderLarge').flexslider({
	animation: "slide",
	slideshow: true,
	directionNav:false,
	controlNav: true
});


$('.projectSlider').flexslider({
   	animation: "slide",
	slideshow: true,
	directionNav:false,
	controlNav: true
});




//---------------------------------- End site slider-----------------------------------------//


//---------------------------------- Portfolio -----------------------------------------//

$(".itemDesc").css({ opacity: 0 });

//--------------------------------- Hover animation for the elements of the portfolio --------------------------------//


$('.itemDesc').hover( function(){
	$(this).stop().animate({ opacity: 1 }, 'slow');
}, function(){
	$(this).stop().animate({ opacity: 0 }, 'slow');
});

	$('.itemDesc').hover(function () {
    var projDesc = $(this).find('.itemDesc');
    var offset = ($(this).height() / 2) - (projDesc.height() / 2);
    $(this).find('.itemDescInner').css('padding-top', offset -40);
});


//--------------------------------- End hover animation for the elements of the portfolio --------------------------------//

//-----------------------------------Initilaizing magnificPopup for the portfolio-------------------------------------------------//

		$('.folio').magnificPopup({
		  type: 'image'
		});


//-----------------------------------End initilaizing fancybox for the portfolio-------------------------------------------------//

	//--------------------------------- Sorting portfolio elements with quicksand plugin  --------------------------------//

		var $portfolioClone = $('.portfolio').clone();

		$('.filter a').click(function(e){
			$('.filter li').removeClass('current');
			var $filterClass = $(this).parent().attr('class');
			if ( $filterClass == 'all' ) {
				var $filteredPortfolio = $portfolioClone.find('li');
			} else {
				var $filteredPortfolio = $portfolioClone.find('li[data-type~=' + $filterClass + ']');
			}
			$('.portfolio').quicksand( $filteredPortfolio, {
				duration: 800,
				easing: 'easeInOutQuad'
			}, function(){
					$('.itemDesc').hover( function(){
						$(this).stop().animate({ opacity: 1 }, 'slow');
					}, function(){
						$(this).stop().animate({ opacity: 0 }, 'slow');
					});

						$('.itemDesc').hover(function () {
					    var projDesc = $(this).find('.itemDesc');
					    var offset = ($(this).height() / 2) - (projDesc.height() / 2);
					    $(this).find('.itemDescInner').css('padding-top', offset -40);
					});




//------------------------------ Reinitilaizing fancybox for the new cloned elements of the portfolio----------------------------//



			$('.folio').magnificPopup({
			  type: 'image'
			});


//-------------------------- End reinitilaizing fancybox for the new cloned elements of the portfolio ----------------------------//

			});


			$(this).parent().addClass('current');
			e.preventDefault();
		});

//--------------------------------- End sorting portfolio elements with quicksand plugin--------------------------------//


//---------------------------------- End portfolio-----------------------------------------//



$('.facts').appear(function() {
	$(".timer .count").each(function() {
	var counter = $(this).html();
	$(this).countTo({
		from: 0,
		to: counter,
		speed: 2000,
		refreshInterval: 10,
		});
	});
});


//---------------------------------- Form validation-----------------------------------------//




$('#submit').click(function(){

	$('input#name').removeClass("errorForm");
	$('textarea#message').removeClass("errorForm");
	$('input#email').removeClass("errorForm");

	var error = false;
	var name = $('input#name').val();
	if(name == "" || name == " ") {
		error = true;
		$('input#name').addClass("errorForm");
	}


		var msg = $('textarea#message').val();
		if(msg == "" || msg == " ") {
			error = true;
			$('textarea#message').addClass("errorForm");

		}

	var email_compare = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
	var email = $('input#email').val();
	if (email == "" || email == " ") {
		$('input#email').addClass("errorForm");
		error = true;
	}else if (!email_compare.test(email)) {
		$('input#email').addClass("errorForm");
		error = true;
	}

	if(error == true) {
		return false;
	}

	var data_string = $('.contactForm form, .replyForm form').serialize();


	$.ajax({
		type: "POST",
		url: $('.contactForm form, .replyForm form').attr('action'),
		data: data_string,

		success: function(message) {
				if(message == 'SENDING'){
					$('#success').fadeIn('slow');
				}
				else{
					$('#error').fadeIn('slow');
				}
					}

	});

	return false;
});



//---------------------------------- End form validation-----------------------------------------//



//--------------------------------- Mobile menu --------------------------------//


var mobileBtn = $('.mobileBtn');
	var nav = $('#mainNav ul');
	var navHeight= nav.height();

$(mobileBtn).click(function(e) {
		e.preventDefault();
		nav.slideToggle();
		$('#mainNav li a').addClass('mobile');


});

$(window).resize(function(){
		var w = $(window).width();
		if(w > 320 && nav.is(':hidden')) {
			nav.removeAttr('style');
			$('#mainNav li a').removeClass('mobile');
		}

});



$('#mainNav li a').click(function(){
	if ($(this).hasClass('mobile')) {
        nav.slideToggle();
	}

});


//--------------------------------- End mobile menu --------------------------------//

});

})(jQuery);
