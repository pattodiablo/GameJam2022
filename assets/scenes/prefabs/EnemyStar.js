
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

		this.enemyLife=3;

		if(this.isType1){
			this.setTexture('enemy1');
			//this.image = this.scene.add.sprite(this.x, this.y, 'inkDot');
			//this.image.setBlendMode(Phaser.BlendModes.ADD);
			//this.enemyShadow=this.scene.add.sprite(this.x, this.y, 'enemy1').setBlendMode(Phaser.BlendModes.OVERLAY);
			//this.sprites.push(this.enemyShadow);
	
			var floating = this.scene.tweens.createTimeline();
			floating.add({
				targets: this,
				y: this.y + 20,
				duration: 500,
				ease: 'Linear',
				scale: 0.90,
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
		this.scene.physics.add.overlap(this, this.scene.playerBullets, this.touchBullet);
	}
	
	touchBullet(enemy,bullet){
		if(enemy.enemyLife>0){
			
			enemy.enemyLife--;
			enemy.hit3 = new hit3(enemy.scene, bullet.x, bullet.y);
			enemy.scene.add.existing(enemy.hit3);
		}else{

			enemy.hit3 = new Explotion(enemy.scene, enemy.x, enemy.y);
			enemy.scene.add.existing(enemy.hit3);
			enemy.destroy();
		}
		bullet.destroy();

	}

	touchPlayer(enemy,player){

		player.deathProcess();
	}
	update ()
    {
	if(this.active){
		this.angle++;
		if(this.x<=this.scene.player.x) {
			this.x++;
			
			if(this.y<=this.scene.player.y){
				this.y++;
			}else{
				this.y--;
			} 
		}else{
			this.x--;
			
			if(this.y<=this.scene.player.y){
				this.y++;
			}else{
				this.y--;
			} 
		} 
		
			

		if(this.isType1){
			
		}
		if(this.isType2){
			
			
		}

	}

		
	

    }
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
