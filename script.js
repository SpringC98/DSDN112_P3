var element = document.getElementById(elem);

element.addEventListener('wheel', rotateSelection, false);

function rotateSelection(element){
    if(element.deltaY < 0){
        element.style.transform = "rotate(45deg)";
    }
    if(element.deltaY > 0){
      element.style.transform = "rotate(-45deg)";
    }
}
