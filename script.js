// WARNING NONE OF THIS WORKS BECAUSE I'M A N00B

var Disks = {};

function setCog(cogId){
	var rotation = 0;

	var cog = document.getElementById(cogId);

	// On wheel, run our function. Pass the cog + the event
	cog.addEventListener("wheel", function(evt){
		// DeltaY provides how much the user has scrolled (1 wheel = 100 units)
		// Divide by 10 because 100 is too much
		rotation = (rotation + evt.deltaY / 10);
		cog.style.transform = "rotate(" + rotation + "deg)";
	}, false);
}

function rotatePosition(){

}

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function(){
	setCog("cog_left");
	setCog("cog_right");
});
