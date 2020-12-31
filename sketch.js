var garden,tom,jerry,gImage,tImage,jImage;
var tease,run,tlast,jlast;

function preload() {
    gImage = loadImage("images/garden.png");
    tImage = loadImage("images/tomOne.png");
    jImage = loadImage("images/jerryOne.png");
    tease = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    run = loadAnimation("images/tomTwo.png","images/tomThree.png");
    tlast = loadImage("images/tomFour.png");
    jlast = loadImage("images/jerryFour.png");
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    garden = createSprite(500,400,1000,800);
    garden.addImage("back",gImage);
    garden.scale = 1.2;
    tom = createSprite(900,650,1,1);
    tom.addImage("player1",tImage);
    tom.scale = 0.16;
    jerry = createSprite(210,650,1,1);
    jerry.addImage("player2",jImage);
    jerry.scale = 0.19;
    //create tom and jerry sprites here

}

function draw() {

    background("red");



    //Write condition here to evalute if tom and jerry collide
touching();
    drawSprites();
}


function keyPressed(){

if (keyDown("LEFT_ARROW")){
    tom.velocityX = -5;
    tom.addAnimation("running",run);
    tom.changeAnimation("running",run);
    tom.scale = 0.2;
    jerry.addAnimation("teasing",tease);
    jerry.changeAnimation("teasing",tease);
    jerry.scale = 0.16;
}
  //For moving and changing animation write code here
}

function touching(){
    if (tom.x-jerry.x < tom.width/2 - jerry.width/2 ){
       tom.addImage("happy",tlast);
       tom.changeAnimation("happy",tlast);
       jerry.addImage("good",jlast);
       jerry.changeAnimation("good",jlast);
       tom.velocityX = 0;
       jerry.x = 140;
    }
}
