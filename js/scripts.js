$(document).ready(function() {

// costume changes
	$('#main').click(function() {
		$('.costume').remove();
	});

	$('#retro').click(function() {
		$('.costume').remove();
		$('<link id="css-retro" class="costume" rel="stylesheet" href="css/retro.css">').insertAfter($('#css-main'));
	});

}); // end document ready