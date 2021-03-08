const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;
var box1, pig1;
var backgroundimg,platform;
var gameState="onSling"
var score=0
function preload() {
    time()
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100);
  
omi=new SlingShot(bird.body,{x:200,y:50})
}

function draw(){
    if(backgroundimg){
    background(backgroundimg);
    }
    textSize(30)
    fill("white")
    text("Score: "+score,900,50)
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.update();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.update();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    omi.display()
    
}
function mouseDragged (){
    if(gameState==="onSling"){

    
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    }
}
function mouseReleased(){ 
    omi.dissconect()
    gameState="launched"
}
function keyPressed(){
    if(keyCode===32){
        omi.nokia(bird.body)
        bird.path=[]
        gameState="onSling"
    }
}
async function time(){
    var yourwish=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var type=await yourwish.json()
    var datetime=type.datetime
    var hour=datetime.slice(11,13)
    if(hour>=6&&hour<=18){
        bg="sprites/bg.png"
    }else{
        bg="sprites/bg2.jpg"
    }
    backgroundimg=loadImage(bg)
}