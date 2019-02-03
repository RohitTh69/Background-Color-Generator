
//Declaration and Initialisation.
var gradient = document.querySelector("h4");
var colorOne = document.querySelector(".color1");
var colorTwo = document.querySelector(".color2");
var body = document.getElementById("generate");

// Change Body Color.
function changeGradient() {
	body.style.background = "linear-gradient(to right, " + colorOne.value + ", " + colorTwo.value + ")";
	gradient.textContent = body.style.background + ";";
}


colorOne.addEventListener("input", changeGradient);

colorTwo.addEventListener("input", changeGradient);
