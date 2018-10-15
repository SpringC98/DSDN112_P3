function setCog(cogId){
	var cog = document.getElementById(cogId);

	rotateMemes(cog);

	// On wheel, run our function.
	cog.addEventListener("wheel", function(evt){
		// DeltaY provides how much the user has scrolled (1 wheel = 100 units)
		// Divide by 10 because 100 is too much
		var rotation = ((+cog.getAttribute("data-rotation")) + evt.deltaY / 10);
		cog.setAttribute("data-rotation", '' + rotation);
		cog.style.transform = "rotate(" + rotation + "deg)";
	}, false);

	return cog;
}

// Rotates elements inside cog evenly depending on how many there is
function rotateMemes(cog){
	var num_memes = cog.children.length;
	for (var i = 0; i < num_memes; i++) {
		var meme = cog.children[i];
		meme.style.transform = "rotate(" + (i * 360 / num_memes) + "deg)";
	}
}

function getEmote(cog) {
	var rotation = +cog.getAttribute("data-rotation");
	var pos = Math.round((Math.abs(rotation)%360) / (360 / cog.children.length));
	var index = 0;
	// Press F to figure this out
	if (pos == 0 || pos == 6) {
		// Fffffffffffffffffff
		index = 0;
	} else if (rotation < 0 && pos > 0) {
		index = pos;
	} else {
		index = cog.children.length - pos;
	}

	return cog.children[index].firstElementChild.attributes["data-emote"].value;
}

function checkEmotes(cogs){
	// Map -> Takes items in a list and applies a function to them.
	// The return value becomes the new value in the list
	// Set -> List of unique items
	// So, if all the emotes are the same the length of this set will be 1
	// Oh yeah and length of Set != length, it's size. MonkaS
	var same = (new Set(cogs.map(getEmote))).size == 1

	if (same) {
		alert("You're correct! PogChamp");
	} else {
		alert("You're WRONG! MonkaS");
	}
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

	document.getElementById("emote_check").onclick = function() {
		checkEmotes([cog1, cog2]);
	}
});
