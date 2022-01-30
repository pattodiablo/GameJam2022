
// You can write more code here

/* START OF COMPILED CODE */

class EnemyStar extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "enemy1", frame);

		// this (components)
		new Physics(this);

		/* START-USER-CTR-CODE */
		this.createEvent = this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.create, this);
		this.scene.events.on("update", () => this.update());

		this.sprites = [];
		/* END-USER-CTR-CODE */
	}

	/** @type {boolean} */
	isType1 = false;
	/** @type {boolean} */
	isType2 = false;

	/* START-USER-CODE */



	create(){


		if(this.isType1){
			this.setTexture('enemy1');
			this.image = this.scene.add.sprite(this.x, this.y, 'inkDot');
			this.image.setBlendMode(Phaser.BlendModes.ADD);
			this.enemyShadow=this.scene.add.sprite(this.x, this.y, 'enemy1').setBlendMode(Phaser.BlendModes.OVERLAY);
			this.sprites.push(this.enemyShadow);
	
			var floating = this.scene.tweens.createTimeline();
			floating.add({
				targets: this,
				y: this.y + 20,
				duration: 500,
				ease: 'Linear',
				repeat: -1,
				yoyo:true
			});
	
			floating.play();
	
		}
	
		if(this.isType2){
			this.setTexture('enemy2');
	
			var floating2=this.scene.tweens.createTimeline();
			floating2.add({
				targets: this,
				duration: 500,
				ease: 'Linear',
				scale: 0.80,
				repeat: -1,
				yoyo:true
			});
	
			floating2.play();
	
		}

		this.initColliders();
	}


	initColliders(){

		this.scene.physics.add.overlap(this, this.scene.player, this.touchPlayer);
	}

	touchPlayer(){

		
	}
	update ()
    {
		if(this.isType1){
			this.angle++;
	
			this.sprites.forEach(enemyShadow => {
				enemyShadow.angle--;
				enemyShadow.x=this.x;
				enemyShadow.y=this.y;
			});
	
	
			if(this.x<=this.scene.player.x) 
				this.x++;
			else
				this.x--;
		}
	
		if(this.isType2){
	
			this.angle++;
			if(this.x<=this.scene.player.x) 
				this.x++;
			else
				this.x--;
		}

    }
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
