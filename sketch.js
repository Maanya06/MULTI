var form, player, database;
var gameState = 0;
var playerCount;
var canvas, allPlayers;
var distance = 0;

function setup(){
  database = firebase.database();
 // console.log(database);
  canvas = createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start();

}

function draw(){
  background("white");
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  drawSprites();
}
