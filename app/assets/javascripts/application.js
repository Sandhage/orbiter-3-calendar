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

// Global variables and objects
var currentMonth   = null;
var totalDonations = null;
var aprilCheck     = false;


// On document ready
$(document).ready(function() {
	setDayHeight();
	setCurrentMonth();
    dropNav();
    fadeMobNav();
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
		console.log('clicked');
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

function clickClaimed() {
	$('.day').on({
		click: function() {
			if ( $(this).hasClass('shown') ) {
				$(this).children('.claimed-info').hide();
				$(this).children('#unclaimed-link').hide();
				$(this).children('.day-date-output').show();
				$(this).removeClass('shown');
			} else {
				$('.shown > .claimed-info').hide();
				$(this).children('.day-date-output').hide();
				$('.day').removeClass('shown');
				$(this).addClass('shown');
				$(this).children('.claimed-info').show();
				$(this).children('#unclaimed-link').show();
			}
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
	});
}

function setCurrentMonth() {
	var monthRaw    = null;
	var monthOutput = null;
	
	// Grab current displayed month and assign it to variable for month donation counter
	monthRaw     = $('#current-month').text();
	monthOutput  = monthRaw.charAt(0) + monthRaw.charAt(1) + monthRaw.charAt(2);
	currentMonth = monthOutput;

	// Set aprilCheck variable to block claim links in April 2016
	if ( monthRaw == "Apr 2016" ) {
		aprilCheck = true;
	} else {
		aprilCheck = false;
	}
	
}

function setMatchDonor() {
	if ( currentMonth == "May" ) {
		$('.match-donor').append("Match Donor: The Gilmore Family");
		$('.match-donor').show();
	} else if ( currentMonth == "Jun" ) {
		$('.match-donor').append("Match Donor: The Williams Family");
		$('.match-donor').show();
	} else if ( currentMonth == "Jul" ) {
		$('.match-donor').append("Match Donor: Gayle Smith");
		$('.match-donor').show();
	} else {
		$('.match-donor').hide();
	}
}

function blockApril() {
	if ( aprilCheck ) {
		$('.unclaimed-link').hide();
	} else {
		$('.unclaimed-link').show();
	}
}