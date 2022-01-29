
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel7B extends BaseScene {

	constructor() {
		super("NewLevel7B");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level7B");
		mapa.addTilesetImage("Servidores_tiles", "Servidores_tiles");

		// new_level7B
		const new_level7B = this.add.tilemap("new_level7B");
		new_level7B.addTilesetImage("Servidores_tiles", "Servidores_tiles");

		// tech_back
		const tech_back = this.add.image(0, 0, "tech_back");
		tech_back.setOrigin(0, 0);

		// noCollide_1
		mapa.createLayer("NoCollide", ["Servidores_tiles"], 0, 0);

		// damagedDoor_instance_10000
		this.add.image(1102, 641, "propsNew", "damagedDoor instance 10000");

		// smallDoor
		const smallDoor = new SmallDoor(this, 113, -29);
		this.add.existing(smallDoor);

		// noCollideFX
		mapa.createLayer("NoCollideFX", ["Servidores_tiles"], 0, 0);

		// energyStation
		const energyStation = new EnergyStation(this, 127, 1080);
		this.add.existing(energyStation);

		// layer
		const layer = mapa.createLayer("Collide", ["Servidores_tiles"], 0, 0);

		// collideFX_1
		new_level7B.createLayer("CollideFX", ["Servidores_tiles"], 0, 0);

		// player
		const player = new Player(this, 1106, 666);
		this.add.existing(player);

		// switchPanel
		const switchPanel = new SwitchPanel(this, 2159, 108);
		this.add.existing(switchPanel);

		// drone
		const drone = new Drone(this, 288, 757);
		this.add.existing(drone);

		// drone_1
		const drone_1 = new Drone(this, 158, 568);
		this.add.existing(drone_1);

		// drone_2
		const drone_2 = new Drone(this, 414, 375);
		this.add.existing(drone_2);

		// toll
		const toll = new Toll(this, 2079, 1146);
		this.add.existing(toll);

		// sideDoorLocked
		const sideDoorLocked = new SideDoorLocked(this, 2080, 97);
		this.add.existing(sideDoorLocked);
		sideDoorLocked.scaleX = 0.8;
		sideDoorLocked.scaleY = 0.8;
		sideDoorLocked.tintTopLeft = 15612474;
		sideDoorLocked.tintTopRight = 15347503;
		sideDoorLocked.tintBottomLeft = 16218746;
		sideDoorLocked.tintBottomRight = 16490041;

		// drone_3
		const drone_3 = new Drone(this, 2146, 217);
		this.add.existing(drone_3);

		// drone_4
		const drone_4 = new Drone(this, 1793, 532);
		this.add.existing(drone_4);

		// drone_5
		const drone_5 = new Drone(this, 1240, 215);
		this.add.existing(drone_5);

		// drone_6
		const drone_6 = new Drone(this, 695, 218);
		this.add.existing(drone_6);

		// drone_7
		const drone_7 = new Drone(this, 1762, 950);
		this.add.existing(drone_7);

		// drone_8
		const drone_8 = new Drone(this, 1377, 1047);
		this.add.existing(drone_8);

		// drone_9
		const drone_9 = new Drone(this, 825, 1049);
		this.add.existing(drone_9);

		// drone_10
		const drone_10 = new Drone(this, 1598, 664);
		this.add.existing(drone_10);

		// drone_11
		const drone_11 = new Drone(this, 609, 663);
		this.add.existing(drone_11);

		// drone_12
		const drone_12 = new Drone(this, 961, 54);
		this.add.existing(drone_12);

		// drone_13
		const drone_13 = new Drone(this, 1438, 52);
		this.add.existing(drone_13);

		// drone_14
		const drone_14 = new Drone(this, 1762, 53);
		this.add.existing(drone_14);

		// drone_15
		const drone_15 = new Drone(this, 725, 853);
		this.add.existing(drone_15);

		// drone_16
		const drone_16 = new Drone(this, 1490, 852);
		this.add.existing(drone_16);

		// drone_17
		const drone_17 = new Drone(this, 2145, 727);
		this.add.existing(drone_17);

		// lists
		const doors = [smallDoor]
		const switches = [switchPanel]
		const enemies = []
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// tech_back (components)
		new FixedToCamera(tech_back);

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel7X";

		// toll (prefab fields)
		toll.LockId = "2";

		// sideDoorLocked (prefab fields)
		sideDoorLocked.LockedBy = "2";
		sideDoorLocked.doorID = "2";

		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.new_level7B = new_level7B;
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
	/** @type {SmallDoor[]} */
	doors;
	/** @type {SwitchPanel[]} */
	switches;
	/** @type {Array<any>} */
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
