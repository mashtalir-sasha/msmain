$(function() {

	// Инит фансибокса
	$('.fancybox, .modal').fancybox({
		margin: 0,
		padding: 0,
		touch: false
	});

	if (screen.width > 574) {
		$('.main-list__item').matchHeight();
	}

	document.getElementById('mov').play();

});
