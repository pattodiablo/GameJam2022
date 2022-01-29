
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel7C extends BaseScene {

	constructor() {
		super("NewLevel7C");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level7C");
		mapa.addTilesetImage("Servidores_tiles", "Servidores_tiles");

		// new_level7C
		const new_level7C = this.add.tilemap("new_level7C");
		new_level7C.addTilesetImage("Servidores_tiles", "Servidores_tiles");

		// tech_back
		const tech_back = this.add.image(0, 0, "tech_back");
		tech_back.setOrigin(0, 0);

		// noCollide_1
		mapa.createLayer("NoCollide", ["Servidores_tiles"], 0, 0);

		// door
		const door = new Door(this, 138, 967);
		this.add.existing(door);
		door.scaleX = 1.25;
		door.scaleY = 1.25;

		// damagedDoor_instance_10000
		this.add.image(1136, 97, "propsNew", "damagedDoor instance 10000");

		// noCollideFX
		mapa.createLayer("NoCollideFX", ["Servidores_tiles"], 0, 0);

		// drone
		const drone = new Drone(this, 720, 868);
		this.add.existing(drone);

		// layer
		const layer = mapa.createLayer("Collide", ["Servidores_tiles"], 0, 0);

		// collideFX_1
		new_level7C.createLayer("CollideFX", ["Servidores_tiles"], 0, 0);

		// energyStation
		const energyStation = new EnergyStation(this, 239, 24);
		this.add.existing(energyStation);

		// activeZoneBoss
		const activeZoneBoss = new ActiveZoneBoss(this, 849, 1110);
		this.add.existing(activeZoneBoss);
		activeZoneBoss.scaleX = 2;
		activeZoneBoss.scaleY = 2;
		activeZoneBoss.alpha = 0;

		// guardBoss
		const guardBoss = new GuardBoss(this, 670, 1141);
		this.add.existing(guardBoss);

		// angrySpin
		const angrySpin = new AngrySpin(this, 418, 584);
		this.add.existing(angrySpin);

		// symbol_25_instance_10000
		const symbol_25_instance_10000 = this.add.image(210, 1145, "propsNew", "Symbol 25 instance 10000");
		symbol_25_instance_10000.scaleX = 1.17;
		symbol_25_instance_10000.scaleY = 1.17;

		// symbol_30_instance_10000
		const symbol_30_instance_10000 = this.add.image(108, 1145, "propsNew", "Symbol 30 instance 10000");
		symbol_30_instance_10000.scaleX = 1.5;
		symbol_30_instance_10000.scaleY = 1.5;

		// player
		const player = new Player(this, 1137, 130);
		this.add.existing(player);

		// heart
		const heart = new Heart(this, 1213, 512);
		this.add.existing(heart);

		// lists
		const doors = [door]
		const switches = []
		const enemies = [guardBoss, angrySpin]
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// tech_back (components)
		new FixedToCamera(tech_back);

		// door (prefab fields)
		door.goToLevel = "NewLevel8";

		// activeZoneBoss (prefab fields)
		activeZoneBoss.isActive = true;
		activeZoneBoss.activateBoss = true;

		// guardBoss (prefab fields)
		guardBoss.ThingToDrop = "PassCard";

		// angrySpin (prefab fields)
		angrySpin.travelDistance = 500;

		this.layer = layer;
		this.activeZoneBoss = activeZoneBoss;
		this.guardBoss = guardBoss;
		this.angrySpin = angrySpin;
		this.player = player;
		this.mapa = mapa;
		this.new_level7C = new_level7C;
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
	/** @type {ActiveZoneBoss} */
	activeZoneBoss;
	/** @type {GuardBoss} */
	guardBoss;
	/** @type {AngrySpin} */
	angrySpin;
	/** @type {Player} */
	player;
	/** @type {Door[]} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Array<GuardBoss|AngrySpin>} */
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
