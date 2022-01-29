
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel4 extends BaseScene {

	constructor() {
		super("NewLevel4");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level4");
		mapa.addTilesetImage("Invernadero_tiles", "Invernadero_tiles");

		// new_level4
		const new_level4 = this.add.tilemap("new_level4");
		new_level4.addTilesetImage("Invernadero_tiles", "Invernadero_tiles");

		// invernaderoBg
		const invernaderoBg = this.add.image(0, 0, "invernaderoBg");
		invernaderoBg.setOrigin(0, 0);

		// noCollide
		mapa.createLayer("NoCollide", ["Invernadero_tiles"], 0, 1);

		// door0000
		const door0000 = this.add.image(816, 817, "props", "door0000");
		door0000.scaleX = 0.82;
		door0000.scaleY = 0.82;

		// smallDoor
		const smallDoor = new SmallDoor(this, 176, 1314);
		this.add.existing(smallDoor);

		// noCollideFX_1
		mapa.createLayer("NoCollideFX", ["Invernadero_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["Invernadero_tiles"], 0, 0);

		// collideFX_1
		new_level4.createLayer("CollideFX", ["Invernadero_tiles"], 0, 0);

		// player
		const player = new Player(this, 824, 859);
		this.add.existing(player);

		// symbol_20_instance_10000
		const symbol_20_instance_10000 = this.add.image(167, 1401, "propsNew", "Symbol 20 instance 10000");
		symbol_20_instance_10000.scaleX = 0.6;
		symbol_20_instance_10000.scaleY = 0.6;

		// symbol_30_instance_20000
		const symbol_30_instance_20000 = this.add.image(186, 1402, "propsNew", "Symbol 30 instance 20000");
		symbol_30_instance_20000.scaleX = 0.7;
		symbol_30_instance_20000.scaleY = 0.7;

		// switchPanel
		const switchPanel = new SwitchPanel(this, 1504, 1441);
		this.add.existing(switchPanel);

		// energyStation
		const energyStation = new EnergyStation(this, 1103, 778);
		this.add.existing(energyStation);

		// drone
		const drone = new Drone(this, 1342, 1381);
		this.add.existing(drone);

		// misile
		const misile = new Misile(this, 1631, 51);
		this.add.existing(misile);

		// misile_1
		const misile_1 = new Misile(this, 1628, 146);
		this.add.existing(misile_1);

		// gotoLevelWall
		const gotoLevelWall = new GotoLevelWall(this, -24, 167);
		this.add.existing(gotoLevelWall);
		gotoLevelWall.scaleY = 2;
		gotoLevelWall.tintTopLeft = 16535632;
		gotoLevelWall.tintTopRight = 16479605;
		gotoLevelWall.tintBottomLeft = 10683396;
		gotoLevelWall.tintBottomRight = 16257554;

		// portalCannon
		const portalCannon = new PortalCannon(this, 1237, 60);
		this.add.existing(portalCannon);
		portalCannon.angle = -90;
		portalCannon.tintBottomLeft = 16700885;

		// portalCannon_1
		const portalCannon_1 = new PortalCannon(this, 417, 55);
		this.add.existing(portalCannon_1);
		portalCannon_1.angle = -180;
		portalCannon_1.tintBottomLeft = 16700885;

		// portalCannon_2
		const portalCannon_2 = new PortalCannon(this, 414, 279);
		this.add.existing(portalCannon_2);
		portalCannon_2.angle = 90;
		portalCannon_2.tintBottomLeft = 16700885;

		// portalCannon_3
		const portalCannon_3 = new PortalCannon(this, 813, 275);
		this.add.existing(portalCannon_3);
		portalCannon_3.angle = -180;
		portalCannon_3.tintBottomLeft = 16700885;

		// portalCannon_4
		const portalCannon_4 = new PortalCannon(this, 1248, 352);
		this.add.existing(portalCannon_4);
		portalCannon_4.tintBottomLeft = 16700885;

		// portalCannon_5
		const portalCannon_5 = new PortalCannon(this, 1247, 772);
		this.add.existing(portalCannon_5);
		portalCannon_5.tintBottomLeft = 16700885;

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 55, 1121);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 55, 741);
		this.add.existing(sampoShooter_1);

		// enemyCreator
		const enemyCreator = new EnemyCreator(this, 58, 456);
		this.add.existing(enemyCreator);

		// enemyCreator_1
		const enemyCreator_1 = new EnemyCreator(this, 56, 874);
		this.add.existing(enemyCreator_1);

		// sampoShooter_2
		const sampoShooter_2 = new SampoShooter(this, 55, 1479);
		this.add.existing(sampoShooter_2);

		// enemyCreator_2
		const enemyCreator_2 = new EnemyCreator(this, 61, 1258);
		this.add.existing(enemyCreator_2);

		// spike_1
		const spike_1 = new Spike(this, 1242, 862);
		this.add.existing(spike_1);

		// spike_2
		const spike_2 = new Spike(this, 1242, 684.9293196793859);
		this.add.existing(spike_2);

		// spike_3
		const spike_3 = new Spike(this, 1242, 567.7142631555886);
		this.add.existing(spike_3);

		// heart
		const heart = new Heart(this, 1456, 263);
		this.add.existing(heart);

		// heart_1
		const heart_1 = new Heart(this, 1421, 586);
		this.add.existing(heart_1);

		// portalCannon_5_1
		const portalCannon_5_1 = new PortalCannon(this, 1243, 990);
		this.add.existing(portalCannon_5_1);
		portalCannon_5_1.tintBottomLeft = 16700885;

		// symbol_30_instance_10000
		const symbol_30_instance_10000 = this.add.image(89, 267, "propsNew", "Symbol 30 instance 10000");
		symbol_30_instance_10000.angle = -90;

		// lists
		const doors = [smallDoor]
		const switches = []
		const enemies = [drone, sampoShooter, sampoShooter_1, sampoShooter_2]
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = [enemyCreator, enemyCreator_1, enemyCreator_2]
		const tutorials = []

		// invernaderoBg (components)
		new FixedToCamera(invernaderoBg);

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel3";

		// gotoLevelWall (prefab fields)
		gotoLevelWall.gotoLevelName = "NewLevel4A";

		// sampoShooter (prefab fields)
		sampoShooter.RevivingPodID = "pod2";
		sampoShooter.travelDistance = 545;

		// sampoShooter_1 (prefab fields)
		sampoShooter_1.travelDistance = 245;

		// enemyCreator_1 (prefab fields)
		enemyCreator_1.PodID = "pod2";

		// sampoShooter_2 (prefab fields)
		sampoShooter_2.RevivingPodID = "pod3";
		sampoShooter_2.travelDistance = 900;

		// enemyCreator_2 (prefab fields)
		enemyCreator_2.PodID = "pod3";

		// portalCannon_5_1 (prefab fields)
		portalCannon_5_1.IsFirstCannon = true;

		this.layer = layer;
		this.player = player;
		this.sampoShooter = sampoShooter;
		this.sampoShooter_1 = sampoShooter_1;
		this.sampoShooter_2 = sampoShooter_2;
		this.mapa = mapa;
		this.new_level4 = new_level4;
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
	/** @type {SmallDoor[]} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Array<Drone|SampoShooter>} */
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
