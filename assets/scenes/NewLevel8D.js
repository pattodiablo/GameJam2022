
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel8D extends BaseScene {

	constructor() {
		super("NewLevel8D");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level8D");
		mapa.addTilesetImage("Servidores_tiles", "Servidores_tiles");

		// new_level8D
		const new_level8D = this.add.tilemap("new_level8D");
		new_level8D.addTilesetImage("Servidores_tiles", "Servidores_tiles");

		// tech_back
		const tech_back = this.add.image(0, 0, "tech_back");
		tech_back.setOrigin(0, 0);

		// noCollide_1
		mapa.createLayer("NoCollide", ["Servidores_tiles"], 0, 0);

		// door
		const door = new Door(this, 779, -27);
		this.add.existing(door);
		door.scaleX = 1.25;
		door.scaleY = 1.25;

		// noCollideFX
		mapa.createLayer("NoCollideFX", ["Servidores_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["Servidores_tiles"], 0, 0);

		// collideFX_1
		new_level8D.createLayer("CollideFX", ["Servidores_tiles"], 0, 0);

		// player
		const player = new Player(this, 149, 896);
		this.add.existing(player);

		// passCard
		const passCard = new PassCard(this, 144, 70);
		this.add.existing(passCard);

		// guardBoss
		const guardBoss = new GuardBoss(this, 423, 592);
		this.add.existing(guardBoss);

		// activeZoneBoss
		const activeZoneBoss = new ActiveZoneBoss(this, 604, 573);
		this.add.existing(activeZoneBoss);
		activeZoneBoss.scaleX = 3;
		activeZoneBoss.scaleY = 3;
		activeZoneBoss.alpha = 0;
		activeZoneBoss.alphaTopLeft = 0;
		activeZoneBoss.alphaTopRight = 0;
		activeZoneBoss.alphaBottomLeft = 0;
		activeZoneBoss.alphaBottomRight = 0;

		// platform1
		const platform1 = new Platform1(this, 680, 925);
		this.add.existing(platform1);

		// platform2
		const platform2 = new Platform2(this, 800, 816);
		this.add.existing(platform2);

		// lists
		const doors = [door]
		const switches = []
		const enemies = [guardBoss]
		const platforms = [platform1, platform2]
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// tech_back (components)
		new FixedToCamera(tech_back);

		// door (prefab fields)
		door.goToLevel = "NewLevel9";
		door.desde = 8;
		door.hasta = 9;

		// guardBoss (prefab fields)
		guardBoss.ThingToDrop = "SupaJet";

		// activeZoneBoss (prefab fields)
		activeZoneBoss.isActive = true;
		activeZoneBoss.activateBoss = true;

		// platform1 (prefab fields)
		platform1.distance = 300;
		platform1.timeTravel = 5500;
		platform1.isHorizontal = true;

		// platform2 (prefab fields)
		platform2.distance = 257;
		platform2.timeTravel = 3500;

		this.layer = layer;
		this.player = player;
		this.guardBoss = guardBoss;
		this.activeZoneBoss = activeZoneBoss;
		this.mapa = mapa;
		this.new_level8D = new_level8D;
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
	/** @type {GuardBoss} */
	guardBoss;
	/** @type {ActiveZoneBoss} */
	activeZoneBoss;
	/** @type {Door[]} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {GuardBoss[]} */
	enemies;
	/** @type {Array<Platform1|Platform2>} */
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
