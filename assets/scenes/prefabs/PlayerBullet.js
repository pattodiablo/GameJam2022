
// You can write more code here

/* START OF COMPILED CODE */

class PlayerBullet extends Phaser.GameObjects.Sprite {
	
	constructor(scene, x, y, texture, frame) {
		super(scene, x, y, texture || "props", frame !== undefined && frame !== null ? frame : "bullet0000");
		
		// this (components)
		new Physics(this);
		
		/* START-USER-CTR-CODE */
		this.scene.events.on("create", () => this.create());
		this.scene.events.on("update", () => this.update());
		/* END-USER-CTR-CODE */
	}
	
	/* START-USER-CODE */

	create(){

		this.iniciarPropiedadesFisicas = true;
		this.velo = 600;
		this.visible=false;
		this.initfisicas = true;
		this.isActive = true;
		
	}

	initMovement(dir){
		this.body.enable=true;
		this.visible=true;
		this.y = this.scene.player.y;
		this.x = this.scene.player.x;
		this.body.velocity.x = dir*this.velo;
		this.diry = (Math.floor(Math.random() * 10) + 1)/10;
		this.body.velocity.y = -this.diry*this.velo;
	}

	restart(){

	
		this.y = this.scene.player.y;
		this.x = this.scene.player.x;
		this.visible=false;
		this.body.enable=false;
	}

	update(){
		if(this.initfisicas){
			this.body.enable=false;
			this.initfisicas = false;
		}
	
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
