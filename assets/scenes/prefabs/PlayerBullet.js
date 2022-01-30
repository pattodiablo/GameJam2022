
// You can write more code here

/* START OF COMPILED CODE */

class PlayerBullet extends Phaser.GameObjects.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "bullet", frame);

		// this (components)
		new Physics(this);

		/* START-USER-CTR-CODE */
		this.createEvent = this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.create, this);
		this.scene.events.on("update", () => this.update())
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	create(){

		//this.mouseAngle = Phaser.Math.Angle.Between(this.x, this.y, this.scene.input.x+ this.scene.cameras.main.scrollX, this.scene.input.y + this.scene.cameras.main.scrollY)
		this.mouseAngle = Phaser.Math.Angle.Between(this.x, this.y, this.scene.brazoderecho.x, this.scene.brazoderecho.y);
		this.scene.physics.velocityFromRotation(this.mouseAngle+Math.PI-0.3, 600, this.body.velocity);
		this.rotation=this.mouseAngle+Math.PI-0.3;
	}

	update(){


	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
