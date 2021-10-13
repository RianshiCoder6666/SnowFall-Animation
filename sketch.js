const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

var snowBg, boyImg1, boyImg2, boy, edges;
var snow = [];

function preload() {
snowBg = loadImage("images/snowFall.jpg");
boyImg1 = loadAnimation("images/boy1.png","images/boy2.png","images/boy3.png","images/boy4.png","images/boy5.png");
boyImg2 = loadAnimation("images/boy1.2.png","images/boy2.2.png","images/boy3.2.png","images/boy4.2.png","images/boy5.2.png");
}


function setup() {
  createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  boy = createSprite(100,350);
  boy.addAnimation("boyPlaying1",boyImg1);
  boy.frameDelay = 15;

  edges = createEdgeSprites();
}

function draw() {
  background(snowBg); 
  Engine.update(engine);

  if(frameCount % 7 === 0){
    snow.push(new Snow(random(0,1000),0));
  }
 
  for(var s = 0; s < snow.length; s++){
    snow[s].display();
  }

  boy.bounceOff(edges);

  drawSprites();
  fill("black");
  textSize(20);
  text("Press the left and right arrow keys to move the boy",50,30);
}

function keyPressed() {

  if(keyCode === LEFT_ARROW) {
    boy.x = boy.x-20;
    boy.addAnimation("boyPlaying2",boyImg2);
    boy.changeAnimation("boyPlaying2");
    boy.frameDelay = 15;
  } else  if(keyCode === RIGHT_ARROW) {
    boy.x = boy.x+20;
    boy.addAnimation("boyPlaying1",boyImg1);
    boy.changeAnimation("boyPlaying1");
    boy.frameDelay = 15;
    }

}
