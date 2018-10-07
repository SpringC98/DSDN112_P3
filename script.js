var rotation = 0;

document.addEventListener("DOMContentLoaded", function(){
	var element = document.getElementById("cog");

	// On wheel, run our function. Pass the element + the event
	element.addEventListener("wheel", function(evt){ rotateSelection(element, evt); }, false);
});

function rotateSelection(element, evt){
	// DeltaY provides how much the user has scrolled (1 wheel = 100 units)
	// Divide by 10 because 100 is too much
	rotation = (rotation + evt.deltaY / 10);
	element.style.transform = "rotate(" + rotation + "deg)";
}

function rotatePosition(){

}

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}
