
// You can write more code here

/* START OF COMPILED CODE */

class BrazoDerecho extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? -1, y ?? -2);

		// brazoderecho
		const brazoderecho = scene.add.sprite(0, 0, "brazoderecho");
		brazoderecho.setOrigin(0, 0);
		this.add(brazoderecho);

		/* START-USER-CTR-CODE */
		this.createEvent = this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.create, this);
		this.scene.events.on("update", () => this.update())
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

		create(){

			this.x=this.scene.player.x;
			this.y=this.scene.player.y-10;

			this.brazoizquierdo=this.scene.add.sprite(this.x,this.y,"brazoizquierdo");
			this.brazoizquierdo.setOrigin(0,0);
			this.brazoizquierdo.scaleX=-1;
			this.brazoizquierdo.visible=false;
			this.visible.true;
		




		}


		update(){

			this.mouseAngle = Phaser.Math.Angle.Between(this.x, this.y, this.scene.input.x+ this.scene.cameras.main.scrollX, this.scene.input.y + this.scene.cameras.main.scrollY)


			if(this.scene.player.flipX){
				this.visible=false;
				this.brazoizquierdo.rotation=this.mouseAngle+Math.PI;
				this.brazoizquierdo.visible=true;
			}else{
				this.visible=true;
				this.brazoizquierdo.visible=false;
				this.rotation=this.mouseAngle;
			}
			this.x=this.scene.player.x;
			this.y=this.scene.player.y-30;
			this.brazoizquierdo.x=this.scene.player.x;
			this.brazoizquierdo.y=this.scene.player.y-30;

		}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
