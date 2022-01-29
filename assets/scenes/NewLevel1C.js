
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel1C extends BaseScene {

	constructor() {
		super("NewLevel1C");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level1C");
		mapa.addTilesetImage("new_buildingTiles", "new_buildingTiles");

		// new_level1C
		const new_level1C = this.add.tilemap("new_level1C");
		new_level1C.addTilesetImage("new_buildingTiles", "new_buildingTiles");

		// bgLevel1
		const bgLevel1 = this.add.image(0, 0, "bgLevel1");
		bgLevel1.setOrigin(0, 0);

		// noCollide1_1
		mapa.createLayer("NoCollide1", ["new_buildingTiles"], 0, 0);

		// noCollide
		mapa.createLayer("NoCollide", ["new_buildingTiles"], 0, 0);

		// player
		const player = new Player(this, 72, 502);
		this.add.existing(player);

		// layer
		const layer = mapa.createLayer("Collide", ["new_buildingTiles"], 0, 0);

		// collideFX_1
		new_level1C.createLayer("CollideFX", ["new_buildingTiles"], 0, 0);

		// handPointer
		const handPointer = new HandPointer(this, 128, 488);
		this.add.existing(handPointer);

		// catapulta
		const catapulta = new Catapulta(this, 1199, 463);
		this.add.existing(catapulta);

		// box
		const box = new Box(this, 1052, 120);
		this.add.existing(box);

		// box_1
		const box_1 = new Box(this, 571, 121);
		this.add.existing(box_1);

		// box_2
		const box_2 = new Box(this, 132, 118);
		this.add.existing(box_2);

		// gotoLevelWall
		const gotoLevelWall = new GotoLevelWall(this, -22, 91);
		this.add.existing(gotoLevelWall);
		gotoLevelWall.tintTopLeft = 16535632;
		gotoLevelWall.tintTopRight = 16479605;
		gotoLevelWall.tintBottomLeft = 10683396;
		gotoLevelWall.tintBottomRight = 16257554;

		// stomperShadow
		const stomperShadow = this.add.image(861, 131, "stomperShadow");
		stomperShadow.scaleX = 1.75;

		// stomperShadow_1
		const stomperShadow_1 = this.add.image(362, 131, "stomperShadow");
		stomperShadow_1.scaleX = 1.75;

		// shadowGeneral
		const shadowGeneral = this.add.image(861, 131, "shadowGeneral");
		shadowGeneral.scaleX = 1.75;
		shadowGeneral.scaleY = 0.5;
		shadowGeneral.alpha = 0.5;
		shadowGeneral.alphaTopLeft = 0.5;
		shadowGeneral.alphaTopRight = 0.5;
		shadowGeneral.alphaBottomLeft = 0.5;
		shadowGeneral.alphaBottomRight = 0.5;

		// shadowGeneral_1
		const shadowGeneral_1 = this.add.image(362, 132, "shadowGeneral");
		shadowGeneral_1.scaleX = 1.75;
		shadowGeneral_1.scaleY = 0.5;
		shadowGeneral_1.alpha = 0.5;
		shadowGeneral_1.alphaTopLeft = 0.5;
		shadowGeneral_1.alphaTopRight = 0.5;
		shadowGeneral_1.alphaBottomLeft = 0.5;
		shadowGeneral_1.alphaBottomRight = 0.5;

		// stomper
		const stomper = new Stomper(this, 362, -70);
		this.add.existing(stomper);

		// stomper_1
		const stomper_1 = new Stomper(this, 861, -70);
		this.add.existing(stomper_1);

		// lists
		const doors = []
		const switches = []
		const enemies = []
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// bgLevel1 (components)
		new FixedToCamera(bgLevel1);

		// catapulta (prefab fields)
		catapulta.power = 800;

		// gotoLevelWall (prefab fields)
		gotoLevelWall.gotoLevelName = "NewLevel1D";

		this.player = player;
		this.layer = layer;
		this.mapa = mapa;
		this.new_level1C = new_level1C;
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
	/** @type {Array<any>} */
	tutorials;

	/* START-USER-CODE */






	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
