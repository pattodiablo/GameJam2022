
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel6C extends BaseScene {

	constructor() {
		super("NewLevel6C");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level6C");
		mapa.addTilesetImage("Laboratorio_tiles", "Laboratorio_tiles");

		// new_level6C_1
		const new_level6C_1 = this.add.tilemap("new_level6C");
		new_level6C_1.addTilesetImage("Laboratorio_tiles", "Laboratorio_tiles");

		// invernaderoBg
		const invernaderoBg = this.add.image(0, 0, "invernaderoBg");
		invernaderoBg.setOrigin(0, 0);

		// noCollide_1
		mapa.createLayer("NoCollide", ["Laboratorio_tiles"], 0, 0);

		// noCollideFX
		mapa.createLayer("NoCollideFX", ["Laboratorio_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["Laboratorio_tiles"], 0, 0);

		// backJetPackStation
		this.add.image(180, 536, "backJetPackStation");

		// supaJet
		const supaJet = new SupaJet(this, 181, 525);
		this.add.existing(supaJet);

		// damagedDoor_instance_10000
		this.add.image(206, 351, "propsNew", "damagedDoor instance 10000");

		// collideFX_1
		new_level6C_1.createLayer("CollideFX", ["Laboratorio_tiles"], 0, 0);

		// player
		const player = new Player(this, 180, 389);
		this.add.existing(player);

		// switchPanel
		const switchPanel = new SwitchPanel(this, 3119, 522);
		this.add.existing(switchPanel);

		// smallDoor
		const smallDoor = new SmallDoor(this, 3119, 99);
		this.add.existing(smallDoor);

		// sideDoorLocked
		const sideDoorLocked = new SideDoorLocked(this, 2943, 515);
		this.add.existing(sideDoorLocked);
		sideDoorLocked.scaleX = 0.77;
		sideDoorLocked.scaleY = 0.77;
		sideDoorLocked.tintTopLeft = 15612474;
		sideDoorLocked.tintTopRight = 15347503;
		sideDoorLocked.tintBottomLeft = 16218746;
		sideDoorLocked.tintBottomRight = 16490041;

		// toll
		const toll = new Toll(this, 3118, 402);
		this.add.existing(toll);

		// platform2
		const platform2 = new Platform2(this, 2856, 590);
		this.add.existing(platform2);

		// drone
		const drone = new Drone(this, 1760, 50);
		this.add.existing(drone);

		// drone_2
		const drone_2 = new Drone(this, 1057, 50);
		this.add.existing(drone_2);

		// cyberPigeon
		const cyberPigeon = new CyberPigeon(this, 70, 107);
		this.add.existing(cyberPigeon);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 825, 235);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 1303, 521);
		this.add.existing(sampoShooter_1);

		// sampoShooter_2
		const sampoShooter_2 = new SampoShooter(this, 2006, 104);
		this.add.existing(sampoShooter_2);

		// energyStation
		const energyStation = new EnergyStation(this, 2095, -10);
		this.add.existing(energyStation);

		// cyberPigeon_1
		const cyberPigeon_1 = new CyberPigeon(this, 2455, 109);
		this.add.existing(cyberPigeon_1);

		// energyStation_1
		const energyStation_1 = new EnergyStation(this, 63, 277);
		this.add.existing(energyStation_1);

		// lists
		const doors = [smallDoor, sideDoorLocked]
		const switches = [switchPanel]
		const enemies = [drone, drone_2, cyberPigeon, sampoShooter, sampoShooter_1, sampoShooter_2, cyberPigeon_1]
		const platforms = [platform2]
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// invernaderoBg (components)
		new FixedToCamera(invernaderoBg);

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel6D";

		// sideDoorLocked (prefab fields)
		sideDoorLocked.LockedBy = "toll1";
		sideDoorLocked.doorID = "2";

		// toll (prefab fields)
		toll.tollCost = 300;
		toll.LockId = "toll1";

		// platform2 (prefab fields)
		platform2.distance = 310;
		platform2.timeTravel = 4000;

		// cyberPigeon (prefab fields)
		cyberPigeon.distance = 730;

		// sampoShooter (prefab fields)
		sampoShooter.travelDistance = 220;

		// sampoShooter_1 (prefab fields)
		sampoShooter_1.travelDistance = 220;

		// sampoShooter_2 (prefab fields)
		sampoShooter_2.travelDistance = 220;

		// cyberPigeon_1 (prefab fields)
		cyberPigeon_1.distance = 600;

		this.layer = layer;
		this.supaJet = supaJet;
		this.player = player;
		this.cyberPigeon = cyberPigeon;
		this.sampoShooter = sampoShooter;
		this.sampoShooter_1 = sampoShooter_1;
		this.sampoShooter_2 = sampoShooter_2;
		this.cyberPigeon_1 = cyberPigeon_1;
		this.mapa = mapa;
		this.new_level6C_1 = new_level6C_1;
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
	/** @type {SupaJet} */
	supaJet;
	/** @type {Player} */
	player;
	/** @type {CyberPigeon} */
	cyberPigeon;
	/** @type {SampoShooter} */
	sampoShooter;
	/** @type {SampoShooter} */
	sampoShooter_1;
	/** @type {SampoShooter} */
	sampoShooter_2;
	/** @type {CyberPigeon} */
	cyberPigeon_1;
	/** @type {Array<SmallDoor|SideDoorLocked>} */
	doors;
	/** @type {SwitchPanel[]} */
	switches;
	/** @type {Array<Drone|CyberPigeon|SampoShooter>} */
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
