// Keep a permanent record of how many degrees we have rotated
var rotation = 0;

// Why this? Well you're not guaranteed the "cog" element exists until the page is finished loading the DOM
document.addEventListener("DOMContentLoaded", function() {
	// Get the cog once, not every time we rotate
	var element = document.getElementById("cog");

	// On wheel, run our function. Pass the element + the event
	element.addEventListener("wheel", function(evt) { rotateSelection(element, evt); }, false);
});

function rotateSelection(element, evt) {
	// DeltaY provides how much the user has scrolled (1 wheel = 100 units)
	// Divide by 10 because 100 is too much
	rotation = (rotation + evt.deltaY / 10);
	element.style.transform = "rotate(" + rotation + "deg)";
}
