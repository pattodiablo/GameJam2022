
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel8A extends BaseScene {

	constructor() {
		super("NewLevel8A");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level8A");
		mapa.addTilesetImage("Servidores_tiles", "Servidores_tiles");

		// new_level8A
		const new_level8A = this.add.tilemap("new_level8A");
		new_level8A.addTilesetImage("Servidores_tiles", "Servidores_tiles");

		// tech_back
		const tech_back = this.add.image(0, 0, "tech_back");
		tech_back.setOrigin(0, 0);

		// noCollide_1
		mapa.createLayer("NoCollide", ["Servidores_tiles"], 0, 0);

		// damagedDoor_instance_10000
		this.add.image(144, 545, "propsNew", "damagedDoor instance 10000");

		// smallDoor
		const smallDoor = new SmallDoor(this, 1423, 419);
		this.add.existing(smallDoor);

		// noCollideFX
		mapa.createLayer("NoCollideFX", ["Servidores_tiles"], 0, 0);

		// backJetPackStation
		this.add.image(3024, 569, "backJetPackStation");

		// mechaPirana
		const mechaPirana = new MechaPirana(this, 2845, 766);
		this.add.existing(mechaPirana);

		// mechaPirana_1
		const mechaPirana_1 = new MechaPirana(this, 2719, 765);
		this.add.existing(mechaPirana_1);

		// mechaPirana_2
		const mechaPirana_2 = new MechaPirana(this, 2569, 767);
		this.add.existing(mechaPirana_2);

		// mechaPirana_2_1
		const mechaPirana_2_1 = new MechaPirana(this, 2425, 765);
		this.add.existing(mechaPirana_2_1);

		// mechaPirana_2_2
		const mechaPirana_2_2 = new MechaPirana(this, 2276, 765);
		this.add.existing(mechaPirana_2_2);

		// mechaPirana_2_3
		const mechaPirana_2_3 = new MechaPirana(this, 2141, 766);
		this.add.existing(mechaPirana_2_3);

		// mechaPirana_2_4
		const mechaPirana_2_4 = new MechaPirana(this, 1980, 768);
		this.add.existing(mechaPirana_2_4);

		// mechaPirana_2_5
		const mechaPirana_2_5 = new MechaPirana(this, 1827, 767);
		this.add.existing(mechaPirana_2_5);

		// mechaPirana_2_6
		const mechaPirana_2_6 = new MechaPirana(this, 1688, 767);
		this.add.existing(mechaPirana_2_6);

		// layer
		const layer = mapa.createLayer("Collide", ["Servidores_tiles"], 0, 0);

		// collideFX_1
		new_level8A.createLayer("CollideFX", ["Servidores_tiles"], 0, 0);

		// player
		const player = new Player(this, 146, 567);
		this.add.existing(player);

		// switchPanel
		const switchPanel = new SwitchPanel(this, 3138, 587);
		this.add.existing(switchPanel);

		// energyStation
		const energyStation = new EnergyStation(this, 719, 374);
		this.add.existing(energyStation);

		// supaJet
		const supaJet = new SupaJet(this, 3023, 560);
		this.add.existing(supaJet);

		// misile
		const misile = new Misile(this, 3252, 241);
		this.add.existing(misile);

		// misile_1
		const misile_1 = new Misile(this, 3596, 144);
		this.add.existing(misile_1);

		// misile_2
		const misile_2 = new Misile(this, 3414, 88);
		this.add.existing(misile_2);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 405, 453);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 248, 327);
		this.add.existing(sampoShooter_1);

		// sampoShooter_2
		const sampoShooter_2 = new SampoShooter(this, 56, 189);
		this.add.existing(sampoShooter_2);

		// sampoShooter_3
		const sampoShooter_3 = new SampoShooter(this, 277, 100);
		this.add.existing(sampoShooter_3);

		// sampoShooter_4
		const sampoShooter_4 = new SampoShooter(this, 600, 135);
		this.add.existing(sampoShooter_4);

		// sampoShooter_4_1
		const sampoShooter_4_1 = new SampoShooter(this, 790, 227);
		this.add.existing(sampoShooter_4_1);

		// sampoShooter_4_2
		const sampoShooter_4_2 = new SampoShooter(this, 1015, 131);
		this.add.existing(sampoShooter_4_2);

		// sampoShooter_4_3
		const sampoShooter_4_3 = new SampoShooter(this, 1238, 227);
		this.add.existing(sampoShooter_4_3);

		// sampoShooter_4_4
		const sampoShooter_4_4 = new SampoShooter(this, 1621, 228);
		this.add.existing(sampoShooter_4_4);

		// sampoShooter_4_5
		const sampoShooter_4_5 = new SampoShooter(this, 1812, 131);
		this.add.existing(sampoShooter_4_5);

		// sampoShooter_4_6
		const sampoShooter_4_6 = new SampoShooter(this, 1975, 224);
		this.add.existing(sampoShooter_4_6);

		// sampoShooter_4_7
		const sampoShooter_4_7 = new SampoShooter(this, 2198, 135);
		this.add.existing(sampoShooter_4_7);

		// sampoShooter_4_8
		const sampoShooter_4_8 = new SampoShooter(this, 2387, 228);
		this.add.existing(sampoShooter_4_8);

		// sampoShooter_4_9
		const sampoShooter_4_9 = new SampoShooter(this, 2579, 132);
		this.add.existing(sampoShooter_4_9);

		// sampoShooter_4_10
		const sampoShooter_4_10 = new SampoShooter(this, 2773, 224);
		this.add.existing(sampoShooter_4_10);

		// sampoShooter_4_11
		const sampoShooter_4_11 = new SampoShooter(this, 2968, 131);
		this.add.existing(sampoShooter_4_11);

		// heart
		const heart = new Heart(this, 1424, 62);
		this.add.existing(heart);

		// heart_1
		const heart_1 = new Heart(this, 1424, 121);
		this.add.existing(heart_1);

		// lists
		const doors = [smallDoor]
		const switches = [switchPanel]
		const enemies = [sampoShooter, sampoShooter_1, sampoShooter_2, sampoShooter_3, sampoShooter_4, sampoShooter_4_1, sampoShooter_4_2, sampoShooter_4_3, sampoShooter_4_4, sampoShooter_4_5, sampoShooter_4_6, sampoShooter_4_7, sampoShooter_4_8, sampoShooter_4_9, sampoShooter_4_10, sampoShooter_4_11]
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// tech_back (components)
		new FixedToCamera(tech_back);

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel8B";

		// sampoShooter (prefab fields)
		sampoShooter.travelDistance = 90;

		// sampoShooter_1 (prefab fields)
		sampoShooter_1.travelDistance = 90;

		// sampoShooter_2 (prefab fields)
		sampoShooter_2.travelDistance = 90;

		// sampoShooter_3 (prefab fields)
		sampoShooter_3.travelDistance = 90;

		// sampoShooter_4 (prefab fields)
		sampoShooter_4.travelDistance = 25;

		// sampoShooter_4_1 (prefab fields)
		sampoShooter_4_1.travelDistance = 25;

		// sampoShooter_4_2 (prefab fields)
		sampoShooter_4_2.travelDistance = 25;

		// sampoShooter_4_3 (prefab fields)
		sampoShooter_4_3.travelDistance = 25;

		// sampoShooter_4_4 (prefab fields)
		sampoShooter_4_4.travelDistance = 25;

		// sampoShooter_4_5 (prefab fields)
		sampoShooter_4_5.travelDistance = 25;

		// sampoShooter_4_6 (prefab fields)
		sampoShooter_4_6.travelDistance = 25;

		// sampoShooter_4_7 (prefab fields)
		sampoShooter_4_7.travelDistance = 25;

		// sampoShooter_4_8 (prefab fields)
		sampoShooter_4_8.travelDistance = 25;

		// sampoShooter_4_9 (prefab fields)
		sampoShooter_4_9.travelDistance = 25;

		// sampoShooter_4_10 (prefab fields)
		sampoShooter_4_10.travelDistance = 25;

		// sampoShooter_4_11 (prefab fields)
		sampoShooter_4_11.travelDistance = 90;

		this.layer = layer;
		this.player = player;
		this.supaJet = supaJet;
		this.sampoShooter = sampoShooter;
		this.sampoShooter_1 = sampoShooter_1;
		this.sampoShooter_2 = sampoShooter_2;
		this.sampoShooter_3 = sampoShooter_3;
		this.sampoShooter_4 = sampoShooter_4;
		this.sampoShooter_4_1 = sampoShooter_4_1;
		this.sampoShooter_4_2 = sampoShooter_4_2;
		this.sampoShooter_4_3 = sampoShooter_4_3;
		this.sampoShooter_4_4 = sampoShooter_4_4;
		this.sampoShooter_4_5 = sampoShooter_4_5;
		this.sampoShooter_4_6 = sampoShooter_4_6;
		this.sampoShooter_4_7 = sampoShooter_4_7;
		this.sampoShooter_4_8 = sampoShooter_4_8;
		this.sampoShooter_4_9 = sampoShooter_4_9;
		this.sampoShooter_4_10 = sampoShooter_4_10;
		this.sampoShooter_4_11 = sampoShooter_4_11;
		this.mapa = mapa;
		this.new_level8A = new_level8A;
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
	/** @type {SampoShooter} */
	sampoShooter;
	/** @type {SampoShooter} */
	sampoShooter_1;
	/** @type {SampoShooter} */
	sampoShooter_2;
	/** @type {SampoShooter} */
	sampoShooter_3;
	/** @type {SampoShooter} */
	sampoShooter_4;
	/** @type {SampoShooter} */
	sampoShooter_4_1;
	/** @type {SampoShooter} */
	sampoShooter_4_2;
	/** @type {SampoShooter} */
	sampoShooter_4_3;
	/** @type {SampoShooter} */
	sampoShooter_4_4;
	/** @type {SampoShooter} */
	sampoShooter_4_5;
	/** @type {SampoShooter} */
	sampoShooter_4_6;
	/** @type {SampoShooter} */
	sampoShooter_4_7;
	/** @type {SampoShooter} */
	sampoShooter_4_8;
	/** @type {SampoShooter} */
	sampoShooter_4_9;
	/** @type {SampoShooter} */
	sampoShooter_4_10;
	/** @type {SampoShooter} */
	sampoShooter_4_11;
	/** @type {SmallDoor[]} */
	doors;
	/** @type {SwitchPanel[]} */
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
