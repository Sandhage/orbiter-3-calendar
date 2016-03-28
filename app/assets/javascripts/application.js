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

$(document).ready(function(){
    dropNav();
    fadeMobNav();
    hoverOverClaimed();
});

function dropNav() {
  	$('.dropdown').hover(function() {
		$(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown(90);
	}, function() {
		$(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp(90);
	});  
}

function fadeMobNav() {
	$('.mob-nav').click(function() {
		event.preventDefault();
		if ( $(this).hasClass('.active') ) {
			$('.hidden-nav').hide();
			$('#orb-3-logo').show();
			$('main').show();
			$(this).removeClass('.active');
		} else {
			$(this).addClass('.active');
			$('#orb-3-logo').hide()
			$('main').hide();
			$('.hidden-nav').fadeIn(45);
		}
	});
}

function addClaimedClass() {
	$('.claimed-trigger').parent().addClass('claimed');
}

function hoverOverClaimed() {
	$('.claimed').on({
		mouseenter: function() {
			$(this).children().hide();
		}, mouseleave: function() {
			$(this).children().show();
		}
	});
}
