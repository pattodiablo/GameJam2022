
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel3F extends BaseScene {

	constructor() {
		super("NewLevel3F");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level3F");
		mapa.addTilesetImage("Invernadero_tiles", "Invernadero_tiles");

		// new_level3F
		const new_level3F = this.add.tilemap("new_level3F");
		new_level3F.addTilesetImage("Invernadero_tiles", "Invernadero_tiles");

		// invernaderoBg
		const invernaderoBg = this.add.image(0, 0, "invernaderoBg");
		invernaderoBg.setOrigin(0, 0);

		// noCollide
		mapa.createLayer("NoCollide", ["Invernadero_tiles"], 0, 0);

		// noCollideFX_1
		mapa.createLayer("NoCollideFX", ["Invernadero_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["Invernadero_tiles"], 0, 0);

		// collideFX_1
		new_level3F.createLayer("CollideFX", ["Invernadero_tiles"], 0, 0);

		// player
		const player = new Player(this, 1295, 380);
		this.add.existing(player);

		// gotoLevelWall
		const gotoLevelWall = new GotoLevelWall(this, -27, 92);
		this.add.existing(gotoLevelWall);
		gotoLevelWall.tintTopLeft = 16535632;
		gotoLevelWall.tintTopRight = 16479605;
		gotoLevelWall.tintBottomLeft = 10683396;
		gotoLevelWall.tintBottomRight = 16257554;

		// gotoLevelWall_1
		const gotoLevelWall_1 = new GotoLevelWall(this, 2586, 68);
		this.add.existing(gotoLevelWall_1);
		gotoLevelWall_1.tintTopLeft = 16535632;
		gotoLevelWall_1.tintTopRight = 16479605;
		gotoLevelWall_1.tintBottomLeft = 10683396;
		gotoLevelWall_1.tintBottomRight = 16257554;

		// portalCannon_4
		const portalCannon_4 = new PortalCannon(this, 855, 380);
		this.add.existing(portalCannon_4);
		portalCannon_4.angle = 130;
		portalCannon_4.tintBottomLeft = 16700885;

		// portalCannon_4_1
		const portalCannon_4_1 = new PortalCannon(this, 1723, 384);
		this.add.existing(portalCannon_4_1);
		portalCannon_4_1.angle = -130;
		portalCannon_4_1.tintBottomLeft = 16700885;

		// portalCannon_5
		const portalCannon_5 = new PortalCannon(this, 1502, 522);
		this.add.existing(portalCannon_5);
		portalCannon_5.angle = -90;
		portalCannon_5.tintBottomLeft = 16700885;

		// portalCannon_6
		const portalCannon_6 = new PortalCannon(this, 1126, 585);
		this.add.existing(portalCannon_6);
		portalCannon_6.angle = 90;
		portalCannon_6.tintBottomLeft = 16700885;

		// portalCannon_7
		const portalCannon_7 = new PortalCannon(this, 751, 514);
		this.add.existing(portalCannon_7);
		portalCannon_7.tintBottomLeft = 16700885;

		// portalCannon_8
		const portalCannon_8 = new PortalCannon(this, 750, 123);
		this.add.existing(portalCannon_8);
		portalCannon_8.angle = 90;
		portalCannon_8.tintBottomLeft = 16700885;

		// portalCannon_9
		const portalCannon_9 = new PortalCannon(this, 2002, 106);
		this.add.existing(portalCannon_9);
		portalCannon_9.angle = -180;
		portalCannon_9.tintBottomLeft = 16700885;

		// portalCannon_10
		const portalCannon_10 = new PortalCannon(this, 2007, 575);
		this.add.existing(portalCannon_10);
		portalCannon_10.angle = 90;
		portalCannon_10.tintBottomLeft = 16700885;

		// portalCannon_11
		const portalCannon_11 = new PortalCannon(this, 1839, 600);
		this.add.existing(portalCannon_11);
		portalCannon_11.tintBottomLeft = 16700885;

		// portalCannon_12
		const portalCannon_12 = new PortalCannon(this, 1839, 188);
		this.add.existing(portalCannon_12);
		portalCannon_12.angle = -90;
		portalCannon_12.tintBottomLeft = 16700885;

		// portalCannon_13
		const portalCannon_13 = new PortalCannon(this, 528, 188);
		this.add.existing(portalCannon_13);
		portalCannon_13.angle = -180;
		portalCannon_13.tintBottomLeft = 16700885;

		// portalCannon_14
		const portalCannon_14 = new PortalCannon(this, 521, 545);
		this.add.existing(portalCannon_14);
		portalCannon_14.angle = -90;
		portalCannon_14.tintBottomLeft = 16700885;

		// lists
		const doors = []
		const switches = []
		const enemies = []
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// invernaderoBg (components)
		new FixedToCamera(invernaderoBg);

		// gotoLevelWall (prefab fields)
		gotoLevelWall.gotoLevelName = "NewLevel3X";

		// gotoLevelWall_1 (prefab fields)
		gotoLevelWall_1.gotoLevelName = "NewLevel3Y";

		// portalCannon_5 (prefab fields)
		portalCannon_5.IsFirstCannon = true;

		// portalCannon_6 (prefab fields)
		portalCannon_6.IsFirstCannon = true;

		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.new_level3F = new_level3F;
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
