var canvas, bgimg;
var gameState = 0;
var playercount;
var database;
var form1, player1, game1;
var allplayers;
var cars,car1, car2, car3, car4;

var track, car1img, car2img, car3img, car4img;

function preload(){
    track = loadImage("images/track.jpg");
    
    car1img = loadImage("images/car1.png");
    car2img = loadImage("images/car2.png");
    car3img = loadImage("images/car3.png");
    car4img = loadImage("images/car4.png");
}

function setup(){
    createCanvas(displayWidth-20, displayHeight-20);
    
    database = firebase.database();
    game1 =  new gameobject();
    game1.getState();
    game1.start();
}

function draw(){
    if(playercount == 4){
        game1.update(1);
    }
    if(gameState == 1){
        clear();
        game1.play();
    }
    if(gameState == 2){
        game1.end();
    }
}