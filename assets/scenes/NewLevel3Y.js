
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel3Y extends BaseScene {

	constructor() {
		super("NewLevel3Y");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level3Y");
		mapa.addTilesetImage("BiodomeTiles", "Invernadero_tiles");

		// new_level3Y
		const new_level3Y = this.add.tilemap("new_level3Y");
		new_level3Y.addTilesetImage("BiodomeTiles", "Invernadero_tiles");

		// invernaderoBg
		const invernaderoBg = this.add.image(0, 0, "invernaderoBg");
		invernaderoBg.setOrigin(0, 0);

		// collideFX
		mapa.createLayer("collideFX", ["BiodomeTiles"], 0, 0);

		// nocollide2_1
		mapa.createLayer("nocollide2", ["BiodomeTiles"], 0, 0);

		// nocollide
		mapa.createLayer("nocollide", ["BiodomeTiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("collide", ["BiodomeTiles"], 0, 0);

		// door
		const door = new Door(this, 80, -9);
		this.add.existing(door);

		// player
		const player = new Player(this, 142, 1034);
		this.add.existing(player);

		// energyStation
		const energyStation = new EnergyStation(this, 770, 815);
		this.add.existing(energyStation);

		// enemyCreator
		const enemyCreator = new EnemyCreator(this, 511, 772);
		this.add.existing(enemyCreator);

		// portalCannon
		const portalCannon = new PortalCannon(this, 1007, 1376);
		this.add.existing(portalCannon);
		portalCannon.tintBottomLeft = 16700885;

		// portalCannon_1
		const portalCannon_1 = new PortalCannon(this, 1007, 517);
		this.add.existing(portalCannon_1);
		portalCannon_1.angle = -90;
		portalCannon_1.tintBottomLeft = 16700885;

		// portalCannon_2
		const portalCannon_2 = new PortalCannon(this, 882, 516);
		this.add.existing(portalCannon_2);
		portalCannon_2.angle = -180;
		portalCannon_2.tintBottomLeft = 16700885;

		// symbol_21_instance_10000
		this.add.image(55, 108, "propsNew", "Symbol 21 instance 10000");

		// symbol_30_instance_10000
		const symbol_30_instance_10000 = this.add.image(135, 108, "propsNew", "Symbol 30 instance 10000");
		symbol_30_instance_10000.scaleX = 1.2;
		symbol_30_instance_10000.scaleY = 1.2;

		// guardBoss
		const guardBoss = new GuardBoss(this, 418, 98);
		this.add.existing(guardBoss);

		// activeZoneBoss
		const activeZoneBoss = new ActiveZoneBoss(this, 862, 63);
		this.add.existing(activeZoneBoss);
		activeZoneBoss.scaleX = 4;
		activeZoneBoss.scaleY = 5;
		activeZoneBoss.alpha = 0;

		// smallDoor
		const smallDoor = new SmallDoor(this, 94, 1219);
		this.add.existing(smallDoor);

		// symbol_30_instance_10000_1
		const symbol_30_instance_10000_1 = this.add.image(91, 1265, "propsNew", "Symbol 30 instance 10000");
		symbol_30_instance_10000_1.angle = -90;
		symbol_30_instance_10000_1.tintFill = true;
		symbol_30_instance_10000_1.tintTopLeft = 14483456;
		symbol_30_instance_10000_1.tintTopRight = 14483456;
		symbol_30_instance_10000_1.tintBottomLeft = 14483456;
		symbol_30_instance_10000_1.tintBottomRight = 14483456;

		// lists
		const doors = [door]
		const switches = []
		const enemies = [guardBoss]
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// invernaderoBg (components)
		new FixedToCamera(invernaderoBg);

		// door (prefab fields)
		door.goToLevel = "NewLevel4";
		door.desde = 3;
		door.hasta = 4;

		// portalCannon (prefab fields)
		portalCannon.IsFirstCannon = true;

		// guardBoss (prefab fields)
		guardBoss.ThingToDrop = "Heart";

		// activeZoneBoss (prefab fields)
		activeZoneBoss.isActive = true;
		activeZoneBoss.activateBoss = true;

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel3F";
		smallDoor.isLocked = false;

		this.layer = layer;
		this.player = player;
		this.guardBoss = guardBoss;
		this.mapa = mapa;
		this.new_level3Y = new_level3Y;
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
	/** @type {GuardBoss} */
	guardBoss;
	/** @type {Door[]} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {GuardBoss[]} */
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
