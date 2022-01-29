
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel2G extends BaseScene {

	constructor() {
		super("NewLevel2G");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level2G");
		mapa.addTilesetImage("new_buildingTiles", "new_buildingTiles");

		// new_level2G
		const new_level2G = this.add.tilemap("new_level2G");
		new_level2G.addTilesetImage("new_buildingTiles", "new_buildingTiles");

		// bgLevel1
		const bgLevel1 = this.add.image(0, 0, "bgLevel1");
		bgLevel1.setOrigin(0, 0);

		// player
		const player = new Player(this, 530, 152);
		this.add.existing(player);

		// noCollide
		mapa.createLayer("NoCollide", ["new_buildingTiles"], 0, 0);

		// noCollideFX_1
		mapa.createLayer("NoCollideFX", ["new_buildingTiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["new_buildingTiles"], 0, 0);

		// collideFX_1
		new_level2G.createLayer("CollideFX", ["new_buildingTiles"], 0, 0);

		// door
		const door = new Door(this, 1409, 371);
		this.add.existing(door);

		// handPointer
		const handPointer = new HandPointer(this, 679, 119);
		this.add.existing(handPointer);
		handPointer.angle = 90;

		// symbol_20_instance_10000
		this.add.image(1469, 498, "propsNew", "Symbol 20 instance 10000");

		// symbol_30_instance_10000
		this.add.image(1467, 550, "propsNew", "Symbol 30 instance 10000");

		// guardBoss
		const guardBoss = new GuardBoss(this, 1196, 480);
		this.add.existing(guardBoss);

		// wallderecha
		const wallderecha = new ActiveZoneBoss(this, 1581, 214);
		this.add.existing(wallderecha);
		wallderecha.scaleX = 5;
		wallderecha.scaleY = 5;
		wallderecha.alpha = 0;

		// passCard
		const passCard = new PassCard(this, 68, 87);
		this.add.existing(passCard);

		// heart
		const heart = new Heart(this, 1658, 333);
		this.add.existing(heart);

		// powerPodium
		this.add.image(174, 416, "PowerPodium");

		// upgradeHalo
		const upgradeHalo = new UpgradeHalo(this, 174, 428);
		this.add.existing(upgradeHalo);

		// portalCannon
		const portalCannon = new PortalCannon(this, 54, 429);
		this.add.existing(portalCannon);
		portalCannon.tintBottomLeft = 16700885;

		// portalCannon_1
		const portalCannon_1 = new PortalCannon(this, 58, 249);
		this.add.existing(portalCannon_1);
		portalCannon_1.angle = 91;
		portalCannon_1.tintBottomLeft = 16700885;

		// portalCannon_1_1
		const portalCannon_1_1 = new PortalCannon(this, 286, 258);
		this.add.existing(portalCannon_1_1);
		portalCannon_1_1.angle = -45.00000000000006;
		portalCannon_1_1.tintBottomLeft = 16700885;

		// lists
		const doors = [door]
		const switches = []
		const enemies = [guardBoss]
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// bgLevel1 (components)
		new FixedToCamera(bgLevel1);

		// door (prefab fields)
		door.goToLevel = "NewLevel3";
		door.desde = 2;
		door.hasta = 3;

		// wallderecha (prefab fields)
		wallderecha.isActive = true;
		wallderecha.activateBoss = true;

		// upgradeHalo (prefab fields)
		upgradeHalo.isCannonStrike = true;

		// portalCannon (prefab fields)
		portalCannon.IsFirstCannon = true;

		this.player = player;
		this.layer = layer;
		this.guardBoss = guardBoss;
		this.wallderecha = wallderecha;
		this.mapa = mapa;
		this.new_level2G = new_level2G;
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
	/** @type {GuardBoss} */
	guardBoss;
	/** @type {ActiveZoneBoss} */
	wallderecha;
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
