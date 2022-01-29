
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel9Z extends BaseScene {

	constructor() {
		super("NewLevel9Z");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level9Z");
		mapa.addTilesetImage("finalStage", "finalStage");

		// new_level9Z
		const new_level9Z = this.add.tilemap("new_level9Z");
		new_level9Z.addTilesetImage("finalStage", "finalStage");

		// bgLevel1
		const bgLevel1 = this.add.image(153, 110, "bgLevel1");

		// noCollide_1
		mapa.createLayer("NoCollide", ["finalStage"], 0, 0);

		// noCollideFX
		mapa.createLayer("NoCollideFX", ["finalStage"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["finalStage"], 0, 0);

		// collideFX_1
		new_level9Z.createLayer("CollideFX", ["finalStage"], 0, 0);

		// player
		const player = new Player(this, 1310, 787);
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
		this.new_level9Z = new_level9Z;
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
