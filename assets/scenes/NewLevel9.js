
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel9 extends BaseScene {

	constructor() {
		super("NewLevel9");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level9");
		mapa.addTilesetImage("finalStage", "finalStage");

		// new_level9
		const new_level9 = this.add.tilemap("new_level9");
		new_level9.addTilesetImage("finalStage", "finalStage");

		// bgLevel1
		const bgLevel1 = this.add.image(153, 110, "bgLevel1");

		// noCollide_1
		mapa.createLayer("NoCollide", ["finalStage"], 0, 0);

		// smallDoor
		const smallDoor = new SmallDoor(this, 173, 35);
		this.add.existing(smallDoor);

		// smallDoor_1
		const smallDoor_1 = new SmallDoor(this, 464, 35);
		this.add.existing(smallDoor_1);

		// mainDoor0000_1
		const mainDoor0000_1 = this.add.image(1312, 592, "propsNew", "mainDoor0000");
		mainDoor0000_1.scaleX = 1.25;
		mainDoor0000_1.scaleY = 1.25;

		// noCollideFX
		mapa.createLayer("NoCollideFX", ["finalStage"], 0, 0);

		// mechaPirana
		const mechaPirana = new MechaPirana(this, 1875, 349);
		this.add.existing(mechaPirana);

		// mechaPirana_1
		const mechaPirana_1 = new MechaPirana(this, 2025, 349);
		this.add.existing(mechaPirana_1);

		// mechaPirana_2
		const mechaPirana_2 = new MechaPirana(this, 2290, 349);
		this.add.existing(mechaPirana_2);

		// mechaPirana_3
		const mechaPirana_3 = new MechaPirana(this, 1515, 349);
		this.add.existing(mechaPirana_3);

		// mechaPirana_4
		const mechaPirana_4 = new MechaPirana(this, 1365, 349);
		this.add.existing(mechaPirana_4);

		// mechaPirana_4_1
		const mechaPirana_4_1 = new MechaPirana(this, 1005, 349);
		this.add.existing(mechaPirana_4_1);

		// mechaPirana_4_2
		const mechaPirana_4_2 = new MechaPirana(this, 850, 349);
		this.add.existing(mechaPirana_4_2);

		// mechaPirana_4_2_1
		const mechaPirana_4_2_1 = new MechaPirana(this, 1862, 1280);
		this.add.existing(mechaPirana_4_2_1);

		// mechaPirana_4_2_1_1
		const mechaPirana_4_2_1_1 = new MechaPirana(this, 1660, 1280);
		this.add.existing(mechaPirana_4_2_1_1);

		// mechaPirana_4_2_1_3
		const mechaPirana_4_2_1_3 = new MechaPirana(this, 1467, 1280);
		this.add.existing(mechaPirana_4_2_1_3);

		// mechaPirana_4_2_1_5
		const mechaPirana_4_2_1_5 = new MechaPirana(this, 1277, 1280);
		this.add.existing(mechaPirana_4_2_1_5);

		// mechaPirana_4_2_1_6
		const mechaPirana_4_2_1_6 = new MechaPirana(this, 1082, 1280);
		this.add.existing(mechaPirana_4_2_1_6);

		// mechaPirana_4_2_1_7
		const mechaPirana_4_2_1_7 = new MechaPirana(this, 894, 1280);
		this.add.existing(mechaPirana_4_2_1_7);

		// mechaPirana_4_2_1_8
		const mechaPirana_4_2_1_8 = new MechaPirana(this, 767, 1280);
		this.add.existing(mechaPirana_4_2_1_8);

		// layer
		const layer = mapa.createLayer("Collide", ["finalStage"], 0, 0);

		// collideFX_1
		new_level9.createLayer("CollideFX", ["finalStage"], 0, 0);

		// player
		const player = new Player(this, 1316, 633);
		this.add.existing(player);

		// drone
		const drone = new Drone(this, 130, 997);
		this.add.existing(drone);

		// drone_1
		const drone_1 = new Drone(this, 2434, 999);
		this.add.existing(drone_1);

		// switchPanel
		const switchPanel = new SwitchPanel(this, 2431, 1129);
		this.add.existing(switchPanel);

		// switchPanel_1
		const switchPanel_1 = new SwitchPanel(this, 127, 1129);
		this.add.existing(switchPanel_1);

		// misile
		const misile = new Misile(this, 2615, 179);
		this.add.existing(misile);

		// misile_1
		const misile_1 = new Misile(this, 2729, 111);
		this.add.existing(misile_1);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 800, 660);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 1566, 664);
		this.add.existing(sampoShooter_1);

		// angrySpin
		const angrySpin = new AngrySpin(this, 822, 964);
		this.add.existing(angrySpin);

		// angrySpin_1
		const angrySpin_1 = new AngrySpin(this, 1162, 963);
		this.add.existing(angrySpin_1);

		// angrySpin_2
		const angrySpin_2 = new AngrySpin(this, 1537, 960);
		this.add.existing(angrySpin_2);

		// catapulta
		const catapulta = new Catapulta(this, 2446, 856);
		this.add.existing(catapulta);

		// energyStation
		const energyStation = new EnergyStation(this, 109, 727);
		this.add.existing(energyStation);

		// blobber
		const blobber = new Blobber(this, 814, 817);
		this.add.existing(blobber);

		// blobber_1
		const blobber_1 = new Blobber(this, 1583, 821);
		this.add.existing(blobber_1);

		// platform1
		const platform1 = new Platform1(this, 1950, 1225);
		this.add.existing(platform1);

		// heart
		const heart = new Heart(this, 1663, 1170);
		this.add.existing(heart);

		// heart_2
		const heart_2 = new Heart(this, 1468, 1170);
		this.add.existing(heart_2);

		// heart_4
		const heart_4 = new Heart(this, 1086, 1170);
		this.add.existing(heart_4);

		// heart_5
		const heart_5 = new Heart(this, 893, 1170);
		this.add.existing(heart_5);

		// heart_4_1
		const heart_4_1 = new Heart(this, 1282, 1170);
		this.add.existing(heart_4_1);

		// symbol_26_instance_10000
		const symbol_26_instance_10000 = this.add.image(399, 143, "propsNew", "Symbol 26 instance 10000");
		symbol_26_instance_10000.scaleX = 0.6;
		symbol_26_instance_10000.scaleY = 0.6;

		// symbol_25_instance_10000
		const symbol_25_instance_10000 = this.add.image(111, 143, "propsNew", "Symbol 25 instance 10000");
		symbol_25_instance_10000.scaleX = 0.6;
		symbol_25_instance_10000.scaleY = 0.6;

		// symbol_30_instance_10000
		const symbol_30_instance_10000 = this.add.image(528, 143, "propsNew", "Symbol 30 instance 10000");
		symbol_30_instance_10000.scaleX = 0.7;
		symbol_30_instance_10000.scaleY = 0.7;

		// symbol_30_instance_20000
		const symbol_30_instance_20000 = this.add.image(239, 143, "propsNew", "Symbol 30 instance 20000");
		symbol_30_instance_20000.scaleX = 0.7;
		symbol_30_instance_20000.scaleY = 0.7;

		// lists
		const doors = [smallDoor_1, smallDoor]
		const switches = [switchPanel_1, switchPanel]
		const enemies = [mechaPirana, mechaPirana_2, mechaPirana_3, mechaPirana_4, mechaPirana_4_2, mechaPirana_4_1, mechaPirana_1, sampoShooter, sampoShooter_1, angrySpin, angrySpin_1, angrySpin_2, blobber, blobber_1, mechaPirana_4_2_1, mechaPirana_4_2_1_8, mechaPirana_4_2_1_7, mechaPirana_4_2_1_6, mechaPirana_4_2_1_5, mechaPirana_4_2_1_3, mechaPirana_4_2_1_1]
		const platforms = [platform1]
		const coins = []
		const catapultas = [catapulta]
		const revivingPods = []
		const tutorials = []

		// bgLevel1 (components)
		new FixedToCamera(bgLevel1);

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel8";
		smallDoor.doorID = "2";

		// smallDoor_1 (prefab fields)
		smallDoor_1.goToLevel = "NewLevel9W";

		// switchPanel_1 (prefab fields)
		switchPanel_1.doorID = 2;

		// sampoShooter (prefab fields)
		sampoShooter.travelDistance = 260;

		// sampoShooter_1 (prefab fields)
		sampoShooter_1.travelDistance = 260;

		// blobber (prefab fields)
		blobber.travelDistance = 250;
		blobber.veloBlobber = 50;

		// blobber_1 (prefab fields)
		blobber_1.travelDistance = 250;
		blobber_1.veloBlobber = 50;

		// platform1 (prefab fields)
		platform1.timeTravel = 24000;
		platform1.isHorizontal = true;

		this.mechaPirana = mechaPirana;
		this.mechaPirana_1 = mechaPirana_1;
		this.mechaPirana_2 = mechaPirana_2;
		this.mechaPirana_3 = mechaPirana_3;
		this.mechaPirana_4 = mechaPirana_4;
		this.mechaPirana_4_1 = mechaPirana_4_1;
		this.mechaPirana_4_2 = mechaPirana_4_2;
		this.mechaPirana_4_2_1 = mechaPirana_4_2_1;
		this.mechaPirana_4_2_1_1 = mechaPirana_4_2_1_1;
		this.mechaPirana_4_2_1_3 = mechaPirana_4_2_1_3;
		this.mechaPirana_4_2_1_5 = mechaPirana_4_2_1_5;
		this.mechaPirana_4_2_1_6 = mechaPirana_4_2_1_6;
		this.mechaPirana_4_2_1_7 = mechaPirana_4_2_1_7;
		this.mechaPirana_4_2_1_8 = mechaPirana_4_2_1_8;
		this.layer = layer;
		this.player = player;
		this.sampoShooter = sampoShooter;
		this.sampoShooter_1 = sampoShooter_1;
		this.angrySpin = angrySpin;
		this.angrySpin_1 = angrySpin_1;
		this.angrySpin_2 = angrySpin_2;
		this.mapa = mapa;
		this.new_level9 = new_level9;
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

	/** @type {MechaPirana} */
	mechaPirana;
	/** @type {MechaPirana} */
	mechaPirana_1;
	/** @type {MechaPirana} */
	mechaPirana_2;
	/** @type {MechaPirana} */
	mechaPirana_3;
	/** @type {MechaPirana} */
	mechaPirana_4;
	/** @type {MechaPirana} */
	mechaPirana_4_1;
	/** @type {MechaPirana} */
	mechaPirana_4_2;
	/** @type {MechaPirana} */
	mechaPirana_4_2_1;
	/** @type {MechaPirana} */
	mechaPirana_4_2_1_1;
	/** @type {MechaPirana} */
	mechaPirana_4_2_1_3;
	/** @type {MechaPirana} */
	mechaPirana_4_2_1_5;
	/** @type {MechaPirana} */
	mechaPirana_4_2_1_6;
	/** @type {MechaPirana} */
	mechaPirana_4_2_1_7;
	/** @type {MechaPirana} */
	mechaPirana_4_2_1_8;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	layer;
	/** @type {Player} */
	player;
	/** @type {SampoShooter} */
	sampoShooter;
	/** @type {SampoShooter} */
	sampoShooter_1;
	/** @type {AngrySpin} */
	angrySpin;
	/** @type {AngrySpin} */
	angrySpin_1;
	/** @type {AngrySpin} */
	angrySpin_2;
	/** @type {SmallDoor[]} */
	doors;
	/** @type {SwitchPanel[]} */
	switches;
	/** @type {Array<MechaPirana|SampoShooter|AngrySpin|Blobber>} */
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
