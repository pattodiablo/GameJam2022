
// You can write more code here

/* START OF COMPILED CODE */

class EndingScene extends BaseScene {

	constructor() {
		super("EndingScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// tech_back
		const tech_back = this.add.sprite(1, 0, "tech_back");
		tech_back.setOrigin(0, 0);

		// endingSupa
		const endingSupa = this.add.sprite(0, 0, "endingSupa");
		endingSupa.setOrigin(0, 0);

		// endingSupa2
		const endingSupa2 = this.add.sprite(0, 0, "endingSupa2");
		endingSupa2.setOrigin(0, 0);

		// playAgainBtn
		const playAgainBtn = this.add.sprite(237, 357, "playAgainBtn");

		// creditsButton
		const creditsButton = this.add.sprite(260, 418, "creditsButton");
		creditsButton.scaleX = 0.3205128205128205;
		creditsButton.scaleY = 0.3205128205128205;

		// creditos
		const creditos = this.add.sprite(0, 0, "creditos");
		creditos.setOrigin(0, 0);

		// closeBtn
		const closeBtn = this.add.sprite(291, 448, "closeBtn");

		// lists
		const doors = [];
		const switches = [];
		const enemies = [];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [];
		const tutorials = [];

		// tech_back (components)
		new FixedToCamera(tech_back);

		this.tech_back = tech_back;
		this.endingSupa = endingSupa;
		this.endingSupa2 = endingSupa2;
		this.playAgainBtn = playAgainBtn;
		this.creditsButton = creditsButton;
		this.creditos = creditos;
		this.closeBtn = closeBtn;
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

	/** @type {Phaser.GameObjects.Sprite} */
	tech_back;
	/** @type {Phaser.GameObjects.Sprite} */
	endingSupa;
	/** @type {Phaser.GameObjects.Sprite} */
	endingSupa2;
	/** @type {Phaser.GameObjects.Sprite} */
	playAgainBtn;
	/** @type {Phaser.GameObjects.Sprite} */
	creditsButton;
	/** @type {Phaser.GameObjects.Sprite} */
	creditos;
	/** @type {Phaser.GameObjects.Sprite} */
	closeBtn;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Array<any>} */
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


	create() {

		this.editorCreate();

		this.cameras.main.fadeIn(2000);


		var video = this.add.video(0, 0, "ending");
		video.play();
		video.setOrigin(0,0);

		video.on('complete', function(video){
			video.stop();
			video.visible=false;
			this.tech_back.visible=false;
			this.endingSupa.visible=true;
			this.endingSupa2.visible=true;
			this.creditsButton.visible=true;
			this.playAgainBtn.visible=true;
			this.endingSupa.alpha=0;


		var appear = this.tweens.createTimeline();
		appear.add({
			targets: this.endingSupa,
			alpha: 1,
			duration: 300,
			ease: 'Linear',
			repeat: 0

		});

		appear.play();

		var appear2 = this.tweens.createTimeline();
		appear2.add({
			targets: this.endingSupa2,
			scale: 1.02,
			duration: 1300,
			yoyo:true,
			ease: 'Linear',
			repeat: -1

		});

		appear2.play();


		}, this);

		this.endingSupa.visible=false;
		this.endingSupa2.visible=false;
		this.creditsButton.visible=false;
		this.playAgainBtn.visible=false;
		this.closeBtn.visible = false;
		this.creditos.visible=false;


		this.creditsButton.setInteractive().on('pointerdown', function (pointer, localX, localY, event) {

			this.closeBtn.visible = true;
			this.creditos.visible = true;

		},this);

		this.closeBtn.setInteractive().on('pointerdown', function (pointer, localX, localY, event) {

			this.closeBtn.visible = false;
			this.creditos.visible = false;

		},this);

		this.playAgainBtn.setInteractive().on('pointerdown', function (pointer, localX, localY, event) {

			this.scene.game.playerData = {
				levelsPassed: [],
				gotCard: false,
				coins: coins,
				level: "NewLevel0", 
				life: 5,
				maxLife: 5,
				isMusicMuted: false,
				doubleJump: isDoubleJump,
				isFxMuted: false
			};

			updatear(this.scene.game.playerData);

			location.reload();

		});


	}



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
