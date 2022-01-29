
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel9X extends BaseScene {

	constructor() {
		super("NewLevel9X");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level9X");
		mapa.addTilesetImage("finalStage", "finalStage");

		// new_level9X
		const new_level9X = this.add.tilemap("new_level9X");
		new_level9X.addTilesetImage("finalStage", "finalStage");

		// bgLevel1
		const bgLevel1 = this.add.image(153, 110, "bgLevel1");

		// noCollide_1
		mapa.createLayer("NoCollide", ["finalStage"], 0, 0);

		// noCollideFX
		mapa.createLayer("NoCollideFX", ["finalStage"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["finalStage"], 0, 0);

		// collideFX_1
		new_level9X.createLayer("CollideFX", ["finalStage"], 0, 0);

		// player
		const player = new Player(this, 1309, 778);
		this.add.existing(player);

		// lists
		const doors = []
		const switches = []
		const enemies = []
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// bgLevel1 (components)
		new FixedToCamera(bgLevel1);

		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.new_level9X = new_level9X;
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
