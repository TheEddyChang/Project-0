$(document).ready(function(){

	console.log("JS is loaded!");



	$('body').keydown(function(key){

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
  


















});