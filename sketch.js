var img;
var img2;
var shooting;
var bullets = [];

function preload(){
  img = loadImage('Breen.jpg');
  img2 = loadImage('player.jpg');

}

function setup() {
  createCanvas(600, 600);
  player = new Player();
  enemy = new Enemy(width/2, 200);
}

function draw() {
  background(img);

  player.show();

  player.move();

  if (shooting === true){
    for (var i = 0; i < bullets.length; i++){
      bullets[i].update();
      bullets[i].show();
    }
  }

  enemy.show();

if (shooting){
  for (var i = 0; i < bullets.length; i++){
      enemy.collide(bullets[i].x, bullets[i].y)
    }
  }

}

function keyPressed(){
  if (keyCode == SHIFT){
    var b = new Bullet(player.x, player.y);
    bullets.push(b);
    shooting = true;
  }
}
