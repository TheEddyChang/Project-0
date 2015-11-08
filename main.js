$(document).ready(function(){

	console.log("JS is loaded!");



	$(window).keypress(function(event){
        if(event.which == "77")
            $(".racetrack").animate({"left" : "-=30px"});

        if(event.which == "90")
            $(".racetrack").animate({"left" : "+=30px"});
		

});



















});