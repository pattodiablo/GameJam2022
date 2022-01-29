
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel2C extends BaseScene {

	constructor() {
		super("NewLevel2C");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level2C");
		mapa.addTilesetImage("new_buildingTiles", "new_buildingTiles");

		// new_level2C
		const new_level2C = this.add.tilemap("new_level2C");
		new_level2C.addTilesetImage("new_buildingTiles", "new_buildingTiles");

		// bgLevel1
		const bgLevel1 = this.add.image(0, 0, "bgLevel1");
		bgLevel1.setOrigin(0, 0);

		// player
		const player = new Player(this, 568, 178);
		this.add.existing(player);

		// noCollide
		mapa.createLayer("NoCollide", ["new_buildingTiles"], 0, 0);

		// noCollideFX_1
		mapa.createLayer("NoCollideFX", ["new_buildingTiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["new_buildingTiles"], 0, 0);

		// collideFX_1
		new_level2C.createLayer("CollideFX", ["new_buildingTiles"], 0, 0);

		// handPointer
		const handPointer = new HandPointer(this, 505, 109);
		this.add.existing(handPointer);
		handPointer.angle = 90;

		// handPointer_1
		const handPointer_1 = new HandPointer(this, 208, 92);
		this.add.existing(handPointer_1);
		handPointer_1.scaleX = -1;
		handPointer_1.angle = 90;

		// gotoLevelWall
		const gotoLevelWall = new GotoLevelWall(this, 202, -39);
		this.add.existing(gotoLevelWall);
		gotoLevelWall.angle = 90;
		gotoLevelWall.tintTopLeft = 16535632;
		gotoLevelWall.tintTopRight = 16479605;
		gotoLevelWall.tintBottomLeft = 10683396;
		gotoLevelWall.tintBottomRight = 16257554;

		// handPointer_2
		const handPointer_2 = new HandPointer(this, 94, 1123);
		this.add.existing(handPointer_2);
		handPointer_2.angle = -90;

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 177, 1177);
		this.add.existing(sampoShooter);

		// enemyCreator
		const enemyCreator = new EnemyCreator(this, 225, 1050);
		this.add.existing(enemyCreator);

		// blobber
		const blobber = new Blobber(this, 78, 209);
		this.add.existing(blobber);

		// drone
		const drone = new Drone(this, 65, 90);
		this.add.existing(drone);

		// lists
		const doors = []
		const switches = []
		const enemies = [sampoShooter]
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = [enemyCreator]
		const tutorials = []

		// bgLevel1 (components)
		new FixedToCamera(bgLevel1);

		// gotoLevelWall (prefab fields)
		gotoLevelWall.gotoLevelName = "NewLevel2D";

		this.player = player;
		this.layer = layer;
		this.sampoShooter = sampoShooter;
		this.mapa = mapa;
		this.new_level2C = new_level2C;
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
	/** @type {EnemyCreator[]} */
	revivingPods;
	/** @type {Array<any>} */
	tutorials;

	/* START-USER-CODE */






	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
