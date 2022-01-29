
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel1Y extends BaseScene {

	constructor() {
		super("NewLevel1Y");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level1Y");
		mapa.addTilesetImage("new_buildingTiles", "new_buildingTiles");

		// new_level1Y
		const new_level1Y = this.add.tilemap("new_level1Y");
		new_level1Y.addTilesetImage("new_buildingTiles", "new_buildingTiles");

		// bgLevel1
		const bgLevel1 = this.add.sprite(0, 0, "bgLevel1");
		bgLevel1.setOrigin(0, 0);

		// nocollide2_1
		mapa.createLayer("nocollide2", ["new_buildingTiles"], 0, 0);

		// stomper_1
		const stomper_1 = new Stomper(this, 557, 365);
		this.add.existing(stomper_1);
		stomper_1.scaleY = 1.2;

		// stomper
		const stomper = new Stomper(this, 453, 365);
		this.add.existing(stomper);
		stomper.scaleY = 1.2;

		// stomper_1_1
		const stomper_1_1 = new Stomper(this, 670, 365);
		this.add.existing(stomper_1_1);
		stomper_1_1.scaleY = 1.2;

		// stomper_1_1_1
		const stomper_1_1_1 = new Stomper(this, 775, 365);
		this.add.existing(stomper_1_1_1);
		stomper_1_1_1.scaleY = 1.2;

		// nocollide
		mapa.createLayer("nocollide", ["new_buildingTiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("collide", ["new_buildingTiles"], 0, 0);

		// stomperShadow
		const stomperShadow = this.add.image(454, 615, "stomperShadow");
		stomperShadow.scaleX = 1.8;
		stomperShadow.tintFill = true;
		stomperShadow.tintTopLeft = 4075568;
		stomperShadow.tintTopRight = 2366492;
		stomperShadow.tintBottomLeft = 3287080;
		stomperShadow.tintBottomRight = 2431000;

		// passCard
		const passCard = new PassCard(this, 1729, 505);
		this.add.existing(passCard);

		// smallDoor
		const smallDoor = new SmallDoor(this, 110, 419);
		this.add.existing(smallDoor);

		// stomperShadow_1
		const stomperShadow_1 = this.add.image(558, 615, "stomperShadow");
		stomperShadow_1.scaleX = 1.8;
		stomperShadow_1.tintFill = true;
		stomperShadow_1.tintTopLeft = 4075568;
		stomperShadow_1.tintTopRight = 2366492;
		stomperShadow_1.tintBottomLeft = 3287080;
		stomperShadow_1.tintBottomRight = 2431000;

		// stomperShadow_1_1
		const stomperShadow_1_1 = this.add.image(671, 615, "stomperShadow");
		stomperShadow_1_1.scaleX = 1.8;
		stomperShadow_1_1.tintFill = true;
		stomperShadow_1_1.tintTopLeft = 4075568;
		stomperShadow_1_1.tintTopRight = 2366492;
		stomperShadow_1_1.tintBottomLeft = 3287080;
		stomperShadow_1_1.tintBottomRight = 2431000;

		// stomperShadow_1_1_1
		const stomperShadow_1_1_1 = this.add.image(776, 615, "stomperShadow");
		stomperShadow_1_1_1.scaleX = 1.8;
		stomperShadow_1_1_1.tintFill = true;
		stomperShadow_1_1_1.tintTopLeft = 4075568;
		stomperShadow_1_1_1.tintTopRight = 2366492;
		stomperShadow_1_1_1.tintBottomLeft = 3287080;
		stomperShadow_1_1_1.tintBottomRight = 2431000;

		// nocollide3_1
		new_level1Y.createLayer("nocollide3", ["new_buildingTiles"], 0, 0);

		// activeZoneBoss
		const activeZoneBoss = new ActiveZoneBoss(this, 1520, 605);
		this.add.existing(activeZoneBoss);
		activeZoneBoss.scaleX = 4;
		activeZoneBoss.scaleY = 4;
		activeZoneBoss.alpha = 0;

		// wallIzquierda
		const wallIzquierda = new ActiveZoneBoss(this, 1057, 618);
		this.add.existing(wallIzquierda);
		wallIzquierda.scaleX = 4;
		wallIzquierda.scaleY = 4;
		wallIzquierda.alpha = 0;

		// player
		const player = new Player(this, 90, 592);
		this.add.existing(player);

		// guardBoss
		const guardBoss = new GuardBoss(this, 1235, 684);
		this.add.existing(guardBoss);

		// powerPodium
		this.add.image(2352, 480, "PowerPodium");

		// upgradeHalo
		const upgradeHalo = new UpgradeHalo(this, 2352, 496);
		this.add.existing(upgradeHalo);

		// sideDoor
		const sideDoor = new SideDoor(this, 1931, 542);
		this.add.existing(sideDoor);

		// camina0000
		const camina0000 = new AngrySpin(this, 252, 588);
		this.add.existing(camina0000);

		// lists
		const doors = []
		const switches = []
		const enemies = [guardBoss, camina0000]
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// bgLevel1 (components)
		new FixedToCamera(bgLevel1);

		// stomper_1 (prefab fields)
		stomper_1.retardo = 2500;

		// stomper_1_1_1 (prefab fields)
		stomper_1_1_1.retardo = 2500;

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel1X";
		smallDoor.isLocked = false;
		smallDoor.showScore = false;

		// activeZoneBoss (prefab fields)
		activeZoneBoss.isActive = true;
		activeZoneBoss.objectToActivate = "wallIzquierda";
		activeZoneBoss.textActivate = false;

		// activeZoneBoss (components)
		new PhysicsBody(activeZoneBoss);

		// wallIzquierda (prefab fields)
		wallIzquierda.activateBoss = true;
		wallIzquierda.textActivate = false;

		// upgradeHalo (prefab fields)
		upgradeHalo.isDoubleJump = true;

		this.bgLevel1 = bgLevel1;
		this.layer = layer;
		this.activeZoneBoss = activeZoneBoss;
		this.wallIzquierda = wallIzquierda;
		this.player = player;
		this.guardBoss = guardBoss;
		this.mapa = mapa;
		this.new_level1Y = new_level1Y;
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

	/** @type {Phaser.GameObjects.Sprite} */
	bgLevel1;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	layer;
	/** @type {ActiveZoneBoss} */
	activeZoneBoss;
	/** @type {ActiveZoneBoss} */
	wallIzquierda;
	/** @type {Player} */
	player;
	/** @type {GuardBoss} */
	guardBoss;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Array<GuardBoss|AngrySpin>} */
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
