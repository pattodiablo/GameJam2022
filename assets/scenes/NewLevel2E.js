
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel2E extends BaseScene {

	constructor() {
		super("NewLevel2E");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level2E");
		mapa.addTilesetImage("new_buildingTiles", "new_buildingTiles");

		// new_level2E
		const new_level2E = this.add.tilemap("new_level2E");
		new_level2E.addTilesetImage("new_buildingTiles", "new_buildingTiles");

		// bgLevel1
		const bgLevel1 = this.add.image(0, 0, "bgLevel1");
		bgLevel1.setOrigin(0, 0);

		// noCollide
		mapa.createLayer("NoCollide", ["new_buildingTiles"], 0, 0);

		// noCollideFX_1
		mapa.createLayer("NoCollideFX", ["new_buildingTiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["new_buildingTiles"], 0, 0);

		// collideFX_1
		new_level2E.createLayer("CollideFX", ["new_buildingTiles"], 0, 0);

		// player
		const player = new Player(this, 107, 868);
		this.add.existing(player);

		// cart
		const cart = new Cart(this, 282, 861);
		this.add.existing(cart);

		// heart
		const heart = new Heart(this, 70, 683);
		this.add.existing(heart);

		// platform2
		const platform2 = new Platform2(this, 287, 661);
		this.add.existing(platform2);

		// platform2_1
		const platform2_1 = new Platform2(this, 544, 661);
		this.add.existing(platform2_1);

		// platform2_1_1
		const platform2_1_1 = new Platform2(this, 801, 661);
		this.add.existing(platform2_1_1);

		// switchPanel
		const switchPanel = new SwitchPanel(this, 887, 191);
		this.add.existing(switchPanel);

		// smallDoor
		const smallDoor = new SmallDoor(this, 111, 35);
		this.add.existing(smallDoor);

		// drone
		const drone = new Drone(this, 799, 56);
		this.add.existing(drone);

		// blobber
		const blobber = new Blobber(this, 783, 296);
		this.add.existing(blobber);

		// blobber_1
		const blobber_1 = new Blobber(this, 525, 295);
		this.add.existing(blobber_1);

		// blobber_1_1
		const blobber_1_1 = new Blobber(this, 80, 296);
		this.add.existing(blobber_1_1);

		// drone_1
		const drone_1 = new Drone(this, 544, 55);
		this.add.existing(drone_1);

		// drone_2
		const drone_2 = new Drone(this, 278, 56);
		this.add.existing(drone_2);

		// catapulta
		const catapulta = new Catapulta(this, 73, 712);
		this.add.existing(catapulta);

		// wallLight
		this.add.image(109, 78, "wallLight");

		// lightBeam
		const lightBeam = new LightBeam(this, 110, 78);
		this.add.existing(lightBeam);

		// wallLight_1
		this.add.image(416, 304, "wallLight");

		// lightBeam_1
		const lightBeam_1 = new LightBeam(this, 416, 305);
		this.add.existing(lightBeam_1);

		// wallLight_2
		this.add.image(673, 305, "wallLight");

		// lightBeam_2
		const lightBeam_2 = new LightBeam(this, 675, 304);
		this.add.existing(lightBeam_2);

		// wallLight_3
		this.add.image(156, 304, "wallLight");

		// lightBeam_3
		const lightBeam_3 = new LightBeam(this, 156, 304);
		this.add.existing(lightBeam_3);

		// wallLight_4
		this.add.image(896, 303, "wallLight");

		// lightBeam_4
		const lightBeam_4 = new LightBeam(this, 896, 303);
		this.add.existing(lightBeam_4);

		// wallLight_5
		this.add.image(111, 752, "wallLight");

		// lightBeam_5
		const lightBeam_5 = new LightBeam(this, 111, 752);
		this.add.existing(lightBeam_5);

		// lists
		const doors = []
		const switches = []
		const enemies = [blobber_1_1, blobber_1, blobber]
		const platforms = [platform2, platform2_1, platform2_1_1]
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// bgLevel1 (components)
		new FixedToCamera(bgLevel1);

		// platform2 (prefab fields)
		platform2.distance = 230;
		platform2.timeTravel = 3500;

		// platform2_1 (prefab fields)
		platform2_1.distance = 230;
		platform2_1.timeTravel = 3500;

		// platform2_1_1 (prefab fields)
		platform2_1_1.distance = 230;
		platform2_1_1.timeTravel = 3500;

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel2F";

		// blobber (prefab fields)
		blobber.travelDistance = 85;

		// blobber_1 (prefab fields)
		blobber_1.travelDistance = 35;

		// blobber_1_1 (prefab fields)
		blobber_1_1.travelDistance = 225;

		// catapulta (prefab fields)
		catapulta.power = 750;

		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.new_level2E = new_level2E;
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
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Blobber[]} */
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
