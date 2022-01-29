
// You can write more code here

/* START OF COMPILED CODE */

class AcidTile extends Phaser.GameObjects.Sprite {
	
	constructor(scene, x, y, texture, frame) {
		super(scene, x, y, texture || "propsNew2", frame !== undefined && frame !== null ? frame : "Symbol 35 instance 10000");
		
		this.setOrigin(0, 0);
		
		// this (compnoents)
		const thisStartAnimation = new StartAnimation(this);
		thisStartAnimation.animationKey = "acidTile";
		new Physics(this);
		
		/* START-USER-CTR-CODE */
		this.createEvent =	this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.create, this);
		/* END-USER-CTR-CODE */
	}
	
	/* START-USER-CODE */


	create(){
		this.initColliders();
		this.body.immovable=true;
		this.body.width=32;
		this.body.height=20;
		this.name ="AcidTile";
	
		}


	initColliders(){
		
		this.scene.physics.add.collider(this.scene.player, this, this.hurtplayer);	
		this.scene.physics.add.overlap(this.scene.player, this, this.hurtplayer);	
		this.scene.physics.add.collider(this.scene.enemies, this);	
	}

	hurtplayer(player,acid){
		player.playerhurt(player,acid);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
