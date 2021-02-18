// 1. Write code so that the colour inputs match the background generated on the first page load. 

// 2. Display the initial CSS linear gradient property on page load.

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.

// You may also see different behaviours with the Color widget based on what browser you use. Remember, all browsers are implemented differently. Good luck!



var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);