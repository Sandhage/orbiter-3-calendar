// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .

// On document ready
$(document).ready(function() {
	setDayHeight();
    dropNav();
    fadeMobNav();
    // hoverOverClaimed();
});


// Functions defined
function setDayHeight() {
	// Set initial height
	var setHeight = function() {
		$('.day').each(function() {
			$(this).height($(this).width());
		});
	}
	
	setHeight();
	
	// Maintain height on window resize
	$(window).resize(function() {
		setHeight();
	});
}

function dropNav() {
  	$('.dropdown').hover(function() {
		$(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown(90);
	}, function() {
		$(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp(90);
	});  
}

function fadeMobNav() {
	// Fix funky error with mobile nav href
	$('li.mob-nav > a').attr("href", "#");
	
	// Make mobile navigation a click event
	$('.mob-nav').click(function() {
		event.preventDefault();
		if ( $(this).hasClass('.active') ) {
			$('.hidden-nav').hide();
			$('.orbiter-3-logo').show();
			$('main').show();
			$(this).removeClass('.active');
		} else {
			$(this).addClass('.active');
			$('.orbiter-3-logo').hide()
			$('main').hide();
			$('.hidden-nav').fadeIn(45);
		}
	});
}

function addClaimedClass() {
	$('.claimed-trigger').parent().addClass('claimed');
}

function hoverOverClaimed() {
	var claimedInfo = $('.claimed-info');
	
	$('.claimed').on({
		mouseenter: function() {
			$('.day-date-output').hide();
			claimedInfo.show();
			// $(this).children().hide();
		}, mouseleave: function() {
			$('.day-date-output').show();
			// $(this).children().show();
			$('.day-date-raw').hide();
		}
	});
}

function setDayDate() {
	var rawDate    = null;
	var dateOutput = null;
	
	$('.day').each(function() {
		
		rawDate = this.firstElementChild.innerHTML;
		dateOutput = rawDate.charAt(15) + rawDate.charAt(16);
		this.lastElementChild.innerHTML = dateOutput;		
		
		console.log(rawDate);
	});

}
