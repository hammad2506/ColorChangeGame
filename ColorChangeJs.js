var levelChoice = 6;
var colors = generateRandomColors(levelChoice);

var assignColor = document.querySelectorAll(".square");
var pickedColor = pickColor();
var easyButn = document.getElementById("easy");
var hardButn = document.getElementById("hard");
document.getElementById("rgb").textContent = pickedColor;
var message = document.getElementById("message");
assignColorToSquare();
var resetButton = document.getElementById("reset");
var h1 = document.getElementById("heading");

easyButn.addEventListener("click", function(){
	levelChoice =3;
	colors = generateRandomColors(levelChoice)
	pickedColor = pickColor();
	assignColorToSquare();
	h1.style.background= "#232323";
	message.textContent= "";
	resetButton.textContent= "New Colors";
	easyButn.classList.add("selected");
	hardButn.classList.remove("selected");

});

hardButn.addEventListener("click", function(){
	levelChoice= 6;
	colors = generateRandomColors(levelChoice)
	pickedColor = pickColor();
	assignColorToSquare();
	h1.style.background= "#232323";
	message.textContent= "";
	resetButton.textContent= "New Colors";
	easyButn.classList.remove("selected");
	hardButn.classList.add("selected");


});

resetButton.addEventListener("click", function(){

	colors = generateRandomColors(levelChoice);
	pickedColor = pickColor();
	document.getElementById("rgb").textContent = pickedColor;
	assignColorToSquare();
	h1.style.background= "#232323";
	message.textContent= "";
	resetButton.textContent= "New Colors";
});

function generateRandomColors(num){
	var color = [];
	for(var i=0; i<num; i++){
		color.push(randomColors());
	}
	return color;
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function setColortoWin(pickedColor){

	for(var i=0; i<colors.length; i++){
		assignColor[i].style.background = pickedColor;
		h1.style.background= pickedColor;
	}

}

function randomColors(){

	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	var rgb = "rgb("+r+", "+g+", "+b+")"; 

	return rgb;
}



function assignColorToSquare(){

	for(var i=0; i<assignColor.length; i++){
		
		if(colors[i]){
		assignColor[i].style.display= "block";	
		assignColor[i].style.background=colors[i];
		} else{
			assignColor[i].style.display= "none";
		}

		assignColor[i].addEventListener("click", function() {

		if (this.style.background === pickedColor){
			setColortoWin(pickedColor);
			message.textContent= "Correct!";
			resetButton.textContent= "Play Again?"
		}

		else{
			this.style.background= "#232323";
			message.textContent= "Try Again!";
		}

	});
	}

}	