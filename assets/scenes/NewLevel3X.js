
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel3X extends BaseScene {

	constructor() {
		super("NewLevel3X");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level3X");
		mapa.addTilesetImage("BiodomeTiles", "Invernadero_tiles");

		// new_level3X
		const new_level3X = this.add.tilemap("new_level3X");
		new_level3X.addTilesetImage("BiodomeTiles", "Invernadero_tiles");

		// invernaderoBg
		const invernaderoBg = this.add.image(0, 0, "invernaderoBg");
		invernaderoBg.setOrigin(0, 0);

		// nocollide2_1
		mapa.createLayer("nocollide2", ["BiodomeTiles"], 0, 0);

		// nocollide
		mapa.createLayer("nocollide", ["BiodomeTiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("collide", ["BiodomeTiles"], 0, 0);

		// collideFX_1
		new_level3X.createLayer("collideFX", ["BiodomeTiles"], 0, 0);

		// player
		const player = new Player(this, 114, 1025);
		this.add.existing(player);

		// energyStation
		const energyStation = new EnergyStation(this, 703, 526);
		this.add.existing(energyStation);

		// smallDoor
		const smallDoor = new SmallDoor(this, 1487, 578);
		this.add.existing(smallDoor);

		// catapulta
		const catapulta = new Catapulta(this, 1249, 588);
		this.add.existing(catapulta);

		// heart
		const heart = new Heart(this, 245, 97);
		this.add.existing(heart);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 660, 400);
		this.add.existing(sampoShooter);

		// enemyCreator
		const enemyCreator = new EnemyCreator(this, 528, 311);
		this.add.existing(enemyCreator);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 497, 1040);
		this.add.existing(sampoShooter_1);

		// misile
		const misile = new Misile(this, 1677, 123);
		this.add.existing(misile);

		// switchPanel
		const switchPanel = new SwitchPanel(this, 1512, 223);
		this.add.existing(switchPanel);

		// blobber
		const blobber = new Blobber(this, 389, 466);
		this.add.existing(blobber);

		// spike
		const spike = new Spike(this, 1419, 113);
		this.add.existing(spike);

		// passCard
		const passCard = new PassCard(this, 82, 135);
		this.add.existing(passCard);

		// drone
		const drone = new Drone(this, 241, 181);
		this.add.existing(drone);

		// lists
		const doors = []
		const switches = []
		const enemies = [sampoShooter, sampoShooter_1, blobber, spike]
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = [enemyCreator]
		const tutorials = []

		// invernaderoBg (components)
		new FixedToCamera(invernaderoBg);

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel3F";

		// catapulta (prefab fields)
		catapulta.power = 600;

		// sampoShooter (prefab fields)
		sampoShooter.travelDistance = 180;

		// sampoShooter_1 (prefab fields)
		sampoShooter_1.travelDistance = 200;

		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.new_level3X = new_level3X;
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
	/** @type {Array<SampoShooter|Blobber|Spike>} */
	enemies;
	/** @type {Array<any>} */
	platforms;
	/** @type {Array<any>} */
	coins;
	/** @type {Array<any>} */
	catapultas;
	/** @type {EnemyCreator[]} */
	revivingPods;
	/** @type {Array<any>} */
	tutorials;

	/* START-USER-CODE */






	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
