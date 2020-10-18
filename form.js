class form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton('play');
        this.greeting = createElement('h2');
        this.title = createElement('h2');
    }
    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
        this.title.hide();
    }
    display(){
        this.title.html("car-racing-game");
        this.title.position(displayWidth/2-50, 0);
        this.input.position(displayWidth/2-40, displayHeight/2-80);
        this.button.position(displayWidth/2+30, displayHeight/2);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player1.name = this.input.value();
            playercount+= 1;
            player1.index = playercount;
            player1.update();
            player1.updateCount(playercount);
            this.greeting.html("Heyllo" + " " + player1.name);
            this.greeting.position(displayWidth/2-70, displayHeight/4);
        });
    }
}