var backG;
var playImg;
var gameState = 0;
var startImg;
var bg2;
var ast1, ast2;
var surface;
var path;
var neil,buzz;

function preload(){
    backG = loadImage("backGMarsImg.jpg");
    playImg = loadImage("play.jpg");
    startImg = loadImage("start.jpg");
    bg2 = loadImage("galaxy.jpg");
    ast1 = loadImage("astronaut1.jpg");
    ast2 = loadImage("astronaut2.jpg");
    surface = loadImage("mars surface.jpg");
    path = loadImage("path.jpg");
}

function setup(){
createCanvas(windowWidth,windowHeight);
}

function draw (){
    
    background(backG);
    if(gameState===0){
        image(playImg,displayWidth/2-60,displayHeight/5,100,100);
        textSize(30);
        fill("black");
        text("Press SPACE to begin!",displayWidth/2-160,displayHeight/2);
        if(keyDown("SPACE")){
            gameState = 1;
        }
    } 

    if(gameState===1){
        background(backG);    
        textSize(25);
        fill("blue");
        text("Rules: \n  You need to use the arrow keys to jump up and down the Buttes and craters to get to the lander. \n  However, the dust storms and crumbly rocks will do whatever they can to stop you. \n   If you run into a health power pill, then the dust storms will stop moving \n and you have 30 extra seconds to run. If you crash, 1 of your 5 lives will vanish. \n Use the rover token where possible so you can get there quickly.\n\n Press the 's' key if you dare to take the challenge!",120,displayHeight/4);
        if(keyDown("s")){
            gameState=2;
        }
    }

    if(gameState===2){
    background(bg2);
    image(startImg,displayWidth/2-120,displayHeight/4,200,200);
    if(keyDown("A")){
        gameState=3;
    }
    }   
    if(gameState===3){
       startImg.isVisible=false;
       background(surface);
       image(ast1,displayWidth/10,50,150,250);
       image(ast2,displayWidth/2+400,50,150,250);
       textSize(36);
       fill("green");
       text("Hi! I'm Neil.",displayWidth/4,180);
       text("Hi! I'm Buzz!",displayWidth/2+150,180);
       fill("cyan");
       textSize(28);
       text(" PROBLEM: \n Neil is an aspiring astronaut person who really, really, wants to land on Mars.\n Everything has been set up, however, while exploring the Martian surface,\n Neil and his friend Buzz, get lost. \n Can YOU help them find their way back without them running out of oxygen? ",displayWidth/10,displayHeight/2);
       textSize(20);
       text("Press 'ENTER' to begin!",displayWidth*0.4,displayHeight/2+200);
       if(keyDown("ENTER")){
           gameState=4;
           
       }
    }

    if(gameState===4){
        background(path);
        neil = createSprite(displayWidth/2,displayHeight/2+100,100,100);
        neil.addImage("neil",ast1);
        neil.scale = 0.5;
        if(keyDown(UP_ARROW)){
            neil.velocityY = neil.velocityY - 5;
        }
    }
    drawSprites();
}