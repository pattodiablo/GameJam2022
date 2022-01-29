
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel1D extends BaseScene {

	constructor() {
		super("NewLevel1D");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level1D");
		mapa.addTilesetImage("new_buildingTiles", "new_buildingTiles");

		// new_level1D
		const new_level1D = this.add.tilemap("new_level1D");
		new_level1D.addTilesetImage("new_buildingTiles", "new_buildingTiles");

		// bgLevel1
		const bgLevel1 = this.add.image(0, 0, "bgLevel1");
		bgLevel1.setOrigin(0, 0);

		// noCollide1_1
		mapa.createLayer("NoCollide1", ["new_buildingTiles"], 0, 0);

		// noCollide
		mapa.createLayer("NoCollide", ["new_buildingTiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["new_buildingTiles"], 0, 0);

		// collideFX_1
		new_level1D.createLayer("CollideFX", ["new_buildingTiles"], 0, 0);

		// player
		const player = new Player(this, 1192, 517);
		this.add.existing(player);

		// platform2
		const platform2 = new Platform2(this, 105, 594);
		this.add.existing(platform2);

		// platform1
		const platform1 = new Platform1(this, 524, 174);
		this.add.existing(platform1);

		// platform1_1
		const platform1_1 = new Platform1(this, 970, 173);
		this.add.existing(platform1_1);

		// catapulta
		const catapulta = new Catapulta(this, 1202, 303);
		this.add.existing(catapulta);

		// catapulta_1
		const catapulta_1 = new Catapulta(this, 81, 142);
		this.add.existing(catapulta_1);

		// gotoLevelWall
		const gotoLevelWall = new GotoLevelWall(this, 82, -104);
		this.add.existing(gotoLevelWall);
		gotoLevelWall.scaleX = 10;
		gotoLevelWall.tintTopLeft = 16535632;
		gotoLevelWall.tintTopRight = 16479605;
		gotoLevelWall.tintBottomLeft = 10683396;
		gotoLevelWall.tintBottomRight = 16257554;

		// box
		const box = new Box(this, 235, 315);
		this.add.existing(box);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 383, 295);
		this.add.existing(sampoShooter);

		// drone
		const drone = new Drone(this, 527, 405);
		this.add.existing(drone);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 973, 544);
		this.add.existing(sampoShooter_1);

		// lists
		const doors = []
		const switches = []
		const enemies = [sampoShooter, sampoShooter_1]
		const platforms = [platform2, platform1, platform1_1]
		const coins = []
		const catapultas = [catapulta]
		const revivingPods = []
		const tutorials = []

		// bgLevel1 (components)
		new FixedToCamera(bgLevel1);

		// platform2 (prefab fields)
		platform2.distance = 259;
		platform2.timeTravel = 3500;

		// platform1 (prefab fields)
		platform1.distance = 20;
		platform1.timeTravel = 3600;
		platform1.isHorizontal = true;

		// platform1_1 (prefab fields)
		platform1_1.distance = 20;
		platform1_1.timeTravel = 3750;
		platform1_1.isHorizontal = true;

		// catapulta (prefab fields)
		catapulta.power = 420;

		// catapulta_1 (prefab fields)
		catapulta_1.power = 600;

		// gotoLevelWall (prefab fields)
		gotoLevelWall.gotoLevelName = "NewLevel1E";

		this.layer = layer;
		this.player = player;
		this.sampoShooter = sampoShooter;
		this.sampoShooter_1 = sampoShooter_1;
		this.mapa = mapa;
		this.new_level1D = new_level1D;
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

	/** @type {Phaser.Tilemaps.TilemapLayer} */
	layer;
	/** @type {Player} */
	player;
	/** @type {SampoShooter} */
	sampoShooter;
	/** @type {SampoShooter} */
	sampoShooter_1;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {SampoShooter[]} */
	enemies;
	/** @type {Array<Platform2|Platform1>} */
	platforms;
	/** @type {Array<any>} */
	coins;
	/** @type {Catapulta[]} */
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
