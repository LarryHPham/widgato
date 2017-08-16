var boot = function(game){
    console.log("%cStarting Dodgy Drone...", "color:white; background:red");
};

boot.prototype = {
    preload: function(){
        this.game.load.image("loading","assets/loading.png");
        this.game.load.image('logo', 'assets/sntlogo.png');
    },
    create: function(){
	game.input.mspointer.capture = false;
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.setBoundsToWorld();

        this.game.state.start("Preload");
    }
}
