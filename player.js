class player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }
    getCount(){
        var playercountref = database.ref('playercount');
        playercountref.on("value", function(data){
            playercount = data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            playercount: count
        })
    }
    update(){
        var playerindex = "players/player"+playercount;
        database.ref(playerindex).set({
            name: this.name,
            distance: this.distance
        })
    }
    static getPlayerinfo(){
        var playerinforef = database.ref('players');
        playerinforef.on("value", (data)=>{
            allplayers = data.val();
        })
    }
}
