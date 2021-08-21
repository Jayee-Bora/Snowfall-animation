const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
  var snow= [];
  var world, engine
  var img1;

function preload(){
  img1= loadImage("snow1.jpg");
}
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(img1); 
  Engine.update(engine);
  drawSprites();

  if(frameCount%70===0){
    snow.push(new Snow(random(0,800),0));
   
   }

   for(var S=0; S< snow.length; S++){
    snow[S].display();
  }
}