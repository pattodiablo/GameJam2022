
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel2B extends BaseScene {

	constructor() {
		super("NewLevel2B");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level2B");
		mapa.addTilesetImage("new_buildingTiles", "new_buildingTiles");

		// new_level2B
		const new_level2B = this.add.tilemap("new_level2B");
		new_level2B.addTilesetImage("new_buildingTiles", "new_buildingTiles");

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
		new_level2B.createLayer("CollideFX", ["new_buildingTiles"], 0, 0);

		// player
		const player = new Player(this, 1169, 142);
		this.add.existing(player);

		// drone
		const drone = new Drone(this, 641, 187);
		this.add.existing(drone);

		// enemyCreator
		const enemyCreator = new EnemyCreator(this, 62, 187);
		this.add.existing(enemyCreator);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 245, 480);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 563, 482);
		this.add.existing(sampoShooter_1);

		// sampoShooter_2
		const sampoShooter_2 = new SampoShooter(this, 405, 483);
		this.add.existing(sampoShooter_2);

		// handPointer
		const handPointer = new HandPointer(this, 155, 103);
		this.add.existing(handPointer);
		handPointer.scaleX = -1;

		// handPointer_1
		const handPointer_1 = new HandPointer(this, 1085, 115);
		this.add.existing(handPointer_1);
		handPointer_1.scaleX = -1;

		// gotoLevelWall
		const gotoLevelWall = new GotoLevelWall(this, -23, 101);
		this.add.existing(gotoLevelWall);
		gotoLevelWall.tintTopLeft = 16535632;
		gotoLevelWall.tintTopRight = 16479605;
		gotoLevelWall.tintBottomLeft = 10683396;
		gotoLevelWall.tintBottomRight = 16257554;

		// platform2
		const platform2 = new Platform2(this, 321, 370);
		this.add.existing(platform2);

		// platform2_2
		const platform2_2 = new Platform2(this, 959, 370);
		this.add.existing(platform2_2);

		// heart
		const heart = new Heart(this, 1234, 299);
		this.add.existing(heart);

		// lists
		const doors = []
		const switches = []
		const enemies = [sampoShooter_2, sampoShooter_1, sampoShooter]
		const platforms = [platform2, platform2_2]
		const coins = []
		const catapultas = []
		const revivingPods = [enemyCreator]
		const tutorials = []

		// bgLevel1 (components)
		new FixedToCamera(bgLevel1);

		// gotoLevelWall (prefab fields)
		gotoLevelWall.gotoLevelName = "NewLevel2C";

		// platform2 (prefab fields)
		platform2.distance = 120;
		platform2.timeTravel = 4000;

		// platform2_2 (prefab fields)
		platform2_2.distance = 120;
		platform2_2.timeTravel = 4000;

		this.layer = layer;
		this.player = player;
		this.sampoShooter = sampoShooter;
		this.sampoShooter_1 = sampoShooter_1;
		this.sampoShooter_2 = sampoShooter_2;
		this.mapa = mapa;
		this.new_level2B = new_level2B;
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
