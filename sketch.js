
var monkey , monkey_running
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  banana = createSprite(350,250,30,30);
  banana.addImage("banana",bananaImage);
  banana.scale = 0.1; 
  banana.y = random(120,200);
  banana.velocityX = -1.5;
  banana.lifetime = 300;
  
  FoodGroup = createGroup();
  obstacle = createSprite(320,315,30,30);
  obstacle.addImage("obstacle",obstacleImage);
  obstacle.scale = 0.2;
  obstacle.velocityX = -1.5; 
  
  

  
}


function draw() {
background("white");
  
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
       
  
}
monkey.velocityY = monkey.velocityY + 0.8
monkey.collide(ground);

  if (ground.x < 0){
      ground.x = ground.width/2;
    }
spawnFood();
  spawnObstacles();
drawSprites();
} 

function spawnFood(){
  if(frameCount % 80 === 0){
    banana = createSprite(350,250,30,30);
  banana.addImage("banana",bananaImage);
  banana.scale = 0.1; 
  banana.y = random(120,200);
  banana.velocityX = -1.5;
  banana.lifetime = 300;
  }
stroke("white");
  textSize(20);
  fill("white");
  text("Score"+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time" + survivalTime,100,50)
}

function spawnObstacles(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(320,315,30,30);
  obstacle.addImage("obstacle",obstacleImage);
  obstacle.scale = 0.2;
  obstacle.velocityX = -1.5;
    obstacle.lifetime = 400;
  }
}
