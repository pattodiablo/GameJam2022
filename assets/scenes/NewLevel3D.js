
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel3D extends BaseScene {

	constructor() {
		super("NewLevel3D");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level3D");
		mapa.addTilesetImage("Invernadero_tiles", "Invernadero_tiles");

		// new_level3D
		const new_level3D = this.add.tilemap("new_level3D");
		new_level3D.addTilesetImage("Invernadero_tiles", "Invernadero_tiles");

		// invernaderoBg
		const invernaderoBg = this.add.image(0, 0, "invernaderoBg");
		invernaderoBg.setOrigin(0, 0);

		// noCollide
		mapa.createLayer("NoCollide", ["Invernadero_tiles"], 0, 0);

		// noCollideFX_1
		mapa.createLayer("NoCollideFX", ["Invernadero_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["Invernadero_tiles"], 0, 0);

		// collideFX_1
		new_level3D.createLayer("CollideFX", ["Invernadero_tiles"], 0, 0);

		// player
		const player = new Player(this, 1020, 989);
		this.add.existing(player);

		// portalCannon
		const portalCannon = new PortalCannon(this, 94, 77);
		this.add.existing(portalCannon);
		portalCannon.angle = 90;
		portalCannon.tintBottomLeft = 16700885;

		// portalCannon_1
		const portalCannon_1 = new PortalCannon(this, 242, 83);
		this.add.existing(portalCannon_1);
		portalCannon_1.angle = -180;
		portalCannon_1.tintBottomLeft = 16700885;

		// portalCannon_1_2
		const portalCannon_1_2 = new PortalCannon(this, 242, 280);
		this.add.existing(portalCannon_1_2);
		portalCannon_1_2.angle = -180;
		portalCannon_1_2.tintBottomLeft = 16700885;

		// portalCannon_1_3
		const portalCannon_1_3 = new PortalCannon(this, 243, 408);
		this.add.existing(portalCannon_1_3);
		portalCannon_1_3.angle = 90;
		portalCannon_1_3.tintBottomLeft = 16700885;

		// portalCannon_1_1_1
		const portalCannon_1_1_1 = new PortalCannon(this, 1025, 410);
		this.add.existing(portalCannon_1_1_1);
		portalCannon_1_1_1.angle = -180;
		portalCannon_1_1_1.tintBottomLeft = 16700885;

		// spikeHorizontal
		const spikeHorizontal = new SpikeHorizontal(this, 346, 309);
		this.add.existing(spikeHorizontal);

		// spikeHorizontal_1
		const spikeHorizontal_1 = new SpikeHorizontal(this, 508, 309);
		this.add.existing(spikeHorizontal_1);

		// spikeHorizontal_2
		const spikeHorizontal_2 = new SpikeHorizontal(this, 707, 309);
		this.add.existing(spikeHorizontal_2);

		// spikeHorizontal_3
		const spikeHorizontal_3 = new SpikeHorizontal(this, 901, 309);
		this.add.existing(spikeHorizontal_3);

		// spikeHorizontal_4
		const spikeHorizontal_4 = new SpikeHorizontal(this, 423, 249);
		this.add.existing(spikeHorizontal_4);
		spikeHorizontal_4.angle = 90;

		// spikeHorizontal_4_1
		const spikeHorizontal_4_1 = new SpikeHorizontal(this, 805, 249);
		this.add.existing(spikeHorizontal_4_1);
		spikeHorizontal_4_1.angle = 90;

		// spikeHorizontal_4_1_1
		const spikeHorizontal_4_1_1 = new SpikeHorizontal(this, 793, 369);
		this.add.existing(spikeHorizontal_4_1_1);
		spikeHorizontal_4_1_1.angle = 90;

		// spikeHorizontal_4_2
		const spikeHorizontal_4_2 = new SpikeHorizontal(this, 411, 369);
		this.add.existing(spikeHorizontal_4_2);
		spikeHorizontal_4_2.angle = 90;

		// spikeHorizontal_3_1
		const spikeHorizontal_3_1 = new SpikeHorizontal(this, 889, 429);
		this.add.existing(spikeHorizontal_3_1);

		// spikeHorizontal_2_1
		const spikeHorizontal_2_1 = new SpikeHorizontal(this, 695, 429);
		this.add.existing(spikeHorizontal_2_1);

		// spikeHorizontal_1_1
		const spikeHorizontal_1_1 = new SpikeHorizontal(this, 496, 429);
		this.add.existing(spikeHorizontal_1_1);

		// spikeHorizontal_5
		const spikeHorizontal_5 = new SpikeHorizontal(this, 334, 429);
		this.add.existing(spikeHorizontal_5);

		// proxySpyke
		const proxySpyke = new ProxySpyke(this, 468, 490);
		this.add.existing(proxySpyke);

		// proxySpyke_1
		const proxySpyke_1 = new ProxySpyke(this, 505, 490);
		this.add.existing(proxySpyke_1);

		// proxySpyke_2
		const proxySpyke_2 = new ProxySpyke(this, 540, 490);
		this.add.existing(proxySpyke_2);

		// proxySpyke_3
		const proxySpyke_3 = new ProxySpyke(this, 612, 490);
		this.add.existing(proxySpyke_3);

		// proxySpyke_4
		const proxySpyke_4 = new ProxySpyke(this, 647, 490);
		this.add.existing(proxySpyke_4);

		// proxySpyke_5
		const proxySpyke_5 = new ProxySpyke(this, 684, 490);
		this.add.existing(proxySpyke_5);

		// proxySpyke_6
		const proxySpyke_6 = new ProxySpyke(this, 720, 490);
		this.add.existing(proxySpyke_6);

		// proxySpyke_7
		const proxySpyke_7 = new ProxySpyke(this, 756, 490);
		this.add.existing(proxySpyke_7);

		// proxySpyke_8
		const proxySpyke_8 = new ProxySpyke(this, 791, 490);
		this.add.existing(proxySpyke_8);

		// proxySpyke_9
		const proxySpyke_9 = new ProxySpyke(this, 827, 490);
		this.add.existing(proxySpyke_9);

		// proxySpyke_10
		const proxySpyke_10 = new ProxySpyke(this, 862, 490);
		this.add.existing(proxySpyke_10);

		// proxySpyke_11
		const proxySpyke_11 = new ProxySpyke(this, 899, 490);
		this.add.existing(proxySpyke_11);

		// proxySpyke_12
		const proxySpyke_12 = new ProxySpyke(this, 935, 490);
		this.add.existing(proxySpyke_12);

		// proxySpyke_13
		const proxySpyke_13 = new ProxySpyke(this, 576, 490);
		this.add.existing(proxySpyke_13);

		// heart
		const heart = new Heart(this, 144, 1009);
		this.add.existing(heart);

		// heart_1
		const heart_1 = new Heart(this, 1038, 668);
		this.add.existing(heart_1);

		// heart_2
		const heart_2 = new Heart(this, 935, 668);
		this.add.existing(heart_2);

		// heart_3
		const heart_3 = new Heart(this, 821, 668);
		this.add.existing(heart_3);

		// smallDoor
		const smallDoor = new SmallDoor(this, 305, 445);
		this.add.existing(smallDoor);

		// switchPanel
		const switchPanel = new SwitchPanel(this, 94, 900);
		this.add.existing(switchPanel);

		// textInfo
		const textInfo = new TextInfo(this, 41, 757);
		this.add.existing(textInfo);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 514, 923);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 160, 888);
		this.add.existing(sampoShooter_1);

		// sampoShooter_2
		const sampoShooter_2 = new SampoShooter(this, 510, 166);
		this.add.existing(sampoShooter_2);

		// enemyCreator
		const enemyCreator = new EnemyCreator(this, 511, 58);
		this.add.existing(enemyCreator);

		// portalCannon_2
		const portalCannon_2 = new PortalCannon(this, 1032, 269);
		this.add.existing(portalCannon_2);
		portalCannon_2.angle = -90;
		portalCannon_2.tintBottomLeft = 16700885;

		// portalCannon_1_1
		const portalCannon_1_1 = new PortalCannon(this, 1039, 94);
		this.add.existing(portalCannon_1_1);
		portalCannon_1_1.angle = -180;
		portalCannon_1_1.tintBottomLeft = 16700885;

		// spikeHorizontal_4_1_1_1
		const spikeHorizontal_4_1_1_1 = new SpikeHorizontal(this, 606, 370);
		this.add.existing(spikeHorizontal_4_1_1_1);
		spikeHorizontal_4_1_1_1.angle = 90;

		// spikeHorizontal_4_1_1_2
		const spikeHorizontal_4_1_1_2 = new SpikeHorizontal(this, 615, 247);
		this.add.existing(spikeHorizontal_4_1_1_2);
		spikeHorizontal_4_1_1_2.angle = 90;

		// portalCannon_3
		const portalCannon_3 = new PortalCannon(this, 91, 742);
		this.add.existing(portalCannon_3);
		portalCannon_3.tintBottomLeft = 16700885;

		// lists
		const doors = [smallDoor]
		const switches = [switchPanel]
		const enemies = [sampoShooter_1, sampoShooter, sampoShooter_2]
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = [enemyCreator]
		const tutorials = []

		// invernaderoBg (components)
		new FixedToCamera(invernaderoBg);

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel3E";

		// textInfo (prefab fields)
		textInfo.textToDisplay = "What is this switch for???";

		// sampoShooter (prefab fields)
		sampoShooter.travelDistance = 376;

		// sampoShooter_1 (prefab fields)
		sampoShooter_1.travelDistance = 260;

		// sampoShooter_2 (prefab fields)
		sampoShooter_2.RevivingPodID = "pod2";
		sampoShooter_2.travelDistance = 390;

		// enemyCreator (prefab fields)
		enemyCreator.PodID = "pod2";

		// portalCannon_1_1 (prefab fields)
		portalCannon_1_1.IsFirstCannon = true;

		// portalCannon_3 (prefab fields)
		portalCannon_3.IsFirstCannon = true;

		this.layer = layer;
		this.player = player;
		this.sampoShooter = sampoShooter;
		this.sampoShooter_1 = sampoShooter_1;
		this.sampoShooter_2 = sampoShooter_2;
		this.mapa = mapa;
		this.new_level3D = new_level3D;
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
	/** @type {EnemyCreator[]} */
	revivingPods;
	/** @type {Array<any>} */
	tutorials;

	/* START-USER-CODE */






	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
