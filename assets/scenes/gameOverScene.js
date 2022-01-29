
// You can write more code here

/* START OF COMPILED CODE */

class gameOverScene extends Phaser.Scene {
	
	constructor() {
		super("gameOverScene");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// titleText
		const titleText = this.add.text(168, 177, "", {});
		titleText.setOrigin(0.5, 0);
		titleText.text = "GAME OVER";
		
		// titleText_1
		const titleText_1 = this.add.text(172, 319, "", {});
		titleText_1.setOrigin(0.5, 0);
		titleText_1.text = "You will respawn from last checkpoint";
		titleText_1.setStyle({"fontSize":"12px"});
		
		this.titleText = titleText;
		this.titleText_1 = titleText_1;
	}
	
	/** @type {Phaser.GameObjects.Text} */
	titleText;
	/** @type {Phaser.GameObjects.Text} */
	titleText_1;
	
	/* START-USER-CODE */
	
	// Write your code here
	
	create() {

		this.editorCreate();
	
		this.cameras.main.fadeIn(2000);
		console.log("estas en game over scene");


		this.reloadtimer = this.time.addEvent({
			delay: 3000,                // ms
			callback: function(){
				location.reload();
			},
			//args: [],
			callbackScope: this,
			loop: false
		});




	}

	setLevel(level,destino,partida,coinscollected,totalCoins,delayScreen){

		this.levelTogo = level;
		this.pinOnMap = destino;
		this.partida = partida;
		this.coinscollected = coinscollected;
		this.totalCoins = totalCoins;
		this.delayScreen=delayScreen;
		
		console.log("delayScreen " + this.delayScreen);
	}


	


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
