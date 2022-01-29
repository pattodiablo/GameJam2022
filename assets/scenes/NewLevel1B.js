
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel1B extends BaseScene {

	constructor() {
		super("NewLevel1B");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level1B");
		mapa.addTilesetImage("new_buildingTiles", "new_buildingTiles");

		// new_level1B
		const new_level1B = this.add.tilemap("new_level1B");
		new_level1B.addTilesetImage("new_buildingTiles", "new_buildingTiles");

		// bgLevel1
		const bgLevel1 = this.add.image(0, 0, "bgLevel1");
		bgLevel1.setOrigin(0, 0);

		// noCollide
		mapa.createLayer("NoCollide", ["new_buildingTiles"], 0, 0);

		// noCollide1
		mapa.createLayer("NoCollide1", ["new_buildingTiles"], 0, 0);

		// player
		const player = new Player(this, 52, 502);
		this.add.existing(player);

		// layer
		const layer = mapa.createLayer("Collide", ["new_buildingTiles"], 0, 0);

		// nocollide3_1
		new_level1B.createLayer("nocollide3", ["new_buildingTiles"], 0, 0);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 563, 519);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 724, 517);
		this.add.existing(sampoShooter_1);

		// heart
		const heart = new Heart(this, 1519, 443);
		this.add.existing(heart);

		// gotoLevelWall
		const gotoLevelWall = new GotoLevelWall(this, 1626, 106);
		this.add.existing(gotoLevelWall);
		gotoLevelWall.tintTopLeft = 16535632;
		gotoLevelWall.tintTopRight = 16479605;
		gotoLevelWall.tintBottomLeft = 10683396;
		gotoLevelWall.tintBottomRight = 16257554;

		// catapulta
		const catapulta = new Catapulta(this, 179, 528);
		this.add.existing(catapulta);

		// handPointer
		const handPointer = new HandPointer(this, 1004, 434);
		this.add.existing(handPointer);
		handPointer.angle = -32.00000000000006;

		// handPointer_1
		const handPointer_1 = new HandPointer(this, 1511, 130);
		this.add.existing(handPointer_1);

		// drone
		const drone = new Drone(this, 1390, 345);
		this.add.existing(drone);

		// lists
		const doors = []
		const switches = []
		const enemies = [sampoShooter, sampoShooter_1, drone]
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// bgLevel1 (components)
		new FixedToCamera(bgLevel1);

		// gotoLevelWall (prefab fields)
		gotoLevelWall.gotoLevelName = "NewLevel1C";

		// catapulta (prefab fields)
		catapulta.power = 500;

		this.player = player;
		this.layer = layer;
		this.sampoShooter = sampoShooter;
		this.sampoShooter_1 = sampoShooter_1;
		this.drone = drone;
		this.mapa = mapa;
		this.new_level1B = new_level1B;
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
	/** @type {SampoShooter} */
	sampoShooter;
	/** @type {SampoShooter} */
	sampoShooter_1;
	/** @type {Drone} */
	drone;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Array<SampoShooter|Drone>} */
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
