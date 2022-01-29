
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel1A extends BaseScene {

	constructor() {
		super("NewLevel1A");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level1A");
		mapa.addTilesetImage("new_buildingTiles", "new_buildingTiles");

		// new_level1A
		const new_level1A = this.add.tilemap("new_level1A");
		new_level1A.addTilesetImage("new_buildingTiles", "new_buildingTiles");

		// bgLevel1
		const bgLevel1 = this.add.image(4, -89, "bgLevel1");
		bgLevel1.setOrigin(0, 0);

		// noCollide1_1
		mapa.createLayer("NoCollide1", ["new_buildingTiles"], 0, 0);

		// noCollide
		mapa.createLayer("NoCollide", ["new_buildingTiles"], 0, 0);

		// handPointer
		const handPointer = new HandPointer(this, 202, 500);
		this.add.existing(handPointer);

		// player
		const player = new Player(this, 84, 484);
		this.add.existing(player);

		// trashBin
		this.add.image(962, 420, "trashBin");

		// layer
		const layer = mapa.createLayer("Collide", ["new_buildingTiles"], 0, 0);

		// gotoLevelWall
		const gotoLevelWall = new GotoLevelWall(this, 1625, 475);
		this.add.existing(gotoLevelWall);
		gotoLevelWall.tintTopLeft = 16535632;
		gotoLevelWall.tintTopRight = 16479605;
		gotoLevelWall.tintBottomLeft = 10683396;
		gotoLevelWall.tintBottomRight = 16257554;

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 381, 491);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 703, 455);
		this.add.existing(sampoShooter_1);

		// sampoShooter_2
		const sampoShooter_2 = new SampoShooter(this, 1023, 483);
		this.add.existing(sampoShooter_2);

		// heart
		const heart = new Heart(this, 1124, 347);
		this.add.existing(heart);

		// handPointer_1
		const handPointer_1 = new HandPointer(this, 1451, 425);
		this.add.existing(handPointer_1);

		// wallLight
		this.add.image(320, 307, "wallLight");

		// wallLight_1
		this.add.image(641, 307, "wallLight");

		// wallLight_2
		this.add.image(960, 308, "wallLight");

		// wallLight_3
		this.add.image(1279, 308, "wallLight");

		// wallLight_4
		this.add.image(1600, 308, "wallLight");

		// wallLight_5_4
		this.add.image(1596, 147, "wallLight");

		// wallLight_5
		this.add.image(323, 147, "wallLight");

		// wallLight_5_1
		this.add.image(641, 147, "wallLight");

		// wallLight_5_2
		this.add.image(958, 147, "wallLight");

		// wallLight_5_3
		this.add.image(1282, 147, "wallLight");

		// lightBeam
		const lightBeam = new LightBeam(this, 320, 307);
		this.add.existing(lightBeam);

		// lightBeam_1
		const lightBeam_1 = new LightBeam(this, 641, 307);
		this.add.existing(lightBeam_1);

		// lightBeam_2
		const lightBeam_2 = new LightBeam(this, 960, 308);
		this.add.existing(lightBeam_2);

		// lightBeam_3
		const lightBeam_3 = new LightBeam(this, 1279, 309);
		this.add.existing(lightBeam_3);

		// lightBeam_4
		const lightBeam_4 = new LightBeam(this, 1599, 309);
		this.add.existing(lightBeam_4);

		// lightBeam_5
		const lightBeam_5 = new LightBeam(this, 321, 147);
		this.add.existing(lightBeam_5);

		// lightBeam_6
		const lightBeam_6 = new LightBeam(this, 641, 147);
		this.add.existing(lightBeam_6);

		// lightBeam_7
		const lightBeam_7 = new LightBeam(this, 962, 147);
		this.add.existing(lightBeam_7);

		// lightBeam_8
		const lightBeam_8 = new LightBeam(this, 1280, 147);
		this.add.existing(lightBeam_8);

		// lightBeam_9
		const lightBeam_9 = new LightBeam(this, 1596, 147);
		this.add.existing(lightBeam_9);

		// trashBin_1
		this.add.image(321, 420, "trashBin");

		// box
		const box = new Box(this, 583, 507);
		this.add.existing(box);

		// box_1
		const box_1 = new Box(this, 899, 476);
		this.add.existing(box_1);

		// box_2
		const box_2 = new Box(this, 1225, 508);
		this.add.existing(box_2);

		// nocollide3_1
		new_level1A.createLayer("nocollide3", ["new_buildingTiles"], 0, 0);

		// lists
		const doors = []
		const switches = []
		const enemies = [sampoShooter, sampoShooter_1, sampoShooter_2]
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// bgLevel1 (components)
		new FixedToCamera(bgLevel1);

		// gotoLevelWall (prefab fields)
		gotoLevelWall.gotoLevelName = "NewLevel1B";

		// sampoShooter (prefab fields)
		sampoShooter.travelDistance = 170;

		// sampoShooter_1 (prefab fields)
		sampoShooter_1.travelDistance = 170;

		// sampoShooter_2 (prefab fields)
		sampoShooter_2.travelDistance = 170;

		this.player = player;
		this.layer = layer;
		this.sampoShooter = sampoShooter;
		this.sampoShooter_1 = sampoShooter_1;
		this.sampoShooter_2 = sampoShooter_2;
		this.mapa = mapa;
		this.new_level1A = new_level1A;
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

	/** @type {Player} */
	player;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	layer;
	/** @type {SampoShooter} */
	sampoShooter;
	/** @type {SampoShooter} */
	sampoShooter_1;
	/** @type {SampoShooter} */
	sampoShooter_2;
	/** @type {Array<any>} */
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
