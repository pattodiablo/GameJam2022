
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel5B extends BaseScene {

	constructor() {
		super("NewLevel5B");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level5B");
		mapa.addTilesetImage("Laboratorio_tiles", "Laboratorio_tiles");

		// new_level5B
		const new_level5B = this.add.tilemap("new_level5B");
		new_level5B.addTilesetImage("Laboratorio_tiles", "Laboratorio_tiles");

		// tech_lab2
		const tech_lab2 = this.add.image(0, 0, "tech_lab2");
		tech_lab2.setOrigin(0, 0);

		// player
		const player = new Player(this, 1538, 308);
		this.add.existing(player);

		// nocollide_1
		mapa.createLayer("nocollide", ["Laboratorio_tiles"], 0, 0);

		// nocollideFx
		mapa.createLayer("nocollideFx", ["Laboratorio_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("collide", ["Laboratorio_tiles"], 0, 0);

		// collideFx_1
		new_level5B.createLayer("collideFx", ["Laboratorio_tiles"], 0, 0);

		// smallDoor
		const smallDoor = new SmallDoor(this, 206, 1121);
		this.add.existing(smallDoor);

		// switchPanel
		const switchPanel = new SwitchPanel(this, 719, 898);
		this.add.existing(switchPanel);

		// toll
		const toll = new Toll(this, 697, 592);
		this.add.existing(toll);

		// angrySpin
		const angrySpin = new AngrySpin(this, 744, 351);
		this.add.existing(angrySpin);

		// proxySpyke
		const proxySpyke = new ProxySpyke(this, 206, 491);
		this.add.existing(proxySpyke);

		// proxySpyke_1
		const proxySpyke_1 = new ProxySpyke(this, 368, 491);
		this.add.existing(proxySpyke_1);

		// proxySpyke_2
		const proxySpyke_2 = new ProxySpyke(this, 496, 492);
		this.add.existing(proxySpyke_2);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 956, 590);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 1364, 590);
		this.add.existing(sampoShooter_1);

		// blobber
		const blobber = new Blobber(this, 967, 656);
		this.add.existing(blobber);

		// blobber_1
		const blobber_1 = new Blobber(this, 457, 657);
		this.add.existing(blobber_1);

		// drone
		const drone = new Drone(this, 646, 1003);
		this.add.existing(drone);

		// sampoShooter_2
		const sampoShooter_2 = new SampoShooter(this, 212, 1290);
		this.add.existing(sampoShooter_2);

		// sampoShooter_3
		const sampoShooter_3 = new SampoShooter(this, 573, 1292);
		this.add.existing(sampoShooter_3);

		// sampoShooter_4
		const sampoShooter_4 = new SampoShooter(this, 1153, 1291);
		this.add.existing(sampoShooter_4);

		// heart
		const heart = new Heart(this, 1483, 1257);
		this.add.existing(heart);

		// heart_1
		const heart_1 = new Heart(this, 1486, 1052);
		this.add.existing(heart_1);

		// heart_2
		const heart_2 = new Heart(this, 1476, 807);
		this.add.existing(heart_2);

		// blobber_2
		const blobber_2 = new Blobber(this, 1168, 433);
		this.add.existing(blobber_2);

		// heart_3
		const heart_3 = new Heart(this, 929, 85);
		this.add.existing(heart_3);

		// sampoShooter_5
		const sampoShooter_5 = new SampoShooter(this, 242, 364);
		this.add.existing(sampoShooter_5);

		// misile
		const misile = new Misile(this, 1725, 158);
		this.add.existing(misile);

		// enemyCreator
		const enemyCreator = new EnemyCreator(this, 1290, 250);
		this.add.existing(enemyCreator);

		// sampoShooter_6
		const sampoShooter_6 = new SampoShooter(this, 1061, 364);
		this.add.existing(sampoShooter_6);

		// enemyCreator_1
		const enemyCreator_1 = new EnemyCreator(this, 914, 443);
		this.add.existing(enemyCreator_1);

		// enemyCreator_2
		const enemyCreator_2 = new EnemyCreator(this, 594, 252);
		this.add.existing(enemyCreator_2);

		// sampoShooter_5_1
		const sampoShooter_5_1 = new SampoShooter(this, 404, 589);
		this.add.existing(sampoShooter_5_1);

		// energyStation
		const energyStation = new EnergyStation(this, 127, 21);
		this.add.existing(energyStation);

		// sideDoorLocked
		const sideDoorLocked = new SideDoorLocked(this, 786, 532);
		this.add.existing(sideDoorLocked);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [angrySpin, blobber, sampoShooter_1, sampoShooter, sampoShooter_4, sampoShooter_3, sampoShooter_2, drone, blobber_1, blobber_2, sampoShooter_6, sampoShooter_5, sampoShooter_5_1];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [enemyCreator_1, enemyCreator, enemyCreator_2];
		const tutorials = [];

		// tech_lab2 (components)
		new FixedToCamera(tech_lab2);

		// toll (prefab fields)
		toll.tollCost = 120;

		// sampoShooter_2 (prefab fields)
		sampoShooter_2.RevivingPodID = "pod2";

		// sampoShooter_3 (prefab fields)
		sampoShooter_3.RevivingPodID = "pod2";

		// sampoShooter_4 (prefab fields)
		sampoShooter_4.RevivingPodID = "pod2";

		// sampoShooter_5 (prefab fields)
		sampoShooter_5.RevivingPodID = "pod3";
		sampoShooter_5.travelDistance = 100;

		// sampoShooter_6 (prefab fields)
		sampoShooter_6.EnemyID = 1;
		sampoShooter_6.travelDistance = 100;

		// enemyCreator_1 (prefab fields)
		enemyCreator_1.PodID = "pod2";

		// enemyCreator_2 (prefab fields)
		enemyCreator_2.PodID = "pod3";

		// sampoShooter_5_1 (prefab fields)
		sampoShooter_5_1.RevivingPodID = "pod3";

		this.player = player;
		this.layer = layer;
		this.mapa = mapa;
		this.new_level5B = new_level5B;
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
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Array<AngrySpin|Blobber|SampoShooter|Drone>} */
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
