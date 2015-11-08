$(document).ready(function() {

	console.log("JS is loaded!");



	$('body').keydown(function(key) { //using keys m(keycode: 77) for player 1 to move and z(keycode: 90) for player 2

		switch (parseInt(key.which)) {

			case 77:

				$('#player1').animate({
					left: "+=10px"
				}, 'fast');
				break;
			case 90:
				$('#player2').animate({
					left: "+=10px"
				}, 'fast')
	;			break;
			default:
				break;
		}
	});



	//var playerCar = function() {  //function for player choosing car...cannot choose more than once..


	//player1 can choose which car
	$('#btn').click(function() {
		$('#player1').append('<img src="http://icones.gratuites.web.free.fr/data/Classic%20Car%20Icons/Classic%20Car.ico">');

	});

	$('#btn2').click(function() {
		$('#player1').append('<img src="http://icones.gratuites.web.free.fr/data/Classic%20Car%20Icons/Minicar.ico">');

	});

	$('#btn3').click(function() {
		$('#player1').append('<img src="http://3.bp.blogspot.com/-wQ976e-5-RM/Ugg_rPAT1mI/AAAAAAAAPm0/NENeQDI9cA0/s1600/usain-bolt.png" height= 220 width= 150>');
	});

	//still need to write code for player 2... this is very unDRY!!


	//div collision to determine winner?



});