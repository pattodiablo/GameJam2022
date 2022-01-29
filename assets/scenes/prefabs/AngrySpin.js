
// You can write more code here

/* START OF COMPILED CODE */

class AngrySpin extends Phaser.GameObjects.Sprite {
	
	constructor(scene, x, y, texture, frame) {
		super(scene, x, y, texture || "puerco espin", frame !== undefined && frame !== null ? frame : "camina0000");
		
		// this (components)
		const thisStartAnimation = new StartAnimation(this);
		thisStartAnimation.animationKey = "caminaEspin";
		
		/* START-USER-CTR-CODE */
	
		this.scene.events.on("create", () => this.create());
			this.createEvent =	this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

		/* END-USER-CTR-CODE */
	}
	
	/** @type {number} */
	travelDistance = 200;
	
	/* START-USER-CODE */

	create(){

		this.name="AngrySpin";
		this.canKill = false;
		this.startRunning = false;
		this.direction = 1;
		this.changinDirection = false;
		this.bulletTurn=0; 
		this.canSpike=true;
		this.velo=30
		this.wannaSpike=false;
		this.isWalking=true;
		
		this.setDepth(0);
		this.enemyLife = 5;

		this.flipX = true;

		this.samposhooter_damage_01 = this.scene.sound.add('samposhooter_damage_01');
		this.samposhooter_damage_01.loop = false;
		this.scene.fxcontainer.push(this.samposhooter_damage_01);


		this.initMovement();
		this.createCoins();
		this.initColliders();

		this.scene.physics.add.existing(this, false);
		this.body.gravity.y=450;
		this.body.height=50;
		this.body.immovable = true;
		this.body.setFrictionX(1);
		this.playerLocked = true;
		this.body.setOffset(0,20)
		
		console.log(this.body)
	}

	

	initColliders(){

		this.scene.physics.add.collider(this.scene.player, this, this.onCart);
	}

	onCart(player,cart){
		player.overPlatform = true;
		player.wasOnPlatform = true;
		
	}


	createCoins(){
		this.enemyCoins = [];

		for(var i=0; i<5; i++){
			const coin = new Coin(this.scene, this.x, this.y-100);
			coin.isEnemyCoin=true;
			coin.hasGravity=true;
			coin.visible=false;
			this.enemyCoins.push(coin);
			this.scene.add.existing(coin);
		}

		this.hasCoins = true;
	}

spikerAction(){
	console.log("entrando a spiker action")
	this.actionTime = Math.random()*(2500-5000)+2500;
	this.spikingTime = this.scene.time.addEvent({
		delay: this.actionTime ,                // ms
		callback: function(){
			console.log("decidiendo si atacar");
			this.velo=0;
			this.wannaSpike=true;
			this.canSpike=true;
			this.isWalking = false;

			this.willSpike = Math.random() < 0.5;
			if(this.willSpike){
				this.willSpikeTimer = this.scene.time.addEvent({
					delay: Math.random()*(1000-2500)+1000,                // ms
					callback: function(){
						console.log("atacando");
						this.spiking=true;
						this.wannaSpike=false;
						this.scene.time.delayedCall(3000, function(){
							this.velo=30;
							this.spiking=false;
							this.isWalking = true;
						}, null, this);
					},
					//args: [],
					callbackScope: this,
					loop: false
				});
			}else{
				this.velo=30;
				this.spiking=false;
				this.wannaSpike=false;
				this.isWalking = true;
			}
			


		},
		//args: [],
		callbackScope: this,
		loop: false
	});
}

	initMovement(){


	
		if(this.travelDistance>0){
		
			this.totalTravel =  this.x+this.travelDistance;
		
			this.originalX = this.x;

			if(this.x>this.totalTravel){
				
				this.flipX = false;
				this.direction = -1;
				this.spikerAction();
			}

			if(this.x<this.originalX){
				this.flipX = true;
				this.direction = 1;
				this.spikerAction();
			}

		}else{

			this.movementTimer = this.scene.time.addEvent({
					delay: Math.ceil(Math.random()*(3000 - 2000)+2000),                // ms
					callback: function(){


							this.play("caminaEspin",true);


						var randomDirection = Math.random() < 0.5;

						if(randomDirection < 0.5 ){
							this.flipX = false;
							this.direction = -1;
							this.spikerAction();

						}else{
							this.flipX = true;
							this.direction = 1;
							this.spikerAction();
						}

					},
					//args: [],
					callbackScope: this,
					loop: true
				});	
		}




	}

	destroySequence(){

		//	var destroying = this.play("explode2",true);
	
			console.log("destroy on complete");
				if(this.hasCoins){
	
					this.enemyCoins.forEach(coin => {
						coin.body.enable=true;
						coin.visible=true;
						coin.x = this.x;
						coin.y = this.y;
						coin.visible = true;
						coin.body.velocity.y=-500;
						coin.body.velocity.x=Math.random()*300;
	
					});
	
					this.hasCoins = false;
	
				}
	
	
					this.visible=false;
					// explotion
					const explotion = new Explotion(this.scene, this.x, this.y);
					this.scene.add.existing(explotion);		
					// explotion (prefab fields)
					explotion.emit("prefab-awake");
	
	
				this.scene.samposhooter_destroy_01.play();
	
						if(this.RevivingPodID!=null){
	
								this.scene.revivingPods.forEach(pod => {
	
									if(pod.PodID==this.RevivingPodID){
										console.log(this.RevivingPodID);
										this.visible=false;
										this.isDestroyed = false
										this.x = pod.x;
										this.y = pod.y;
										pod.revivir(this);
	
									}
								});
							}
	
		}


	checkIfFall(){
		if(this.y >= this.scene.layer.height + 100){
		this.body.enable = false;
			this.visible=false

		}
	}

	update(){
		if(this.active){


			
			if(this.isWalking){
				
				this.play("caminaEspin",true);
			}

			if(this.wannaSpike){
				this.play("idleEspin",true);
			
			}

			if(this.spiking){
				this.play("puasEspin",true);
			
			
			}

			if(this.active){

				if(this.body.enable){
					if(this.body.blocked.right || this.body.blocked.left){

						this.direction*=-1;
						this.flipX = !this.flipX;

					}

					this.body.velocity.x = this.velo*this.direction;
				}

			

				if(this.travelDistance>0){


					if(this.x>this.totalTravel){
						if(this.canSpike){
							this.flipX = false;
							this.spikerAction();
							this.direction = -1;
							this.canSpike=false;
						}
						
					}

					if(this.x<this.originalX){
						if(this.canSpike){
							this.flipX = true;
							this.spikerAction();
							this.direction = 1;
							this.canSpike=false;

						}
					

					}

				}


			}
		}
	

	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
