$(document).ready(function(){
	// Codes here
	$('input[type=text]').focus(function(){
		// $(this).addClass('high');
		$(this).css('background-color','#386FAE');
		$(this).css('color','white');
		$(this).css('font-weight','bolder');
	}).blur(function(){
		// $(this).removeClass('high');
		$(this).css('background-color','');
		$(this).css('color','');
		$(this).css('font-weight','');
	});

	$('#email').focus(function(){
		// $(this).addClass('high');
		$(this).css('background-color','#386FAE');
		$(this).css('color','white');
		$(this).css('font-weight','bolder');
	}).blur(function(){
		// $(this).removeClass('high');
		$(this).css('background-color','');
		$(this).css('color','');
		$(this).css('font-weight','');
	});

	$('#message').focus(function(){
		// $(this).addClass('high');
		$(this).css('background-color','#386FAE');
		$(this).css('color','white');
		$(this).css('font-weight','bolder');
	}).blur(function(){
		// $(this).removeClass('high');
		$(this).css('background-color','');
		$(this).css('color','');
		$(this).css('font-weight','');
	});
});