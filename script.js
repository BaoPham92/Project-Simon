	// var context = document.getElementById('ctxCanvas').getContext('2d');
	// var sprite1 = new Image();

	// function drawPattern(){
	// 	context.fillStyle = context.createPattern(sprite1, "repeat");
	// 	context.fillRect(0,0,1667,967);
	// }
	// sprite1.src = "Sprites/Water Block.png";
	// sprite1.onload = drawPattern;

	//Variable storage for text.
	// var buttonText;
	// var tempText;

//This randomize the divs with any of the listed classes.
 function reset(){
	$(document).ready(function(){
		var classes = ["chestBlue", "chestGreen", "chestOrange"];

		$(".divChestContainer div").each(function(){
			$(this).addClass(classes[Math.floor(Math.random() * classes.length)]);
		});
	});
}
reset();

//Working on a click/compare buttom function below.
	// $(".divButtons").on("click", function(){
	// 	tempText = $(this).text()

	// 	for (var index in chestText){
	// 		if (temp === index) {
	// 			console.log("You win!")
	// 		}
	// 	}

	// });
