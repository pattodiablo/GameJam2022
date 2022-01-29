
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel4B extends BaseScene {

	constructor() {
		super("NewLevel4B");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level4B");
		mapa.addTilesetImage("Invernadero_tiles", "Invernadero_tiles");

		// new_level4B
		const new_level4B = this.add.tilemap("new_level4B");
		new_level4B.addTilesetImage("Invernadero_tiles", "Invernadero_tiles");

		// invernaderoBg
		const invernaderoBg = this.add.image(0, 0, "invernaderoBg");
		invernaderoBg.setOrigin(0, 0);

		// noCollide_1
		mapa.createLayer("NoCollide", ["Invernadero_tiles"], 0, 0);

		// damagedDoor_instance_10000
		this.add.image(1743, 798, "propsNew", "damagedDoor instance 10000");

		// noCollideFX
		mapa.createLayer("NoCollideFX", ["Invernadero_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["Invernadero_tiles"], 0, 0);

		// blobber
		const blobber = new Blobber(this, 70, 289);
		this.add.existing(blobber);

		// blobber_1
		const blobber_1 = new Blobber(this, 600, 258);
		this.add.existing(blobber_1);

		// blobber_2
		const blobber_2 = new Blobber(this, 1587, 292);
		this.add.existing(blobber_2);

		// collideFX_1
		new_level4B.createLayer("CollideFX", ["Invernadero_tiles"], 0, 0);

		// player
		const player = new Player(this, 1764, 862);
		this.add.existing(player);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 830, 392);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 988, 586);
		this.add.existing(sampoShooter_1);

		// sampoShooter_2
		const sampoShooter_2 = new SampoShooter(this, 667, 581);
		this.add.existing(sampoShooter_2);

		// sampoShooter_3
		const sampoShooter_3 = new SampoShooter(this, 1626, 516);
		this.add.existing(sampoShooter_3);

		// sampoShooter_4
		const sampoShooter_4 = new SampoShooter(this, 825, 784);
		this.add.existing(sampoShooter_4);

		// sampoShooter_6
		const sampoShooter_6 = new SampoShooter(this, 651, 865);
		this.add.existing(sampoShooter_6);

		// sampoShooter_7
		const sampoShooter_7 = new SampoShooter(this, 1000, 866);
		this.add.existing(sampoShooter_7);

		// sampoShooter_8
		const sampoShooter_8 = new SampoShooter(this, 50, 584);
		this.add.existing(sampoShooter_8);

		// drone
		const drone = new Drone(this, 150, 49);
		this.add.existing(drone);

		// drone_1
		const drone_1 = new Drone(this, 720, 50);
		this.add.existing(drone_1);

		// drone_2
		const drone_2 = new Drone(this, 1046, 49);
		this.add.existing(drone_2);

		// drone_3
		const drone_3 = new Drone(this, 1397, 53);
		this.add.existing(drone_3);

		// gotoLevelWall
		const gotoLevelWall = new GotoLevelWall(this, 1949, 124);
		this.add.existing(gotoLevelWall);

		// toll
		const toll = new Toll(this, 62, 176);
		this.add.existing(toll);

		// sideDoorLocked
		const sideDoorLocked = new SideDoorLocked(this, 1633, 165);
		this.add.existing(sideDoorLocked);
		sideDoorLocked.scaleX = 0.84;
		sideDoorLocked.scaleY = 0.84;

		// energyStation
		const energyStation = new EnergyStation(this, 98, 750);
		this.add.existing(energyStation);

		// heart
		const heart = new Heart(this, 1832, 503);
		this.add.existing(heart);

		// lists
		const doors = [gotoLevelWall];
		const switches = [toll];
		const enemies = [sampoShooter_2, sampoShooter_1, sampoShooter, sampoShooter_3, sampoShooter_4, sampoShooter_8, sampoShooter_7, sampoShooter_6, blobber, blobber_1, blobber_2];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [];
		const tutorials = [];

		// invernaderoBg (components)
		new FixedToCamera(invernaderoBg);

		// blobber (prefab fields)
		blobber.travelDistance = 190;
		blobber.veloBlobber = 50;

		// blobber_1 (prefab fields)
		blobber_1.travelDistance = 550;
		blobber_1.veloBlobber = 50;

		// blobber_2 (prefab fields)
		blobber_2.travelDistance = 190;
		blobber_2.veloBlobber = 50;

		// sampoShooter (prefab fields)
		sampoShooter.travelDistance = 100;

		// sampoShooter_1 (prefab fields)
		sampoShooter_1.travelDistance = 100;

		// sampoShooter_2 (prefab fields)
		sampoShooter_2.travelDistance = 100;

		// sampoShooter_3 (prefab fields)
		sampoShooter_3.travelDistance = 100;

		// sampoShooter_4 (prefab fields)
		sampoShooter_4.travelDistance = 100;

		// sampoShooter_6 (prefab fields)
		sampoShooter_6.travelDistance = 100;

		// sampoShooter_7 (prefab fields)
		sampoShooter_7.travelDistance = 100;

		// sampoShooter_8 (prefab fields)
		sampoShooter_8.travelDistance = 75;

		// gotoLevelWall (prefab fields)
		gotoLevelWall.gotoLevelName = "NewLevel4C";

		this.layer = layer;
		this.player = player;
		this.sampoShooter = sampoShooter;
		this.sampoShooter_1 = sampoShooter_1;
		this.sampoShooter_2 = sampoShooter_2;
		this.sampoShooter_3 = sampoShooter_3;
		this.sampoShooter_4 = sampoShooter_4;
		this.sampoShooter_6 = sampoShooter_6;
		this.sampoShooter_7 = sampoShooter_7;
		this.sampoShooter_8 = sampoShooter_8;
		this.mapa = mapa;
		this.new_level4B = new_level4B;
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
	/** @type {SampoShooter} */
	sampoShooter_2;
	/** @type {SampoShooter} */
	sampoShooter_3;
	/** @type {SampoShooter} */
	sampoShooter_4;
	/** @type {SampoShooter} */
	sampoShooter_6;
	/** @type {SampoShooter} */
	sampoShooter_7;
	/** @type {SampoShooter} */
	sampoShooter_8;
	/** @type {GotoLevelWall[]} */
	doors;
	/** @type {Toll[]} */
	switches;
	/** @type {Array<SampoShooter|Blobber>} */
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
