$(document).ready(function() {

	console.log("JS is loaded!");

    
        var counter1 = 0; //setting counter to determine a winner. will increase as keys
        var counter2 = 0;

	$(window).keydown(function(key) { //using keys m(keycode: 77) for player 1 to move and z(keycode: 90) for player 2

		

		switch (parseInt(key.which)) {

			case 77:

				$('#player1').animate({
					left: "+=25px"
				}, 'fast');
				counter1 ++;
				console.log(counter1);
				break;
			case 90:
				$('#player2').animate({
					left: "+=25px"
				}, 'fast');
				counter2 ++;
				console.log(counter2);
				break;
			default:
				break;
		}


	     if (counter1 === 37) {        //IF STATEMENT TO DECLARE A WINNER..need more work on stopping the game when winner is reached
			$("#racetrack").append("PLAYER ONE WINS!!!");
			console.log("winner");
		}
			else if(counter2 === 37) {
				$("#racetrack").append("PLAYER TWO WINS!!!");
				console.log("winner");
			}
			   
});








	//var playerCar = function() {  //function for player choosing car...cannot choose more than once..


	//player1 can choose which AVATARS
	
/*
	    $("#btn1").on("click", function() {
		$("#player1").append('<img src="http://icones.gratuites.web.free.fr/data/Classic%20Car%20Icons/Classic%20Car.ico">');
        
        });
        $("#btn2").on("click", function() {
        $("#player1").append('<img src="http://icones.gratuites.web.free.fr/data/Classic%20Car%20Icons/Minicar.ico">');
       
        });

        $('#btn3').bind("click", function() {
        	$('#player1').append('<img src="http://3.bp.blogspot.com/-wQ976e-5-RM/Ugg_rPAT1mI/AAAAAAAAPm0/NENeQDI9cA0/s1600/usa$(in-bolt.png" height= 220 width= 150>');
        });

*/




        
  
    



});