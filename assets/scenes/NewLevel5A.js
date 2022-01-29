
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel5A extends BaseScene {

	constructor() {
		super("NewLevel5A");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level5A");
		mapa.addTilesetImage("Laboratorio_tiles", "Laboratorio_tiles");

		// new_level5A
		const new_level5A = this.add.tilemap("new_level5A");
		new_level5A.addTilesetImage("Laboratorio_tiles", "Laboratorio_tiles");

		// invernaderoBg
		const invernaderoBg = this.add.image(0, 0, "invernaderoBg");
		invernaderoBg.setOrigin(0, 0);

		// player
		const player = new Player(this, 129, 1450);
		this.add.existing(player);

		// nocollide_1
		mapa.createLayer("nocollide", ["Laboratorio_tiles"], 0, 0);

		// nocollideFx
		mapa.createLayer("nocollideFx", ["Laboratorio_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("collide", ["Laboratorio_tiles"], 0, 0);

		// collideFx_1
		new_level5A.createLayer("collideFx", ["Laboratorio_tiles"], 0, 0);

		// platform2
		const platform2 = new Platform2(this, 623, 1517);
		this.add.existing(platform2);

		// catapulta
		const catapulta = new Catapulta(this, 170, 1254);
		this.add.existing(catapulta);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 402, 1506);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 811, 1500);
		this.add.existing(sampoShooter_1);

		// catapulta_1
		const catapulta_1 = new Catapulta(this, 553, 961);
		this.add.existing(catapulta_1);

		// drone
		const drone = new Drone(this, 795, 1073);
		this.add.existing(drone);

		// misile
		const misile = new Misile(this, 1738, 1188);
		this.add.existing(misile);

		// misile_1
		const misile_1 = new Misile(this, 1860, 547);
		this.add.existing(misile_1);

		// blobber
		const blobber = new Blobber(this, 500, 1074);
		this.add.existing(blobber);

		// blobber_1
		const blobber_1 = new Blobber(this, 80, 792);
		this.add.existing(blobber_1);
		blobber_1.angle = -90;

		// smallDoor
		const smallDoor = new SmallDoor(this, 94, 162);
		this.add.existing(smallDoor);

		// sampoShooter_2
		const sampoShooter_2 = new SampoShooter(this, 950, 639);
		this.add.existing(sampoShooter_2);

		// sampoShooter_3
		const sampoShooter_3 = new SampoShooter(this, 1416, 638);
		this.add.existing(sampoShooter_3);

		// platform1
		const platform1 = new Platform1(this, 1529, 1292);
		this.add.existing(platform1);

		// energyStation
		const energyStation = new EnergyStation(this, 1440, 61);
		this.add.existing(energyStation);

		// switchPanel
		const switchPanel = new SwitchPanel(this, 1296, 1473);
		this.add.existing(switchPanel);

		// blobber_2
		const blobber_2 = new Blobber(this, 1278, 751);
		this.add.existing(blobber_2);

		// platform1_1
		const platform1_1 = new Platform1(this, 1416, 1137);
		this.add.existing(platform1_1);

		// catapulta_2
		const catapulta_2 = new Catapulta(this, 1279, 640);
		this.add.existing(catapulta_2);

		// cyberPigeon
		const cyberPigeon = new CyberPigeon(this, 1289, 834);
		this.add.existing(cyberPigeon);

		// blobber_3
		const blobber_3 = new Blobber(this, 779, 428);
		this.add.existing(blobber_3);

		// heart
		const heart = new Heart(this, 1516, 793);
		this.add.existing(heart);

		// handPointer
		const handPointer = new HandPointer(this, 246, 1437);
		this.add.existing(handPointer);

		// angrySpin
		const angrySpin = new AngrySpin(this, 566, 306);
		this.add.existing(angrySpin);

		// misile_2
		const misile_2 = new Misile(this, 1678, 1488);
		this.add.existing(misile_2);

		// lists
		const doors = [smallDoor];
		const switches = [switchPanel];
		const enemies = [sampoShooter, sampoShooter_1, drone, misile, misile_1, blobber, blobber_1, sampoShooter_3, sampoShooter_2, blobber_2, cyberPigeon, blobber_3];
		const platforms = [platform2, platform1, platform1_1];
		const coins = [];
		const catapultas = [catapulta_2, catapulta_1, catapulta];
		const revivingPods = [];
		const tutorials = [];

		// invernaderoBg (components)
		new FixedToCamera(invernaderoBg);

		// platform2 (prefab fields)
		platform2.distance = 300;

		// catapulta (prefab fields)
		catapulta.power = 600;

		// catapulta_1 (prefab fields)
		catapulta_1.power = 500;

		// blobber_1 (prefab fields)
		blobber_1.isVertical = true;

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel5B";

		// platform1 (prefab fields)
		platform1.isHorizontal = true;

		// platform1_1 (prefab fields)
		platform1_1.isHorizontal = true;

		// catapulta_2 (prefab fields)
		catapulta_2.power = 500;

		// cyberPigeon (prefab fields)
		cyberPigeon.distance = 100;

		this.player = player;
		this.layer = layer;
		this.mapa = mapa;
		this.new_level5A = new_level5A;
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
	/** @type {SmallDoor[]} */
	doors;
	/** @type {SwitchPanel[]} */
	switches;
	/** @type {Array<SampoShooter|Drone|Misile|Blobber|CyberPigeon>} */
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
