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

var mayDonations       = new monthlyDonation("May",       "", 0);
	juneDonations      = new monthlyDonation("June",      "", 0);
	julyDonations      = new monthlyDonation("July",      "", 0);
	augustDonations    = new monthlyDonation("August",    "", 0);
	septemberDonations = new monthlyDonation("September", "", 0);
	octoberDonations   = new monthlyDonation("October",   "", 0);
	novemberDonations  = new monthlyDonation("November",  "", 0);
	decemberDontaions  = new monthlyDonation("December",  "", 0);
	januaryDonations   = new monthlyDonation("January",   "", 0);
	februaryDonations  = new monthlyDonation("February",  "", 0);
	marchDonations     = new monthlyDonation("March",     "", 0);
	aprilDonations     = new monthlyDonation("April",     "", 0);


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
	$('.unclaimed-trigger').parent().addClass('unclaimed');
}

function clickClaimed() {
	$('.claimed').on({
		click: function() {
			if ( $(this).hasClass('shown') ) {
				$(this).children('.claimed-info').hide();
				$(this).removeClass('shown');
			} else {
				$('.shown > .claimed-info').hide();
				$('.claimed').removeClass('shown');
				$(this).addClass('shown');
				$(this).children('.claimed-info').show();
				console.log("Clicked.");
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
	
	console.log("currentMonth: " + currentMonth);
	console.log("April? " + aprilCheck );
	
}

function monthlyDonation(month, matchDonor, total) {
  this.month      = month;
  this.matchDonor = matchDonor;
  this.total      = total;
}

function blockApril() {
	if ( aprilCheck ) {
		$('.unclaimed-link').hide();
	} else {
		$('.unclaimed-link').show();
	}
}