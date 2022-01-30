
// You can write more code here

/* START OF COMPILED CODE */

class BrazoDerecho extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? -1, y ?? -2);

		// brazoderecho
		const brazoderecho = scene.add.sprite(0, 0, "brazoderecho");
		brazoderecho.setOrigin(0, 0);
		this.add(brazoderecho);

		// bulletOrigin
		const bulletOrigin = scene.add.image(82, 27, "black");
		bulletOrigin.scaleX = 0.5;
		bulletOrigin.scaleY = 0.5;
		this.add(bulletOrigin);

		this.bulletOrigin = bulletOrigin;

		/* START-USER-CTR-CODE */
		this.createEvent = this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.create, this);
		this.scene.events.on("update", () => this.update())
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	bulletOrigin;

	/* START-USER-CODE */

		create(){

			this.x=this.scene.player.x;
			this.y=this.scene.player.y-10;

			this.brazoIzquierdo=this.scene.add.sprite(this.x,this.y,"brazoizquierdo");
			this.brazoIzquierdo.setOrigin(0,0);
			this.brazoIzquierdo.scaleX=-1;
			this.brazoIzquierdo.visible=false;

			this.scene.input.on('pointerdown', function (pointer) {

				const bullet = new PlayerBullet(this.scene, this.x+this.bulletOrigin.x, this.y+this.bulletOrigin.y);
				this.scene.add.existing(bullet);

			}, this);


		}


		update(){


			this.mouseAngle = Phaser.Math.Angle.Between(this.x, this.y, this.scene.input.x+ this.scene.cameras.main.scrollX, this.scene.input.y + this.scene.cameras.main.scrollY)


			if(this.scene.player.flipX){
				this.visible=false;
				this.brazoIzquierdo.rotation=this.mouseAngle+Math.PI;
				this.brazoIzquierdo.visible=true;
			}else{
				this.visible=true;
				this.brazoIzquierdo.visible=false;
				this.rotation=this.mouseAngle;
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
