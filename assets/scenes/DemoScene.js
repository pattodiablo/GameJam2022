
// You can write more code here

/* START OF COMPILED CODE */

class DemoScene extends Phaser.Scene {
	
	constructor() {
		super("DemoScene");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// demoSceneBg
		const demoSceneBg = this.add.image(0, 0, "demoScene");
		demoSceneBg.setOrigin(0, 0);
		
		this.demoSceneBg = demoSceneBg;
	}
	
	/** @type {Phaser.GameObjects.Image} */
	demoSceneBg;
	
	/* START-USER-CODE */
	
	// Write your code here
	
	create() {
	
		this.editorCreate();

		this.demoSceneBg.setInteractive().on('pointerdown', function(pointer, localX, localY, event){
		
			this.scene.cameras.main.fadeOut(1000);
			this.scene.cameras.main.once('camerafadeoutcomplete', function (camera) {
				
				var sceneToGo = this.scene.scene.get("LevelMap");
				sceneToGo.setLevel("NewLevel0",1,0); //nombre de la escena a cargar, casillero en el mapa para trasladarse y casillero donde debe partir
			
				this.scene.scene.remove(this.scene.keys);
				this.scene.scene.start("LevelMap");
				
				
				this.destroy();
			},this);

			
		});
	}
	
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
