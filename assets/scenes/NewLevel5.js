
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel5 extends BaseScene {

	constructor() {
		super("NewLevel5");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level5");
		mapa.addTilesetImage("Laboratorio_tiles", "Laboratorio_tiles");

		// new_level5
		const new_level5 = this.add.tilemap("new_level5");
		new_level5.addTilesetImage("Laboratorio_tiles", "Laboratorio_tiles");

		// invernaderoBg
		const invernaderoBg = this.add.image(2, 0, "invernaderoBg");
		invernaderoBg.setOrigin(0, 0);

		// nocollide_1
		mapa.createLayer("nocollide", ["Laboratorio_tiles"], 0, 0);

		// nocollideFx
		mapa.createLayer("nocollideFx", ["Laboratorio_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("collide", ["Laboratorio_tiles"], 0, 0);

		// collideFx_1
		new_level5.createLayer("collideFx", ["Laboratorio_tiles"], 0, 0);

		// smallDoor
		const smallDoor = new SmallDoor(this, 1471, 39);
		this.add.existing(smallDoor);

		// switchPanel
		const switchPanel = new SwitchPanel(this, 512, 545);
		this.add.existing(switchPanel);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 752, 693);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 369, 387);
		this.add.existing(sampoShooter_1);

		// sampoShooter_2
		const sampoShooter_2 = new SampoShooter(this, 937, 387);
		this.add.existing(sampoShooter_2);

		// cyberPigeon
		const cyberPigeon = new CyberPigeon(this, 1158, 65);
		this.add.existing(cyberPigeon);

		// drone
		const drone = new Drone(this, 1045, 478);
		this.add.existing(drone);

		// blobber
		const blobber = new Blobber(this, 502, 148);
		this.add.existing(blobber);

		// blobber_1
		const blobber_1 = new Blobber(this, 1405, 275);
		this.add.existing(blobber_1);

		// player
		const player = new Player(this, 75, 644);
		this.add.existing(player);

		// lists
		const doors = [smallDoor];
		const switches = [switchPanel];
		const enemies = [sampoShooter, sampoShooter_1, sampoShooter_2, cyberPigeon, blobber, blobber_1];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [];
		const tutorials = [];

		// invernaderoBg (components)
		new FixedToCamera(invernaderoBg);

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel5A";

		// blobber (prefab fields)
		blobber.travelDistance = 60;

		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.new_level5 = new_level5;
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
	/** @type {Array<SampoShooter|CyberPigeon|Blobber>} */
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
