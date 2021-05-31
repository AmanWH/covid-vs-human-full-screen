var START=1;
var PLAY=2
var END=3;
var WIN=4;
var gameState=1;
var handle,handleImg;
var coronaG,coronaG2,coronaG3,cornaG4,coronaG5,coronaG6,coronaG7,coronaG8,coronaG9,coronaG10,coranaI,coronaImg,saniG;
var human,humanImg;
var sanitizerBottle,bottleImg,bottleG;
var wall1,wall2,wall3,wallImg;
var bg,hospitalI,getI,overI;
var saniImg;
var startI,get,start;
var reload,reloadI,awardI,winI;
var liquid=100;
var score=0;
var cityI;


function preload(){
  handleImg=loadImage("handle.gif");
  reloadI=loadImage("restart.png");
  cityI=loadImage("city.gif");
  awardI=loadImage("award.gif");
  winI=loadImage("win.png");
  coronaImg=loadImage("ac.gif");
  coronaI=loadImage("cb.gif");
  bottleImg=loadImage("sani.gif");
  humanImg=loadImage("man.gif");
  wallImg=loadImage("wall.gif");
  bg=loadImage("bg.gif");
  saniImg=loadImage("sani.gif");
  hospitalI=loadImage("hospital.gif");
  overI=loadImage("over.gif");
  startI=loadImage("Imported piskel.gif");
  getI=loadImage("ready.gif")
}



function setup() {
  createCanvas(displayWidth-50,displayHeight-135);
  handle=createSprite(600,200,50,50);
  handle.addImage("handle",handleImg);
  handle.scale=0.85;
  wall1=createSprite(displayWidth-250,displayHeight/2-90,10,10);
  wall1.addImage("wall",wallImg);
  wall1.scale=0.375;

  wall2=createSprite(displayWidth-275,displayHeight/2-90,10,10);
  wall2.addImage("wall",wallImg);
  wall2.scale=0.375;

  wall3=createSprite(displayWidth-300,displayHeight/2-90,10,10);
  wall3.addImage("wall",wallImg);
  wall3.scale=0.375;
  human=createSprite(displayWidth-150,displayHeight/2-50,10,10);
  human.addImage("man",humanImg)
  human.scale=1;
  
  coronaG=createGroup();
  coronaG2=createGroup();
  coronaG3=createGroup();
  coronaG4=createGroup();
  coronaG5=createGroup();
  coronaG6=createGroup();
  coronaG7=createGroup();
  coronaG8=createGroup();
  coronaG9=createGroup();
  coronaG10=createGroup();

  saniG=createGroup();

    get=createSprite((displayWidth-50)/2,125,10,10);
    get.addImage("get",getI);
    get.scale=0.4;
    start=createSprite((displayWidth-50)/2,displayHeight/2,10,10);
    start.addImage("start",startI);
    start.scale=0.1;
    reload=createSprite(425,350,10,10);
    reload.addImage("reload",reloadI);
    
}


function draw() {
  background(bg);
  
  for (var num=0;num<displayHeight;num=num+15){
    line(displayWidth-325,num,displayWidth-325,num+7);
  }
  for (var num=0;num<displayHeight;num=num+15){
    line(displayWidth/2-375,num,displayWidth/2-375,num+7);
  }
  if(gameState===1){
    
    if(mousePressedOver(start)){
      gameState=2;
      get.destroy();
      start.visible=false;
      
    }
    reload.visible=false;
    textSize(25);
    fill("black");
    text("save the man from corona",displayWidth/45-25,425);
    text("Please keep the stock of",displayWidth/45-25,375);
    text("sanitizer!",displayWidth/45-25,395);
    text("score 180 points to win",displayWidth/45-25,350);
    fill("black");
  }
  if(gameState===2){
    if(liquid>100){
      liquid=100;
    }
    reload.visible=false;
  handle.x=mouseX;
  handle.y=mouseY;
  handle.debug=false;
  handle.setCollider("rectangle",0,0,10,75);
  
  if(handle.x>displayWidth-325){
    handle.x=displayWidth-325;
  }
  if(handle.x<displayWidth/2-375){
    handle.x=displayWidth/2-375;
  }
  if(handle.y<30){
    handle.y=30;
  }
  if(handle.y>displayHeight-50){
    handle.y=displayHeight-50;
  }
  console.log(frameCount);
  coronaF();
  destruction();
  if(handle.isTouching(coronaG)){
    coronaG.destroyEach();
    liquid=liquid-4;
    score=score+5;
  }
  if(handle.isTouching(coronaG2)){
    coronaG2.destroyEach();
    liquid=liquid-4;
    score=score+5;
  }
  if(handle.isTouching(coronaG3)){
    coronaG3.destroyEach();
    liquid=liquid-4;
    score=score+5;
  }
  if(handle.isTouching(coronaG4)){
    coronaG4.destroyEach();
    liquid=liquid-4;
    score=score+5;
  }
  if(handle.isTouching(coronaG5)){
    coronaG5.destroyEach();
    liquid=liquid-4;
  }
  if(handle.isTouching(coronaG6)){
    coronaG6.destroyEach();
    liquid=liquid-4;
    score=score+5;
  }
  if(handle.isTouching(coronaG7)){
    coronaG7.destroyEach();
    liquid=liquid-4;
    score=score+5;
  }
  if(handle.isTouching(coronaG8)){
    coronaG8.destroyEach();
    liquid=liquid-4;
    score=score+5;
  }
  
  if(handle.isTouching(saniG)){
    saniG.destroyEach();
    liquid=liquid+45;
  }
  textSize(20);
  fill("blue");
  text("Sanitizer"+liquid,50,50);
  text("Score:"+" "+score,300,50);
  if(liquid<=0){
    gameState=3;
  }
  if(human.isTouching(coronaG)||human.isTouching(coronaG2)||human.isTouching(coronaG3)||human.isTouching(coronaG4)||human.isTouching(coronaG5)||human.isTouching(coronaG6)||human.isTouching(coronaG7)||human.isTouching(coronaG8)||human.isTouching(coronaG9)||human.isTouching(coronaG10)){
    gameState=3;
  }
  if(score>175){
    gameState=4;
  }

}
if(gameState===3){
  cover1=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  cover1.shapeColor="white";
  cover=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  cover.addImage("hospital",hospitalI);
  cover.scale=0.75;
  over=createSprite(100,50,10.10);
  over.addImage("over",overI);
  over.scale=0.5;
}

if(gameState===4){
  cover=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  cover.addImage("city",cityI);
  cover.scale=2;

  win=createSprite(displayWidth/2,displayHeight/2,10,10);
  win.addImage("win",winI);
  win.scale=1;
  human=createSprite(displayWidth-250,displayHeight/2,10,10);
  human.addImage("man",humanImg)
  human.scale=0.65;
  award=createSprite(displayWidth/5,displayHeight/2,10,10);
  award.addImage("award1",awardI);
  award1=createSprite(displayWidth-300,displayHeight/2-100,10,10);
  award1.addImage("award1",awardI);
  award1.scale=1
}
  drawSprites();
}
function coronaF(){
  if(frameCount%133===0){
    var rand=Math.round(random(45,displayHeight/4))
    corona=createSprite(-25,rand,10,10)
    corona.velocityX=14;
    corona.addImage("cor",coronaImg);
    corona.scale=0.15;
    coronaG.add(corona);
  }

  if(frameCount%137===0){
    var rand=Math.round(random(105,displayHeight/2))
    corona2=createSprite(-25,rand,10,10)
    corona2.velocityX=15;
    corona2.addImage("cor",coronaI);
    corona2.scale=0.15;
    coronaG2.add(corona2);
  }

if(frameCount%135===0){
  var rand=Math.round(random(202,displayHeight-205))
  corona4=createSprite(-25,rand,10,10)
  corona4.velocityX=13;
  corona4.addImage("cor",coronaI);
  corona4.scale=0.15;
  coronaG4.add(corona4);
}

if(frameCount%135===0){
  var rand=Math.round(random(302,displayHeight/5))
  corona3=createSprite(-25,rand,10,10)
  corona3.velocityX=10;
  corona3.addImage("cor",coronaI);
  corona3.scale=0.15;
  coronaG3.add(corona3);
}
if(frameCount%150===0){
  var rand=Math.round(random(45,displayHeight/3))
  corona5=createSprite(-25,rand,10,10)
  corona5.velocityX=12;
  corona5.addImage("cor",coronaI);
  corona5.scale=0.15;
  coronaG5.add(corona5);
}
if(frameCount%163===0){
  var rand=Math.round(random(45,displayHeight-200))
  corona6=createSprite(-25,rand,10,10)
  corona6.velocityX=11;
  corona6.addImage("cor",coronaI);
  corona6.scale=0.15;
  coronaG6.add(corona6);
}
if(frameCount%119===0){
  var rand=Math.round(random(45,displayHeight-200))
  corona7=createSprite(-25,rand,10,10)
  corona7.velocityX=13;
  corona7.addImage("cor",coronaI);
  corona7.scale=0.15;
  coronaG7.add(corona7);
}
if(frameCount%123===0){
  var rand=Math.round(random(45,displayHeight-200))
  corona8=createSprite(-25,rand,10,10)
  corona8.velocityX=11;
  corona8.addImage("cor",coronaI);
  corona8.scale=0.15;
  coronaG8.add(corona8);
}

if(frameCount%275===0&&liquid<100){
  var rand=Math.round(random(45,displayHeight-200))
  sanitizer=createSprite(-50,rand,10,10);
  sanitizer.addImage("sanitizer",saniImg);
  sanitizer.scale=1;
  sanitizer.velocityX=8
  saniG.add(sanitizer);
}

}
function destruction(){
  //destruction for wall1
  if(coronaG.isTouching(wall1)){
    coronaG.destroyEach();
    wall1.destroy();
  }
  if(coronaG2.isTouching(wall1)){
    coronaG2.destroyEach();
    wall1.destroy();
  }
  if(coronaG3.isTouching(wall1)){
    coronaG3.destroyEach();
    wall1.destroy();
  }
  if(coronaG4.isTouching(wall1)){
    coronaG4.destroyEach();
    wall1.destroy();
  }
  if(coronaG5.isTouching(wall1)){
    coronaG5.destroyEach();
    wall1.destroy();
  }
  if(coronaG6.isTouching(wall1)){
    coronaG6.destroyEach();
    wall1.destroy();
  }
  if(coronaG7.isTouching(wall1)){
    coronaG7.destroyEach();
    wall1.destroy();
  }
  if(coronaG8.isTouching(wall1)){
    coronaG8.destroyEach();
    wall1.destroy();
  }
  if(coronaG9.isTouching(wall1)){
    coronaG9.destroyEach();
    wall1.destroy();
  }
  if(coronaG10.isTouching(wall1)){
    coronaG10.destroyEach();
    wall1.destroy();
  }
//destruction for wall2
  if(coronaG.isTouching(wall2)){
    coronaG.destroyEach();
    wall2.destroy();
  }
  if(coronaG2.isTouching(wall2)){
    coronaG2.destroyEach();
    wall2.destroy();
  }
  if(coronaG3.isTouching(wall2)){
    coronaG3.destroyEach();
    wall2.destroy();
  }
  if(coronaG4.isTouching(wall2)){
    coronaG4.destroyEach();
    wall2.destroy();
  }
  if(coronaG5.isTouching(wall2)){
    coronaG5.destroyEach();
    wall2.destroy();
  }
  if(coronaG6.isTouching(wall2)){
    coronaG6.destroyEach();
    wall2.destroy();
  }
  if(coronaG7.isTouching(wall2)){
    coronaG7.destroyEach();
    wall2.destroy();
  }
  if(coronaG8.isTouching(wall2)){
    coronaG8.destroyEach();
    wall2.destroy();
  }
  if(coronaG9.isTouching(wall2)){
    coronaG9.destroyEach();
    wall2.destroy();
  }
  if(coronaG10.isTouching(wall2)){
    coronaG10.destroyEach();
    wall2.destroy();
  }
  //destruction for wall3
  if(coronaG.isTouching(wall3)){
    coronaG.destroyEach();
    wall3.destroy();
  }
  if(coronaG2.isTouching(wall3)){
    coronaG2.destroyEach();
    wall3.destroy();
  }
  if(coronaG3.isTouching(wall3)){
    coronaG3.destroyEach();
    wall3.destroy();
  }
  if(coronaG4.isTouching(wall3)){
    coronaG4.destroyEach();
    wall3.destroy();
  }
  if(coronaG5.isTouching(wall3)){
    coronaG5.destroyEach();
    wall3.destroy();
  }
  if(coronaG6.isTouching(wall3)){
    coronaG6.destroyEach();
    wall3.destroy();
  }
  if(coronaG7.isTouching(wall3)){
    coronaG7.destroyEach();
    wall3.destroy();
  }
  if(coronaG8.isTouching(wall3)){
    coronaG8.destroyEach();
    wall3.destroy();
  }
  if(coronaG9.isTouching(wall3)){
    coronaG9.destroyEach();
    wall3.destroy();
  }
  if(coronaG10.isTouching(wall3)){
    coronaG10.destroyEach();
    wall3.destroy();
  }
}




