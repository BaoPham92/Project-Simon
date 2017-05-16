	// var context = document.getElementById('ctxCanvas').getContext('2d');
	// var sprite1 = new Image();

	// function drawPattern(){
	// 	context.fillStyle = context.createPattern(sprite1, "repeat");
	// 	context.fillRect(0,0,1667,967);
	// }
	// sprite1.src = "Sprites/Water Block.png";
	// sprite1.onload = drawPattern;

	//Variable storage for text.
	var buttonText;
	var tempText;
	//Chest text container.

	var chestText = ["Blue", "Green", "Orange"];

	//Random generator.
	var randomGenerator = function(){
	 var temp = Math.floor((Math.random() * 3) + 1);

	 document.getElementBy("1").addEventListener() = temp;
	}
	$(".divButtons").on("click", function(){
		tempText = $(this).text()

		for (var index in chestText){
			if (temp === index) {
				console.log("You win!")
			}
		}

	});
//Use array "sort" method for randomizing chest.