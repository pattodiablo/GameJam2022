
// You can write more code here

/* START OF COMPILED CODE */

class Player extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "playerAnimations", frame ?? "idle instancia 10000");

		// this (components)
		const thisPhysics = new Physics(this);
		thisPhysics.bodyGravity = 500;
		const thisPhysicsBody = new PhysicsBody(this);
		thisPhysicsBody.bodyX = 6;
		thisPhysicsBody.bodyY = 5;
		thisPhysicsBody.bodyWidth = 25;
		thisPhysicsBody.bodyHeight = 100;
		const thisStartAnimation = new StartAnimation(this);
		thisStartAnimation.animationKey = "idlePlayer";

		/* START-USER-CTR-CODE */
		this.PhysicsBody=thisPhysicsBody;
		thisPhysicsBody.enable = false;
		this.createEvent = this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.create, this);
		this.scene.events.on("update", () => this.updatePlayer())

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	/**
	 * @return {Phaser.Physics.Arcade.Body} 
	 */

	create() {


	}



	updatePlayer() {





	}



	restartGame() {

		this.scene.restartGame();

	}




	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
