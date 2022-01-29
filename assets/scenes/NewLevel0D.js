
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel0D extends BaseScene {

	constructor() {
		super("NewLevel0D");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level0D");
		mapa.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// new_level0D
		const new_level0D = this.add.tilemap("new_level0D");
		new_level0D.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// bgCity2
		const bgCity2 = this.add.image(1, -80, "bgLevel1");
		bgCity2.setOrigin(0, 0);
		bgCity2.alpha = 0.5;
		bgCity2.alphaTopLeft = 0.5;
		bgCity2.alphaTopRight = 0.5;
		bgCity2.alphaBottomLeft = 0.5;
		bgCity2.alphaBottomRight = 0.5;

		// noCollide1
		mapa.createLayer("NoCollide1", ["new_ciudad_tiles"], 0, 0);

		// noCollide2
		mapa.createLayer("NoCollide2", ["new_ciudad_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["new_ciudad_tiles"], 0, 0);

		// nocollide3_1
		new_level0D.createLayer("nocollide3", ["new_ciudad_tiles"], 0, 0);

		// tuto10
		const tuto10 = this.add.image(560, 181, "tuto10");

		// enemyCreator
		const enemyCreator = new EnemyCreator(this, 685, 93);
		this.add.existing(enemyCreator);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 688, 291);
		this.add.existing(sampoShooter);

		// grafitty
		const grafitty = this.add.image(89, 233, "grafitty");
		grafitty.alpha = 0.6;
		grafitty.alphaTopLeft = 0.6;
		grafitty.alphaTopRight = 0.6;
		grafitty.alphaBottomLeft = 0.6;
		grafitty.alphaBottomRight = 0.6;

		// player
		const player = new Player(this, 97, 274);
		this.add.existing(player);

		// box
		this.add.image(390, 259, "box");

		// wallLight
		this.add.image(450, 149, "wallLight");

		// lightBeam
		const lightBeam = new LightBeam(this, 449, 149);
		this.add.existing(lightBeam);

		// handPointer
		const handPointer = new HandPointer(this, 175, 266);
		this.add.existing(handPointer);

		// rocoPop
		this.add.image(318, 222, "rocoPop");

		// tuto4
		const tuto4 = this.add.image(947, 178, "tuto4");

		// catapulta
		const catapulta = new Catapulta(this, 1139, 299);
		this.add.existing(catapulta);

		// catapulta_1
		const catapulta_1 = new Catapulta(this, 1531, 293);
		this.add.existing(catapulta_1);

		// gotoLevelWall
		const gotoLevelWall = new GotoLevelWall(this, 2265, 222);
		this.add.existing(gotoLevelWall);
		gotoLevelWall.scaleX = 0.8523669787292797;
		gotoLevelWall.scaleY = 2.850411273533834;
		gotoLevelWall.tintTopLeft = 16535632;
		gotoLevelWall.tintTopRight = 16479605;
		gotoLevelWall.tintBottomLeft = 10683396;
		gotoLevelWall.tintBottomRight = 16257554;

		// toll
		const toll = new Toll(this, 2017, 275);
		this.add.existing(toll);

		// sideDoorLocked
		const sideDoorLocked = new SideDoorLocked(this, 2138, 243);
		this.add.existing(sideDoorLocked);
		sideDoorLocked.tintTopLeft = 15612474;
		sideDoorLocked.tintTopRight = 15347503;
		sideDoorLocked.tintBottomLeft = 16218746;
		sideDoorLocked.tintBottomRight = 16490041;

		// wallLight_1
		this.add.image(822, 145, "wallLight");

		// lightBeam_1
		const lightBeam_1 = new LightBeam(this, 821, 145);
		this.add.existing(lightBeam_1);

		// trashBin
		this.add.image(786, 237, "trashBin");

		// tuto_11
		const tuto_11 = this.add.image(2018, 151, "tuto 11");

		// energyStation
		const energyStation = new EnergyStation(this, 234, 197);
		this.add.existing(energyStation);

		// portalCannon
		const portalCannon = new PortalCannon(this, 448, 227);
		this.add.existing(portalCannon);
		portalCannon.tintBottomLeft = 16700885;

		// lists
		const doors = []
		const switches = []
		const enemies = [sampoShooter]
		const platforms = []
		const coins = []
		const catapultas = [catapulta, catapulta_1]
		const revivingPods = [enemyCreator]
		const tutorials = [tuto10, tuto4, tuto_11]

		// bgCity2 (components)
		new FixedToCamera(bgCity2);

		// catapulta (prefab fields)
		catapulta.power = 450;

		// catapulta_1 (prefab fields)
		catapulta_1.power = 550;

		// gotoLevelWall (prefab fields)
		gotoLevelWall.gotoLevelName = "NewLevel1";
		gotoLevelWall.showScore = false;

		// toll (prefab fields)
		toll.tollCost = 0;

		// portalCannon (prefab fields)
		portalCannon.IsFirstCannon = true;

		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.new_level0D = new_level0D;
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
	/** @type {Array<any>} */
	platforms;
	/** @type {Array<any>} */
	coins;
	/** @type {Catapulta[]} */
	catapultas;
	/** @type {EnemyCreator[]} */
	revivingPods;
	/** @type {Phaser.GameObjects.Image[]} */
	tutorials;

	/* START-USER-CODE */






	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
