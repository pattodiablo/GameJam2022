
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel3C extends BaseScene {

	constructor() {
		super("NewLevel3C");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level3C");
		mapa.addTilesetImage("Invernadero_tiles", "Invernadero_tiles");

		// new_level3C
		const new_level3C = this.add.tilemap("new_level3C");
		new_level3C.addTilesetImage("Invernadero_tiles", "Invernadero_tiles");

		// invernaderoBg
		const invernaderoBg = this.add.image(0, 0, "invernaderoBg");
		invernaderoBg.setOrigin(0, 0);

		// noCollide
		mapa.createLayer("NoCollide", ["Invernadero_tiles"], 0, 0);

		// closedDoor_instance_10000
		const closedDoor_instance_10000 = this.add.image(176, 353, "props", "closedDoor instance 10000");
		closedDoor_instance_10000.scaleX = 0.67;
		closedDoor_instance_10000.scaleY = 0.67;

		// noCollideFX_1
		mapa.createLayer("NoCollideFX", ["Invernadero_tiles"], 0, 0);

		// stomper
		const stomper = new Stomper(this, 528, 208);
		this.add.existing(stomper);
		stomper.scaleX = 1.03;
		stomper.scaleY = 1.03;

		// stomper_1
		const stomper_1 = new Stomper(this, 785, 208);
		this.add.existing(stomper_1);
		stomper_1.scaleX = 1.03;
		stomper_1.scaleY = 1.03;

		// stomper_1_1
		const stomper_1_1 = new Stomper(this, 1041, 208);
		this.add.existing(stomper_1_1);
		stomper_1_1.scaleX = 1.03;
		stomper_1_1.scaleY = 1.03;

		// stomper_2
		const stomper_2 = new Stomper(this, 1299, 208);
		this.add.existing(stomper_2);
		stomper_2.scaleX = 1.03;
		stomper_2.scaleY = 1.03;

		// stomper_1_2
		const stomper_1_2 = new Stomper(this, 1553, 208);
		this.add.existing(stomper_1_2);
		stomper_1_2.scaleX = 1.03;
		stomper_1_2.scaleY = 1.03;

		// layer
		const layer = mapa.createLayer("Collide", ["Invernadero_tiles"], 0, 0);

		// collideFX_1
		new_level3C.createLayer("CollideFX", ["Invernadero_tiles"], 0, 0);

		// player
		const player = new Player(this, 170, 361);
		this.add.existing(player);

		// wallLight
		this.add.image(173, 272, "wallLight");

		// lightBeam
		const lightBeam = new LightBeam(this, 173, 272);
		this.add.existing(lightBeam);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 450, 164);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 700, 163);
		this.add.existing(sampoShooter_1);

		// sampoShooter_1_1
		const sampoShooter_1_1 = new SampoShooter(this, 950, 163);
		this.add.existing(sampoShooter_1_1);

		// sampoShooter_1_2
		const sampoShooter_1_2 = new SampoShooter(this, 1200, 161.67650266760543);
		this.add.existing(sampoShooter_1_2);

		// sampoShooter_1_2_1
		const sampoShooter_1_2_1 = new SampoShooter(this, 1450, 160);
		this.add.existing(sampoShooter_1_2_1);

		// sideDoorLocked
		const sideDoorLocked = new SideDoorLocked(this, 161, 129);
		this.add.existing(sideDoorLocked);
		sideDoorLocked.scaleX = 0.8;
		sideDoorLocked.scaleY = 0.8;
		sideDoorLocked.tintTopLeft = 15612474;
		sideDoorLocked.tintTopRight = 15347503;
		sideDoorLocked.tintBottomLeft = 16218746;
		sideDoorLocked.tintBottomRight = 16490041;

		// toll
		const toll = new Toll(this, 228, 177);
		this.add.existing(toll);

		// gotoLevelWall
		const gotoLevelWall = new GotoLevelWall(this, -25, 143);
		this.add.existing(gotoLevelWall);
		gotoLevelWall.tintTopLeft = 16535632;
		gotoLevelWall.tintTopRight = 16479605;
		gotoLevelWall.tintBottomLeft = 10683396;
		gotoLevelWall.tintBottomRight = 16257554;

		// lists
		const doors = [sideDoorLocked]
		const switches = []
		const enemies = [sampoShooter, sampoShooter_1, sampoShooter_1_1, sampoShooter_1_2]
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// invernaderoBg (components)
		new FixedToCamera(invernaderoBg);

		// stomper (prefab fields)
		stomper.retardo = 1100;

		// stomper_1 (prefab fields)
		stomper_1.retardo = 1300;

		// stomper_1_1 (prefab fields)
		stomper_1_1.retardo = 1500;

		// stomper_2 (prefab fields)
		stomper_2.retardo = 1700;

		// stomper_1_2 (prefab fields)
		stomper_1_2.retardo = 1110;

		// sampoShooter (prefab fields)
		sampoShooter.travelDistance = 250;

		// sampoShooter_1 (prefab fields)
		sampoShooter_1.travelDistance = 250;

		// sampoShooter_1_1 (prefab fields)
		sampoShooter_1_1.travelDistance = 250;

		// sampoShooter_1_2 (prefab fields)
		sampoShooter_1_2.travelDistance = 250;

		// sampoShooter_1_2_1 (prefab fields)
		sampoShooter_1_2_1.travelDistance = 250;

		// gotoLevelWall (prefab fields)
		gotoLevelWall.gotoLevelName = "NewLevel3D";

		this.stomper = stomper;
		this.stomper_1 = stomper_1;
		this.stomper_1_1 = stomper_1_1;
		this.stomper_2 = stomper_2;
		this.stomper_1_2 = stomper_1_2;
		this.layer = layer;
		this.player = player;
		this.sampoShooter = sampoShooter;
		this.sampoShooter_1 = sampoShooter_1;
		this.sampoShooter_1_1 = sampoShooter_1_1;
		this.sampoShooter_1_2 = sampoShooter_1_2;
		this.sampoShooter_1_2_1 = sampoShooter_1_2_1;
		this.mapa = mapa;
		this.new_level3C = new_level3C;
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

	/** @type {Stomper} */
	stomper;
	/** @type {Stomper} */
	stomper_1;
	/** @type {Stomper} */
	stomper_1_1;
	/** @type {Stomper} */
	stomper_2;
	/** @type {Stomper} */
	stomper_1_2;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	layer;
	/** @type {Player} */
	player;
	/** @type {SampoShooter} */
	sampoShooter;
	/** @type {SampoShooter} */
	sampoShooter_1;
	/** @type {SampoShooter} */
	sampoShooter_1_1;
	/** @type {SampoShooter} */
	sampoShooter_1_2;
	/** @type {SampoShooter} */
	sampoShooter_1_2_1;
	/** @type {SideDoorLocked[]} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {SampoShooter[]} */
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
