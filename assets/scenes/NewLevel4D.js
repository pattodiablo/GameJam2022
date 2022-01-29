
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel4D extends BaseScene {

	constructor() {
		super("NewLevel4D");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level4D");
		mapa.addTilesetImage("Invernadero_tiles", "Invernadero_tiles");

		// new_level4D
		const new_level4D = this.add.tilemap("new_level4D");
		new_level4D.addTilesetImage("Invernadero_tiles", "Invernadero_tiles");

		// invernaderoBg
		const invernaderoBg = this.add.image(0, 0, "invernaderoBg");
		invernaderoBg.setOrigin(0, 0);

		// noCollide_1
		mapa.createLayer("NoCollide", ["Invernadero_tiles"], 0, 0);

		// noCollideFX
		mapa.createLayer("NoCollideFX", ["Invernadero_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["Invernadero_tiles"], 0, 0);

		// door
		const door = new Door(this, 672, -40);
		this.add.existing(door);

		// damagedDoor_instance_10000
		this.add.image(1072, 1119, "propsNew", "damagedDoor instance 10000");

		// collideFX_1
		new_level4D.createLayer("CollideFX", ["Invernadero_tiles"], 0, 0);

		// player
		const player = new Player(this, 1074, 1172);
		this.add.existing(player);

		// guardBoss
		const guardBoss = new GuardBoss(this, 894, 750);
		this.add.existing(guardBoss);

		// activeZoneBoss
		const activeZoneBoss = new ActiveZoneBoss(this, 383, 708);
		this.add.existing(activeZoneBoss);
		activeZoneBoss.scaleX = 4;
		activeZoneBoss.scaleY = 4;
		activeZoneBoss.alpha = 0;

		// passCard
		const passCard = new PassCard(this, 328, 278);
		this.add.existing(passCard);

		// energyStation
		const energyStation = new EnergyStation(this, 337, 492);
		this.add.existing(energyStation);

		// platform1
		const platform1 = new Platform1(this, 658, 660);
		this.add.existing(platform1);

		// portalCannon
		const portalCannon = new PortalCannon(this, 1203, 858);
		this.add.existing(portalCannon);

		// portalCannon_1
		const portalCannon_1 = new PortalCannon(this, 1206, 596);
		this.add.existing(portalCannon_1);

		// portalCannon_1_1
		const portalCannon_1_1 = new PortalCannon(this, 1203, 102);
		this.add.existing(portalCannon_1_1);
		portalCannon_1_1.angle = -90;

		// portalCannon_1_1_1
		const portalCannon_1_1_1 = new PortalCannon(this, 904, 104);
		this.add.existing(portalCannon_1_1_1);
		portalCannon_1_1_1.angle = -180;

		// lists
		const doors = [];
		const switches = [];
		const enemies = [guardBoss];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [];
		const tutorials = [];

		// invernaderoBg (components)
		new FixedToCamera(invernaderoBg);

		// door (prefab fields)
		door.goToLevel = "NewLevel5";
		door.desde = 4;
		door.hasta = 5;

		// guardBoss (prefab fields)
		guardBoss.ThingToDrop = "Platform1";

		// activeZoneBoss (prefab fields)
		activeZoneBoss.isActive = true;
		activeZoneBoss.activateBoss = true;
		activeZoneBoss.textActivate = false;

		this.layer = layer;
		this.player = player;
		this.guardBoss = guardBoss;
		this.activeZoneBoss = activeZoneBoss;
		this.mapa = mapa;
		this.new_level4D = new_level4D;
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
	/** @type {ActiveZoneBoss} */
	activeZoneBoss;
	/** @type {Array<any>} */
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
