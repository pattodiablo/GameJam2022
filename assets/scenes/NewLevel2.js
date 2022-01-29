
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel2 extends BaseScene {
	
	constructor() {
		super("NewLevel2");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// mapa
		const mapa = this.add.tilemap("new_level2");
		mapa.addTilesetImage("new_buildingTiles", "new_buildingTiles");
		
		// new_level2
		const new_level2 = this.add.tilemap("new_level2");
		new_level2.addTilesetImage("new_buildingTiles", "new_buildingTiles");
		
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
		new_level2.createLayer("CollideFX", ["new_buildingTiles"], 0, 1);
		
		// counter
		this.add.image(114, 631, "counter");
		
		// mainDoor0000
		const mainDoor0000 = this.add.image(447, 647, "propsNew", "mainDoor0000");
		mainDoor0000.scaleX = 0.9;
		mainDoor0000.scaleY = 0.9;
		
		// player
		const player = new Player(this, 444, 683);
		this.add.existing(player);
		
		// handPointer
		const handPointer = new HandPointer(this, 450, 633);
		this.add.existing(handPointer);
		
		// energyStation
		const energyStation = new EnergyStation(this, 448, 402);
		this.add.existing(energyStation);
		
		// platform2
		const platform2 = new Platform2(this, 449, 259);
		this.add.existing(platform2);
		
		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 70, 349);
		this.add.existing(sampoShooter_1);
		
		// sampoShooter_2
		const sampoShooter_2 = new SampoShooter(this, 630, 339);
		this.add.existing(sampoShooter_2);
		
		// switchPanel
		const switchPanel = new SwitchPanel(this, 225, 97);
		this.add.existing(switchPanel);
		
		// smallDoor
		const smallDoor = new SmallDoor(this, 686, -62);
		this.add.existing(smallDoor);
		smallDoor.scaleX = 1.15;
		
		// smallDoor_1
		const smallDoor_1 = new SmallDoor(this, 879, 515);
		this.add.existing(smallDoor_1);
		smallDoor_1.scaleX = 1.15;
		
		// symbol_18_instance_10000
		const symbol_18_instance_10000 = this.add.image(898, 606, "propsNew", "Symbol 18 instance 10000");
		symbol_18_instance_10000.scaleX = 0.5;
		symbol_18_instance_10000.scaleY = 0.5;
		
		// symbol_30_instance_20000
		const symbol_30_instance_20000 = this.add.image(880, 596, "propsNew", "Symbol 30 instance 20000");
		symbol_30_instance_20000.scaleX = 0.5;
		symbol_30_instance_20000.scaleY = 0.5;
		
		// switchPanel_1
		const switchPanel_1 = new SwitchPanel(this, 735, 671);
		this.add.existing(switchPanel_1);
		
		// sideDoor
		const sideDoor = new SideDoor(this, 672, 636);
		this.add.existing(sideDoor);
		
		// lists
		const doors = [smallDoor_1]
		const switches = []
		const enemies = [sampoShooter_2, sampoShooter_1]
		const platforms = [platform2]
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
		
		// handPointer (prefab fields)
		handPointer.emit("prefab-awake");
		
		// energyStation (prefab fields)
		energyStation.emit("prefab-awake");
		
		// platform2 (prefab fields)
		platform2.timeTravel = 3000;
		platform2.emit("prefab-awake");
		
		// platform2 (components)
		platform2.emit("components-awake");
		
		// sampoShooter_1 (prefab fields)
		sampoShooter_1.travelDistance = 240;
		sampoShooter_1.emit("prefab-awake");
		
		// sampoShooter_1 (components)
		sampoShooter_1.emit("components-awake");
		
		// sampoShooter_2 (prefab fields)
		sampoShooter_2.travelDistance = 240;
		sampoShooter_2.emit("prefab-awake");
		
		// sampoShooter_2 (components)
		sampoShooter_2.emit("components-awake");
		
		// switchPanel (prefab fields)
		switchPanel.emit("prefab-awake");
		
		// switchPanel (components)
		switchPanel.emit("components-awake");
		
		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel2A";
		smallDoor.emit("prefab-awake");
		
		// smallDoor_1 (prefab fields)
		smallDoor_1.goToLevel = "NewLevel1X";
		smallDoor_1.doorID = "2";
		smallDoor_1.emit("prefab-awake");
		
		// switchPanel_1 (prefab fields)
		switchPanel_1.doorID = 2;
		switchPanel_1.emit("prefab-awake");
		
		// switchPanel_1 (components)
		switchPanel_1.emit("components-awake");
		
		// sideDoor (prefab fields)
		sideDoor.emit("prefab-awake");
		
		// sideDoor (components)
		sideDoor.emit("components-awake");
		
		this.layer = layer;
		this.player = player;
		this.sampoShooter_1 = sampoShooter_1;
		this.sampoShooter_2 = sampoShooter_2;
		this.mapa = mapa;
		this.new_level2 = new_level2;
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
	/** @type {SampoShooter} */
	sampoShooter_1;
	/** @type {SampoShooter} */
	sampoShooter_2;
	/** @type {SmallDoor[]} */
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
