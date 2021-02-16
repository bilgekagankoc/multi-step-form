function myFunction(elem) {
    if (elem.textContent == "Next") {
        next(elem.parentElement.parentElement);
    }
    else {
        back(elem.parentElement.parentElement);
    }
}


function next(id) {
    var currentWidth = id.parentElement.children[0].style.width.split("%")[0];
    id.parentElement.children[0].style.width = parseInt(currentWidth) + 33 + "%";
    id.style.left = "450px";
    id.nextElementSibling.style.left = "0px";
}

function back(id) {
    var currentWidth = id.parentElement.children[0].style.width.split("%")[0];
    id.parentElement.children[0].style.width = parseInt(currentWidth) - 33 + "%";
    id.style.left = "-450px";
    id.previousElementSibling.style.left = "0px";
}
