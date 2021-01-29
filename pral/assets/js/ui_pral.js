// scroll animate
var isVisible = false;
$(window).on('scroll',function() {
	var st = $(this).scrollTop();
	if(st > 0) {
		$('.titlechart').addClass('fixed')
	}else{
		$('.titlechart').removeClass('fixed')
	}

	$('.pral_wrap .section').each(function(){
		if (checkVisible($(this))&&!isVisible) {

			if($(this).hasClass('sec_intro')) {
				$('.titlechart').find('li').removeClass('active')
			}

			if($(this).hasClass('sec_skill')) {
				$('.titlechart').find('li').removeClass('active')
				$('.titlechart').find('li').eq(0).addClass('active')
				$('.sec_skill .swiper-slide').each(function () {
					if($(this).hasClass('swiper-slide-active')){
						var video = $(this).find('video').get(0);
						if(video !== undefined) {
							video.play();
						}
					}
				});
			}

			if($(this).hasClass('sec_zoom')) {
				var video = $(this).find('video').get(0);
				if(video !== undefined) {
					// video.currentTime = 0;
					video.play();
				}
				$('.sec_effect').find('video').removeClass('showed')
			}

			if($(this).hasClass('sec_zoom2')) {
				$('.sec_zoom').find('video').get(0).pause();
			}
				
			if($(this).hasClass('sec_effect')) {
				var video = $(this).find('video').get(0);
				if(video !== undefined) {
					if(!$(this).find('video').hasClass('showed')){
						video.play();
					}else{
						return false;
					}
					$(this).find('video').on(
					"timeupdate",
					function(e){
						if(video.currentTime == video.duration) {
							$('.sec_effect').find('video').addClass('showed')
							video.pause();
						}
					});
				}
			}

			if($(this).hasClass('sec_effect2')) {
				$('.titlechart').find('li').removeClass('active')
				$('.titlechart').find('li').eq(0).addClass('active')
				$('.titlechart').find('li').eq(1).addClass('active')
				var video = $(this).find('video').get(0);
				if(video !== undefined) {
					video.play();

					return false;
				}
				$('.sec_effect').find('video').removeClass('showed')
			}
			if($(this).hasClass('sec_smartcare')) {
				var video = $(this).find('video').get(0);
				if(video !== undefined) {
					video.play();
				}
			}
			if($(this).hasClass('sec_homecare')) {
				var video = $(this).find('video').get(0);
				if(video !== undefined) {
					video.play();
				}
			}
			if($(this).hasClass('sec_howto')) {
				$('.titlechart').find('li').removeClass('active')
				$('.titlechart').find('li').eq(0).addClass('active')
				$('.titlechart').find('li').eq(1).addClass('active')
				$('.titlechart').find('li').eq(2).addClass('active')
				$('.howtoswipe .swiper-slide').each(function (i) {
					var video = $(this).find('video').get(0);

					if($('#howtoswipe').hasClass('_auto')){
						if($(this).hasClass('swiper-slide-active')){
							if(video !== undefined) {
								video.play();
								$(this).find('video').on(
									"timeupdate",
									function(e){
										if(video.currentTime == video.duration) {
											if(i == 0) howtoswipe.slideTo(1, 600);
											return false;
										}
								});
							}
						}
					}
				});
			}
			if($(this).hasClass('sec_stabillity')) {
				$('.titlechart').find('li').removeClass('active')
				$('.titlechart').find('li').eq(0).addClass('active')
				$('.titlechart').find('li').eq(1).addClass('active')
				$('.titlechart').find('li').eq(2).addClass('active')
				$('.titlechart').find('li').eq(3).addClass('active')
				var a0 = setTimeout(function(){
					$('.sec_stabillity').find('.mark').addClass('markOn');
					clearTimeout(a0);
				}, 1000);
			}
			if($(this).hasClass('sec_component')) {
				$('.titlechart').find('li').removeClass('active')
				$('.titlechart').find('li').eq(0).addClass('active')
				$('.titlechart').find('li').eq(1).addClass('active')
				$('.titlechart').find('li').eq(2).addClass('active')
				$('.titlechart').find('li').eq(3).addClass('active')
				$('.titlechart').find('li').eq(4).addClass('active')
			}
		} else {
			if($(this).hasClass('sec_skill')) {
				var a0 = setTimeout(function(){
					skillswipe.slideTo(0);
					clearTimeout(a0);
				}, 1000);

				$('.sec_skill .swiper-slide').each(function () {
					if($(this).hasClass('swiper-slide-active')){
						var video = $(this).find('video').get(0);
						if(video !== undefined) {
							video.pause();
							video.currentTime = 0;
						}
					}
				});
				if($('.sec_zoom')) {
					var video = $(this).find('video').get(0);
					if(video !== undefined) {
						video.pause();
						video.currentTime = 0;
					}
				}
			}

			if($(this).hasClass('sec_smartcare')) {
				var video = $(this).find('video').get(0);
				if(video !== undefined) {
					video.pause();
					video.currentTime = 0;
				}
			}
			if($(this).hasClass('sec_homecare')) {
				var video = $(this).find('video').get(0);
				if(video !== undefined) {
					video.pause();
					video.currentTime = 0;
				}
			}
			if($(this).hasClass('sec_howto')) {
				if($('#howtoswipe').hasClass('_auto')) {
					var a0 = setTimeout(function(){
						howtoswipe.slideTo(0);
						clearTimeout(a0);
					}, 1000);
				}else{
					var a0 = setTimeout(function(){
						howtoswipe2.slideTo(0);

						$('.sec_howto .swiper-slide').each(function () {
							if($(this).hasClass('swiper-slide-active')){
								var video = $(this).find('video').get(0);
								if(video !== undefined) {
									video.play();
								}
							}
						});

						clearTimeout(a0);
					}, 1000);
				}
				$('.sec_howto .swiper-slide').each(function () {
					if($(this).hasClass('swiper-slide-active')){
						var video = $(this).find('video').get(0);
						if(video !== undefined) {
							video.pause();
							video.currentTime = 0;
						}
					}
				});
			}
			if($(this).hasClass('sec_stabillity')) {
				var a0 = setTimeout(function(){
					$('.sec_stabillity').find('.mark').removeClass('markOn');
					clearTimeout(a0);
				}, 100);
			}
		}
	});

});
var checkVisible = function(elm, eval){
	eval = eval || "object visible";
	var viewportHeight = $(window).height(), // Viewport Height
			scrolltop = $(window).scrollTop() - 0, // Scroll Top
			y = $(elm).offset().top,
			elementHeight = $(elm).height();

	if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
	if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}

var scrCtrl = new ScrollMagic.Controller;
$('.section').each(function(i,e) {
	var r = i + 1;
	$(this).attr('data-slide', 'ani0' + r);
	
	new ScrollMagic.Scene({
		triggerElement: this,
		triggerHook: 'onEnter',
		offset:'250',
	})
	.addTo(scrCtrl)
	.setClassToggle("[data-slide=ani0"+ r +"]", "is-active").addTo(scrCtrl)
	.on('enter', function () {
	});
	// new ScrollMagic.Scene({
	// 	triggerElement: this,
	// 	triggerHook: 'onLeave',
	// 	offset:'-100'
	// })
	// .addTo(scrCtrl)
	// .on('leave', function () {
	// });

	// if($(this).hasClass('sec_zoom')){
		// var effectpin = new ScrollMagic.Scene({
		// 	triggerElement: '.sec_zoom',
		// 	triggerHook: 0.0,
		// 	duration: "100%",
		// 	// reverse: true
		// })
		// .setPin('.sec_zoom')
		// .addTo(scrCtrl);
	// }
	// sec_zoom
	if($(this).hasClass('sec_skill')) {
		$('.sec_skill .swiper-slide').each(function () {
			if($(this).hasClass('swiper-slide-active')){
				var video = $(this).find('video').get(0);
				if(video !== undefined) {
					video.play();
				}
			}
		});
	}
	// sec_skill
	// if($(this).hasClass('sec_effect2')){
	// 	var effectpin = new ScrollMagic.Scene({
	// 		triggerElement: '.sec_effect2',
	// 		triggerHook: 0.0,
	// 		duration: "150%",
	// 		reverse: true
	// 	})
	// 	.setPin('.sec_effect2')
	// 	.addTo(scrCtrl);
	// }
	// sec_effect
});

// swipe fn
if($('#kvswipe').length > 0){ 
	var kvswipe = new Swiper('#kvswipe', {
		slidesPerView: 1,
		spaceBetween: 0,
		allowTouchMove: true,
		pagination: {
			el: '#kvswipe .swiper-pagination',
			clickable : true,
		},
	});
}
if($('#skillswipe').length > 0){ 
	var vh = $('#skillswipe .swiper-slide').find('.video').innerHeight();
	$('#skillswipe').find('.swp_paging').css('top', vh + 150);

	var skillswipe = new Swiper('#skillswipe', {
		slidesPerView: 1,
		spaceBetween: 0,
		allowTouchMove: true,
		pagination: {
			el: '#skillswipe .swiper-pagination',
			clickable : true,
		},
		on: {
			slideChange: function () {
				$('#skillswipe .swiper-slide').each(function () {
					var video = $(this).find('video').get(0);

					video.pause();
					video.currentTime = 0;
					if($(this).hasClass('swiper-slide-active')) {
						if(video !== undefined) {
							video.pause();
							video.currentTime = 0;
						}
					}else{
						if(video !== undefined) {
							video.play();
						}
					}
				});
			},
		}
	});

	$(window).resize(function (){
		var vh = $('#skillswipe .swiper-slide').find('.video').innerHeight();
		$('#skillswipe').find('.swp_paging').css('top', vh + 150);
	});
}
if($('#howtoswipe').length > 0){ 
	var vh = $('#howtoswipe .swiper-slide').find('.video').innerHeight();
	$('#howtoswipe').find('.swp_paging').css('top', vh - 5);

	var howtoswipe = new Swiper('#howtoswipe', {
		slidesPerView: 1,
		spaceBetween: 0,
		allowTouchMove: true,
		pagination: {
			el: '.swiper-pagination',
			clickable : true,
		},
		on: {
			slideChange: function () {
				$('#howtoswipe .swiper-slide').each(function () {
					var video = $(this).find('video').get(0);
					if($(this).hasClass('swiper-slide-active')) {
						if(video !== undefined) {
							video.pause();
						}
					}else{
						if(video !== undefined) {
							video.play();
						}
					}
				});
				$('#howtoswipe .swiper-slide').each(function () {
					if(howtoswipe.activeIndex == $('#howtoswipe .swiper-slide').length - 1) {
						var video = $(this).find('video').get(0);
						$(this).find('video').on(
						"timeupdate",
						function(e){
							if(video.currentTime == video.duration) {
								if(howtoswipe.activeIndex == 3) {
									$('.sec_howto').find('.dim').hide()
									var a0 = setTimeout(function(){
										$('.howtoswipe._swipe').addClass('active')
										$('#howtoswipe').hide()

										clearTimeout(a0);
									}, 1200);
								}
							}
						});
						return;
					}else{
						var video = $(this).find('video').get(0);
						$(this).find('video').on(
							"timeupdate",
							function(e){
								if(video.currentTime == video.duration) {
									howtoswipe.slideTo(howtoswipe.activeIndex + 1, 600);
									if(howtoswipe.activeIndex == 3) {
										$('#howtoswipe').removeClass('_auto');
										return false;
									}
								}
						});

					}
				});
			},
		}
	});

	var vh = $('#howtoswipe2 .swiper-slide').find('.video').innerHeight();
	$('#howtoswipe2').find('.swp_paging').css('top', vh - 5);
	var howtoswipe2 = new Swiper('#howtoswipe2', {
		slidesPerView: 1,
		spaceBetween: 0,
		allowTouchMove: true,
		pagination: {
			el: '#howtoswipe2 .swiper-pagination',
			clickable : true,
		},
		on: {
			slideChange: function () {
				$('#howtoswipe2 .swiper-slide').each(function () {
					var video = $(this).find('video').get(0);
					if($(this).hasClass('swiper-slide-active')) {
						if(video !== undefined) {
							video.pause();
						}
					}else{
						if(video !== undefined) {
							video.play();
						}
					}
				});
			},
		}
	});

	$(window).resize(function (){
		var vh = $('#howtoswipe .swiper-slide').find('.video').innerHeight();
		$('#howtoswipe').find('.swp_paging').css('top', vh - 5);

		var vh = $('#howtoswipe2 .swiper-slide').find('.video').innerHeight();
		$('#howtoswipe2').find('.swp_paging').css('top', vh - 5);
	});
}

// layer popup control
var isOpen = false;
function layerOpen(layerId){
	var curPos = $(window).scrollTop();
	$('html').addClass('noscroll');
	$('#' + layerId).addClass('is-visible');

	// if(layerID == 'vodpop') {
	// 	console.log(layerID)
	// 	var video = $('.vodpop').find('video').get(0);
	// 	video.play();
	// }
	
	var layerID = $('#' + layerId);
	layerID.attr({
		'aria-hidden': 'false',
		'open': 'true',
		'tabindex': '0'
	});
	if($('[role="dialog"]:visible').length <= 1 && isOpen == false) {
		if($('#' + layerId).hasClass('layer_full')){
			$('#contentWrap').css('top',-curPos);
			$('#' + layerId).css('top',0);
		} else {
			$('#contentWrap').css('top',-curPos);
		}
		isOpen = true
	}

	var delay = setTimeout(function(){
		if(!$('html').hasClass('noscroll')){
			$('html').addClass('noscroll');
		}
		clearTimeout(delay);
	}, 50);
}
function layerClose(layerId){
	var curPos = -(parseInt($('#contentWrap').css('top')));
	$('#' + layerId).removeClass('is-visible');
	$('#' + layerId).attr('aria-hidden', 'true');
	// $('#' + layerId).removeAttr('open tabindex');
	$('html').removeClass('noscroll');
	if ($('[role="dialog"].is-visible').length < 1) {
		$('html').removeClass('noscroll').find('#contentWrap').css({'top':0});
		$(window).scrollTop(curPos);
		isOpen = false;
	}
	if($('#' + layerId).find('iframe').length > 0){
		$('iframe').each(function(index) {
			var el_src = $(this).attr("src");
			$(this).attr("src",el_src);
				
			return false;
		});
	}
}
function vodplay(){
	var video = $('.vodpop').find('video').get(0);
	video.play();
}
function vodstop(){
	var video = $('.vodpop').find('video').get(0);
	video.pause();
	video.currentTime = 0;
}


var moreview = function() {
	if($('.photobx').find('.more').hasClass('_off')){
		$('.photobx').find('.vw').addClass('_on')
		$('.photobx').find('.more').removeClass('_off').addClass('_on');
	}else{
		$('.photobx').find('.vw').removeClass('_on')
		$('.photobx').find('.more').removeClass('_on').addClass('_off');
	}
}

$('.titlechart ul li').each(function () {
	var posValue = $(this).attr('data-pos-top');
	$(this).click(function(e){
		if(posValue == 'skillswipe' || posValue == 'sec_howto' || posValue == 'sec_stabillity' || posValue == 'sec_component') {
			var posTop = $('#' + posValue).offset().top - 40
		}else{
			var posTop = $('#' + posValue).offset().top;
		}

		if(posValue){
			$("html, body").animate({scrollTop: posTop}, 800);
		}
		e.preventDefault();
	});
});

$('.sec_intro a').each(function () {
	var posValue = $(this).attr('data-pos-top');
	$(this).click(function(e){
		var posTop = $('#' + posValue).offset().top - 50

		if(posValue){
			$("html, body").animate({scrollTop: posTop}, 800);
		}
		e.preventDefault();
	});
});

