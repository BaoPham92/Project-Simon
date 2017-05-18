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
	var answer = [];
	var tempAnswer = [];

//This randomize the divs with any of the listed classes.
 function reset(){
	$(document).ready(function(){
		var classes = ["chestBlue", "chestGreen", "chestOrange"];

		$(".divChestContainer div").removeClass("chestBlue chestGreen chestOrange")

		$(".divChestContainer div").each(function(){
			$(this).addClass(classes[Math.floor(Math.random() * classes.length)]);
			 answer.push($(this).attr('class'))
		});
	});
}
reset();

//  function reset1(){
// 	$(document).ready(function(){
// 		var classes = ["chestBlue1", "chestGreen1", "chestOrange1"];

// 		$(".divChestContainer1 div").removeClass("chestBlue1 chestGreen1 chestOrange1")

// 		$(".divChestContainer1 div").each(function(){
// 			$(this).addClass(classes[Math.floor(Math.random() * classes.length)]);
// 			answerwer.push($(this).attr('class'))
// 		});
// 	});
// }
// reset1();

	function comparison() {
	    if (tempAnswer.length !== answer.length) {

	    	console.log("False");
	        return false;
	    } 
	    for (var i = tempAnswer.length; i >= 0;i--) {
	        if(tempAnswer[i] !== answer[i]) {
	        	console.log("not match")
				return false;
	        }
	    }
	    console.log("true");
	   return true;
	}

	$("#blueButton").on("click", function(){
		tempAnswer.push($(".divChestContainer div[class='chestBlue']").attr('class'))
		console.log(tempAnswer);
	if ( comparison() ){
		alert("You win!");
	// chestBlue[fps] += 7;
	// chestGreen[fps] += 7;
	// chestOrange[fps] += 7;
	};
			
	});

				$("#greenButton").on("click", function(){
			tempAnswer.push($(".divChestContainer div[class='chestGreen']").attr('class'))
			console.log(tempAnswer);
			comparison();
		});

					$("#orangeButton").on("click", function(){
				tempAnswer.push($(".divChestContainer div[class='chestOrange']").attr('class'))
				console.log(tempAnswer);
				comparison();	
			});
		
	
