
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel10Y extends BaseScene {

	constructor() {
		super("NewLevel10Y");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level10Y");
		mapa.addTilesetImage("finalStage", "finalStage");

		// new_level10Y
		const new_level10Y = this.add.tilemap("new_level10Y");
		new_level10Y.addTilesetImage("finalStage", "finalStage");

		// bgLevel1
		const bgLevel1 = this.add.image(153, 110, "bgLevel1");

		// noCollide_1
		mapa.createLayer("NoCollide", ["finalStage"], 0, 0);

		// mainDoor0001
		this.add.image(144, 321, "propsNew", "mainDoor0001");

		// door
		const door = new Door(this, 2977, 24);
		this.add.existing(door);

		// noCollideFX
		mapa.createLayer("NoCollideFX", ["finalStage"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["finalStage"], 0, 0);

		// collideFX_1
		new_level10Y.createLayer("CollideFX", ["finalStage"], 0, 0);

		// player
		const player = new Player(this, 140, 371);
		this.add.existing(player);

		// platform2
		const platform2 = new Platform2(this, 2718, 443);
		this.add.existing(platform2);

		// wallLight
		this.add.image(548, 50, "wallLight");

		// wallLight_1
		this.add.image(688, 50, "wallLight");

		// wallLight_1_1
		this.add.image(823, 50, "wallLight");

		// lightBeam
		const lightBeam = new LightBeam(this, 546, 50);
		this.add.existing(lightBeam);

		// lightBeam_1
		const lightBeam_1 = new LightBeam(this, 685, 50);
		this.add.existing(lightBeam_1);

		// lightBeam_2
		const lightBeam_2 = new LightBeam(this, 821, 50);
		this.add.existing(lightBeam_2);

		// energyStation
		const energyStation = new EnergyStation(this, 689, 214);
		this.add.existing(energyStation);

		// lists
		const doors = [door]
		const switches = []
		const enemies = []
		const platforms = [platform2]
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// bgLevel1 (components)
		new FixedToCamera(bgLevel1);

		// door (prefab fields)
		door.goToLevel = "NewLevel10X";
		door.isLocked = false;

		// platform2 (prefab fields)
		platform2.distance = 188;
		platform2.timeTravel = 3500;

		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.new_level10Y = new_level10Y;
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
	/** @type {Door[]} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Array<any>} */
	enemies;
	/** @type {Platform2[]} */
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
