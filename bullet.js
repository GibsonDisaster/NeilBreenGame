function Bullet(x, y){
  this.x = x;
  this.y = y;

  this.show = function(){
    rect(this.x, this.y, 20, 20);
  }

  this.update = function(){
    this.y-=.2;
  }
}
