 const Engine = Matter.Engine;
 const World = Matter.World;
 const Events = Matter.Events;
 const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];

var ground,world,engine;

var chance=0
var gameState,particlen;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  gameState="play";

  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
      plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);

  ground.display();

  if(particlen!==null){
      // particlen.display(); 

       if(particlen.body.position.y>760){

        if(particlen.body.position.x<80){
          score=score+100;
          particlen=null;
          if(chance>=5){
            gameState="end";
          }
        }

        if(particlen.body.position.x>80 && particlen.body.position.x<160){
          score=score+100;
          particlen=null;
          if(chance>=5){
            gameState="end";
          }
        }

        if(particlen.body.position.x>160 && particlen.body.position.x<240){
          score=score+100;
          particlen=null;
          if(chance>=5){
            gameState="end";
          }
        }

        if(particlen.body.position.x>240 && particlen.body.position.x<320){
          score=score+100;
          particlen=null;
          if(chance>=5){
            gameState="end";
          }
        }

        if(particlen.body.position.x>320 && particlen.body.position.x<400){
          score=score+100;
          particlen=null;
          if(chance>=5){
            gameState="end";
          }
        }

        if(particlen.body.position.x>400 && particlen.body.position.x<480){
          score=score+100;
          particlen=null;
          if(chance>=5){
            gameState="end";
          }
        }

        if(particlen.body.position.x>480 && particlen.body.position.x<560){
          score=score+100;
          particlen=null;
          if(chance>=5){
            gameState="end";
          }
        }

        if(particlen.body.position.x>560 && particlen.body.position.x<640){
          score=score+100;
          particlen=null;
          if(chance>=5){
            gameState="end";
          }
        }

        if(particlen.body.position.x>640 && particlen.body.position.x<720){
          score=score+100;
          particlen=null;
          if(chance>=5){
            gameState="end";
          }
        }

        if(particlen.body.position.x>720 && particlen.body.position.x<800){
          score=score+100;
          particlen=null;
          if(chance>=5){
            gameState="end";
          }
        }

       }
  }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  //  if(frameCount%60===0){
  //    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //    score++;
  //  }
 
  // for (var j = 0; j < particles.length; j++) {
   
  //    particles[j].display();
  //  }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){
  if(gameState==="play")
  chance++
  particlen=new Particle(mouseX,10,10);
}