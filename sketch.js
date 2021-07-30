const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300
score=0
var gameState = "PLAY";


function setup()
 {
  createCanvas(800,800)
  engine = Engine.create();
  world = engine.world;
  

  ground=new Ground (0, 800, 1600, 20);
   for(var k=0;k<=width;k=k+80)
   {
     divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
   }

   for(var j=40;j<=width;j=j+60){

    plinkos.push(new Plinkos(j,75,10));
   }
   for(var j=15;j<=width;j=j+60){

    plinkos.push(new Plinkos(j,175,10));
   } 
   for(var j=5;j<=width;j=j+60){

    plinkos.push(new Plinkos(j,275,10));
   }
   for(var j=5;j<=width;j=j+60){

    plinkos.push(new Plinkos(j,375,10));
   }
   
  
 
}

function draw() 
{
  background(0,0,0); 
  Engine.update(engine)
  textSize(35)
  text("Score : "+score,20,40);
  fill("red");
  
  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);
  
  ground.display();
  
   
    
 
  for(var m=0;m<plinkos.length;m++)
  {
    plinkos[m].display();
  }
  
   if(frameCount%60===0)
   {
    particles.push(new Particles(random(width/2-10,width/2+10),8,8))

   }
   for(var j=0;j<particles.length;j++)
   {
     particles[j].display();
     
   }
   for(var k=0;k<divisions.length;k++)
   {
     divisions[k].display();
   }
  
   
   
   if ( gameState =="END") {
    background("black");
    fill("red");
    textSize(100);
    text("Game Over", 200, 400);
   
  } 
 
        
    
    

   
  
  drawSprites();
}