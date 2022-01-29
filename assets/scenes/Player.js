
// You can write more code here

/* START OF COMPILED CODE */

class Player extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "playerAnimations", frame ?? "idle instancia 10000");

		// this (components)
		const thisPhysics = new Physics(this);
		thisPhysics.bodyGravity = 500;
		const thisPhysicsBody = new PhysicsBody(this);
		thisPhysicsBody.bodyWidth = 100;
		thisPhysicsBody.bodyHeight = 100;
		const thisStartAnimation = new StartAnimation(this);
		thisStartAnimation.animationKey = "idlePlayer";

		/* START-USER-CTR-CODE */
		this.createEvent = this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.create, this);
		this.scene.events.on("update", () => this.updatePlayer())
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	create(){

		this.velocityPlayer = 250;

		this.cursors = this.scene.input.keyboard.addKeys(
			{up:Phaser.Input.Keyboard.KeyCodes.W,
			down:Phaser.Input.Keyboard.KeyCodes.S,
			left:Phaser.Input.Keyboard.KeyCodes.A,
			right:Phaser.Input.Keyboard.KeyCodes.D});
		
	}

	updatePlayer(){
		if (this.cursors.right.isDown) {

			this.body.velocity.x=this.velocityPlayer;
			this.flipX=false;
			this.isWalking=true;

		}else if (this.cursors.left.isDown) {

			this.flipX=true;
			this.body.velocity.x=-this.velocityPlayer;
			this.isWalking=true;

		}else{
			this.body.velocity.x=0;
			this.isWalking=false;
		}

		this.checkAnimStatus()
	}


	checkAnimStatus(){

		if(this.isWalking){

			this.play("walkingPlayer",true);
		}
		if(!this.isWalking){
			this.play("idlePlayer",true);

		}

	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
