
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel0B extends BaseScene {

	constructor() {
		super("NewLevel0B");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level0B");
		mapa.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// bgLevel1
		const bgLevel1 = this.add.image(1, -80, "bgLevel1");
		bgLevel1.setOrigin(0, 0);

		// nocollide2
		mapa.createLayer("nocollide2", ["new_ciudad_tiles"], 0, 0);

		// nocollide_1
		mapa.createLayer("nocollide", ["new_ciudad_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("collide", ["new_ciudad_tiles"], 0, 0);

		// hotDogCart
		const hotDogCart = this.add.image(799, 403, "hotDogCart");
		hotDogCart.scaleX = 0.8;
		hotDogCart.scaleY = 0.8;

		// rocoPop
		this.add.image(558, 417, "rocoPop");

		// handPointer
		const handPointer = new HandPointer(this, 116, 401);
		this.add.existing(handPointer);

		// player
		const player = new Player(this, 62, 458);
		this.add.existing(player);

		// sweetFlowers
		const sweetFlowers = this.add.image(1448, 394, "sweetFlowers");
		sweetFlowers.scaleX = 0.8;
		sweetFlowers.scaleY = 0.8;

		// rocoPop_1
		this.add.image(1266, 411, "rocoPop");

		// trashBin
		this.add.image(272, 442, "trashBin");

		// trashBin_1
		this.add.image(1114, 444, "trashBin");

		// tuto2
		const tuto2 = this.add.image(270, 319, "tuto2");

		// box
		const box = new Box(this, 361, 467);
		this.add.existing(box);

		// gotoLevelWall
		const gotoLevelWall = new GotoLevelWall(this, 1629, 353);
		this.add.existing(gotoLevelWall);
		gotoLevelWall.scaleX = 1.0670834043832675;
		gotoLevelWall.scaleY = 6.293150687766684;
		gotoLevelWall.tintTopLeft = 16535632;
		gotoLevelWall.tintTopRight = 16479605;
		gotoLevelWall.tintBottomLeft = 10683396;
		gotoLevelWall.tintBottomRight = 16257554;

		// textInfo
		const textInfo = new TextInfo(this, 11, 524);
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

		// bgLevel1 (components)
		new FixedToCamera(bgLevel1);

		// gotoLevelWall (prefab fields)
		gotoLevelWall.gotoLevelName = "NewLevel0C";
		gotoLevelWall.showScore = false;

		// textInfo (prefab fields)
		textInfo.textToDisplay = "SWIPE UP to jump, I need energy rings to buy upgrades";

		this.bgLevel1 = bgLevel1;
		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.doors = doors;
		this.switches = switches;
		this.enemies = enemies;
		this.platforms = platforms;
		this.coins = coins;
		this.catapultas = catapultas;
		this.revivingPods = revivingPods;
		this.tutorials = tutorials;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	bgLevel1;
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
