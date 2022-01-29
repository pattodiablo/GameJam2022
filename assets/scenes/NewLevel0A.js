
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel0A extends BaseScene {
	
	constructor() {
		super("NewLevel0A");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// mapa
		const mapa = this.add.tilemap("new_level0A");
		mapa.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");
		mapa.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");
		
		// new_level0A
		const new_level0A = this.add.tilemap("new_level0A");
		new_level0A.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");
		new_level0A.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");
		
		// bgCity2
		const bgCity2 = this.add.image(1, -80, "bgLevel1");
		bgCity2.setOrigin(0, 0);
		bgCity2.alpha = 0.5;
		bgCity2.alphaTopLeft = 0.5;
		bgCity2.alphaTopRight = 0.5;
		bgCity2.alphaBottomLeft = 0.5;
		bgCity2.alphaBottomRight = 0.5;
		
		// player
		const player = new Player(this, 64, 420);
		this.add.existing(player);
		
		// handPointer
		const handPointer = new HandPointer(this, 69, 417);
		this.add.existing(handPointer);
		
		// handPointer_1
		const handPointer_1 = new HandPointer(this, 1551, 412);
		this.add.existing(handPointer_1);
		
		// gotoLevelWall
		const gotoLevelWall = new GotoLevelWall(this, 1609, 406);
		this.add.existing(gotoLevelWall);
		gotoLevelWall.scaleX = 0.3;
		gotoLevelWall.tintTopLeft = 16535632;
		gotoLevelWall.tintTopRight = 16479605;
		gotoLevelWall.tintBottomLeft = 10683396;
		gotoLevelWall.tintBottomRight = 16257554;
		
		// nocollide2
		mapa.createLayer("nocollide2", ["new_ciudad_tiles"], 0, 0);
		
		// nocollide_1
		mapa.createLayer("nocollide", ["new_ciudad_tiles"], 0, 0);
		
		// layer
		const layer = mapa.createLayer("collide", ["new_ciudad_tiles","new_ciudad_tiles"], 0, 0);
		
		// stomperShadow_2
		const stomperShadow_2 = this.add.image(982, 482, "stomperShadow");
		stomperShadow_2.scaleX = 1.8;
		stomperShadow_2.scaleY = 0.8;
		stomperShadow_2.alpha = 0.5;
		stomperShadow_2.alphaTopLeft = 0.5;
		stomperShadow_2.alphaTopRight = 0.5;
		stomperShadow_2.alphaBottomLeft = 0.5;
		stomperShadow_2.alphaBottomRight = 0.5;
		
		// stomperShadow_2_2
		const stomperShadow_2_2 = this.add.image(540, 482, "stomperShadow");
		stomperShadow_2_2.scaleX = 1.8;
		stomperShadow_2_2.scaleY = 0.8;
		stomperShadow_2_2.alpha = 0.5;
		stomperShadow_2_2.alphaTopLeft = 0.5;
		stomperShadow_2_2.alphaTopRight = 0.5;
		stomperShadow_2_2.alphaBottomLeft = 0.5;
		stomperShadow_2_2.alphaBottomRight = 0.5;
		
		// stomperShadow_2_1
		const stomperShadow_2_1 = this.add.image(767, 482, "stomperShadow");
		stomperShadow_2_1.scaleX = 1.8;
		stomperShadow_2_1.scaleY = 0.8;
		stomperShadow_2_1.alpha = 0.5;
		stomperShadow_2_1.alphaTopLeft = 0.5;
		stomperShadow_2_1.alphaTopRight = 0.5;
		stomperShadow_2_1.alphaBottomLeft = 0.5;
		stomperShadow_2_1.alphaBottomRight = 0.5;
		
		// stomper_1_1
		const stomper_1_1 = new Stomper(this, 978, 274);
		this.add.existing(stomper_1_1);
		
		// stomper
		const stomper = new Stomper(this, 535, 275);
		this.add.existing(stomper);
		
		// stomper_1
		const stomper_1 = new Stomper(this, 765, 275);
		this.add.existing(stomper_1);
		
		// nocollide3_1
		new_level0A.createLayer("nocollide3", ["new_ciudad_tiles"], 0, 0);
		
		// basura
		this.add.image(1254, 458, "basura");
		
		// tuto6
		const tuto6 = this.add.image(318, 403, "tuto6");
		
		// tuto5
		const tuto5 = this.add.image(647, 399, "tuto5");
		tuto5.scaleX = 0.7;
		tuto5.scaleY = 0.7;
		
		// tuto5_1
		const tuto5_1 = this.add.image(880, 399, "tuto5");
		tuto5_1.scaleX = 0.7;
		tuto5_1.scaleY = 0.7;
		
		// shadowGeneral
		const shadowGeneral = this.add.image(646, 399, "shadowGeneral");
		shadowGeneral.scaleX = 1.6833254272484857;
		shadowGeneral.scaleY = 4.161402179823238;
		shadowGeneral.alpha = 0.5;
		shadowGeneral.alphaTopLeft = 0.5;
		shadowGeneral.alphaTopRight = 0.5;
		shadowGeneral.alphaBottomLeft = 0.5;
		shadowGeneral.alphaBottomRight = 0.5;
		
		// shadowGeneral_1
		const shadowGeneral_1 = this.add.image(880, 398, "shadowGeneral");
		shadowGeneral_1.scaleX = 1.7062623794557028;
		shadowGeneral_1.scaleY = 4.0985039914473775;
		shadowGeneral_1.alpha = 0.5;
		shadowGeneral_1.alphaTopLeft = 0.5;
		shadowGeneral_1.alphaTopRight = 0.5;
		shadowGeneral_1.alphaBottomLeft = 0.5;
		shadowGeneral_1.alphaBottomRight = 0.5;
		
		// rocoPop
		this.add.image(1443, 428, "rocoPop");
		
		// box
		this.add.image(1499, 455, "box");
		
		// box_1
		const box_1 = this.add.image(1536, 462, "box");
		box_1.scaleX = 0.5;
		box_1.scaleY = 0.5;
		
		// grafitty_2
		this.add.image(749, 313, "grafitty 2");
		
		// textInfo
		const textInfo = new TextInfo(this, 51, 259);
		this.add.existing(textInfo);
		
		// lists
		const doors = []
		const switches = []
		const enemies = []
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = [tuto6]
		
		// bgCity2 (components)
		new FixedToCamera(bgCity2);
		bgCity2.emit("components-awake");
		
		// player (prefab fields)
		player.emit("prefab-awake");
		
		// player (components)
		player.emit("components-awake");
		
		// handPointer (prefab fields)
		handPointer.emit("prefab-awake");
		
		// handPointer_1 (prefab fields)
		handPointer_1.emit("prefab-awake");
		
		// gotoLevelWall (prefab fields)
		gotoLevelWall.gotoLevelName = "NewLevel0B";
		gotoLevelWall.showScore = false;
		gotoLevelWall.emit("prefab-awake");
		
		// gotoLevelWall (components)
		gotoLevelWall.emit("components-awake");
		
		// stomper_1_1 (prefab fields)
		stomper_1_1.emit("prefab-awake");
		
		// stomper (prefab fields)
		stomper.emit("prefab-awake");
		
		// stomper_1 (prefab fields)
		stomper_1.retardo = 2000;
		stomper_1.emit("prefab-awake");
		
		// textInfo (prefab fields)
		textInfo.textToDisplay = "TAP TO STOP, if i want to survive those traps.";
		textInfo.emit("prefab-awake");
		
		this.player = player;
		this.layer = layer;
		this.mapa = mapa;
		this.new_level0A = new_level0A;
		this.doors = doors;
		this.switches = switches;
		this.enemies = enemies;
		this.platforms = platforms;
		this.coins = coins;
		this.catapultas = catapultas;
		this.revivingPods = revivingPods;
		this.tutorials = tutorials;
	}
	
	/** @type {Player} */
	player;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	layer;
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
