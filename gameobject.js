class gameobject{
    constructor(){}
        getState(){
            var gameStateref = database.ref('gameState');
            gameStateref.on("value", function(data){
                gameState = data.val();
            })
        }
        update(state){
            database.ref('/').update({
                gameState: state
            });
        }
        async start(){
            if(gameState === 0){
                player1 = new player();
                var playercountref = await database.ref('playercount').once("value");
                if(playercountref.exists()){
                    playercount = playercountref.val();
                    player1.getCount();
                }
                form1 = new form();
                form1.display();
            }
            car1 = createSprite(100, 200);
            car1.addImage(car1img);
            car2 = createSprite(300, 200);
            car2.addImage(car2img);
            car3 = createSprite(500, 200);
            car3.addImage(car3img);
            car4 = createSprite(700, 200);
            car4.addImage(car4img);

            cars = [car1, car2, car3, car4];
        }
        play(){
            form1.hide();
            textSize(30);
            text("Game Start", 120, 100);
            player.getPlayerinfo();
            if(allplayers !== undefined){
                background("blue");
                image(track, 0, -displayHeight*4, displayWidth, displayHeight*5);
                //var display_position = 130;
                var index = 0;
                var x = 175;
                var y;
                for(var plrs in allplayers){
                    index = index+1;
                    x = x+200;
                    y = displayHeight-allplayers[plrs].distance;
                    cars[index-1].x = x;
                    cars[index-1].y = y;
                    if(index == player1.index){
                        cars[index-1].shapeColor = "red";
                        camera.position.x = displayWidth/2;
                        camera.position.y = cars[index-1].y;
                    }
                }
            }
                if(keyIsDown(UP_ARROW) && player1.index !== null){
                    player1.distance += 50;
                    player1.update();
                }
                if(player1.distance > 3860){
                    gameState = 2;
                }
                drawSprites();
            }
            end(){
                console.log("gameEnded")
            }
        }