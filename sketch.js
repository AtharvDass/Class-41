const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var maxDrops=100
var drops=[];

function preload(){
  thunder=loadImage('unnamed.jpg')
}
function setup(){
  createCanvas(400,700)   
  engine=Engine.create();
  world=engine.world;
  for(var i=0;i<maxDrops;i++){
    drops.push(new Drop(random(0,400),random(0,700)))
  }
  umbrella=new Umbrella();
  
}

function draw(){
  background('black')
  Engine.update(engine);
  if(frameCount%200===0){
    imageMode(CENTER)
    var hi=image(thunder,200,50,100,100);
    
  }
  for(var i=0;i<drops.length;i++){
    drops[i].display();
  }
  for(var i=0;i<drops.length;i++){
    drops[i].update();
  }
  umbrella.display();
}   

