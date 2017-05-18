// setInterval(update, 70);

//Animations.

// var classes = [".chestBlue", ".chestGreen", ".chestOrange", ".chestSelector"]

var element = document.querySelector('.chestBlue');
var chestBlue = new Motio(element, {
  fps: 7,
  frames: 7
});
chestBlue.toEnd();

var element = document.querySelector('.chestGreen');
var chestGreen = new Motio(element, {
  fps: 7,
  frames: 7
});
chestGreen.toEnd();

var element = document.querySelector('.chestOrange');
var chestOrange = new Motio(element, {
  fps: 7,
  frames: 7
});
chestOrange.toEnd();

// var element = document.querySelector('.chestBlue1');
// var chestBlue = new Motio(element, {
//   fps: 7,
//   frames: 7
// });
// chestBlue.toEnd();

// var element = document.querySelector('.chestGreen1');
// var chestGreen = new Motio(element, {
//   fps: 7,
//   frames: 7
// });
// chestGreen.toEnd();

// var element = document.querySelector('.chestOrange1');
// var chestOrange = new Motio(element, {
//   fps: 7,
//   frames: 7
// });
// chestOrange.toEnd();

// var element = document.querySelector('.chestSelector');
// var chestSelector = new Motio(element, {
//   fps: 15,
//   frames: 7
// });
// chestSelector.toEnd();
// function updateEntity(anyChest){
//   anyChest.toEnd();
// }

// function update(){
// for(var key in chestList)
//   updateEntity(chestList[key])

// }