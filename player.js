function Player(){
  this.x = 275;
  this.y = 500;
  this.scl = 60;
  this.speed = this.scl/5;
  this.image = img2;




  this.show = function(){
    image(img2,this.x,this.y,this.scl,this.scl);
  }


  this.move = function(){
    if (keyIsDown(UP_ARROW)){
      this.y-=this.speed;
    }else if (keyIsDown(DOWN_ARROW)){
      this.y+=this.speed;
    }else if (keyIsDown(LEFT_ARROW)){
      this.x-=this.speed;
    }else if (keyIsDown(RIGHT_ARROW)){
      this.x+=this.speed;
    }
    this.x = constrain(this.x, 0, width - this.scl);
    this.y = constrain(this.y, 0, height - this.scl);

  }



}
