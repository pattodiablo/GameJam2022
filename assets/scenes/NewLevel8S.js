
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel8S extends BaseScene {

	constructor() {
		super("NewLevel8S");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level8S");
		mapa.addTilesetImage("Servidores_tiles", "Servidores_tiles");

		// new_level8S
		const new_level8S = this.add.tilemap("new_level8S");
		new_level8S.addTilesetImage("Servidores_tiles", "Servidores_tiles");

		// tech_back
		const tech_back = this.add.image(0, 0, "tech_back");
		tech_back.setOrigin(0, 0);

		// noCollide_1
		mapa.createLayer("NoCollide", ["Servidores_tiles"], 0, 0);

		// smallDoor
		const smallDoor = new SmallDoor(this, 495, -29);
		this.add.existing(smallDoor);

		// noCollideFX
		mapa.createLayer("NoCollideFX", ["Servidores_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["Servidores_tiles"], 0, 0);

		// collideFX_1
		new_level8S.createLayer("CollideFX", ["Servidores_tiles"], 0, 0);

		// enemyCreator
		const enemyCreator = new EnemyCreator(this, 426, 2682);
		this.add.existing(enemyCreator);

		// player
		const player = new Player(this, 47, 56);
		this.add.existing(player);

		// spikeHorizontal
		const spikeHorizontal = new SpikeHorizontal(this, 641, 2629);
		this.add.existing(spikeHorizontal);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 240, 2991);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 351, 2985);
		this.add.existing(sampoShooter_1);

		// sampoShooter_2
		const sampoShooter_2 = new SampoShooter(this, 440, 2984);
		this.add.existing(sampoShooter_2);

		// drone_1
		const drone_1 = new Drone(this, 224, 1910);
		this.add.existing(drone_1);

		// drone_2
		const drone_2 = new Drone(this, 545, 1910);
		this.add.existing(drone_2);

		// drone_3
		const drone_3 = new Drone(this, 385, 1910);
		this.add.existing(drone_3);

		// catapulta
		const catapulta = new Catapulta(this, 545, 1805);
		this.add.existing(catapulta);

		// heart
		const heart = new Heart(this, 530, 1065);
		this.add.existing(heart);

		// heart_1
		const heart_1 = new Heart(this, 530, 1155);
		this.add.existing(heart_1);

		// heart_2
		const heart_2 = new Heart(this, 530, 1241);
		this.add.existing(heart_2);

		// energyStation
		const energyStation = new EnergyStation(this, 336, 278);
		this.add.existing(energyStation);

		// blobber
		const blobber = new Blobber(this, 145, 1264);
		this.add.existing(blobber);

		// blobber_1
		const blobber_1 = new Blobber(this, 337, 1135);
		this.add.existing(blobber_1);

		// blobber_1_1
		const blobber_1_1 = new Blobber(this, 530, 1006);
		this.add.existing(blobber_1_1);

		// misile
		const misile = new Misile(this, 691, 694);
		this.add.existing(misile);

		// misile_1
		const misile_1 = new Misile(this, 851, 598);
		this.add.existing(misile_1);

		// misile_2
		const misile_2 = new Misile(this, 1047, 533);
		this.add.existing(misile_2);

		// misile_3
		const misile_3 = new Misile(this, 1190, 262);
		this.add.existing(misile_3);

		// switchPanel
		const switchPanel = new SwitchPanel(this, 576, 3082);
		this.add.existing(switchPanel);

		// misile_4
		const misile_4 = new Misile(this, 1309, 797);
		this.add.existing(misile_4);

		// angrySpin
		const angrySpin = new AngrySpin(this, 163, 1429);
		this.add.existing(angrySpin);

		// blobber_2
		const blobber_2 = new Blobber(this, 559, 2321);
		this.add.existing(blobber_2);

		// lists
		const doors = []
		const switches = []
		const enemies = [sampoShooter_2, sampoShooter_1, sampoShooter, blobber, blobber_1, angrySpin, blobber_2]
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = [enemyCreator]
		const tutorials = []

		// tech_back (components)
		new FixedToCamera(tech_back);

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel8C";

		// catapulta (prefab fields)
		catapulta.power = 500;

		// blobber (prefab fields)
		blobber.travelDistance = 1;

		// blobber_1 (prefab fields)
		blobber_1.travelDistance = 1;

		// blobber_1_1 (prefab fields)
		blobber_1_1.travelDistance = 1;

		// blobber_2 (prefab fields)
		blobber_2.travelDistance = 1;

		this.layer = layer;
		this.player = player;
		this.sampoShooter = sampoShooter;
		this.sampoShooter_1 = sampoShooter_1;
		this.sampoShooter_2 = sampoShooter_2;
		this.angrySpin = angrySpin;
		this.mapa = mapa;
		this.new_level8S = new_level8S;
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
	/** @type {SampoShooter} */
	sampoShooter_2;
	/** @type {AngrySpin} */
	angrySpin;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Array<SampoShooter|Blobber|AngrySpin>} */
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
