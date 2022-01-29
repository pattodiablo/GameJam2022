
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel1F extends BaseScene {

	constructor() {
		super("NewLevel1F");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level1F");
		mapa.addTilesetImage("new_buildingTiles", "new_buildingTiles");

		// new_level1F
		const new_level1F = this.add.tilemap("new_level1F");
		new_level1F.addTilesetImage("new_buildingTiles", "new_buildingTiles");

		// bgLevel1
		const bgLevel1 = this.add.image(0, 0, "bgLevel1");
		bgLevel1.setOrigin(0, 0);

		// noCollide1_1
		mapa.createLayer("NoCollide1", ["new_buildingTiles"], 0, 0);

		// posters
		const posters = this.add.image(511, 311, "posters");
		posters.scaleX = 0.45;
		posters.scaleY = 0.45;
		posters.setOrigin(0.4, 0.4);

		// noCollide
		mapa.createLayer("NoCollide", ["new_buildingTiles"], 0, 0);

		// rocoPop
		const rocoPop = this.add.image(220, 332, "rocoPop");
		rocoPop.scaleX = 0.8;
		rocoPop.scaleY = 0.8;

		// layer
		const layer = mapa.createLayer("Collide", ["new_buildingTiles"], 0, 0);

		// collideFX_1
		new_level1F.createLayer("CollideFX", ["new_buildingTiles"], 0, 0);

		// player
		const player = new Player(this, 111, 346);
		this.add.existing(player);

		// smallDoor
		const smallDoor = new SmallDoor(this, 114, 195);
		this.add.existing(smallDoor);

		// drone
		const drone = new Drone(this, 494, 244);
		this.add.existing(drone);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 820, 347);
		this.add.existing(sampoShooter);

		// enemyCreator
		const enemyCreator = new EnemyCreator(this, 222, 250);
		this.add.existing(enemyCreator);

		// misile
		const misile = new Misile(this, 1117, 121);
		this.add.existing(misile);

		// shadowGeneral
		const shadowGeneral = this.add.image(523, 311, "shadowGeneral");
		shadowGeneral.scaleX = 3;
		shadowGeneral.scaleY = 2;
		shadowGeneral.alpha = 0.5;
		shadowGeneral.alphaTopLeft = 0.5;
		shadowGeneral.alphaTopRight = 0.5;
		shadowGeneral.alphaBottomLeft = 0.5;
		shadowGeneral.alphaBottomRight = 0.5;

		// wallLight
		this.add.image(338, 19, "wallLight");

		// wallLight_1
		this.add.image(623, 17, "wallLight");

		// wallLight_2
		this.add.image(879, 18, "wallLight");

		// wallLight_3
		this.add.image(60, 20, "wallLight");

		// lightBeam
		const lightBeam = new LightBeam(this, 60, 21);
		this.add.existing(lightBeam);

		// lightBeam_1
		const lightBeam_1 = new LightBeam(this, 338, 21);
		this.add.existing(lightBeam_1);

		// lightBeam_2
		const lightBeam_2 = new LightBeam(this, 622, 17);
		this.add.existing(lightBeam_2);

		// lightBeam_3
		const lightBeam_3 = new LightBeam(this, 879, 19);
		this.add.existing(lightBeam_3);

		// lists
		const doors = []
		const switches = []
		const enemies = [drone, sampoShooter]
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = [enemyCreator]
		const tutorials = []

		// bgLevel1 (components)
		new FixedToCamera(bgLevel1);

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel1E";
		smallDoor.isLocked = false;

		this.layer = layer;
		this.player = player;
		this.sampoShooter = sampoShooter;
		this.mapa = mapa;
		this.new_level1F = new_level1F;
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
	/** @type {Array<Drone|SampoShooter>} */
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
