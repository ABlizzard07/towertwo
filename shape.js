class Shape{
  constructor(x,y,diameter){
      var options = {
          isStatic: true,
          restitution: 1,
          friction: 0,
          density: 0.9,
      }
      this.body = Bodies.circle(x,y,diameter/2,options);
      this.diameter = diameter;

      this.image = loadImage("./hexagon.png");

      World.add(world,this.body);
      World.add(world,this.image);
  }
  display(){
      push();
      var pos = this.body.position;
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      imageMode(CENTER);
      image(this.image,0,0,50,50);
      pop();
      console.log(this.body);
  }
}
