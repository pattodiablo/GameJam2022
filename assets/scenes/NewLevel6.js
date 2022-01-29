
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel6 extends BaseScene {

	constructor() {
		super("NewLevel6");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level6");
		mapa.addTilesetImage("Laboratorio_tiles", "Laboratorio_tiles");

		// new_level6
		const new_level6 = this.add.tilemap("new_level6");
		new_level6.addTilesetImage("Laboratorio_tiles", "Laboratorio_tiles");

		// invernaderoBg
		const invernaderoBg = this.add.image(0, 0, "invernaderoBg");
		invernaderoBg.setOrigin(0, 0);

		// noCollide_1
		mapa.createLayer("NoCollide", ["Laboratorio_tiles"], 0, 0);

		// noCollideFX
		mapa.createLayer("NoCollideFX", ["Laboratorio_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["Laboratorio_tiles"], 0, 0);

		// smallDoor
		const smallDoor = new SmallDoor(this, 483, 64);
		this.add.existing(smallDoor);
		smallDoor.scaleX = 1;
		smallDoor.scaleY = 1;

		// mainDoor0000
		this.add.image(801, 1439, "propsNew", "mainDoor0000");

		// collideFX_1
		new_level6.createLayer("CollideFX", ["Laboratorio_tiles"], 0, 0);

		// player
		const player = new Player(this, 799, 1454);
		this.add.existing(player);

		// wallLight
		this.add.image(801, 1345, "wallLight");

		// lightBeam
		const lightBeam = new LightBeam(this, 801, 1345);
		this.add.existing(lightBeam);

		// gotoLevelWall
		const gotoLevelWall = new GotoLevelWall(this, 798, -45);
		this.add.existing(gotoLevelWall);
		gotoLevelWall.scaleX = 1;
		gotoLevelWall.scaleY = 1.5;
		gotoLevelWall.angle = 90;

		// switchPanel
		const switchPanel = new SwitchPanel(this, 1120, 202);
		this.add.existing(switchPanel);

		// backJetPackStation
		this.add.image(566, 1429, "backJetPackStation");

		// supaJet
		const supaJet = new SupaJet(this, 566, 1420);
		this.add.existing(supaJet);

		// mechaPirana
		const mechaPirana = new MechaPirana(this, 400, 1520);
		this.add.existing(mechaPirana);

		// enemyCreator_instance_10000
		const enemyCreator_instance_10000 = new EnemyBarrel(this, 400, 1519);
		this.add.existing(enemyCreator_instance_10000);

		// mechaPirana_1
		const mechaPirana_1 = new MechaPirana(this, 199, 1519);
		this.add.existing(mechaPirana_1);

		// enemyCreator_instance_10000_1
		const enemyCreator_instance_10000_1 = new EnemyBarrel(this, 199, 1518);
		this.add.existing(enemyCreator_instance_10000_1);

		// mechaPirana_1_1
		const mechaPirana_1_1 = new MechaPirana(this, 65, 1519);
		this.add.existing(mechaPirana_1_1);

		// enemyCreator_instance_10000_1_1
		const enemyCreator_instance_10000_1_1 = new EnemyBarrel(this, 65, 1518);
		this.add.existing(enemyCreator_instance_10000_1_1);

		// heart
		const heart = new Heart(this, 67, 1387);
		this.add.existing(heart);

		// handPointer
		const handPointer = new HandPointer(this, 798, 101);
		this.add.existing(handPointer);
		handPointer.angle = -90;

		// energyStation
		const energyStation = new EnergyStation(this, 1518, 1358);
		this.add.existing(energyStation);

		// lists
		const doors = [smallDoor];
		const switches = [];
		const enemies = [];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [];
		const tutorials = [];

		// invernaderoBg (components)
		new FixedToCamera(invernaderoBg);

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel6A";

		// gotoLevelWall (prefab fields)
		gotoLevelWall.gotoLevelName = "NewLevel6A";

		// mechaPirana (prefab fields)
		mechaPirana.travelDistance = 200;

		// mechaPirana_1 (prefab fields)
		mechaPirana_1.travelDistance = 200;

		// mechaPirana_1_1 (prefab fields)
		mechaPirana_1_1.travelDistance = 200;

		this.layer = layer;
		this.player = player;
		this.supaJet = supaJet;
		this.mapa = mapa;
		this.new_level6 = new_level6;
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
	/** @type {SupaJet} */
	supaJet;
	/** @type {SmallDoor[]} */
	doors;
	/** @type {Array<any>} */
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
