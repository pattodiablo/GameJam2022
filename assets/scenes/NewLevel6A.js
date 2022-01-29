
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel6A extends BaseScene {

	constructor() {
		super("NewLevel6A");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level6A");
		mapa.addTilesetImage("Laboratorio_tiles", "Laboratorio_tiles");

		// new_level6A
		const new_level6A = this.add.tilemap("new_level6A");
		new_level6A.addTilesetImage("Laboratorio_tiles", "Laboratorio_tiles");

		// invernaderoBg
		const invernaderoBg = this.add.image(0, 0, "invernaderoBg");
		invernaderoBg.setOrigin(0, 0);

		// noCollide_1
		mapa.createLayer("NoCollide", ["Laboratorio_tiles"], 0, 0);

		// noCollideFX
		mapa.createLayer("NoCollideFX", ["Laboratorio_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["Laboratorio_tiles"], 0, 0);

		// collideFX_1
		new_level6A.createLayer("CollideFX", ["Laboratorio_tiles"], -1, 0);

		// player
		const player = new Player(this, 111, 819);
		this.add.existing(player);

		// supaJet
		const supaJet = new SupaJet(this, 244, 825);
		this.add.existing(supaJet);

		// smallDoor
		const smallDoor = new SmallDoor(this, 2063, 99);
		this.add.existing(smallDoor);

		// switchPanel
		const switchPanel = new SwitchPanel(this, 2094, 841);
		this.add.existing(switchPanel);

		// wallLight
		this.add.image(2062, 145, "wallLight");

		// lightBeam
		const lightBeam = new LightBeam(this, 2062, 146);
		this.add.existing(lightBeam);

		// misile
		const misile = new Misile(this, 2270, 384);
		this.add.existing(misile);

		// cyberPigeon
		const cyberPigeon = new CyberPigeon(this, 110, 131);
		this.add.existing(cyberPigeon);

		// spikeHorizontal
		const spikeHorizontal = new SpikeHorizontal(this, 621, 570);
		this.add.existing(spikeHorizontal);
		spikeHorizontal.scaleX = -1;

		// spikeHorizontal_1
		const spikeHorizontal_1 = new SpikeHorizontal(this, 1455, 565);
		this.add.existing(spikeHorizontal_1);
		spikeHorizontal_1.scaleX = -1;

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 50, 486);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 539, 482);
		this.add.existing(sampoShooter_1);

		// sampoShooter_2
		const sampoShooter_2 = new SampoShooter(this, 1373, 482);
		this.add.existing(sampoShooter_2);

		// lists
		const doors = [smallDoor]
		const switches = [smallDoor, switchPanel]
		const enemies = [cyberPigeon, sampoShooter, sampoShooter_2, sampoShooter_1]
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// invernaderoBg (components)
		new FixedToCamera(invernaderoBg);

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel6B";

		// cyberPigeon (prefab fields)
		cyberPigeon.distance = 2000;

		// sampoShooter (prefab fields)
		sampoShooter.travelDistance = 200;

		// sampoShooter_1 (prefab fields)
		sampoShooter_1.travelDistance = 200;

		// sampoShooter_2 (prefab fields)
		sampoShooter_2.travelDistance = 200;

		this.layer = layer;
		this.player = player;
		this.supaJet = supaJet;
		this.cyberPigeon = cyberPigeon;
		this.sampoShooter = sampoShooter;
		this.sampoShooter_1 = sampoShooter_1;
		this.sampoShooter_2 = sampoShooter_2;
		this.mapa = mapa;
		this.new_level6A = new_level6A;
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
	/** @type {SupaJet} */
	supaJet;
	/** @type {CyberPigeon} */
	cyberPigeon;
	/** @type {SampoShooter} */
	sampoShooter;
	/** @type {SampoShooter} */
	sampoShooter_1;
	/** @type {SampoShooter} */
	sampoShooter_2;
	/** @type {SmallDoor[]} */
	doors;
	/** @type {Array<SmallDoor|SwitchPanel>} */
	switches;
	/** @type {Array<CyberPigeon|SampoShooter>} */
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
