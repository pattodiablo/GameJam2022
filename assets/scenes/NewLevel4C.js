
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel4C extends BaseScene {

	constructor() {
		super("NewLevel4C");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level4C");
		mapa.addTilesetImage("Invernadero_tiles", "Invernadero_tiles");

		// new_level4C
		const new_level4C = this.add.tilemap("new_level4C");
		new_level4C.addTilesetImage("Invernadero_tiles", "Invernadero_tiles");

		// invernaderoBg
		const invernaderoBg = this.add.image(0, 0, "invernaderoBg");
		invernaderoBg.setOrigin(0, 0);

		// player
		const player = new Player(this, 205, 1370);
		this.add.existing(player);

		// noCollide_1
		mapa.createLayer("NoCollide", ["Invernadero_tiles"], 0, 0);

		// noCollideFX
		mapa.createLayer("NoCollideFX", ["Invernadero_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["Invernadero_tiles"], 0, 0);

		// collideFX_1
		new_level4C.createLayer("CollideFX", ["Invernadero_tiles"], 0, 0);

		// portalCannon
		const portalCannon = new PortalCannon(this, 1814, 1410);
		this.add.existing(portalCannon);
		portalCannon.angle = -90;

		// portalCannon_1
		const portalCannon_1 = new PortalCannon(this, 1500, 1410);
		this.add.existing(portalCannon_1);
		portalCannon_1.angle = -180;

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 400, 655);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 780, 653);
		this.add.existing(sampoShooter_1);

		// sampoShooter_1_1
		const sampoShooter_1_1 = new SampoShooter(this, 1130, 653);
		this.add.existing(sampoShooter_1_1);

		// sampoShooter_1_1_1
		const sampoShooter_1_1_1 = new SampoShooter(this, 1460, 648);
		this.add.existing(sampoShooter_1_1_1);

		// cyberPigeon
		const cyberPigeon = new CyberPigeon(this, 704, 105);
		this.add.existing(cyberPigeon);

		// cyberPigeon_1
		const cyberPigeon_1 = new CyberPigeon(this, 391, 111);
		this.add.existing(cyberPigeon_1);

		// drone
		const drone = new Drone(this, 496, 1176);
		this.add.existing(drone);

		// drone_1
		const drone_1 = new Drone(this, 1074, 1173);
		this.add.existing(drone_1);

		// drone_2
		const drone_2 = new Drone(this, 210, 982);
		this.add.existing(drone_2);

		// drone_3
		const drone_3 = new Drone(this, 1359, 981);
		this.add.existing(drone_3);

		// smallDoor
		const smallDoor = new SmallDoor(this, 144, -31);
		this.add.existing(smallDoor);

		// lists
		const doors = [smallDoor];
		const switches = [];
		const enemies = [sampoShooter, sampoShooter_1, sampoShooter_1_1, sampoShooter_1_1_1, cyberPigeon_1, cyberPigeon];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [];
		const tutorials = [];

		// invernaderoBg (components)
		new FixedToCamera(invernaderoBg);

		// sampoShooter (prefab fields)
		sampoShooter.travelDistance = 1400;

		// sampoShooter_1 (prefab fields)
		sampoShooter_1.travelDistance = 1020;

		// sampoShooter_1_1 (prefab fields)
		sampoShooter_1_1.travelDistance = 670;

		// sampoShooter_1_1_1 (prefab fields)
		sampoShooter_1_1_1.travelDistance = 340;

		// cyberPigeon (prefab fields)
		cyberPigeon.distance = 1100;

		// cyberPigeon_1 (prefab fields)
		cyberPigeon_1.distance = 1400;

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel4D";
		smallDoor.isLocked = false;

		this.player = player;
		this.layer = layer;
		this.sampoShooter = sampoShooter;
		this.sampoShooter_1 = sampoShooter_1;
		this.sampoShooter_1_1 = sampoShooter_1_1;
		this.sampoShooter_1_1_1 = sampoShooter_1_1_1;
		this.cyberPigeon = cyberPigeon;
		this.cyberPigeon_1 = cyberPigeon_1;
		this.mapa = mapa;
		this.new_level4C = new_level4C;
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
	/** @type {SampoShooter} */
	sampoShooter_1_1;
	/** @type {SampoShooter} */
	sampoShooter_1_1_1;
	/** @type {CyberPigeon} */
	cyberPigeon;
	/** @type {CyberPigeon} */
	cyberPigeon_1;
	/** @type {SmallDoor[]} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Array<SampoShooter|CyberPigeon>} */
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
