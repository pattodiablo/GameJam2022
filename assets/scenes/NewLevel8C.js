
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel8C extends BaseScene {

	constructor() {
		super("NewLevel8C");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level8C");
		mapa.addTilesetImage("Servidores_tiles", "Servidores_tiles");

		// new_level8C
		const new_level8C = this.add.tilemap("new_level8C");
		new_level8C.addTilesetImage("Servidores_tiles", "Servidores_tiles");

		// tech_back
		const tech_back = this.add.image(0, 0, "tech_back");
		tech_back.setOrigin(0, 0);

		// noCollide_1
		mapa.createLayer("NoCollide", ["Servidores_tiles"], 0, 0);

		// damagedDoor_instance_10000
		this.add.image(177, 994, "propsNew", "damagedDoor instance 10000");

		// sideDoorLocked
		const sideDoorLocked = new SideDoorLocked(this, 416, 613);
		this.add.existing(sideDoorLocked);
		sideDoorLocked.scaleX = 0.8;
		sideDoorLocked.scaleY = 0.8;
		sideDoorLocked.angle = 90;
		sideDoorLocked.tintTopLeft = 15612474;
		sideDoorLocked.tintTopRight = 15347503;
		sideDoorLocked.tintBottomLeft = 16218746;
		sideDoorLocked.tintBottomRight = 16490041;

		// smallDoor
		const smallDoor = new SmallDoor(this, 176, 610);
		this.add.existing(smallDoor);

		// noCollideFX
		mapa.createLayer("NoCollideFX", ["Servidores_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["Servidores_tiles"], 0, 0);

		// collideFX_1
		new_level8C.createLayer("CollideFX", ["Servidores_tiles"], 0, 0);

		// angrySpin
		const angrySpin = new AngrySpin(this, 436, 1010);
		this.add.existing(angrySpin);

		// player
		const player = new Player(this, 175, 1005);
		this.add.existing(player);

		// misile
		const misile = new Misile(this, 1657, 960);
		this.add.existing(misile);

		// misile_1
		const misile_1 = new Misile(this, 1919, 920);
		this.add.existing(misile_1);

		// catapulta
		const catapulta = new Catapulta(this, 1536, 1042);
		this.add.existing(catapulta);

		// catapulta_1
		const catapulta_1 = new Catapulta(this, 574, 783);
		this.add.existing(catapulta_1);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 1180, 554);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 1302, 394);
		this.add.existing(sampoShooter_1);

		// sampoShooter_2
		const sampoShooter_2 = new SampoShooter(this, 1178, 231);
		this.add.existing(sampoShooter_2);

		// sampoShooter_3
		const sampoShooter_3 = new SampoShooter(this, 697.2783016689701, 615.7355137886082);
		this.add.existing(sampoShooter_3);

		// sampoShooter_4
		const sampoShooter_4 = new SampoShooter(this, 791, 452);
		this.add.existing(sampoShooter_4);

		// sampoShooter_5
		const sampoShooter_5 = new SampoShooter(this, 696, 292);
		this.add.existing(sampoShooter_5);

		// sampoShooter_6
		const sampoShooter_6 = new SampoShooter(this, 793, 131);
		this.add.existing(sampoShooter_6);

		// toll
		const toll = new Toll(this, 175, 535);
		this.add.existing(toll);

		// blobber
		const blobber = new Blobber(this, 730, 49);
		this.add.existing(blobber);

		// blobber_1
		const blobber_1 = new Blobber(this, 1210, 48);
		this.add.existing(blobber_1);

		// switchPanel
		const switchPanel = new SwitchPanel(this, 1184, 746);
		this.add.existing(switchPanel);

		// energyStation
		const energyStation = new EnergyStation(this, 414, 664);
		this.add.existing(energyStation);

		// lists
		const doors = [sideDoorLocked]
		const switches = [toll, switchPanel]
		const enemies = [angrySpin, sampoShooter, sampoShooter_1, sampoShooter_2, sampoShooter_3, sampoShooter_4, sampoShooter_6, sampoShooter_5, blobber, blobber_1]
		const platforms = []
		const coins = []
		const catapultas = [catapulta, catapulta_1]
		const revivingPods = []
		const tutorials = []

		// tech_back (components)
		new FixedToCamera(tech_back);

		// sideDoorLocked (prefab fields)
		sideDoorLocked.LockedBy = "2";
		sideDoorLocked.doorID = "2";

		// angrySpin (prefab fields)
		angrySpin.travelDistance = 1000;

		// catapulta_1 (prefab fields)
		catapulta_1.power = 800;

		// sampoShooter (prefab fields)
		sampoShooter.travelDistance = 140;

		// sampoShooter_1 (prefab fields)
		sampoShooter_1.travelDistance = 140;

		// sampoShooter_2 (prefab fields)
		sampoShooter_2.travelDistance = 140;

		// sampoShooter_3 (prefab fields)
		sampoShooter_3.travelDistance = 140;

		// sampoShooter_4 (prefab fields)
		sampoShooter_4.travelDistance = 140;

		// sampoShooter_5 (prefab fields)
		sampoShooter_5.travelDistance = 140;

		// sampoShooter_6 (prefab fields)
		sampoShooter_6.travelDistance = 140;

		// toll (prefab fields)
		toll.LockId = "2";

		// blobber (prefab fields)
		blobber.travelDistance = 300;
		blobber.veloBlobber = 100;

		// blobber_1 (prefab fields)
		blobber_1.travelDistance = 300;
		blobber_1.veloBlobber = 100;

		this.layer = layer;
		this.angrySpin = angrySpin;
		this.player = player;
		this.sampoShooter = sampoShooter;
		this.sampoShooter_1 = sampoShooter_1;
		this.sampoShooter_2 = sampoShooter_2;
		this.sampoShooter_3 = sampoShooter_3;
		this.sampoShooter_4 = sampoShooter_4;
		this.sampoShooter_5 = sampoShooter_5;
		this.sampoShooter_6 = sampoShooter_6;
		this.blobber = blobber;
		this.blobber_1 = blobber_1;
		this.mapa = mapa;
		this.new_level8C = new_level8C;
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
	/** @type {AngrySpin} */
	angrySpin;
	/** @type {Player} */
	player;
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
	sampoShooter_5;
	/** @type {SampoShooter} */
	sampoShooter_6;
	/** @type {Blobber} */
	blobber;
	/** @type {Blobber} */
	blobber_1;
	/** @type {SideDoorLocked[]} */
	doors;
	/** @type {Array<Toll|SwitchPanel>} */
	switches;
	/** @type {Array<AngrySpin|SampoShooter|Blobber>} */
	enemies;
	/** @type {Array<any>} */
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
