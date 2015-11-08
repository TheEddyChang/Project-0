$(document).ready(function(){

	console.log("JS is loaded!");



	$('body').keydown(function(key){   //using keys m(keycode: 77) for player 1 to move and z(keycode: 90) for player 2

	switch (parseInt(key.which)) {
           
           case 77:

               $('#player1').animate({
                   left: "+=10px"
               }, 'fast');
               break;
                case 90:
               $('#player2').animate({
                   left: "+=10px"
               }, 'fast');
               break;
           default:
               break;
       }
   });

    var playerCar = function() {  //function for player choosing car...cannot choose more than once..


    //player can choose which car
	$('#btn').click(function() {
		$('#player1').append('<img src="http://icones.gratuites.web.free.fr/data/Classic%20Car%20Icons/Classic%20Car.ico">');

	});

	$('#btn2').click(function() {
		$('#player1').append('<img src="http://icones.gratuites.web.free.fr/data/Classic%20Car%20Icons/Minicar.ico">');

	});

	



   

  


















});