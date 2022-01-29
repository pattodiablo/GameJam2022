
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel3E extends BaseScene {

	constructor() {
		super("NewLevel3E");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level3E");
		mapa.addTilesetImage("Invernadero_tiles", "Invernadero_tiles");

		// new_level3E
		const new_level3E = this.add.tilemap("new_level3E");
		new_level3E.addTilesetImage("Invernadero_tiles", "Invernadero_tiles");

		// invernaderoBg
		const invernaderoBg = this.add.image(0, 0, "invernaderoBg");
		invernaderoBg.setOrigin(0, 0);

		// noCollide
		mapa.createLayer("NoCollide", ["Invernadero_tiles"], 0, 0);

		// closedDoor_instance_10000
		const closedDoor_instance_10000 = this.add.image(1070, 671, "props", "closedDoor instance 10000");
		closedDoor_instance_10000.scaleX = 0.67;
		closedDoor_instance_10000.scaleY = 0.67;

		// noCollideFX_1
		mapa.createLayer("NoCollideFX", ["Invernadero_tiles"], 0, 0);

		// stomper
		const stomper = new Stomper(this, 369, -43);
		this.add.existing(stomper);

		// stomper_1
		const stomper_1 = new Stomper(this, 688, -43);
		this.add.existing(stomper_1);

		// stomper_1_1
		const stomper_1_1 = new Stomper(this, 1008, -43);
		this.add.existing(stomper_1_1);

		// layer
		const layer = mapa.createLayer("Collide", ["Invernadero_tiles"], 0, 0);

		// collideFX_1
		new_level3E.createLayer("CollideFX", ["Invernadero_tiles"], 0, 0);

		// player
		const player = new Player(this, 1064, 677);
		this.add.existing(player);

		// smallDoor
		const smallDoor = new SmallDoor(this, 112, 1);
		this.add.existing(smallDoor);

		// portalCannon
		const portalCannon = new PortalCannon(this, 65, 246);
		this.add.existing(portalCannon);
		portalCannon.angle = 90;
		portalCannon.tintBottomLeft = 16700885;

		// blobber_1
		const blobber_1 = new Blobber(this, 275, 206);
		this.add.existing(blobber_1);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 160, 252);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 320, 252);
		this.add.existing(sampoShooter_1);

		// sampoShooter_1_1
		const sampoShooter_1_1 = new SampoShooter(this, 480, 252);
		this.add.existing(sampoShooter_1_1);

		// sampoShooter_1_1_1
		const sampoShooter_1_1_1 = new SampoShooter(this, 640, 252);
		this.add.existing(sampoShooter_1_1_1);

		// sampoShooter_1_1_1_1
		const sampoShooter_1_1_1_1 = new SampoShooter(this, 800, 252);
		this.add.existing(sampoShooter_1_1_1_1);

		// sampoShooter_1_1_1_1_1
		const sampoShooter_1_1_1_1_1 = new SampoShooter(this, 960, 252);
		this.add.existing(sampoShooter_1_1_1_1_1);

		// drone
		const drone = new Drone(this, 1105, 405);
		this.add.existing(drone);

		// drone_1
		const drone_1 = new Drone(this, 465, 405);
		this.add.existing(drone_1);

		// heart
		const heart = new Heart(this, 1030, 451);
		this.add.existing(heart);

		// handPointer
		const handPointer = new HandPointer(this, 917, 688);
		this.add.existing(handPointer);
		handPointer.scaleX = -1;

		// portalCannon_1
		const portalCannon_1 = new PortalCannon(this, 66, 398);
		this.add.existing(portalCannon_1);
		portalCannon_1.angle = 90;
		portalCannon_1.tintBottomLeft = 16700885;

		// lists
		const doors = []
		const switches = []
		const enemies = [blobber_1, sampoShooter, sampoShooter_1, sampoShooter_1_1, sampoShooter_1_1_1, sampoShooter_1_1_1_1, sampoShooter_1_1_1_1_1]
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// invernaderoBg (components)
		new FixedToCamera(invernaderoBg);

		// stomper (prefab fields)
		stomper.retardo = 2000;

		// stomper_1 (prefab fields)
		stomper_1.retardo = 1500;

		// stomper_1_1 (prefab fields)
		stomper_1_1.retardo = 1500;

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel3F";
		smallDoor.isLocked = false;

		// blobber_1 (prefab fields)
		blobber_1.travelDistance = 845;
		blobber_1.veloBlobber = 100;

		// sampoShooter (prefab fields)
		sampoShooter.travelDistance = 150;

		// sampoShooter_1 (prefab fields)
		sampoShooter_1.travelDistance = 150;

		// sampoShooter_1_1 (prefab fields)
		sampoShooter_1_1.travelDistance = 150;

		// sampoShooter_1_1_1 (prefab fields)
		sampoShooter_1_1_1.travelDistance = 150;

		// sampoShooter_1_1_1_1 (prefab fields)
		sampoShooter_1_1_1_1.travelDistance = 150;

		// sampoShooter_1_1_1_1_1 (prefab fields)
		sampoShooter_1_1_1_1_1.travelDistance = 150;

		// portalCannon_1 (prefab fields)
		portalCannon_1.IsFirstCannon = true;

		this.layer = layer;
		this.player = player;
		this.blobber_1 = blobber_1;
		this.sampoShooter = sampoShooter;
		this.sampoShooter_1 = sampoShooter_1;
		this.sampoShooter_1_1 = sampoShooter_1_1;
		this.sampoShooter_1_1_1 = sampoShooter_1_1_1;
		this.sampoShooter_1_1_1_1 = sampoShooter_1_1_1_1;
		this.sampoShooter_1_1_1_1_1 = sampoShooter_1_1_1_1_1;
		this.mapa = mapa;
		this.new_level3E = new_level3E;
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
	blobber_1;
	/** @type {SampoShooter} */
	sampoShooter;
	/** @type {SampoShooter} */
	sampoShooter_1;
	/** @type {SampoShooter} */
	sampoShooter_1_1;
	/** @type {SampoShooter} */
	sampoShooter_1_1_1;
	/** @type {SampoShooter} */
	sampoShooter_1_1_1_1;
	/** @type {SampoShooter} */
	sampoShooter_1_1_1_1_1;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Array<Blobber|SampoShooter>} */
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
