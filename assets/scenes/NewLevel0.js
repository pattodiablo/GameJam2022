
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

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "background");
		tilespriteBG.setOrigin(0, 0);

		// nocollide
		mapa.createLayer("nocollide", [], 0, 0);

		// nocollide2
		mapa.createLayer("nocollide2", ["level0"], 0, 0);

		// layer
		const layer = mapa.createLayer("collide", ["level0"], 0, 0);

		// player
		const player = new Player(this, 206, 1407);
		this.add.existing(player);

		// brazoderecho
		const brazoderecho = new BrazoDerecho(this, 198, 1370);
		this.add.existing(brazoderecho);

		// enemyStar
		const enemyStar = new EnemyStar(this, 636, 1344);
		this.add.existing(enemyStar);

		// bullet
		const bullet = new PlayerBullet(this, 324, 1383);
		this.add.existing(bullet);

		// bulletOrigin
		const bulletOrigin = new BulletOrigin(this, 279, 1397);
		this.add.existing(bulletOrigin);

		// enemyStar_1
		const enemyStar_1 = new EnemyStar(this, 768, 1197);
		this.add.existing(enemyStar_1);

		// explotion
		const explotion = new Explotion(this, 461, 1437);
		this.add.existing(explotion);

		// hit10004
		const hit10004 = new hit1(this, 298, 1399);
		this.add.existing(hit10004);

		// hit30006
		const hit30006 = new hit3(this, 591, 1378);
		this.add.existing(hit30006);

		// lists
		const doors = []
		const switches = []
		const enemies = []
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// enemyStar (prefab fields)
		enemyStar.isType1 = true;

		// enemyStar_1 (prefab fields)
		enemyStar_1.isType2 = true;

		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.brazoderecho = brazoderecho;
		this.bulletOrigin = bulletOrigin;
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

	/** @type {Phaser.GameObjects.TileSprite} */
	tilespriteBG;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	layer;
	/** @type {Player} */
	player;
	/** @type {BrazoDerecho} */
	brazoderecho;
	/** @type {BulletOrigin} */
	bulletOrigin;
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
