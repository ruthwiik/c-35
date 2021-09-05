//Create variables here

function preload()
dogImage2=loadImage("dogimg.png")
dogImage=loadImage("dogimg1.png")

{
	//load images here
}

function setup() {

	createCanvas(500, 500);

  dog=createSprite (400,50,10,10);
  dog.addImage(dogImage)
  const dog = firebase.database().ref('variable database');
var index;
dog.once("value", function(snapshot) {
  index = snapshot.val().Count
}).then(function() {
  console.log(index)
});
foodStock=database.ref('food');
foodStock.on("value",readStock);

}


function draw() {  
  background(220); 
      
  // Use color() function 
  let c = color('46,139,87'); 
  if(keyWentDown(UP_ARROW)){
writeStock(foodS);
  dog.addImage(happyDog);
  }




  drawSprites();
  //add styles here

}

dog=createSprite (400,50,10,10)

happyDog=createSprite (400,50,10,10)

foodS=createSprite (50,50,10,10)

database=createSprite(600,100,20,20)

foodStock=createSprite(100,100,10,10)

//function to read values from DB
function readStock(data){
foodS=data.val();

}
//function to write values in DB
function writeStock(x){

database.ref('/').update({

food:x

})





}