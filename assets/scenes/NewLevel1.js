
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel1 extends BaseScene {

	constructor() {
		super("NewLevel1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level1");
		mapa.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");
		mapa.addTilesetImage("new_buildingTiles");

		// new_level1
		const new_level1 = this.add.tilemap("new_level1");
		new_level1.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");
		new_level1.addTilesetImage("new_buildingTiles", "new_buildingTiles");

		// bgCity2
		const bgCity2 = this.add.image(0, 0, "bgLevel1");
		bgCity2.setOrigin(0, 0);

		// noCollide2_1
		mapa.createLayer("NoCollide2", ["new_ciudad_tiles"], 0, 0);

		// posters
		const posters = this.add.image(307, 251, "posters");
		posters.scaleX = 0.5;
		posters.scaleY = 0.5;

		// posters_1
		const posters_1 = this.add.image(691, 256, "posters");
		posters_1.scaleX = 0.5;
		posters_1.scaleY = 0.5;

		// player
		const player = new Player(this, 93, 456);
		this.add.existing(player);

		// shadowGeneral
		const shadowGeneral = this.add.image(686, 261, "shadowGeneral");
		shadowGeneral.scaleX = 3.5;
		shadowGeneral.scaleY = 3.5;
		shadowGeneral.alpha = 0.5;
		shadowGeneral.alphaTopLeft = 0.5;
		shadowGeneral.alphaTopRight = 0.5;
		shadowGeneral.alphaBottomLeft = 0.5;
		shadowGeneral.alphaBottomRight = 0.5;

		// noCollide1
		mapa.createLayer("NoCollide1", ["new_ciudad_tiles"], 2, 0);

		// nocollide3_1
		new_level1.createLayer("nocollide3", ["new_ciudad_tiles"], 0, 0);

		// sunsetEmpire
		this.add.image(1307, 0, "sunsetEmpire");

		// layer
		const layer = mapa.createLayer("Collide", ["new_ciudad_tiles"], 0, 0);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 490, 433);
		this.add.existing(sampoShooter);

		// wallLight
		this.add.image(594, 289, "wallLight");

		// wallLight_1
		this.add.image(402, 326, "wallLight");

		// wallLight_1_1
		this.add.image(786, 268, "wallLight");

		// heart
		const heart = new Heart(this, 699, 295);
		this.add.existing(heart);

		// proxySpyke_1
		const proxySpyke_1 = new ProxySpyke(this, 947, 330);
		this.add.existing(proxySpyke_1);

		// proxySpyke_2
		const proxySpyke_2 = new ProxySpyke(this, 1004, 330);
		this.add.existing(proxySpyke_2);

		// lightBeam
		const lightBeam = new LightBeam(this, 402, 327);
		this.add.existing(lightBeam);

		// lightBeam_1
		const lightBeam_1 = new LightBeam(this, 594, 289);
		this.add.existing(lightBeam_1);

		// lightBeam_2
		const lightBeam_2 = new LightBeam(this, 785, 270);
		this.add.existing(lightBeam_2);

		// mainEntrance
		const mainEntrance = new MainEntrance(this, 1326, 337);
		this.add.existing(mainEntrance);

		// grafitty
		this.add.image(76, 421, "grafitty");

		// poste
		const poste = new Poste(this, 1159, 389);
		this.add.existing(poste);

		// shadowGeneral_1
		const shadowGeneral_1 = this.add.image(297, 258, "shadowGeneral");
		shadowGeneral_1.scaleX = 3.5;
		shadowGeneral_1.scaleY = 3.5;
		shadowGeneral_1.alpha = 0.5;
		shadowGeneral_1.alphaTopLeft = 0.5;
		shadowGeneral_1.alphaTopRight = 0.5;
		shadowGeneral_1.alphaBottomLeft = 0.5;
		shadowGeneral_1.alphaBottomRight = 0.5;

		// rocoPop
		this.add.image(202, 429, "rocoPop");

		// handPointer
		const handPointer = new HandPointer(this, 285, 413);
		this.add.existing(handPointer);

		// supaEntrance_1
		this.add.image(1598, 337, "supaEntrance");

		// lists
		const doors = []
		const switches = []
		const enemies = [sampoShooter]
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// bgCity2 (components)
		new FixedToCamera(bgCity2);

		this.player = player;
		this.layer = layer;
		this.sampoShooter = sampoShooter;
		this.mapa = mapa;
		this.new_level1 = new_level1;
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
	/** @type {Array<any>} */
	revivingPods;
	/** @type {Array<any>} */
	tutorials;

	/* START-USER-CODE */






	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
