


//Create variables here
var dog,happyDog,dogImg;
var database;
var foodS;
var foodStock;

function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database()
  dog = createSprite(250,250,20,20)
  dog.scale=0.5;
  dog.addImage(dogImg)
 foodStock = database.ref('Food')
 foodStock.on("value",readStock)
}


function draw() {  
  background(46,139,87)
  drawSprites();
  //add styles here
  textSize(10)
  fill("red")
  stroke("blue")

  if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
text("food remaining"+ foodS,170,50)


}

function readStock(data){
foodS = data.val()


}

function writeStock(x){
if(x<=0){
x=0

}
else{
x=x-1
}
database.ref('/').update({
Food:x


})
}


