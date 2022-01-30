
// You can write more code here

/* START OF COMPILED CODE */

class BrazoIzquierdo extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? -1, y ?? -2);

		// brazoizquierdo
		const brazoizquierdo = scene.add.sprite(0, 0, "brazoizquierdo");
		brazoizquierdo.setOrigin(0, 0);
		this.add(brazoizquierdo);

		/* START-USER-CTR-CODE */
		this.createEvent = this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.create, this);
		this.scene.events.on("update", () => this.update())
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

		create(){

			this.x=this.scene.player.x;
			this.y=this.scene.player.y-10;

			this.brazoderecho=this.scene.add.sprite(this.x,this.y,"brazoderecho");
			this.brazoderecho.setOrigin(0,0);
			this.brazoderecho.scaleX=-1;
			this.brazoderecho.visible=false;
			this.visible=true;
		



		}


		update(){

			this.mouseAngle = Phaser.Math.Angle.Between(this.x, this.y, this.scene.input.x+ this.scene.cameras.main.scrollX, this.scene.input.y + this.scene.cameras.main.scrollY)


			if(this.scene.player.flipX){
				this.visible=false;
				this.brazoderecho.rotation=this.mouseAngle+Math.PI;
				this.brazoderecho.visible=true;
				
			
			}else{
				this.visible=true;
				this.brazoderecho.visible=false;
				this.rotation=this.mouseAngle;
				
			
			}
			this.x=this.scene.player.x;
			this.y=this.scene.player.y-40;
			this.brazoderecho.x=this.scene.player.x;
			this.brazoderecho.y=this.scene.player.y-40;

		}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
