
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel9W extends BaseScene {

	constructor() {
		super("NewLevel9W");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level9W");
		mapa.addTilesetImage("finalStage", "finalStage");

		// new_level9W
		const new_level9W = this.add.tilemap("new_level9W");
		new_level9W.addTilesetImage("finalStage", "finalStage");

		// bgLevel1
		const bgLevel1 = this.add.image(153, 110, "bgLevel1");

		// noCollide_1
		mapa.createLayer("NoCollide", ["finalStage"], 0, 0);

		// smallDoor
		const smallDoor = new SmallDoor(this, 143, 673);
		this.add.existing(smallDoor);

		// damagedDoor_instance_10000
		this.add.image(2449, 800, "propsNew", "damagedDoor instance 10000");

		// noCollideFX
		mapa.createLayer("NoCollideFX", ["finalStage"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["finalStage"], 0, 0);

		// collideFX_1
		new_level9W.createLayer("CollideFX", ["finalStage"], 0, 0);

		// player
		const player = new Player(this, 2449, 834);
		this.add.existing(player);

		// platform2
		const platform2 = new Platform2(this, 2032, 800);
		this.add.existing(platform2);

		// platform1
		const platform1 = new Platform1(this, 2505, 400);
		this.add.existing(platform1);

		// switchPanel
		const switchPanel = new SwitchPanel(this, 1296, 1448);
		this.add.existing(switchPanel);

		// portalCannon
		const portalCannon = new PortalCannon(this, 2519, 143);
		this.add.existing(portalCannon);
		portalCannon.angle = -45.00000000000006;
		portalCannon.tintBottomLeft = 16700885;

		// lists
		const doors = [smallDoor]
		const switches = [switchPanel]
		const enemies = []
		const platforms = [platform2, platform1]
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// bgLevel1 (components)
		new FixedToCamera(bgLevel1);

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel9X";

		// platform2 (prefab fields)
		platform2.distance = 400;
		platform2.timeTravel = 3500;

		// platform1 (prefab fields)
		platform1.isHorizontal = true;

		// portalCannon (prefab fields)
		portalCannon.IsFirstCannon = true;

		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.new_level9W = new_level9W;
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
	/** @type {SmallDoor[]} */
	doors;
	/** @type {SwitchPanel[]} */
	switches;
	/** @type {Array<any>} */
	enemies;
	/** @type {Array<Platform2|Platform1>} */
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
