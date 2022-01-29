
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel3A extends BaseScene {

	constructor() {
		super("NewLevel3A");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level3A");
		mapa.addTilesetImage("Invernadero_tiles", "Invernadero_tiles");

		// new_level3A
		const new_level3A = this.add.tilemap("new_level3A");
		new_level3A.addTilesetImage("Invernadero_tiles", "Invernadero_tiles");

		// invernaderoBg
		const invernaderoBg = this.add.image(0, 0, "invernaderoBg");
		invernaderoBg.setOrigin(0, 0);

		// noCollide
		mapa.createLayer("NoCollide", ["Invernadero_tiles"], 0, 0);

		// noCollideFX_1
		mapa.createLayer("NoCollideFX", ["Invernadero_tiles"], 0, 0);

		// blobber
		const blobber = new Blobber(this, 400, 304);
		this.add.existing(blobber);

		// closedDoor_instance_10000
		const closedDoor_instance_10000 = this.add.image(126, 141, "props", "closedDoor instance 10000");
		closedDoor_instance_10000.scaleX = 0.55;
		closedDoor_instance_10000.scaleY = 0.55;

		// layer
		const layer = mapa.createLayer("Collide", ["Invernadero_tiles"], 0, 0);

		// collideFX_1
		new_level3A.createLayer("CollideFX", ["Invernadero_tiles"], 0, 0);

		// player
		const player = new Player(this, 135, 146);
		this.add.existing(player);

		// smallDoor
		const smallDoor = new SmallDoor(this, 1358, 386);
		this.add.existing(smallDoor);

		// symbol_20_instance_10000
		const symbol_20_instance_10000 = this.add.image(1350, 475, "propsNew", "Symbol 20 instance 10000");
		symbol_20_instance_10000.scaleX = 0.55;
		symbol_20_instance_10000.scaleY = 0.55;

		// switchPanel
		const switchPanel = new SwitchPanel(this, 213, 352);
		this.add.existing(switchPanel);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 380, 550);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 604, 545);
		this.add.existing(sampoShooter_1);

		// sampoShooter_2
		const sampoShooter_2 = new SampoShooter(this, 829, 544);
		this.add.existing(sampoShooter_2);

		// sampoShooter_3
		const sampoShooter_3 = new SampoShooter(this, 1050, 542);
		this.add.existing(sampoShooter_3);

		// sampoShooter_4
		const sampoShooter_4 = new SampoShooter(this, 126, 553);
		this.add.existing(sampoShooter_4);

		// b_instance_10000
		this.add.image(1369, 475, "propsNew", "b instance 10000");

		// spikeHorizontal
		const spikeHorizontal = new SpikeHorizontal(this, 408, 230);
		this.add.existing(spikeHorizontal);

		// spikeHorizontal_1
		const spikeHorizontal_1 = new SpikeHorizontal(this, 532, 230);
		this.add.existing(spikeHorizontal_1);

		// spikeHorizontal_2
		const spikeHorizontal_2 = new SpikeHorizontal(this, 657, 230);
		this.add.existing(spikeHorizontal_2);

		// spikeHorizontal_3
		const spikeHorizontal_3 = new SpikeHorizontal(this, 777.1936416119185, 230);
		this.add.existing(spikeHorizontal_3);

		// spikeHorizontal_4
		const spikeHorizontal_4 = new SpikeHorizontal(this, 902.2652392745782, 230);
		this.add.existing(spikeHorizontal_4);

		// spikeHorizontal_5
		const spikeHorizontal_5 = new SpikeHorizontal(this, 1027, 230);
		this.add.existing(spikeHorizontal_5);

		// spikeHorizontal_6
		const spikeHorizontal_6 = new SpikeHorizontal(this, 1149, 230);
		this.add.existing(spikeHorizontal_6);

		// textInfo
		const textInfo = new TextInfo(this, 258, 49);
		this.add.existing(textInfo);
		textInfo.scaleX = 0.8;
		textInfo.scaleY = 0.8;

		// heart
		const heart = new Heart(this, 108, 272);
		this.add.existing(heart);

		// activeZoneBoss
		const activeZoneBoss = new ActiveZoneBoss(this, 258, 158);
		this.add.existing(activeZoneBoss);
		activeZoneBoss.alpha = 0;

		// portalCannon
		const portalCannon = new PortalCannon(this, 537, 124);
		this.add.existing(portalCannon);
		portalCannon.angle = 90;
		portalCannon.tintBottomLeft = 16700885;

		// portalCannon_1
		const portalCannon_1 = new PortalCannon(this, 1351, 122);
		this.add.existing(portalCannon_1);
		portalCannon_1.angle = -180;
		portalCannon_1.tintBottomLeft = 16700885;

		// lists
		const doors = [smallDoor]
		const switches = []
		const enemies = [sampoShooter, sampoShooter_3, sampoShooter_2, sampoShooter_1, sampoShooter_4, blobber]
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// invernaderoBg (components)
		new FixedToCamera(invernaderoBg);

		// blobber (prefab fields)
		blobber.travelDistance = 770;
		blobber.veloBlobber = 50;

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel3B";

		// sampoShooter (prefab fields)
		sampoShooter.travelDistance = 150;

		// sampoShooter_1 (prefab fields)
		sampoShooter_1.travelDistance = 150;

		// sampoShooter_2 (prefab fields)
		sampoShooter_2.travelDistance = 150;

		// sampoShooter_3 (prefab fields)
		sampoShooter_3.travelDistance = 150;

		// sampoShooter_4 (prefab fields)
		sampoShooter_4.travelDistance = 150;

		// textInfo (prefab fields)
		textInfo.textToDisplay = "Wow! Nasty Saws!\nNeed my Supa Cannon to pass through!";

		// activeZoneBoss (prefab fields)
		activeZoneBoss.isActive = true;

		// portalCannon (prefab fields)
		portalCannon.IsFirstCannon = true;

		this.blobber = blobber;
		this.layer = layer;
		this.player = player;
		this.sampoShooter = sampoShooter;
		this.sampoShooter_1 = sampoShooter_1;
		this.sampoShooter_2 = sampoShooter_2;
		this.sampoShooter_3 = sampoShooter_3;
		this.sampoShooter_4 = sampoShooter_4;
		this.textInfo = textInfo;
		this.mapa = mapa;
		this.new_level3A = new_level3A;
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

	/** @type {Blobber} */
	blobber;
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
	/** @type {SampoShooter} */
	sampoShooter_3;
	/** @type {SampoShooter} */
	sampoShooter_4;
	/** @type {TextInfo} */
	textInfo;
	/** @type {SmallDoor[]} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Array<SampoShooter|Blobber>} */
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
