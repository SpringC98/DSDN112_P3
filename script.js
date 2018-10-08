function setCog(cogId){
	var rotation = 0;
	var numberOfEmotes = 0;
	var emote;

	var cog = document.getElementById(cogId);

	rotateMemes(cog);

	// On wheel, run our function.
	cog.addEventListener("wheel", function(evt){
		// DeltaY provides how much the user has scrolled (1 wheel = 100 units)
		// Divide by 10 because 100 is too much
		rotation = (rotation + evt.deltaY / 10);
		emote = cog.children[rotationCheck(cog, rotation, numberOfEmotes)];
		cog.style.transform = "rotate(" + rotation + "deg)";
	}, false);
}

// Rotates elements inside cog evenly depending on how many there is
function rotateMemes(cog){
	var num_memes = cog.children.length;
	for (var i = 0; i < num_memes; i++) {
		var meme = cog.children[i];
		meme.style.transform = "rotate(" + (i * 360 / num_memes) + "deg)";
	}
}

function rotationCheck(cog, rotation, counter){
	var cogAngle = Math.round(((rotation)%360)/cog.children.length);
	cogAngle = cogAngle%10;

	if(cogAngle==0){
		counter++;
		if(counter>(cog.children.length-1)){
			counter=0;
		}
		return counter;
	}
	return counter;
}

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function(){
	var cog1 = setCog("cog_left");
	var cog2 = setCog("cog_right");
});
