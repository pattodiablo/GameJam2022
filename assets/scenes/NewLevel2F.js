
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel2F extends BaseScene {
	
	constructor() {
		super("NewLevel2F");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// mapa
		const mapa = this.add.tilemap("new_level2F");
		mapa.addTilesetImage("new_buildingTiles", "new_buildingTiles");
		
		// new_level2F
		const new_level2F = this.add.tilemap("new_level2F");
		new_level2F.addTilesetImage("new_buildingTiles", "new_buildingTiles");
		
		// bgLevel1
		const bgLevel1 = this.add.image(0, 0, "bgLevel1");
		bgLevel1.setOrigin(0, 0);
		
		// noCollide
		mapa.createLayer("NoCollide", ["new_buildingTiles"], 0, 0);
		
		// noCollideFX_1
		mapa.createLayer("NoCollideFX", ["new_buildingTiles"], 0, 0);
		
		// layer
		const layer = mapa.createLayer("Collide", ["new_buildingTiles"], 0, 0);
		
		// collideFX_1
		new_level2F.createLayer("CollideFX", ["new_buildingTiles"], 0, 0);
		
		// player
		const player = new Player(this, 560, 403);
		this.add.existing(player);
		
		// smallDoor
		const smallDoor = new SmallDoor(this, 560, -61);
		this.add.existing(smallDoor);
		
		// switchPanel
		const switchPanel = new SwitchPanel(this, 1056, 964);
		this.add.existing(switchPanel);
		
		// platform2_1
		const platform2_1 = new Platform2(this, 55, 1100);
		this.add.existing(platform2_1);
		platform2_1.scaleX = 0.75;
		platform2_1.scaleY = 0.75;
		
		// platform2_1_1
		const platform2_1_1 = new Platform2(this, 265, 1100);
		this.add.existing(platform2_1_1);
		platform2_1_1.scaleX = 0.75;
		platform2_1_1.scaleY = 0.75;
		
		// platform2_1_1_1
		const platform2_1_1_1 = new Platform2(this, 852, 1100);
		this.add.existing(platform2_1_1_1);
		platform2_1_1_1.scaleX = 0.75;
		platform2_1_1_1.scaleY = 0.75;
		
		// platform2_1_1_2
		const platform2_1_1_2 = new Platform2(this, 456, 1100);
		this.add.existing(platform2_1_1_2);
		platform2_1_1_2.scaleX = 0.75;
		platform2_1_1_2.scaleY = 0.75;
		
		// platform2_1_1_2_1
		const platform2_1_1_2_1 = new Platform2(this, 663, 1100);
		this.add.existing(platform2_1_1_2_1);
		platform2_1_1_2_1.scaleX = 0.75;
		platform2_1_1_2_1.scaleY = 0.75;
		
		// blobber
		const blobber = new Blobber(this, 915, 430);
		this.add.existing(blobber);
		
		// blobber_1
		const blobber_1 = new Blobber(this, 115, 431);
		this.add.existing(blobber_1);
		
		// drone
		const drone = new Drone(this, 422, 182);
		this.add.existing(drone);
		
		// drone_1
		const drone_1 = new Drone(this, 698, 182);
		this.add.existing(drone_1);
		
		// heart
		const heart = new Heart(this, 496, 211);
		this.add.existing(heart);
		
		// heart_1
		const heart_1 = new Heart(this, 621, 211);
		this.add.existing(heart_1);
		
		// heart_2
		const heart_2 = new Heart(this, 558, 211);
		this.add.existing(heart_2);
		
		// platform2_2
		const platform2_2 = new Platform2(this, 321, 400);
		this.add.existing(platform2_2);
		
		// platform2_2_1
		const platform2_2_1 = new Platform2(this, 802, 400);
		this.add.existing(platform2_2_1);
		
		// lists
		const doors = [smallDoor]
		const switches = [switchPanel]
		const enemies = [blobber, blobber_1]
		const platforms = [platform2_1, platform2_1_1, platform2_1_1_1, platform2_1_1_2_1, platform2_1_1_2, platform2_2_1, platform2_2]
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []
		
		// bgLevel1 (components)
		new FixedToCamera(bgLevel1);
		bgLevel1.emit("components-awake");
		
		// player (prefab fields)
		player.emit("prefab-awake");
		
		// player (components)
		player.emit("components-awake");
		
		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel2G";
		smallDoor.emit("prefab-awake");
		
		// switchPanel (prefab fields)
		switchPanel.emit("prefab-awake");
		
		// switchPanel (components)
		switchPanel.emit("components-awake");
		
		// platform2_1 (prefab fields)
		platform2_1.distance = 320;
		platform2_1.timeTravel = 4000;
		platform2_1.emit("prefab-awake");
		
		// platform2_1 (components)
		platform2_1.emit("components-awake");
		
		// platform2_1_1 (prefab fields)
		platform2_1_1.distance = 320;
		platform2_1_1.timeTravel = 4000;
		platform2_1_1.emit("prefab-awake");
		
		// platform2_1_1 (components)
		platform2_1_1.emit("components-awake");
		
		// platform2_1_1_1 (prefab fields)
		platform2_1_1_1.distance = 320;
		platform2_1_1_1.timeTravel = 4000;
		platform2_1_1_1.emit("prefab-awake");
		
		// platform2_1_1_1 (components)
		platform2_1_1_1.emit("components-awake");
		
		// platform2_1_1_2 (prefab fields)
		platform2_1_1_2.distance = 481;
		platform2_1_1_2.timeTravel = 4500;
		platform2_1_1_2.emit("prefab-awake");
		
		// platform2_1_1_2 (components)
		platform2_1_1_2.emit("components-awake");
		
		// platform2_1_1_2_1 (prefab fields)
		platform2_1_1_2_1.distance = 481;
		platform2_1_1_2_1.timeTravel = 4500;
		platform2_1_1_2_1.emit("prefab-awake");
		
		// platform2_1_1_2_1 (components)
		platform2_1_1_2_1.emit("components-awake");
		
		// blobber (prefab fields)
		blobber.travelDistance = 90;
		blobber.emit("prefab-awake");
		
		// blobber (components)
		blobber.emit("components-awake");
		
		// blobber_1 (prefab fields)
		blobber_1.travelDistance = 90;
		blobber_1.emit("prefab-awake");
		
		// blobber_1 (components)
		blobber_1.emit("components-awake");
		
		// drone (prefab fields)
		drone.emit("prefab-awake");
		
		// drone (components)
		drone.emit("components-awake");
		
		// drone_1 (prefab fields)
		drone_1.emit("prefab-awake");
		
		// drone_1 (components)
		drone_1.emit("components-awake");
		
		// heart (prefab fields)
		heart.emit("prefab-awake");
		
		// heart (components)
		heart.emit("components-awake");
		
		// heart_1 (prefab fields)
		heart_1.emit("prefab-awake");
		
		// heart_1 (components)
		heart_1.emit("components-awake");
		
		// heart_2 (prefab fields)
		heart_2.emit("prefab-awake");
		
		// heart_2 (components)
		heart_2.emit("components-awake");
		
		// platform2_2 (prefab fields)
		platform2_2.distance = 255;
		platform2_2.timeTravel = 3500;
		platform2_2.emit("prefab-awake");
		
		// platform2_2 (components)
		platform2_2.emit("components-awake");
		
		// platform2_2_1 (prefab fields)
		platform2_2_1.distance = 255;
		platform2_2_1.timeTravel = 3500;
		platform2_2_1.emit("prefab-awake");
		
		// platform2_2_1 (components)
		platform2_2_1.emit("components-awake");
		
		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.new_level2F = new_level2F;
		this.doors = doors;
		this.switches = switches;
		this.enemies = enemies;
		this.platforms = platforms;
		this.coins = coins;
		this.catapultas = catapultas;
		this.revivingPods = revivingPods;
		this.tutorials = tutorials;
	}
	
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	layer;
	/** @type {Player} */
	player;
	/** @type {SmallDoor[]} */
	doors;
	/** @type {SwitchPanel[]} */
	switches;
	/** @type {Blobber[]} */
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
