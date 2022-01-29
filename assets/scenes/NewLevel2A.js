
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel2A extends BaseScene {

	constructor() {
		super("NewLevel2A");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level2A");
		mapa.addTilesetImage("new_buildingTiles", "new_buildingTiles");

		// new_level2A
		const new_level2A = this.add.tilemap("new_level2A");
		new_level2A.addTilesetImage("new_buildingTiles", "new_buildingTiles");

		// bgLevel1
		const bgLevel1 = this.add.image(0, 0, "bgLevel1");
		bgLevel1.setOrigin(0, 0);

		// noCollide
		mapa.createLayer("NoCollide", ["new_buildingTiles"], 0, 0);

		// noCollideFX_1
		mapa.createLayer("NoCollideFX", ["new_buildingTiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["new_buildingTiles"], 0, 0);

		// collideFX_1
		new_level2A.createLayer("CollideFX", ["new_buildingTiles"], 0, 0);

		// player
		const player = new Player(this, 144, 815);
		this.add.existing(player);

		// handPointer
		const handPointer = new HandPointer(this, 286, 37);
		this.add.existing(handPointer);
		handPointer.scaleX = -1;

		// drone
		const drone = new Drone(this, 672, 337);
		this.add.existing(drone);

		// enemyCreator
		const enemyCreator = new EnemyCreator(this, 407, 540);
		this.add.existing(enemyCreator);

		// cyberPigeon
		const cyberPigeon = new CyberPigeon(this, 67, 198);
		this.add.existing(cyberPigeon);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 390, 839);
		this.add.existing(sampoShooter);

		// gotoLevelWall
		const gotoLevelWall = new GotoLevelWall(this, -26, 18);
		this.add.existing(gotoLevelWall);
		gotoLevelWall.tintTopLeft = 16535632;
		gotoLevelWall.tintTopRight = 16479605;
		gotoLevelWall.tintBottomLeft = 10683396;
		gotoLevelWall.tintBottomRight = 16257554;

		// heart
		const heart = new Heart(this, 416, 178);
		this.add.existing(heart);

		// wallLight
		this.add.image(544, 607, "wallLight");

		// wallLight_1
		this.add.image(801, 606, "wallLight");

		// lightBeam
		const lightBeam = new LightBeam(this, 543, 608);
		this.add.existing(lightBeam);

		// lightBeam_1
		const lightBeam_1 = new LightBeam(this, 801, 607);
		this.add.existing(lightBeam_1);

		// wallLight_2
		this.add.image(907, 97, "wallLight");

		// wallLight_2_1
		this.add.image(36, 544, "wallLight");

		// lightBean
		this.add.image(35, 543, "lightBean");

		// lightBeam_2
		const lightBeam_2 = new LightBeam(this, 905, 98);
		this.add.existing(lightBeam_2);

		// wallLight_3
		this.add.image(544, 95, "wallLight");

		// lightBeam_3
		const lightBeam_3 = new LightBeam(this, 544, 95);
		this.add.existing(lightBeam_3);

		// wallLight_4
		this.add.image(143, 717, "wallLight");

		// lightBeam_4
		const lightBeam_4 = new LightBeam(this, 143, 718);
		this.add.existing(lightBeam_4);

		// basura
		this.add.image(260, 836, "basura");

		// box_2
		this.add.image(420, 777, "box");

		// box_1
		const box_1 = this.add.image(367, 770, "box");
		box_1.scaleX = 2;
		box_1.scaleY = 2;

		// box
		this.add.image(314, 777, "box");

		// box_3
		this.add.image(732, 250, "box");

		// platform2
		const platform2 = new Platform2(this, 862, 748);
		this.add.existing(platform2);

		// lists
		const doors = []
		const switches = []
		const enemies = [sampoShooter, cyberPigeon]
		const platforms = [platform2]
		const coins = []
		const catapultas = []
		const revivingPods = [enemyCreator]
		const tutorials = []

		// bgLevel1 (components)
		new FixedToCamera(bgLevel1);

		// cyberPigeon (prefab fields)
		cyberPigeon.distance = 800;

		// gotoLevelWall (prefab fields)
		gotoLevelWall.gotoLevelName = "NewLevel2B";

		// platform2 (prefab fields)
		platform2.distance = 600;

		this.layer = layer;
		this.player = player;
		this.sampoShooter = sampoShooter;
		this.mapa = mapa;
		this.new_level2A = new_level2A;
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
	/** @type {SampoShooter} */
	sampoShooter;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Array<SampoShooter|CyberPigeon>} */
	enemies;
	/** @type {Platform2[]} */
	platforms;
	/** @type {Array<any>} */
	coins;
	/** @type {Array<any>} */
	catapultas;
	/** @type {EnemyCreator[]} */
	revivingPods;
	/** @type {Array<any>} */
	tutorials;

	/* START-USER-CODE */






	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
