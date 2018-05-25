$(document).ready(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
	});

	$('.section-content .info-item').equalHeights();
	$('.s1-bottom .info-item').equalHeights();

	// $('.section_3 .info-item-wrap').equalHeights();

	$('.section_4').waypoint(function(down) {

		$('.section_4 .card').each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass('card-off').addClass('card-on');
			}, 200*index);
		});
	}, {
		offset: '20%'
	});

	var waypointsvg = new Waypoint({

		element: $(".section_5"),
		handler: function(dir) {

			if (dir === "down") {

				$(".section_5 .tc-item").each(function(index) {
					var ths = $(this);
					setTimeout(function() {
						index++;
						var myAnimation = new DrawFillSVG({
							elementId: "tc-svg-" + index
						});
						ths.children(".tc-content").addClass("tc-content-on");
					}, 700*index);
				});

			};
			this.destroy();
		},
		offset: '20%'
	});

	$('.section_6').waypoint(function(down) {

		$('.section_6 .teammate').each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass('teammate-off').addClass('teammate-on');
			}, 200*index);
		});
	}, {
		offset: '20%'
	});

	$('.slider').owlCarousel({
		items: 1,
		nav: true,
		navText: "",
		loop: true
	});

	document.querySelector('.arrow-down').addEventListener('click', function(){
		$('html, body').animate({ scrollTop: $('.main-head').height() + 120 }, 'slow');
		return false;
	});

	$('.section-head p, .section-head h2').animated("fadeInRight");
	$('.info-item-wrap').animated("zoomIn");
	$('.section_8 .forms').animated("fadeIn");

	$('.s2-item-wrap, .section_8-item').each(function(index) {
		var ths = $(this);
		setInterval(function() {
			ths.animated("fadeInDown");
		}, 400*index);
	});

	$('.slider .slide').animated('rollIn');

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	document.querySelector('.to-top').addEventListener('click', function(){
		$('html, body').animate({ scrollTop: 0 }, 'slow');
		return false;
	});

	$('.callback').click(function(){
		$('#callback h4').html($(this)[0].text);
		$('#callback input[name=formname]').val($(this)[0].text);
	}).magnificPopup({
		type: 'inline',
		mainClass: 'mfp-forms'
	})

	// $(".forms").submit(function() {
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php",
	// 		data: $(this).serialize()
	// 	}).done(function() {
	// 		alert("Спасибо за заявку!");
	// 		setTimeout(function() {
	// 			$.magnificPopup.close();
	// 			$(".forms").trigger("reset");
	// 		}, 1000);
	// 	});
	// 	return false;
	// });

});
