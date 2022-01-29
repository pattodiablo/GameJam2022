
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel4A extends BaseScene {

	constructor() {
		super("NewLevel4A");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level4A");
		mapa.addTilesetImage("Invernadero_tiles", "Invernadero_tiles");

		// new_level4A
		const new_level4A = this.add.tilemap("new_level4A");
		new_level4A.addTilesetImage("Invernadero_tiles", "Invernadero_tiles");

		// invernaderoBg
		const invernaderoBg = this.add.image(0, 0, "invernaderoBg");
		invernaderoBg.setOrigin(0, 0);

		// noCollide_1
		mapa.createLayer("NoCollide", ["Invernadero_tiles"], 0, 0);

		// noCollideFX
		mapa.createLayer("NoCollideFX", ["Invernadero_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["Invernadero_tiles"], 0, 0);

		// smallDoor
		const smallDoor = new SmallDoor(this, 145, 1);
		this.add.existing(smallDoor);

		// collideFX_1
		new_level4A.createLayer("CollideFX", ["Invernadero_tiles"], 0, 0);

		// player
		const player = new Player(this, 883, 1775);
		this.add.existing(player);

		// catapulta
		const catapulta = new Catapulta(this, 885, 1585);
		this.add.existing(catapulta);

		// portalCannon
		const portalCannon = new PortalCannon(this, 149, 1041);
		this.add.existing(portalCannon);
		portalCannon.angle = -35.00000000000006;
		portalCannon.tintBottomLeft = 16700885;

		// portalCannon_1
		const portalCannon_1 = new PortalCannon(this, 72, 890);
		this.add.existing(portalCannon_1);
		portalCannon_1.angle = 45;
		portalCannon_1.tintBottomLeft = 16700885;

		// portalCannon_2
		const portalCannon_2 = new PortalCannon(this, 869, 143);
		this.add.existing(portalCannon_2);
		portalCannon_2.angle = -180;
		portalCannon_2.tintBottomLeft = 16700885;

		// drone
		const drone = new Drone(this, 239, 490);
		this.add.existing(drone);

		// drone_1
		const drone_1 = new Drone(this, 433, 391);
		this.add.existing(drone_1);

		// switchPanel
		const switchPanel = new SwitchPanel(this, 701, 102);
		this.add.existing(switchPanel);

		// heart
		const heart = new Heart(this, 868, 61);
		this.add.existing(heart);

		// lists
		const doors = []
		const switches = [switchPanel]
		const enemies = [drone]
		const platforms = []
		const coins = []
		const catapultas = [catapulta]
		const revivingPods = []
		const tutorials = []

		// invernaderoBg (components)
		new FixedToCamera(invernaderoBg);

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel4B";

		// catapulta (prefab fields)
		catapulta.power = 750;

		// portalCannon (prefab fields)
		portalCannon.IsFirstCannon = true;

		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.new_level4A = new_level4A;
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
	/** @type {Array<any>} */
	doors;
	/** @type {SwitchPanel[]} */
	switches;
	/** @type {Drone[]} */
	enemies;
	/** @type {Array<any>} */
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
