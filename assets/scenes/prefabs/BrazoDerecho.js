
// You can write more code here

/* START OF COMPILED CODE */

class BrazoDerecho extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? -1, y ?? -2, texture || "brazoderecho", frame);

		this.setOrigin(0, 0);

		/* START-USER-CTR-CODE */
		this.createEvent = this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.create, this);
		this.scene.events.on("update", () => this.update())
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

		create(){
			this.x=this.scene.player.x;
			this.y=this.scene.player.y-10;

			this.brazoIzquierdo=this.scene.add.sprite(this.x,this.y,"brazoizquierdo");
			this.brazoIzquierdo.setOrigin(0,0);
			this.brazoIzquierdo.scaleX=-1;
			this.brazoIzquierdo.visible=false;

			

		}


		update(){

			console.log(this.scene.input.x)

			if(this.scene.player.flipX){
				this.visible=false;
				this.brazoIzquierdo.visible=true;
			}else{
				this.visible=true;
				this.brazoIzquierdo.visible=false;
			}
			this.x=this.scene.player.x;
			this.y=this.scene.player.y-30;
			this.brazoIzquierdo.x=this.scene.player.x;
			this.brazoIzquierdo.y=this.scene.player.y-30;

		}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
