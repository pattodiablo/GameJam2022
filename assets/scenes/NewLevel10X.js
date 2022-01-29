
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel10X extends BaseScene {

	constructor() {
		super("NewLevel10X");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level10X");
		mapa.addTilesetImage("Invernadero_tiles", "Invernadero_tiles");

		// tech_back
		const tech_back = this.add.image(1, 0, "tech_back");
		tech_back.setOrigin(0, 0);

		// noCollide
		mapa.createLayer("NoCollide", [], 0, 0);

		// noCollideFX
		mapa.createLayer("NoCollideFX", [], 0, 0);

		// player
		const player = new Player(this, 160, 392);
		this.add.existing(player);

		// BigBoss
		const bigBoss = new EnemyBody(this, 142, 270);
		this.add.existing(bigBoss);

		// layer
		const layer = mapa.createLayer("Collide", ["Invernadero_tiles"], 1, 0);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [];
		const tutorials = [];

		// tech_back (components)
		new FixedToCamera(tech_back);

		this.player = player;
		this.bigBoss = bigBoss;
		this.layer = layer;
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

	/** @type {Player} */
	player;
	/** @type {EnemyBody} */
	bigBoss;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	layer;
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
