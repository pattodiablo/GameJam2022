
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel2D extends BaseScene {

	constructor() {
		super("NewLevel2D");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level2D");
		mapa.addTilesetImage("new_buildingTiles", "new_buildingTiles");

		// new_level2D
		const new_level2D = this.add.tilemap("new_level2D");
		new_level2D.addTilesetImage("new_buildingTiles", "new_buildingTiles");

		// bgLevel1
		const bgLevel1 = this.add.image(0, 0, "bgLevel1");
		bgLevel1.setOrigin(0, 0);

		// noCollide
		mapa.createLayer("NoCollide", ["new_buildingTiles"], 0, 0);

		// noCollideFX_1
		mapa.createLayer("NoCollideFX", ["new_buildingTiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["new_buildingTiles"], 0, 0);

		// enemyCreator_1
		const enemyCreator_1 = new EnemyCreator(this, 608, 702);
		this.add.existing(enemyCreator_1);

		// drone
		const drone = new Drone(this, 480, 501);
		this.add.existing(drone);

		// enemyCreator
		const enemyCreator = new EnemyCreator(this, 192, 700);
		this.add.existing(enemyCreator);

		// sideDoorLocked
		const sideDoorLocked = new SideDoorLocked(this, 640, 129);
		this.add.existing(sideDoorLocked);
		sideDoorLocked.scaleX = 0.8;
		sideDoorLocked.scaleY = 0.8;
		sideDoorLocked.tintTopLeft = 15612474;
		sideDoorLocked.tintTopRight = 15347503;
		sideDoorLocked.tintBottomLeft = 16218746;
		sideDoorLocked.tintBottomRight = 16490041;

		// collideFX_1
		new_level2D.createLayer("CollideFX", ["new_buildingTiles"], 0, 0);

		// player
		const player = new Player(this, 467, 836);
		this.add.existing(player);

		// catapulta
		const catapulta = new Catapulta(this, 832, 844);
		this.add.existing(catapulta);

		// catapulta_1
		const catapulta_1 = new Catapulta(this, 128, 844);
		this.add.existing(catapulta_1);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 58, 843);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 599, 838);
		this.add.existing(sampoShooter_1);

		// toll
		const toll = new Toll(this, 79, 174);
		this.add.existing(toll);

		// platform2
		const platform2 = new Platform2(this, 241, 319);
		this.add.existing(platform2);

		// platform2_1
		const platform2_1 = new Platform2(this, 752, 323);
		this.add.existing(platform2_1);

		// smallDoor
		const smallDoor = new SmallDoor(this, 493, 4);
		this.add.existing(smallDoor);

		// energyStation
		const energyStation = new EnergyStation(this, 897, 78);
		this.add.existing(energyStation);

		// lists
		const doors = []
		const switches = []
		const enemies = [sampoShooter, sampoShooter_1]
		const platforms = [platform2_1, platform2]
		const coins = []
		const catapultas = []
		const revivingPods = [enemyCreator_1, enemyCreator]
		const tutorials = []

		// bgLevel1 (components)
		new FixedToCamera(bgLevel1);

		// enemyCreator_1 (prefab fields)
		enemyCreator_1.PodID = "pod2";

		// catapulta (prefab fields)
		catapulta.power = 500;

		// catapulta_1 (prefab fields)
		catapulta_1.power = 500;

		// sampoShooter (prefab fields)
		sampoShooter.travelDistance = 150;

		// sampoShooter_1 (prefab fields)
		sampoShooter_1.RevivingPodID = "pod2";
		sampoShooter_1.travelDistance = 300;

		// platform2 (prefab fields)
		platform2.distance = 120;
		platform2.timeTravel = 3500;

		// platform2_1 (prefab fields)
		platform2_1.distance = 120;
		platform2_1.timeTravel = 3500;

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel2E";
		smallDoor.isLocked = false;

		this.layer = layer;
		this.player = player;
		this.sampoShooter = sampoShooter;
		this.sampoShooter_1 = sampoShooter_1;
		this.mapa = mapa;
		this.new_level2D = new_level2D;
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
	/** @type {SampoShooter} */
	sampoShooter;
	/** @type {SampoShooter} */
	sampoShooter_1;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {SampoShooter[]} */
	enemies;
	/** @type {Platform2[]} */
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
