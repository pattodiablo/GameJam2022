
// You can write more code here

/* START OF COMPILED CODE */

class ActiveZoneBoss extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "emptyWall", frame);

		this.setOrigin(0, 0);

		// this (components)
		new Physics(this);

		/* START-USER-CTR-CODE */
		this.createEvent = this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.create, this);
		/* END-USER-CTR-CODE */
	}

	/** @type {boolean} */
	isActive = false;
	/** @type {boolean} */
	activateBoss = false;
	/** @type {string} */
	objectToActivate = "";
	/** @type {boolean} */
	textActivate = true;

	/* START-USER-CODE */

	create() {
		this.initColliders();
		this.body.immovable = true;

	}

	initColliders() {

		this.scene.physics.add.overlap(this.scene.player, this, this.activarProceso, false, this);

	}

	activarProceso() {
		if (this.isActive) {
			if (this.activateBoss) {
				this.scene.guardBoss.entryAnimation();
			}
			else {
				if (this.objectToActivate !== "") {
					this.scene[this.objectToActivate].isActive = true;
					//	this.scene.wallIzquierda.isActive = true;
				}

			}

			if (this.textActivate) {
				if (this.objectToActivate == "") {
					console.log("activar texto")
				//	this.scene.textInfo.dispText(this.scene.textInfo.textToDisplay);
					
				}
			}
			this.isActive = false;
		}


	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
