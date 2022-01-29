
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel0 extends BaseScene {

	constructor() {
		super("NewLevel0");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level0");
		mapa.addTilesetImage("level0", "level0");

		// background
		const background = this.add.image(0, 0, "background");
		background.setOrigin(0, 0);

		// nocollide
		mapa.createLayer("nocollide", [], 0, 0);

		// nocollide2
		mapa.createLayer("nocollide2", ["level0"], 0, 0);

		// layer
		const layer = mapa.createLayer("collide", ["level0"], 0, 0);

		// player
		const player = new Player(this, 87, 459);
		this.add.existing(player);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [];
		const tutorials = [];

		// background (components)
		new FixedToCamera(background);

		this.background = background;
		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
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

	/** @type {Phaser.GameObjects.Image} */
	background;
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
