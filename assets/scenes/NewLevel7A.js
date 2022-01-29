
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel7A extends BaseScene {

	constructor() {
		super("NewLevel7A");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level7A");
		mapa.addTilesetImage("Servidores_tiles", "Servidores_tiles");

		// new_level7A
		const new_level7A = this.add.tilemap("new_level7A");
		new_level7A.addTilesetImage("Servidores_tiles", "Servidores_tiles");

		// tech_back
		const tech_back = this.add.image(0, 0, "tech_back");
		tech_back.setOrigin(0, 0);

		// noCollide_1
		mapa.createLayer("NoCollide", ["Servidores_tiles"], 0, 0);

		// smallDoor
		const smallDoor = new SmallDoor(this, 433, -29);
		this.add.existing(smallDoor);

		// noCollideFX
		mapa.createLayer("NoCollideFX", ["Servidores_tiles"], 0, 0);

		// energyStation
		const energyStation = new EnergyStation(this, 288, 729);
		this.add.existing(energyStation);

		// layer
		const layer = mapa.createLayer("Collide", ["Servidores_tiles"], 0, 0);

		// collideFX_1
		new_level7A.createLayer("CollideFX", ["Servidores_tiles"], 0, 0);

		// player
		const player = new Player(this, 71, 1998);
		this.add.existing(player);

		// portalCannon
		const portalCannon = new PortalCannon(this, 368, 2000);
		this.add.existing(portalCannon);
		portalCannon.tintTopLeft = 3946552;
		portalCannon.tintBottomLeft = 3679268;

		// portalCannon_1
		const portalCannon_1 = new PortalCannon(this, 368, 1808);
		this.add.existing(portalCannon_1);
		portalCannon_1.angle = 90;
		portalCannon_1.tintTopLeft = 3946552;
		portalCannon_1.tintBottomLeft = 3679268;

		// portalCannon_2
		const portalCannon_2 = new PortalCannon(this, 560, 1808);
		this.add.existing(portalCannon_2);
		portalCannon_2.angle = -180;
		portalCannon_2.tintTopLeft = 3946552;
		portalCannon_2.tintBottomLeft = 3679268;

		// portalCannon_2_1
		const portalCannon_2_1 = new PortalCannon(this, 560, 2000);
		this.add.existing(portalCannon_2_1);
		portalCannon_2_1.angle = 90;
		portalCannon_2_1.tintTopLeft = 3946552;
		portalCannon_2_1.tintBottomLeft = 3679268;

		// portalCannon_3
		const portalCannon_3 = new PortalCannon(this, 815, 2000);
		this.add.existing(portalCannon_3);
		portalCannon_3.tintTopLeft = 3946552;
		portalCannon_3.tintBottomLeft = 3679268;

		// portalCannon_4
		const portalCannon_4 = new PortalCannon(this, 815, 1808);
		this.add.existing(portalCannon_4);
		portalCannon_4.angle = 90;
		portalCannon_4.tintTopLeft = 3946552;
		portalCannon_4.tintBottomLeft = 3679268;

		// portalCannon_4_1
		const portalCannon_4_1 = new PortalCannon(this, 1008, 1808);
		this.add.existing(portalCannon_4_1);
		portalCannon_4_1.angle = -180;
		portalCannon_4_1.tintTopLeft = 3946552;
		portalCannon_4_1.tintBottomLeft = 3679268;

		// portalCannon_5
		const portalCannon_5 = new PortalCannon(this, 1008, 2000);
		this.add.existing(portalCannon_5);
		portalCannon_5.angle = -68.00000000000006;
		portalCannon_5.tintTopLeft = 3946552;
		portalCannon_5.tintBottomLeft = 3679268;

		// portalCannon_6
		const portalCannon_6 = new PortalCannon(this, 689, 1904);
		this.add.existing(portalCannon_6);
		portalCannon_6.tintTopLeft = 3946552;
		portalCannon_6.tintBottomLeft = 3679268;

		// portalCannon_6_1
		const portalCannon_6_1 = new PortalCannon(this, 689, 62);
		this.add.existing(portalCannon_6_1);
		portalCannon_6_1.angle = 90;
		portalCannon_6_1.tintTopLeft = 3946552;
		portalCannon_6_1.tintBottomLeft = 3679268;

		// portalCannon_6_1_1
		const portalCannon_6_1_1 = new PortalCannon(this, 1048, 62);
		this.add.existing(portalCannon_6_1_1);
		portalCannon_6_1_1.angle = -180;
		portalCannon_6_1_1.tintTopLeft = 3946552;
		portalCannon_6_1_1.tintBottomLeft = 3679268;

		// switchPanel
		const switchPanel = new SwitchPanel(this, 1023, 1547);
		this.add.existing(switchPanel);

		// backJetPackStation
		this.add.image(289, 1526, "backJetPackStation");

		// supaJet
		const supaJet = new SupaJet(this, 289, 1518);
		this.add.existing(supaJet);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 830, 552);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 924, 743);
		this.add.existing(sampoShooter_1);

		// sampoShooter_2
		const sampoShooter_2 = new SampoShooter(this, 830, 931);
		this.add.existing(sampoShooter_2);

		// sampoShooter_3
		const sampoShooter_3 = new SampoShooter(this, 919, 1126);
		this.add.existing(sampoShooter_3);

		// sampoShooter_4
		const sampoShooter_4 = new SampoShooter(this, 830, 1322);
		this.add.existing(sampoShooter_4);

		// heart
		const heart = new Heart(this, 112, 1889);
		this.add.existing(heart);

		// lists
		const doors = [smallDoor]
		const switches = [switchPanel]
		const enemies = [sampoShooter, sampoShooter_1, sampoShooter_2, sampoShooter_3, sampoShooter_4]
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// tech_back (components)
		new FixedToCamera(tech_back);

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel7B";

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

		this.layer = layer;
		this.player = player;
		this.sampoShooter = sampoShooter;
		this.sampoShooter_1 = sampoShooter_1;
		this.sampoShooter_2 = sampoShooter_2;
		this.sampoShooter_3 = sampoShooter_3;
		this.sampoShooter_4 = sampoShooter_4;
		this.mapa = mapa;
		this.new_level7A = new_level7A;
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
	/** @type {SampoShooter} */
	sampoShooter_3;
	/** @type {SampoShooter} */
	sampoShooter_4;
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
