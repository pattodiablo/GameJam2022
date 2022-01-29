
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel8B extends BaseScene {

	constructor() {
		super("NewLevel8B");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level8B");
		mapa.addTilesetImage("Servidores_tiles", "Servidores_tiles");

		// new_level8B
		const new_level8B = this.add.tilemap("new_level8B");
		new_level8B.addTilesetImage("Servidores_tiles", "Servidores_tiles");

		// tech_back
		const tech_back = this.add.image(0, 0, "tech_back");
		tech_back.setOrigin(0, 0);

		// noCollide_1
		mapa.createLayer("NoCollide", ["Servidores_tiles"], 1, 0);

		// smallDoor
		const smallDoor = new SmallDoor(this, 559, 2);
		this.add.existing(smallDoor);

		// noCollideFX
		mapa.createLayer("NoCollideFX", ["Servidores_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["Servidores_tiles"], 0, 0);

		// collideFX_1
		new_level8B.createLayer("CollideFX", ["Servidores_tiles"], 0, 0);

		// player
		const player = new Player(this, 556, 1760);
		this.add.existing(player);

		// energyStation
		const energyStation = new EnergyStation(this, 815, 1560);
		this.add.existing(energyStation);

		// portalCannon
		const portalCannon = new PortalCannon(this, 1025, 1660);
		this.add.existing(portalCannon);
		portalCannon.tintBottomLeft = 16700885;

		// portalCannon_1
		const portalCannon_1 = new PortalCannon(this, 1025, 1245);
		this.add.existing(portalCannon_1);
		portalCannon_1.angle = -90;
		portalCannon_1.tintBottomLeft = 16700885;

		// portalCannon_1_1
		const portalCannon_1_1 = new PortalCannon(this, 160, 1245);
		this.add.existing(portalCannon_1_1);
		portalCannon_1_1.angle = -180;
		portalCannon_1_1.tintBottomLeft = 16700885;

		// portalCannon_2
		const portalCannon_2 = new PortalCannon(this, 160, 1570);
		this.add.existing(portalCannon_2);
		portalCannon_2.angle = 60;
		portalCannon_2.tintBottomLeft = 16700885;

		// portalCannon_3
		const portalCannon_3 = new PortalCannon(this, 558, 1375);
		this.add.existing(portalCannon_3);
		portalCannon_3.tintBottomLeft = 16700885;

		// portalCannon_4
		const portalCannon_4 = new PortalCannon(this, 558, 1083);
		this.add.existing(portalCannon_4);
		portalCannon_4.angle = -90;
		portalCannon_4.tintBottomLeft = 16700885;

		// gotoLevelWall
		const gotoLevelWall = new GotoLevelWall(this, 48, 1926);
		this.add.existing(gotoLevelWall);
		gotoLevelWall.scaleX = 0.16;
		gotoLevelWall.scaleY = 0.16;
		gotoLevelWall.angle = 90;
		gotoLevelWall.tintTopLeft = 16535632;
		gotoLevelWall.tintTopRight = 16479605;
		gotoLevelWall.tintBottomLeft = 10683396;
		gotoLevelWall.tintBottomRight = 16257554;

		// backJetPackStation
		this.add.image(1040, 1078, "backJetPackStation");

		// supaJet
		const supaJet = new SupaJet(this, 1040, 1068);
		this.add.existing(supaJet);

		// cyberPigeon
		const cyberPigeon = new CyberPigeon(this, 55, 681);
		this.add.existing(cyberPigeon);

		// cyberPigeon_1
		const cyberPigeon_1 = new CyberPigeon(this, 57, 310);
		this.add.existing(cyberPigeon_1);

		// misile
		const misile = new Misile(this, 1172, 414);
		this.add.existing(misile);

		// switchPanel
		const switchPanel = new SwitchPanel(this, 559, 521);
		this.add.existing(switchPanel);

		// blobber
		const blobber = new Blobber(this, 500, 628);
		this.add.existing(blobber);

		// blobber_1
		const blobber_1 = new Blobber(this, 469, 257);
		this.add.existing(blobber_1);

		// handPointer
		const handPointer = new HandPointer(this, 560, 1701);
		this.add.existing(handPointer);

		// lists
		const doors = [smallDoor]
		const switches = [switchPanel]
		const enemies = [cyberPigeon, cyberPigeon_1, blobber, blobber_1]
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// tech_back (components)
		new FixedToCamera(tech_back);

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel8C";

		// gotoLevelWall (prefab fields)
		gotoLevelWall.gotoLevelName = "NewLevel8S";

		// cyberPigeon (prefab fields)
		cyberPigeon.distance = 960;

		// cyberPigeon_1 (prefab fields)
		cyberPigeon_1.distance = 960;

		// blobber (prefab fields)
		blobber.travelDistance = 120;
		blobber.veloBlobber = 50;

		// blobber_1 (prefab fields)
		blobber_1.travelDistance = 180;
		blobber_1.veloBlobber = 50;

		this.layer = layer;
		this.player = player;
		this.supaJet = supaJet;
		this.cyberPigeon = cyberPigeon;
		this.cyberPigeon_1 = cyberPigeon_1;
		this.mapa = mapa;
		this.new_level8B = new_level8B;
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
	/** @type {CyberPigeon} */
	cyberPigeon;
	/** @type {CyberPigeon} */
	cyberPigeon_1;
	/** @type {SmallDoor[]} */
	doors;
	/** @type {SwitchPanel[]} */
	switches;
	/** @type {Array<CyberPigeon|Blobber>} */
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
