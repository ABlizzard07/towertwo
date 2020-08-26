const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(1250,700);

  engine = Engine.create();
  world = engine.world;
  
  bottom = createSprite(625,700,1250,30);
  bottom.shapeColor = "white";

  ground = new Ground(700,650,324,20);
  ground2 = new Ground(1100,550,252,20);

  block = new Block(700,615,36,50);
  block2 = new Block(736,615,36,50);
  block3 = new Block(772,615,36,50);
  block4 = new Block(808,615,36,50);
  block5 = new Block(664,615,36,50);
  block6 = new Block(628,615,36,50);
  block7 = new Block(592,615,36,50);
  
  block8 = new Block(700,565,36,50);
  block9 = new Block(736,565,36,50);
  block10 = new Block(772,565,36,50);
  block11 = new Block(664,565,36,50);
  block12 = new Block(628,565,36,50);
  block13 = new Block(700,515,36,50);
  block14 = new Block(736,515,36,50);
  block15 = new Block(664,515,36,50);
  block16 = new Block(700,465,36,50);

  block17 = new Block(1100,515,36,50);
  block18 = new Block(1136,515,36,50);
  block19 = new Block(1172,515,36,50);
  block20 = new Block(1064,515,36,50);
  block21 = new Block(1028,515,36,50);
  block22 = new Block(1100,465,36,50);
  block23 = new Block(1136,465,36,50);
  block24 = new Block(1064,465,36,50);
  block25 = new Block(1100,415,36,50);

  shape = new Shape(250,200,50);

  chain = new Chain(shape.body,{x:150,y:200});

  Engine.run(engine);
}

function draw() {
  background("white");  
  console.error("wrongcolor");
  console.warn("notrightcolor");
  console.info("choosecolor");
  console.count();
  console.time();
  console.timeEnd();

  textSize(20);
  text("Press space to play again!",1000,60);

  ground.display();
  ground2.display();

  block.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();

  shape.display();
  chain.display();

  fill("red");
  ellipse(150,200,50);

  if(shape.body.position.y > 650){
    bottom.shapeColor = "red";
  }

  detectCollision(shape,block);
  detectCollision(shape,block2);
  detectCollision(shape,block3);
  detectCollision(shape,block4);
  detectCollision(shape,block5);
  detectCollision(shape,block6);
  detectCollision(shape,block7);
  detectCollision(shape,block8);
  detectCollision(shape,block9);
  detectCollision(shape,block10);
  detectCollision(shape,block11);
  detectCollision(shape,block12);
  detectCollision(shape,block13);
  detectCollision(shape,block14);
  detectCollision(shape,block15);
  detectCollision(shape,block16);
  detectCollision(shape,block17);
  detectCollision(shape,block18);
  detectCollision(shape,block19);
  detectCollision(shape,block20);
  detectCollision(shape,block21);
  detectCollision(shape,block22);
  detectCollision(shape,block23);
  detectCollision(shape,block24);
  detectCollision(shape,block25);

  drawSprites();
}

function mouseDragged(){
  Body.setPosition(shape.body, {x: mouseX , y: mouseY});
  if(shape.body.position.y > 300){
    chain.attach(shape.body);
    Body.setPosition(shape.body, {x: 250, y: 200});
  }
}

function mouseReleased(){
  Matter.Body.setStatic(shape.body,false);
  chain.fly();
}

function detectCollision(lshape,lblock){
	blockBodyPosition = lblock.body.position;
	shapeBodyPosition = lshape.body.position;

	var distance = dist(shapeBodyPosition.x,shapeBodyPosition.y,blockBodyPosition.x,blockBodyPosition.y);
    if(distance <= 100){
	   Matter.Body.setStatic(lblock.body,false);
	}
}

function keyPressed(){
  if(keyCode === 32){
    chain.attach(shape.body);
    Body.setStatic(shape.body,true);
    Body.setPosition(shape.body, {x: 250 , y: 200});
  }
}