
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel5C extends BaseScene {

	constructor() {
		super("NewLevel5C");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level5C");
		mapa.addTilesetImage("Laboratorio_tiles", "Laboratorio_tiles");

		// new_level5C
		const new_level5C = this.add.tilemap("new_level5C");
		new_level5C.addTilesetImage("Laboratorio_tiles", "Laboratorio_tiles");

		// new_level5C_1
		const new_level5C_1 = this.add.tilemap("new_level5C");
		new_level5C_1.addTilesetImage("Laboratorio_tiles", "Laboratorio_tiles");

		// tech_lab2
		const tech_lab2 = this.add.image(0, 0, "tech_lab2");
		tech_lab2.setOrigin(0, 0);

		// nocollideFx_1
		new_level5C.createLayer("nocollideFx", ["Laboratorio_tiles"], 0, 1);

		// nocollide_1
		mapa.createLayer("nocollide", ["Laboratorio_tiles"], 0, 1);

		// nocollideFx
		mapa.createLayer("nocollideFx", ["Laboratorio_tiles"], 0, 1);

		// layer
		const layer = mapa.createLayer("collide", ["Laboratorio_tiles"], 0, 0);

		// collideFx_1
		new_level5C_1.createLayer("collideFx", ["Laboratorio_tiles"], 0, 0);

		// spikeHorizontal
		const spikeHorizontal = new SpikeHorizontal(this, 460, 195);
		this.add.existing(spikeHorizontal);

		// player
		const player = new Player(this, 1524, 771);
		this.add.existing(player);

		// heart
		const heart = new Heart(this, 1377, 170);
		this.add.existing(heart);

		// box
		const box = new Box(this, 684, 212);
		this.add.existing(box);

		// wallLight
		this.add.image(784, 1396, "wallLight");

		// lightBean
		this.add.image(784, 1395, "lightBean");

		// bADEYES
		this.add.image(805, 418, "BADEYES");

		// enemyCreator
		const enemyCreator = new EnemyCreator(this, 794, 607);
		this.add.existing(enemyCreator);

		// proxySpyke
		const proxySpyke = new ProxySpyke(this, 1080, 592);
		this.add.existing(proxySpyke);

		// proxySpyke_1
		const proxySpyke_1 = new ProxySpyke(this, 943, 592);
		this.add.existing(proxySpyke_1);

		// proxySpyke_2
		const proxySpyke_2 = new ProxySpyke(this, 607, 593);
		this.add.existing(proxySpyke_2);

		// proxySpyke_3
		const proxySpyke_3 = new ProxySpyke(this, 442, 592);
		this.add.existing(proxySpyke_3);

		// smallDoor
		const smallDoor = new SmallDoor(this, 784, 1377);
		this.add.existing(smallDoor);

		// switchPanel
		const switchPanel = new SwitchPanel(this, 801, 512);
		this.add.existing(switchPanel);

		// cyberPigeon
		const cyberPigeon = new CyberPigeon(this, 528, 334);
		this.add.existing(cyberPigeon);

		// angrySpin
		const angrySpin = new AngrySpin(this, 1224, 177);
		this.add.existing(angrySpin);

		// angrySpin_1
		const angrySpin_1 = new AngrySpin(this, 807, 505);
		this.add.existing(angrySpin_1);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 57, 800);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 221, 797);
		this.add.existing(sampoShooter_1);

		// mechaPirana_2
		const mechaPirana_2 = new MechaPirana(this, 656, 1187);
		this.add.existing(mechaPirana_2);

		// mechaPirana_3
		const mechaPirana_3 = new MechaPirana(this, 889, 1185);
		this.add.existing(mechaPirana_3);

		// mechaPirana_4
		const mechaPirana_4 = new MechaPirana(this, 70, 1179);
		this.add.existing(mechaPirana_4);

		// mechaPirana_5
		const mechaPirana_5 = new MechaPirana(this, 1365, 1180);
		this.add.existing(mechaPirana_5);

		// mechaPirana_6
		const mechaPirana_6 = new MechaPirana(this, 1496, 1181);
		this.add.existing(mechaPirana_6);

		// mechaPirana_7
		const mechaPirana_7 = new MechaPirana(this, 219, 1182);
		this.add.existing(mechaPirana_7);

		// drone
		const drone = new Drone(this, 246, 1432);
		this.add.existing(drone);

		// drone_1
		const drone_1 = new Drone(this, 1281, 1433);
		this.add.existing(drone_1);

		// drone_2
		const drone_2 = new Drone(this, 787, 1275);
		this.add.existing(drone_2);

		// catapulta
		const catapulta = new Catapulta(this, 779, 1202);
		this.add.existing(catapulta);

		// catapulta_1
		const catapulta_1 = new Catapulta(this, 493, 1011);
		this.add.existing(catapulta_1);

		// catapulta_2
		const catapulta_2 = new Catapulta(this, 1114, 1010);
		this.add.existing(catapulta_2);

		// enemyCreator_instance_10000
		this.add.image(70, 1191, "propsNew", "enemyCreator instance 10000");

		// enemyCreator_instance_10000_1
		this.add.image(220, 1191, "propsNew", "enemyCreator instance 10000");

		// enemyCreator_instance_10000_1_1
		this.add.image(656, 1193, "propsNew", "enemyCreator instance 10000");

		// enemyCreator_instance_10000_1_1_1
		this.add.image(887, 1193, "propsNew", "enemyCreator instance 10000");

		// enemyCreator_instance_10000_1_1_2
		this.add.image(1366, 1191, "propsNew", "enemyCreator instance 10000");

		// enemyCreator_instance_10000_1_1_3
		this.add.image(1499, 1191, "propsNew", "enemyCreator instance 10000");

		// platform1
		const platform1 = new Platform1(this, 814, 342);
		this.add.existing(platform1);

		// energyStation
		const energyStation = new EnergyStation(this, 128, 77);
		this.add.existing(energyStation);

		// lists
		const doors = [smallDoor];
		const switches = [switchPanel];
		const enemies = [cyberPigeon, drone_2, drone_1, drone, mechaPirana_7, mechaPirana_6, mechaPirana_5, mechaPirana_4, mechaPirana_3, mechaPirana_2, sampoShooter_1, sampoShooter, angrySpin_1, angrySpin];
		const platforms = [platform1];
		const coins = [];
		const catapultas = [catapulta, catapulta_1, catapulta_2];
		const revivingPods = [];
		const tutorials = [];

		// tech_lab2 (components)
		new FixedToCamera(tech_lab2);

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel5X";

		// catapulta (prefab fields)
		catapulta.power = 600;

		// catapulta_1 (prefab fields)
		catapulta_1.power = 600;

		// catapulta_2 (prefab fields)
		catapulta_2.power = 600;

		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.new_level5C = new_level5C;
		this.new_level5C_1 = new_level5C_1;
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
	/** @type {Array<CyberPigeon|Drone|MechaPirana|SampoShooter|AngrySpin>} */
	enemies;
	/** @type {Platform1[]} */
	platforms;
	/** @type {Array<any>} */
	coins;
	/** @type {Catapulta[]} */
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
