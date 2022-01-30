
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

	/* START-USER-CODE */

	

	create(){
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


	update ()
    {
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
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
