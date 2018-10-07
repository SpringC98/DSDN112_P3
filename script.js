function setCog(cogId){
	var rotation = 0;

	var cog = document.getElementById(cogId);
	rotateMemes(cog)

	// On wheel, run our function. Pass the cog + the event
	cog.addEventListener("wheel", function(evt){
		// DeltaY provides how much the user has scrolled (1 wheel = 100 units)
		// Divide by 10 because 100 is too much
		rotation = (rotation + evt.deltaY / 10);
		cog.style.transform = "rotate(" + rotation + "deg)";
	}, false);
}

// Rotates elements inside cog evenly depending on how many there is
function rotateMemes(cog) {
	var num_memes = cog.children.length;
	for (var i = 0; i < num_memes; i++) {
		var meme = cog.children[i];
		meme.style.transform = "rotate(" + (i * 360 / num_memes) + "deg)";
	}
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
