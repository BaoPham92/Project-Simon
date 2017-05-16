// setInterval(update, 50);

//Animations.

// var chestList = {};

var element = document.querySelector('.chestBlue');
var chestBlue = new Motio(element, {
  fps: 4,
  frames: 7
});

chestBlue.toEnd();

var element = document.querySelector('.chestGreen');
var chestGreen = new Motio(element, {
  fps: 4,
  frames: 7
});

chestGreen.toEnd();

var element = document.querySelector('.chestOrange');
var chestOrange = new Motio(element, {
  fps: 4,
  frames: 7
});

chestOrange.toEnd();


// function updateEntity(anyChest){
//   anyChest.play();
// }

// function update(){
// for(var key in chestList)
//   updateEntity(chestList[key])

// }