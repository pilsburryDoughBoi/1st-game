var score = 0;
var lives = 3;
var player = createSprite(200, 240);
player.setAnimation("");
player.scale = 0.4;
player.setCollider("circle");
player.debug = true;
player.setCollider("rectangle", 0, 0, 50, 50);

function draw() {
  // draw background
background("white");
}
function showLives() {
  textSize(20);
text("lives", 280, 5, 20, 20);
text(lives, 340, 5, 20, 20);
}
function movePlayer(){
if (keyDown("UP_ARROW")) {
    player.y=  player.y - 5;
    player.setAnimation("float parappa.PNG_1");
  }
if (keyDown("DOWN_ARROW")) {
      player.y=  player.y + 5; 
     player.setAnimation("float parappa.PNG_1");
    }
if (keyDown("RIGHT_ARROW")) {
      player.x= player.x + 5;
      player.setAnimation("right float parappa.PNG_1_copy_1");
    }
if (keyDown("LEFT_ARROW")) {
      player.x= player.x - 5; 
      player.setAnimation("left float parappa.PNG_1");
    }
}
// game over
function end() {
  if (lives == 0) {}
}
function Point() {
  if (music.isTouching(player)) {
    score = score + 1;
  }
}


