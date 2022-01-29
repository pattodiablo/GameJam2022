
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel5X extends BaseScene {

	constructor() {
		super("NewLevel5X");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level5X");
		mapa.addTilesetImage("Laboratorio_tiles", "Laboratorio_tiles");

		// new_level5X
		const new_level5X = this.add.tilemap("new_level5X");
		new_level5X.addTilesetImage("Laboratorio_tiles", "Laboratorio_tiles");

		// invernaderoBg
		const invernaderoBg = this.add.image(0, 0, "invernaderoBg");
		invernaderoBg.setOrigin(0, 0);

		// nocollide2
		mapa.createLayer("nocollide2", ["Laboratorio_tiles"], 0, 0);

		// nocollide
		mapa.createLayer("nocollide", ["Laboratorio_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("collide", ["Laboratorio_tiles"], 0, 0);

		// stomper
		const stomper = new Stomper(this, 1006, 173);
		this.add.existing(stomper);

		// collideFX_1
		new_level5X.createLayer("collideFX", ["Laboratorio_tiles"], 0, 0);

		// player
		const player = new Player(this, 157, 999);
		this.add.existing(player);

		// catapulta
		const catapulta = new Catapulta(this, 447, 624);
		this.add.existing(catapulta);

		// platform2
		const platform2 = new Platform2(this, 806, 976);
		this.add.existing(platform2);

		// door
		const door = new Door(this, 1263, 565);
		this.add.existing(door);

		// portalCannon
		const portalCannon = new PortalCannon(this, 1392, 92);
		this.add.existing(portalCannon);
		portalCannon.angle = -90;

		// catapulta_1
		const catapulta_1 = new Catapulta(this, 1549, 994);
		this.add.existing(catapulta_1);

		// smallDoor
		const smallDoor = new SmallDoor(this, 190, 581);
		this.add.existing(smallDoor);

		// sideDoorLocked
		const sideDoorLocked = new SideDoorLocked(this, 1295, 882);
		this.add.existing(sideDoorLocked);

		// toll
		const toll = new Toll(this, 977, 722);
		this.add.existing(toll);

		// portalCannon_1
		const portalCannon_1 = new PortalCannon(this, 1011, 91);
		this.add.existing(portalCannon_1);
		portalCannon_1.angle = -90;

		// portalCannon_1_1_1
		const portalCannon_1_1_1 = new PortalCannon(this, 445, 59);
		this.add.existing(portalCannon_1_1_1);
		portalCannon_1_1_1.angle = -93;

		// portalCannon_1_1
		const portalCannon_1_1 = new PortalCannon(this, 739, 92);
		this.add.existing(portalCannon_1_1);
		portalCannon_1_1.angle = -84;

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 335, 735);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 540, 977);
		this.add.existing(sampoShooter_1);

		// heart
		const heart = new Heart(this, 1395, 319);
		this.add.existing(heart);

		// portalCannon_2
		const portalCannon_2 = new PortalCannon(this, 174, 67);
		this.add.existing(portalCannon_2);
		portalCannon_2.angle = -180;

		// passCard
		const passCard = new PassCard(this, 172, 156);
		this.add.existing(passCard);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [sampoShooter, sampoShooter_1];
		const platforms = [platform2];
		const coins = [];
		const catapultas = [];
		const revivingPods = [];
		const tutorials = [];

		// invernaderoBg (components)
		new FixedToCamera(invernaderoBg);

		// catapulta (prefab fields)
		catapulta.power = 600;

		// platform2 (prefab fields)
		platform2.distance = 192;
		platform2.timeTravel = 4000;

		// door (prefab fields)
		door.goToLevel = "NewLevel6";
		door.desde = 5;
		door.hasta = 6;

		// portalCannon (prefab fields)
		portalCannon.IsFirstCannon = true;

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel5C";

		// toll (prefab fields)
		toll.tollCost = 50;

		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.new_level5X = new_level5X;
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
	/** @type {Array<any>} */
	revivingPods;
	/** @type {Array<any>} */
	tutorials;

	/* START-USER-CODE */






	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
