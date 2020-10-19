class Box {
    constructor(x, y, width, height) {
      


      this.body = Bodies.rectangle(x, y, width, height,{isStatic:true});
      this.width = width;
      this.height = height;
      
      World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      
      rectMode(CENTER);
      fill("RED");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };