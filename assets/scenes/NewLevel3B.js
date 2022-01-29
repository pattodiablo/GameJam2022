
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel3B extends BaseScene {

	constructor() {
		super("NewLevel3B");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level3B");
		mapa.addTilesetImage("Invernadero_tiles", "Invernadero_tiles");

		// new_level3B
		const new_level3B = this.add.tilemap("new_level3B");
		new_level3B.addTilesetImage("Invernadero_tiles", "Invernadero_tiles");

		// invernaderoBg
		const invernaderoBg = this.add.image(0, 0, "invernaderoBg");
		invernaderoBg.setOrigin(0, 0);

		// noCollide
		mapa.createLayer("NoCollide", ["Invernadero_tiles"], 0, 0);

		// closedDoor_instance_10000
		const closedDoor_instance_10000 = this.add.image(141, 673, "props", "closedDoor instance 10000");
		closedDoor_instance_10000.scaleX = 0.66;
		closedDoor_instance_10000.scaleY = 0.66;

		// noCollideFX_1
		mapa.createLayer("NoCollideFX", ["Invernadero_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["Invernadero_tiles"], 0, 0);

		// collideFX_1
		new_level3B.createLayer("CollideFX", ["Invernadero_tiles"], 0, 0);

		// player
		const player = new Player(this, 139, 697);
		this.add.existing(player);

		// drone
		const drone = new Drone(this, 463, 53);
		this.add.existing(drone);

		// drone_1
		const drone_1 = new Drone(this, 788, 54);
		this.add.existing(drone_1);

		// blobber
		const blobber = new Blobber(this, 115, 239);
		this.add.existing(blobber);

		// blobber_1
		const blobber_1 = new Blobber(this, 434, 239);
		this.add.existing(blobber_1);

		// blobber_1_1
		const blobber_1_1 = new Blobber(this, 751, 239);
		this.add.existing(blobber_1_1);

		// blobber_1_2
		const blobber_1_2 = new Blobber(this, 274, 432);
		this.add.existing(blobber_1_2);

		// blobber_1_3
		const blobber_1_3 = new Blobber(this, 591, 432);
		this.add.existing(blobber_1_3);

		// blobber_1_4
		const blobber_1_4 = new Blobber(this, 913, 432);
		this.add.existing(blobber_1_4);

		// heart
		const heart = new Heart(this, 146, 319);
		this.add.existing(heart);

		// wallLight
		this.add.image(143, 592, "wallLight");

		// lightBeam
		const lightBeam = new LightBeam(this, 143, 592);
		this.add.existing(lightBeam);

		// wallLight_1
		const wallLight_1 = this.add.image(465, 668, "wallLight");
		wallLight_1.angle = 90;

		// wallLight_1_1
		const wallLight_1_1 = this.add.image(783, 668, "wallLight");
		wallLight_1_1.angle = 90;

		// wallLight_1_2
		const wallLight_1_2 = this.add.image(1105, 668, "wallLight");
		wallLight_1_2.angle = 90;

		// lightBeam_1
		const lightBeam_1 = new LightBeam(this, 465, 668);
		this.add.existing(lightBeam_1);
		lightBeam_1.angle = 90;

		// lightBeam_1_1
		const lightBeam_1_1 = new LightBeam(this, 784, 668);
		this.add.existing(lightBeam_1_1);
		lightBeam_1_1.angle = 90;

		// lightBeam_1_2
		const lightBeam_1_2 = new LightBeam(this, 1106, 668);
		this.add.existing(lightBeam_1_2);
		lightBeam_1_2.angle = 90;

		// handPointer
		const handPointer = new HandPointer(this, 212, 88);
		this.add.existing(handPointer);
		handPointer.angle = -90;

		// smallDoor
		const smallDoor = new SmallDoor(this, 142, 3);
		this.add.existing(smallDoor);

		// switchPanel
		const switchPanel = new SwitchPanel(this, 1061, 166);
		this.add.existing(switchPanel);

		// wallLight_2
		this.add.image(142, 48, "wallLight");

		// lightBeam_2
		const lightBeam_2 = new LightBeam(this, 142, 48);
		this.add.existing(lightBeam_2);

		// lists
		const doors = [smallDoor]
		const switches = [switchPanel]
		const enemies = [drone, blobber, blobber_1, blobber_1_4, blobber_1_3, blobber_1_2]
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// invernaderoBg (components)
		new FixedToCamera(invernaderoBg);

		// blobber (prefab fields)
		blobber.travelDistance = 55;

		// blobber_1 (prefab fields)
		blobber_1.travelDistance = 55;

		// blobber_1_1 (prefab fields)
		blobber_1_1.travelDistance = 55;

		// blobber_1_2 (prefab fields)
		blobber_1_2.travelDistance = 55;

		// blobber_1_3 (prefab fields)
		blobber_1_3.travelDistance = 55;

		// blobber_1_4 (prefab fields)
		blobber_1_4.travelDistance = 55;

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel3C";

		this.layer = layer;
		this.player = player;
		this.blobber = blobber;
		this.blobber_1 = blobber_1;
		this.blobber_1_1 = blobber_1_1;
		this.blobber_1_2 = blobber_1_2;
		this.blobber_1_3 = blobber_1_3;
		this.blobber_1_4 = blobber_1_4;
		this.mapa = mapa;
		this.new_level3B = new_level3B;
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
	/** @type {Blobber} */
	blobber;
	/** @type {Blobber} */
	blobber_1;
	/** @type {Blobber} */
	blobber_1_1;
	/** @type {Blobber} */
	blobber_1_2;
	/** @type {Blobber} */
	blobber_1_3;
	/** @type {Blobber} */
	blobber_1_4;
	/** @type {SmallDoor[]} */
	doors;
	/** @type {SwitchPanel[]} */
	switches;
	/** @type {Array<Drone|Blobber>} */
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
