
// You can write more code here

/* START OF COMPILED CODE */

class LevelMap extends Phaser.Scene {

	constructor() {
		super("LevelMap");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// sky1
		const sky1 = this.add.image(0, 0, "sky1");
		sky1.setOrigin(0, 0);

		// tilesprite
		const tilesprite = this.add.tileSprite(0, 0, 64, 64, "mapLevelBg");
		tilesprite.setOrigin(0, 1);

		// mapLevelBuilding
		const mapLevelBuilding = this.add.image(161, 240, "mapLevelBuilding");
		mapLevelBuilding.setOrigin(0.5, 1);

		// supaPin
		const supaPin = new SupaPoiner(this, 155, 99);
		this.add.existing(supaPin);

		this.sky1 = sky1;
		this.tilesprite = tilesprite;
		this.mapLevelBuilding = mapLevelBuilding;
		this.supaPin = supaPin;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	sky1;
	/** @type {Phaser.GameObjects.TileSprite} */
	tilesprite;
	/** @type {Phaser.GameObjects.Image} */
	mapLevelBuilding;
	/** @type {SupaPoiner} */
	supaPin;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.supaPoints = [{x:this.cameras.main.centerX,y:this.cameras.main.height+60},{x:this.cameras.main.centerX,y:this.cameras.main.height-20},{x:this.cameras.main.centerX,y:this.cameras.main.height-60},{x:this.cameras.main.centerX+30,y:this.cameras.main.height-100},{x:this.cameras.main.centerX-20,y:this.cameras.main.height-170},{x:this.cameras.main.centerX-20,y:this.cameras.main.height-200},{x:this.cameras.main.centerX+40,y:this.cameras.main.height-240},{x:this.cameras.main.centerX+40,y:this.cameras.main.height-280},{x:this.cameras.main.centerX,y:this.cameras.main.height-320},{x:this.cameras.main.centerX,y:this.cameras.main.height-380},{x:this.cameras.main.centerX,y:this.cameras.main.height-380}];
		this.defaultLevel = 0;
		this.supaPin.x = this.supaPoints[this.partida].x;
		this.supaPin.y = this.supaPoints[this.partida].y;
		this.showSupa();

		this.tilesprite.width=this.cameras.main.width;
		this.tilesprite.height=480;
		this.tilesprite.y=this.cameras.main.height;

		this.sky1.displayWidth=this.cameras.main.width;
		this.sky1.displayHeight=this.cameras.main.height;

		this.mapLevelBuilding.x=this.cameras.main.centerX;
		this.mapLevelBuilding.y=this.cameras.main.height;

	}

	showSupa(){
		this.cameras.main.fadeIn(2000);
		this.cameras.main.once('camerafadeincomplete', function () {	

			var showSupa = this.tweens.createTimeline();
			showSupa.add({
				targets: this.supaPin,
				x: this.supaPoints[this.pinOnMap].x,
				y: this.supaPoints[this.pinOnMap].y,
				duration: 240,
				ease: 'Linear',
				repeat: 0,

			});


			showSupa.add({
				targets: this.supaPin,
				alpha: 0,
				duration: 60,
				ease: 'Linear',
				repeat: 6,
				yoyo:true,

			});


			showSupa.add({
				targets: this.supaPin,
				alpha: 1,
				duration: 300,
				ease: 'Linear',


			});


			showSupa.add({
				targets: this.supaPin,
				scale: 1.1,
				duration: 50,
				ease: 'Linear',
				repeat: 0,
			});

			showSupa.add({
				targets: this.supaPin,
				scale: 0.3,
				duration: 120,
				ease: 'Linear',
				repeat: 0,
			});

			showSupa.add({
				targets: this.supaPin,
				alpha: 0,
				duration: 120,
				ease: 'Linear',
				repeat: 0,
				callbackScope: this,
				onComplete: function () {
					this.gotoLevel();
				}
			});

			showSupa.play();

			}, this);


	}

	setLevel(level,destino,partida){

		this.levelTogo = level;
		this.pinOnMap = destino;
		this.partida = partida;

	}
	preload(){
		var sceneasCargadas = [];

		this.scene.manager.scenes.forEach(scena => {

			sceneasCargadas.push(scena.scene.key)
		});
		var estaLaScena = sceneasCargadas.includes(this.levelTogo);
		if(!estaLaScena){
			this.load.sceneFile(this.levelTogo, 'assets/scenes/'+this.levelTogo+'.js');
		}

	}
	gotoLevel(){
	/*	var sceneToGo = this.scene.scene.get(this.goToLevel);
		sceneToGo.fadeInAndCheck();*/

		this.scene.start(this.levelTogo);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
