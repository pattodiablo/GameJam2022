
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel7X extends BaseScene {

	constructor() {
		super("NewLevel7X");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level7X");
		mapa.addTilesetImage("Servidores_tiles", "Servidores_tiles");

		// new_level7X
		const new_level7X = this.add.tilemap("new_level7X");
		new_level7X.addTilesetImage("Servidores_tiles", "Servidores_tiles");

		// tech_back
		const tech_back = this.add.image(0, 0, "tech_back");
		tech_back.setOrigin(0, 0);

		// noCollide_1
		mapa.createLayer("NoCollide", ["Servidores_tiles"], 0, 0);

		// smallDoor
		const smallDoor = new SmallDoor(this, 143, 99);
		this.add.existing(smallDoor);

		// mainDoor0000
		const mainDoor0000 = this.add.image(800, 1109, "propsNew", "mainDoor0000");
		mainDoor0000.scaleX = 1.2;
		mainDoor0000.scaleY = 1.2;

		// noCollideFX
		mapa.createLayer("NoCollideFX", ["Servidores_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["Servidores_tiles"], 0, 0);

		// collideFX_1
		new_level7X.createLayer("CollideFX", ["Servidores_tiles"], 0, 0);

		// player
		const player = new Player(this, 820, 1167);
		this.add.existing(player);

		// energyStation
		const energyStation = new EnergyStation(this, 1103, 1047);
		this.add.existing(energyStation);

		// switchPanel
		const switchPanel = new SwitchPanel(this, 1856, 235);
		this.add.existing(switchPanel);

		// platform1
		const platform1 = new Platform1(this, 557, 1173);
		this.add.existing(platform1);

		// platform1_1
		const platform1_1 = new Platform1(this, 1818, 1173);
		this.add.existing(platform1_1);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 1440, 964);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 1434, 645);
		this.add.existing(sampoShooter_1);

		// sampoShooter_2
		const sampoShooter_2 = new SampoShooter(this, 316, 551);
		this.add.existing(sampoShooter_2);

		// sampoShooter_3
		const sampoShooter_3 = new SampoShooter(this, 989, 548);
		this.add.existing(sampoShooter_3);

		// sampoShooter_3_1
		const sampoShooter_3_1 = new SampoShooter(this, 730, 390);
		this.add.existing(sampoShooter_3_1);

		// sampoShooter_3_2
		const sampoShooter_3_2 = new SampoShooter(this, 440, 907);
		this.add.existing(sampoShooter_3_2);

		// sampoShooter_3_2_1
		const sampoShooter_3_2_1 = new SampoShooter(this, 1047, 903);
		this.add.existing(sampoShooter_3_2_1);

		// sampoShooter_3_1_1
		const sampoShooter_3_1_1 = new SampoShooter(this, 1599, 252);
		this.add.existing(sampoShooter_3_1_1);

		// blobber
		const blobber = new Blobber(this, 690, 1040);
		this.add.existing(blobber);

		// drone
		const drone = new Drone(this, 802, 467);
		this.add.existing(drone);

		// lists
		const doors = [smallDoor]
		const switches = []
		const enemies = [sampoShooter, sampoShooter_1, sampoShooter_2, sampoShooter_3, sampoShooter_3_1, sampoShooter_3_2_1, sampoShooter_3_2, sampoShooter_3_1_1, blobber]
		const platforms = [platform1, platform1_1]
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// tech_back (components)
		new FixedToCamera(tech_back);

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel7C";

		// platform1 (prefab fields)
		platform1.distance = 1000;
		platform1.timeTravel = 8000;
		platform1.isHorizontal = true;

		// platform1_1 (prefab fields)
		platform1_1.distance = 1000;
		platform1_1.timeTravel = 8000;
		platform1_1.isHorizontal = true;

		// sampoShooter (prefab fields)
		sampoShooter.travelDistance = 300;

		// sampoShooter_1 (prefab fields)
		sampoShooter_1.travelDistance = 300;

		// sampoShooter_2 (prefab fields)
		sampoShooter_2.travelDistance = 300;

		// sampoShooter_3 (prefab fields)
		sampoShooter_3.travelDistance = 300;

		// sampoShooter_3_1 (prefab fields)
		sampoShooter_3_1.travelDistance = 130;

		// sampoShooter_3_2 (prefab fields)
		sampoShooter_3_2.travelDistance = 120;

		// sampoShooter_3_2_1 (prefab fields)
		sampoShooter_3_2_1.travelDistance = 120;

		// sampoShooter_3_1_1 (prefab fields)
		sampoShooter_3_1_1.travelDistance = 130;

		// blobber (prefab fields)
		blobber.travelDistance = 210;
		blobber.veloBlobber = 50;

		this.layer = layer;
		this.player = player;
		this.sampoShooter = sampoShooter;
		this.sampoShooter_1 = sampoShooter_1;
		this.sampoShooter_2 = sampoShooter_2;
		this.sampoShooter_3 = sampoShooter_3;
		this.sampoShooter_3_1 = sampoShooter_3_1;
		this.sampoShooter_3_2 = sampoShooter_3_2;
		this.sampoShooter_3_2_1 = sampoShooter_3_2_1;
		this.sampoShooter_3_1_1 = sampoShooter_3_1_1;
		this.mapa = mapa;
		this.new_level7X = new_level7X;
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
	sampoShooter_3_1;
	/** @type {SampoShooter} */
	sampoShooter_3_2;
	/** @type {SampoShooter} */
	sampoShooter_3_2_1;
	/** @type {SampoShooter} */
	sampoShooter_3_1_1;
	/** @type {SmallDoor[]} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Array<SampoShooter|Blobber>} */
	enemies;
	/** @type {Platform1[]} */
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
