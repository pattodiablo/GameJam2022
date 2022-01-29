
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel1X extends BaseScene {

	constructor() {
		super("NewLevel1X");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level1X");
		mapa.addTilesetImage("new_buildingTiles", "new_buildingTiles");

		// new_level1X
		const new_level1X = this.add.tilemap("new_level1X");
		new_level1X.addTilesetImage("new_buildingTiles", "new_buildingTiles");

		// bgLevel1
		const bgLevel1 = this.add.image(0, 0, "bgLevel1");
		bgLevel1.setOrigin(0, 0);

		// nocollide2
		mapa.createLayer("nocollide2", ["new_buildingTiles"], 0, 0);

		// nocollide_1
		mapa.createLayer("nocollide", ["new_buildingTiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("collide", ["new_buildingTiles"], 0, 0);

		// collideFX_1
		new_level1X.createLayer("collideFX", ["new_buildingTiles"], 0, 0);

		// wallLight
		this.add.image(673, 340, "wallLight");

		// lightBeam
		const lightBeam = new LightBeam(this, 674, 340);
		this.add.existing(lightBeam);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 291, 808);
		this.add.existing(sampoShooter);

		// catapulta
		const catapulta = new Catapulta(this, 85, 813);
		this.add.existing(catapulta);

		// door
		const door = new Door(this, 544, 279);
		this.add.existing(door);

		// symbol_19_instance_10000
		this.add.image(602, 400, "propsNew", "Symbol 19 instance 10000");

		// symbol_30_instance_10000
		this.add.image(602, 458, "propsNew", "Symbol 30 instance 10000");

		// smallDoor
		const smallDoor = new SmallDoor(this, 240, 835);
		this.add.existing(smallDoor);

		// rocoPop
		this.add.image(94, 970, "rocoPop");

		// wallLight_1
		this.add.image(337, 911, "wallLight");

		// lightBeam_1
		const lightBeam_1 = new LightBeam(this, 335, 910);
		this.add.existing(lightBeam_1);

		// switchPanel
		const switchPanel = new SwitchPanel(this, 337, 995);
		this.add.existing(switchPanel);

		// player
		const player = new Player(this, 103, 1003);
		this.add.existing(player);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 1205, 981);
		this.add.existing(sampoShooter_1);

		// idle_instance_10000
		const idle_instance_10000 = new Drone(this, 814, 377);
		this.add.existing(idle_instance_10000);

		// blobberIdle_instance_10000
		const blobberIdle_instance_10000 = new Blobber(this, 663, 724);
		this.add.existing(blobberIdle_instance_10000);

		// lists
		const doors = [smallDoor]
		const switches = [switchPanel]
		const enemies = [sampoShooter, idle_instance_10000, blobberIdle_instance_10000]
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// bgLevel1 (components)
		new FixedToCamera(bgLevel1);

		// sampoShooter (prefab fields)
		sampoShooter.travelDistance = 100;

		// door (prefab fields)
		door.goToLevel = "NewLevel2";
		door.desde = 1;
		door.hasta = 2;

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel1Y";
		smallDoor.showScore = false;

		// blobberIdle_instance_10000 (prefab fields)
		blobberIdle_instance_10000.travelDistance = 200;

		this.bgLevel1 = bgLevel1;
		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.new_level1X = new_level1X;
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
	/** @type {SmallDoor[]} */
	doors;
	/** @type {SwitchPanel[]} */
	switches;
	/** @type {Array<SampoShooter|Drone|Blobber>} */
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
