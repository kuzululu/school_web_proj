$(document).ready(function(){
	$('#load_page').load($('.menu_page:first').attr('href'));

	$('.menu_page').click(function(){
		var href = $(this).attr('href');

		$('#load_page').hide().load(href).fadeIn('slow');
		return false;
	});
});