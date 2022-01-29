
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel6D extends BaseScene {

	constructor() {
		super("NewLevel6D");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level6D");
		mapa.addTilesetImage("Laboratorio_tiles", "Laboratorio_tiles");

		// new_level6D
		const new_level6D = this.add.tilemap("new_level6D");
		new_level6D.addTilesetImage("Laboratorio_tiles", "Laboratorio_tiles");

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
		new_level6D.createLayer("CollideFX", ["Laboratorio_tiles"], 0, 0);

		// door
		const door = new Door(this, 798, 22);
		this.add.existing(door);

		// damagedDoor_instance_10000
		this.add.image(812, 832, "propsNew", "damagedDoor instance 10000");

		// player
		const player = new Player(this, 814, 866);
		this.add.existing(player);

		// guardBoss
		const guardBoss = new GuardBoss(this, 1293, 413);
		this.add.existing(guardBoss);

		// activeZoneBoss
		const activeZoneBoss = new ActiveZoneBoss(this, 722, 411);
		this.add.existing(activeZoneBoss);
		activeZoneBoss.scaleX = 6;
		activeZoneBoss.scaleY = 3;
		activeZoneBoss.alpha = 0;

		// backJetPackStation
		this.add.image(816, 631, "backJetPackStation");

		// supaJet
		const supaJet = new SupaJet(this, 817, 622);
		this.add.existing(supaJet);

		// lists
		const doors = [door]
		const switches = []
		const enemies = [guardBoss]
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// invernaderoBg (components)
		new FixedToCamera(invernaderoBg);

		// door (prefab fields)
		door.goToLevel = "NewLevel7X";

		// guardBoss (prefab fields)
		guardBoss.travelDistance = 200;
		guardBoss.ThingToDrop = "PassCard";

		// activeZoneBoss (prefab fields)
		activeZoneBoss.isActive = true;
		activeZoneBoss.activateBoss = true;
		activeZoneBoss.textActivate = false;

		this.layer = layer;
		this.player = player;
		this.guardBoss = guardBoss;
		this.activeZoneBoss = activeZoneBoss;
		this.supaJet = supaJet;
		this.mapa = mapa;
		this.new_level6D = new_level6D;
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
	/** @type {SupaJet} */
	supaJet;
	/** @type {Door[]} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {GuardBoss[]} */
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
