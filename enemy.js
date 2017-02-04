function Enemy(x, y){
  this.x = x;
  this.y = y;
  this.scl = 30;
  this.color = [243,22,22];



  this.show = function(){
    noStroke();
    fill(this.color);
    rect(this.x, this.y, this.scl, this.scl);
  }


  this.collide = function(){
    d = dist(this.x, this.y, x, y);
    if (d < 1){
      this.color = 24;
    }
  }

}
