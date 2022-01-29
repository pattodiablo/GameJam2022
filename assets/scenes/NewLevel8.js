
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel8 extends BaseScene {

	constructor() {
		super("NewLevel8");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level8");
		mapa.addTilesetImage("Servidores_tiles", "Servidores_tiles");

		// new_level8
		const new_level8 = this.add.tilemap("new_level8");
		new_level8.addTilesetImage("Servidores_tiles", "Servidores_tiles");

		// tech_back
		const tech_back = this.add.image(0, 0, "tech_back");
		tech_back.setOrigin(0, 0);

		// noCollide_1
		mapa.createLayer("NoCollide", ["Servidores_tiles"], 0, 0);

		// mainDoor0000
		const mainDoor0000 = this.add.image(639, 149, "propsNew", "mainDoor0000");
		mainDoor0000.scaleX = 1.23;
		mainDoor0000.scaleY = 1.23;

		// smallDoor
		const smallDoor = new SmallDoor(this, 143, 898);
		this.add.existing(smallDoor);

		// smallDoor_1
		const smallDoor_1 = new SmallDoor(this, 1135, 899);
		this.add.existing(smallDoor_1);

		// noCollideFX
		mapa.createLayer("NoCollideFX", ["Servidores_tiles"], 0, 0);

		// energyStation
		const energyStation = new EnergyStation(this, 640, 409);
		this.add.existing(energyStation);

		// layer
		const layer = mapa.createLayer("Collide", ["Servidores_tiles"], 0, 0);

		// collideFX_1
		new_level8.createLayer("CollideFX", ["Servidores_tiles"], 0, 0);

		// player
		const player = new Player(this, 644, 179);
		this.add.existing(player);

		// switchPanel
		const switchPanel = new SwitchPanel(this, 606, 874);
		this.add.existing(switchPanel);

		// switchPanel_1
		const switchPanel_1 = new SwitchPanel(this, 702, 874);
		this.add.existing(switchPanel_1);

		// drone
		const drone = new Drone(this, 655, 1012);
		this.add.existing(drone);

		// heart
		const heart = new Heart(this, 577, 1081);
		this.add.existing(heart);

		// heart_1
		const heart_1 = new Heart(this, 736, 1085);
		this.add.existing(heart_1);

		// symbol_24_instance_10000
		const symbol_24_instance_10000 = this.add.image(134, 989, "propsNew", "Symbol 24 instance 10000");
		symbol_24_instance_10000.scaleX = 0.6;
		symbol_24_instance_10000.scaleY = 0.6;

		// symbol_30_instance_20000
		const symbol_30_instance_20000 = this.add.image(153, 990, "propsNew", "Symbol 30 instance 20000");
		symbol_30_instance_20000.scaleX = 0.7;
		symbol_30_instance_20000.scaleY = 0.7;

		// symbol_30_instance_10000
		const symbol_30_instance_10000 = this.add.image(1156, 987, "propsNew", "Symbol 30 instance 10000");
		symbol_30_instance_10000.scaleX = 0.7;
		symbol_30_instance_10000.scaleY = 0.7;

		// symbol_25_instance_10000
		const symbol_25_instance_10000 = this.add.image(1118, 987, "propsNew", "Symbol 25 instance 10000");
		symbol_25_instance_10000.scaleX = 0.55;
		symbol_25_instance_10000.scaleY = 0.55;

		// a_instance_10000
		this.add.image(1137, 987, "propsNew", "a instance 10000");

		// angrySpin
		const angrySpin = new AngrySpin(this, 1051, 717);
		this.add.existing(angrySpin);

		// angrySpin_1
		const angrySpin_1 = new AngrySpin(this, 692, 713);
		this.add.existing(angrySpin_1);

		// angrySpin_2
		const angrySpin_2 = new AngrySpin(this, 300, 719);
		this.add.existing(angrySpin_2);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 50, 393);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 1083, 392);
		this.add.existing(sampoShooter_1);

		// lists
		const doors = [smallDoor]
		const switches = [switchPanel_1, switchPanel]
		const enemies = [angrySpin, angrySpin_2, angrySpin_1, sampoShooter, sampoShooter_1]
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// tech_back (components)
		new FixedToCamera(tech_back);

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel7";

		// smallDoor_1 (prefab fields)
		smallDoor_1.goToLevel = "NewLevel8A";
		smallDoor_1.doorID = "2";

		// switchPanel_1 (prefab fields)
		switchPanel_1.doorID = 2;

		// sampoShooter (prefab fields)
		sampoShooter.travelDistance = 148;

		// sampoShooter_1 (prefab fields)
		sampoShooter_1.travelDistance = 148;

		this.layer = layer;
		this.player = player;
		this.angrySpin = angrySpin;
		this.angrySpin_1 = angrySpin_1;
		this.angrySpin_2 = angrySpin_2;
		this.sampoShooter = sampoShooter;
		this.sampoShooter_1 = sampoShooter_1;
		this.mapa = mapa;
		this.new_level8 = new_level8;
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
	/** @type {AngrySpin} */
	angrySpin;
	/** @type {AngrySpin} */
	angrySpin_1;
	/** @type {AngrySpin} */
	angrySpin_2;
	/** @type {SampoShooter} */
	sampoShooter;
	/** @type {SampoShooter} */
	sampoShooter_1;
	/** @type {SmallDoor[]} */
	doors;
	/** @type {SwitchPanel[]} */
	switches;
	/** @type {Array<AngrySpin|SampoShooter>} */
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
