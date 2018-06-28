$(document).ready(function() {
	'use strict';

	var headerHeight = $('header').outerHeight();

	$('main').css('margin-top',headerHeight);

	if (Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || /*@cc_on!@*/false || !!document.documentMode) {
		$('#contato form>div').addClass('browser');
	}

	$(window).scroll(function(e) {
		if ($(window).scrollTop() >= 680) {
			$('header').addClass('change');
		} else {
			$('header').removeClass('change');
		}

		if ($(window).scrollTop() >= ($('#servicos').offset().top - headerHeight)) {
			$('header').addClass('change');
		}

		if ($('.menu').hasClass('active')) {
			$('.menu').removeClass('active');
		}
	});

	$('.link-menu-mobile').click(function(e){
		e.preventDefault();

		if ($('.menu').hasClass('active')) {
			$('.menu').removeClass('active');
		} else {
			$('.menu').addClass('active');
		}
	});

	$('header .menu a, #slider>div a').click(function(e){
		e.preventDefault();

		$('html,body').animate({
			scrollTop: $( ( $(this).attr('href') || '').split('?')[0] ).offset().top-headerHeight + 'px'
		},'slow');
		$('.menu').removeClass('active');

		return false;
	});

	$('#slider').slick({
		dots: true,
		infinite: true,
		speed: 400,
		slidesToShow: 1,
		adaptiveHeight: true
	});

	$('#portfolio .tabs-nav li').click(function(e){
		e.preventDefault();

		var id = $(this).find('a').attr('href');

		$('#portfolio .active').removeClass('active');
		$(this).addClass('active');
		$('#portfolio ' + id).addClass('active');
	});

	$('#contato .tabs-nav li').click(function(e){
		e.preventDefault();

		var id = $(this).find('a').attr('href');

		$('#contato .active').removeClass('active');
		$(this).addClass('active');
		$('#contato ' + id).addClass('active');
	});

	$('.tabs-content .grid a, .slide1 a').click(function(e){
		e.preventDefault();

		var url = $(this).find('div').attr('data-src'),
			$modal = $('.modal').filter($(this).attr('href'));

		$modal.find('iframe').attr('src', url + '?autoplay=1');
		$('.overlay-modal').add($modal).fadeIn();

		return false;
	});

	$('.overlay-modal, .modal .close').click(function(e){
		e.preventDefault();

		if(e.target == this) {
			$('.overlay-modal').add($('.modal')).fadeOut();
			$('.overlay-modal').find('iframe').attr('src','');

			return false;
		}
	});

	$('form #telefone').mask('00 0000-00009');	

	$('form').each(function(){
		$(this).validate({
			errorPlacement : $.noop
		});
	});

	var enviarFormulario = function(formulario) {
		var formdata = $(formulario).serializeObject();
		console.log(formdata);
	};

	if($(window).width() < 860) {
		$('.grid3').slick({
			dots: true,
			arrows: false,
			slidesToShow: 2,
			slidesToScroll: 2,
			responsive: [{
				breakpoint: 480,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}]
		});
	}

	if($(window).width() < 960) {
		$('.grid4').slick({
			dots: true,
			arrows: false,
			slidesToShow: 3,
			slidesToScroll: 3,
			responsive: [{
				breakpoint: 780,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: true
				}
			}]
		});

		$('.grid5').slick({
			dots: true,
			arrows: false,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [{
				breakpoint: 780,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					dots: true
				}
			}, {
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: true
				}
			}]
		});
	}
});