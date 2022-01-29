
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel0C extends BaseScene {
	
	constructor() {
		super("NewLevel0C");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// mapa
		const mapa = this.add.tilemap("new_level0C");
		mapa.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");
		
		// new_level0C
		const new_level0C = this.add.tilemap("new_level0C");
		new_level0C.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");
		
		// bgCity2
		const bgCity2 = this.add.image(1, -80, "bgLevel1");
		bgCity2.setOrigin(0, 0);
		bgCity2.alpha = 0.5;
		bgCity2.alphaTopLeft = 0.5;
		bgCity2.alphaTopRight = 0.5;
		bgCity2.alphaBottomLeft = 0.5;
		bgCity2.alphaBottomRight = 0.5;
		
		// gotoLevelWall
		const gotoLevelWall = new GotoLevelWall(this, 1629, 353);
		this.add.existing(gotoLevelWall);
		gotoLevelWall.scaleX = 1.0670834043832675;
		gotoLevelWall.scaleY = 6.293150687766684;
		gotoLevelWall.tintTopLeft = 16535632;
		gotoLevelWall.tintTopRight = 16479605;
		gotoLevelWall.tintBottomLeft = 10683396;
		gotoLevelWall.tintBottomRight = 16257554;
		
		// nocollide2_1
		mapa.createLayer("nocollide2", ["new_ciudad_tiles"], 0, 0);
		
		// nocollide
		mapa.createLayer("nocollide", ["new_ciudad_tiles"], 0, 0);
		
		// layer
		const layer = mapa.createLayer("collide", ["new_ciudad_tiles"], 0, 0);
		
		// nocollide3_1
		new_level0C.createLayer("nocollide3", ["new_ciudad_tiles"], 0, 0);
		
		// player
		const player = new Player(this, 62, 458);
		this.add.existing(player);
		
		// posters
		this.add.image(53, 185, "posters");
		
		// hotDogCart
		const hotDogCart = this.add.image(508, 401, "hotDogCart");
		hotDogCart.scaleX = 0.8;
		hotDogCart.scaleY = 0.8;
		
		// tuto2
		const tuto2 = this.add.image(190, 406, "tuto2");
		
		// rocoPop
		this.add.image(1414, 384, "rocoPop");
		
		// basura
		this.add.image(1489, 396, "basura");
		
		// textInfo
		const textInfo = new TextInfo(this, 29, 559);
		this.add.existing(textInfo);
		
		// lists
		const doors = []
		const switches = []
		const enemies = []
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = [tuto2]
		
		// bgCity2 (components)
		new FixedToCamera(bgCity2);
		bgCity2.emit("components-awake");
		
		// gotoLevelWall (prefab fields)
		gotoLevelWall.gotoLevelName = "NewLevel0D";
		gotoLevelWall.showScore = false;
		gotoLevelWall.emit("prefab-awake");
		
		// gotoLevelWall (components)
		gotoLevelWall.emit("components-awake");
		
		// player (prefab fields)
		player.emit("prefab-awake");
		
		// player (components)
		player.emit("components-awake");
		
		// textInfo (prefab fields)
		textInfo.textToDisplay = "Some tiles grants speed power";
		textInfo.emit("prefab-awake");
		
		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.new_level0C = new_level0C;
		this.doors = doors;
		this.switches = switches;
		this.enemies = enemies;
		this.platforms = platforms;
		this.coins = coins;
		this.catapultas = catapultas;
		this.revivingPods = revivingPods;
		this.tutorials = tutorials;
	}
	
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	layer;
	/** @type {Player} */
	player;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Array<any>} */
	enemies;
	/** @type {Array<any>} */
	platforms;
	/** @type {Array<any>} */
	coins;
	/** @type {Array<any>} */
	catapultas;
	/** @type {Array<any>} */
	revivingPods;
	/** @type {Phaser.GameObjects.Image[]} */
	tutorials;
	
	/* START-USER-CODE */






	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
