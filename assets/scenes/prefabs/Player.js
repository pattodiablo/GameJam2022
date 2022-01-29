
// You can write more code here

/* START OF COMPILED CODE */

class Player extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x, y, texture || "newSupaAnimations", frame !== undefined && frame !== null ? frame : "camina_animation instance 10006");

		// this (components)
		const thisPhysics = new Physics(this);
		thisPhysics.bodyGravity = 500;
		const thisPhysicsBody = new PhysicsBody(this);
		thisPhysicsBody.bodyX = 6;
		thisPhysicsBody.bodyY = 5;
		thisPhysicsBody.bodyWidth = 25;
		thisPhysicsBody.bodyHeight = 25;
		const thisStartAnimation = new StartAnimation(this);
		thisStartAnimation.animationKey = "supa/idle";

		/* START-USER-CTR-CODE */
		this.PhysicsBody=thisPhysicsBody;
		thisPhysicsBody.enable = false;
		this.createEvent = this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.create, this);
		this.scene.events.on("update", () => this.updatePlayer())

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	/**
	 * @return {Phaser.Physics.Arcade.Body} 
	 */

	create() {
console.log("what is this")

		this.scene.input.on('pointerdown', this.mouseClickDown, this);
		this.scene.input.on('pointerup', this.mouseClickUp, this);
		this.scene.input.on('pointermove', this.mouseMove, this);

	//	this.setDepth(10);
		this.canmove = false;
		this.swipeCoordX = 0;
		this.swipeCoordX2 = 0
		this.swipeCoordY = 0;
		this.swipeCoordY2 = 0;
		this.wannaJump = false;
		this.minJumpIntention = 60;
		this.minJumpIntentionOnPlatform = 120;
		this.jumping = false;
		this.isRunning = false;
		this.maxPowerX = 60;
		this.PowerX = 0;
		this.PowerY = 0;
		this.DirX = 0;
		this.DirY = 0;
		this.lastDirx = this.DirX;
		this.VectorX = 0;
		this.VectorY = 0;
		this.ExtraPowerX = 12; //controla el poder de aceleracion lateral
		this.ExtraPowerY = 2;
		this.originalX = this.x;
		this.originalY = this.y;
		this.firstimeClickonScreen = false;
		this.isDropping = false;
		this.canEnterDoor = false;
		this.enteringDoor = false;
		this.isDead = false;
		this.playDeadSound = true;
		this.droppingVelocity = 650;
		this.jumpingExtra = 3.5;
		this.playerDoingNothing = true;
		this.lastViewDirection = 0;
		this.actionBegin = false;
		this.actionEnd = false;
		this.wannaEnterMainDoor = false;
		this.isCollidingMainDoor = false;
		this.overPlatform = false;
		this.wasOnPlatform = false;
		this.maxJumpingPower = 350;
		this.limitWalk = 150;
		this.canFall = true;
		this.wannaRoll = false;
		this.isSupaRolling = false;
		this.canClimb = false;
		this.wannaLaunch = false;
		this.collidingCata = false;
		this.canLaunch = false;
		this.launching = false;
		this.rollChances = 1;
		this.canEnterPod = false;
		this.enteringPod = false;
		this.coins = 80;
		this.supaRollsChances = 0;
		this.playerLife = 10;
		this.maxVelorunning = 200;
		this.maxVelowalking = 150;
		this.bulletdir = 1;
		this.willEnterdoor = false;
		this.isClimbing = false;
		this.wannaEnterPod = false;
		this.supaBiteChances = 0;
		this.wannaRoll = false;
		this.isBiting = false;
		this.arrowPack = [];
		this.currentArrow = 0;
		this.maxarrows = 1;
		this.firstTimeShot = true;
		this.canEnterMainEntrance = false;
		this.isJetPackActive = false;
		this.isTouched = false;
		this.supaDJumps = false;
		this.isDJumping = false;
		this.cannonRollPack = [];
		this.isCannonPositioned = false;
		this.isClickingEndInside = false;
		this.isFiredfromCannon = false;
		this.isCannonNearby=false;

	

		//this.body.setCircle(13,7,5);

		this.largoBarra = this.scene.fuelBarFrame.lifeBarfill.width;
		this.fuelRemain = Math.round(this.largoBarra * this.scene.fuelBarFrame.lifeBarfill.scaleX);
		this.totalFuel = this.fuelRemain;

		this.createJetPackBullets();


		

		//sonidos para saltos
		this.fxjumplist = [this.scene.supa_voicejump_03, this.scene.supa_voicejump_04, this.scene.supa_voicejump_05];
		//sonidos para doublejumps
		//this.fxdoublejumplist = [this.scene.supa_doublejump_04, this.scene.supa_doublejump_05, this.scene.supa_doublejump_06];
		this.fxdoublejumplist = [this.scene.supa_voicejump_03, this.scene.supa_voicejump_04, this.scene.supa_voicejump_05];
		//sonidos para hurt
		this.fxhurtlist = [this.scene.supa_voicehurt_01, this.scene.supa_voicehurt_02];

		console.log(this.scene.game.playerData);
		if(this.scene.game.playerData.gotCannon){
			console.log("activando canon")
			this.supaBiteChances++;
		}

		if(this.scene.game.playerData.doubleJump){
		
			this.supaDJumps++;
			
		}
		
		
		this.getCurrentLife();
		this.activateRoll();
		this.crearParticulas();
		this.createCoins();

	}



	gotPower(powerName){

		if(powerName=="doubleJump"){
			this.body.enable=false;

		
			this.scene.createTextBox(this.x-80,this.y-150,"You can now double jump");

			var reloadTimer = this.scene.time.addEvent({
				delay: 3000,                // ms
				callback: function(){
					this.body.enable=true;

				},
				//args: [],
				callbackScope: this,
				loop: true
			});

		}

		if(powerName=="cannonStrike"){
			this.body.enable=false;
			
			this.scene.createTextBox(this.x-80,this.y-150,"Cannon Strike activated");

			var reloadTimer = this.scene.time.addEvent({
				delay: 3000,                // ms
				callback: function(){
					this.body.enable=true;

				},
				//args: [],
				callbackScope: this,
				loop: true
			});
		}

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

	getCurrentLife() {
	//	console.log("life retrieved " + this.scene.game.playerData.life);
		this.playerLife = this.scene.game.playerData.life;
	}


	crearParticulas() {
		var k = 3;
		var rose = {
			getPoints: function (quantity, stepRate) {
				if (!stepRate) {
					stepRate = Phaser.Math.PI2 / quantity;
				}

				var input = Phaser.Utils.Array.NumberArrayStep(0, Phaser.Math.PI2, stepRate);
				var output = new Array(input.length);

				for (var i = 0; i < input.length; i++) {
					var angle = input[i];
					output[i] = new Phaser.Math.Vector2().setToPolar(angle, 10 * Math.cos(k * angle));
				}

				return output;
			}
		};
		this.particles = this.scene.add.particles('flares');
		var tree = new Phaser.Geom.Triangle.BuildEquilateral(0, -10, 40);
		this.particles.createEmitter({
			frame: "flare30000",
			scale: { start: 0.4, end: 0.1 },
			blendMode: 'ADD',
			lifespan: 700,
			//	emitZone: { type: 'edge', source: rose, quantity: 360 },
			follow: this
		});
		var supaCurrentDepth = this.depth;

		this.setDepth(supaCurrentDepth+1);
		this.particles.visible = false;

	}
	createJetPackBullets() {
		this.jetPackBullets = [];
		for (let index = 1; index <= 20; index++) {
			var jePackBullet = this.scene.add.sprite(this.x, this.y, "jetPackShot");
			jePackBullet.scaleX = 1;
			jePackBullet.scaleY = 1;
			jePackBullet.visible = false;

			this.scene.physics.add.existing(jePackBullet);
			jePackBullet.body.enable = false;
			this.jetPackBullets.push(jePackBullet);
		}
		this.scene.physics.add.collider(this.jetPackBullets, this.scene.layer, this.bulletCollide, null, this);
		this.scene.physics.add.collider(this.jetPackBullets, this.scene.platforms, this.bulletCollide, null, this);
		this.scene.physics.add.collider(this.jetPackBullets, this.scene.enemies, this.bulletCollideEnemi, null, this);

	}
	bulletCollideEnemi(bullet, enemi) {
		bullet.scene.hitEnemyWithJetpack(bullet, enemi);
		bullet.visible = false;
		bullet.x = this.x;
		bullet.y = this.y;
	}
	bulletCollide(bullet, platform) {

		bullet.visible = false;
		bullet.x = this.x;
		bullet.y = this.y;
	}
	startJetPackEngine() {
		var bulletCounter = 0;
		this.Bullettimer = this.scene.time.addEvent({
			delay: 120,                // ms
			callback: function () {


				if (this.fuelRemain <= 1) {

					this.scene.fuelBarFrame.lifeBarfill.scaleX = 0;
					this.body.acceleration.y = 0;
					this.scene.exitJetPack.endJetpack();
					this.Bullettimer.remove();

				} else {
					//	;
					this.scene.fuelBarFrame.lifeBarfill.scaleX -= 0.005;
					this.body.acceleration.y = -900
					/*
					var bullet = this.jetPackBullets[bulletCounter];
					bullet.body.enable = true;
					bullet.visible = true;
					bullet.x = this.x;
					bullet.y = this.y + 30;
					if (this.body.velocity.y > 0) {
						bullet.body.velocity.y = this.body.velocity.y + 500;
					} else {
						bullet.body.velocity.y = 500;
					}
					bullet.body.gravity.y = 900;
					bulletCounter++;
					if (bulletCounter >= this.jetPackBullets.length) {
						bulletCounter = 0;
					}
 			*/

				}
				


			},
			callbackScope: this,
			loop: true
		});


	}

	activateRoll() {

		if (this.rollChances > 0) {
			this.scene.shootBtn.activateBtn();
			this.rollChances--;
		}


	}

	setPlayerData(playerData) {
		this.gotCard = playerData.gotCard;
	}

	getBody() {
		return this.body;
	}

	doingActionChecker() {

		this.lastActionTimer = this.scene.time.addEvent({
			delay: 4000,                // ms
			callback: function () {

				this.VectorX = 0;
				this.VectorY = 0;
				//this.body.velocity.x = 0;

				this.playerDoingNothing = true;
				this.lastActionTimer.remove();

			},
			//args: [],
			callbackScope: this,
			loop: true
		}, this);
	}

	mouseMove(pointer) {
	
	}

	mouseClickDown(pointer) {
		this.pointerDownduration = 0;


		this.stoptimer = this.scene.time.addEvent({
			delay: 100,                // ms tiempo para frenar
			callback: function(){
			
				if(pointer.isDown){
				
				
						this.PowerX=0;
						this.body.setAccelerationX(0);
						this.body.setDragX(900); //frenar drag
						
		
				}
				
			//
			},
			//args: [],
			callbackScope: this,
			loop: false
		});

		if(this.body.enable){

	

				if (!this.isJetPackActive) {
					this.actionBegin = true;
					this.actionEnd = false;
					
					
					if (this.canmove && !this.isBiting && !this.isCannonPositioned) {
						this.swipeCoordX = pointer.x;
						this.swipeCoordY = pointer.y;
						
					}
				} else {
					this.body.acceleration.y = 0;
					if(this.isClickingEndInside ){
							this.startJetPackEngine();
							//this.scene.supa_jetpack_01.play();
							this.scene.supa_jetpack_02.play();
					}
				
					this.isClickingEndInside = false;
				}

		}
	
	}


	mouseClickUp(pointer) {
		if(this.body.enable){
			if (!this.isJetPackActive) {

				this.startAcceleration = true;
				this.actionBegin = false;
				this.actionEnd = true;
				//this.scene.supa_jetpack_01.stop();
				this.scene.supa_jetpack_02.stop();
	
	
				if (this.lastActionTimer !== undefined) {
					this.lastActionTimer.remove();
	
				}
	
				this.doingActionChecker();
	
				if (this.canmove && !this.isBiting  && !this.isCannonPositioned) {
	
					this.swipeCoordX2 = pointer.x;
					this.swipeCoordY2 = pointer.y;
					this.PowerX = Math.abs(this.swipeCoordX - this.swipeCoordX2);
				}
	
	
	
				this.lastViewDirection = this.VectorX;
	
	
				if (this.PowerX >= this.maxPowerX) {
	
					this.PowerX = this.maxPowerX;
	
				}
	
	
	
				if (this.PowerX <= 20) {
					this.body.setAccelerationX(0);
					this.body.setDragX(900); //frenar drag
	
				}
	
	
				this.DirX = Math.sign(this.swipeCoordX - this.swipeCoordX2);
				this.VectorX = this.DirX * this.PowerX;
	
				this.DirY = Math.sign(this.swipeCoordY - this.swipeCoordY2);
				this.VectorY = this.DirY * this.PowerY;
	
	
	
				if (!this.jumping) { //saltando jump saltar
	
					this.wannaLaunch = false;
					this.PowerY = Math.abs(this.swipeCoordY - this.swipeCoordY2);
	
					this.direccionY = this.swipeCoordY - this.swipeCoordY2;
	
	
				
	
				} else if (this.jumping) {
	
					this.PowerY = this.swipeCoordY - this.swipeCoordY2;
					this.wannaJump = false;
	
					if (this.PowerY < -100) {
	
	
						this.body.velocity.y = this.droppingVelocity;
						this.isDropping = true;
						this.wannaLaunch = true;
	
					} else if (this.PowerY >= 0 && this.PowerY < 20 && this.canFall) {
	
						this.PowerY = 0;
						this.canFall = false;
	
					}
	
					else if (this.PowerY >= 40 && this.supaDJumps > 0 && !this.isDJumping) {
						// console.log('quiero dobuble saltar');
						this.wannaDoubleJump = true;
						//this.supaDJumps--;
						if (this.supaDJumps <= 0) {
							this.supaDJumps = 0;
						}
	
					}
				}
	
	
	
	
				if (this.PowerY > this.minJumpIntention && this.DirY == 1 && this.body.onFloor()) { //si tiene intencion de salto
	
					this.wannaJump = true;
					this.wasOnPlatform = false;
					this.isClimbing = false;
	
				}
	
	
				if (this.PowerY > this.minJumpIntention && this.DirY == 1 && this.canFallingJump) { //saltar antes de topar plataforma
					this.canAirJump = true;
					this.wannaJump = true;
					var wannaJumpTimer = this.scene.time.delayedCall(200, function () {
						this.canAirJump = false;
					}, null, this);
				}
	
			} else {
				this.isClickingEndInside = true;
				this.jetPackBullets.forEach(bullet => {
					bullet.body.enable = false;
					bullet.visible = false;
				});
				this.Bullettimer.remove();
				this.body.acceleration.y = 0;
	
			}
			
		}
	


	}

	entrandoMainDoor() {


		var entrandoTimeline = this.scene.tweens.createTimeline();
		entrandoTimeline.add({
			targets: this,
			scale: 0.9,
			duration: 100,
			ease: 'Linear',
			repeat: 0

		});
		entrandoTimeline.add({
			targets: this,
			scale: 1.1,
			duration: 100,
			ease: 'Linear',
			repeat: 0

		});


		entrandoTimeline.add({
			targets: this,
			alpha: 30,
			scale: 1,
			duration: 700,
			ease: 'Linear',
			repeat: 0,
			callbackScope: this,
			onComplete: function () {

				this.body.setAccelerationX(0);
				this.PowerX = 0;
				this.body.enable = true;
				this.wannaEnterMainDoor = true;

			}

		});

		entrandoTimeline.play();



	}
	entrandoSmallDoor() {

		this.body.enable = false;
		this.willEnterdoor = true;

		var entrandoTimeline = this.scene.tweens.createTimeline();
		entrandoTimeline.add({
			targets: this,
			scale: 0.9,
			duration: 100,
			ease: 'Linear',
			repeat: 0

		});
		entrandoTimeline.add({
			targets: this,
			scale: 1.1,
			duration: 100,
			ease: 'Linear',
			repeat: 0,
			callbackScope: this,
			onComplete: function () {
				this.body.setAccelerationX(0);
				this.PowerX = 0;
				this.body.enable = true;
				this.enteringDoor = true;

			}
		});


		entrandoTimeline.add({
			targets: this,
			alpha: 1,
			scale: 1,
			duration: 500,
			ease: 'Linear',
			repeat: 0,
			callbackScope: this,
			onComplete: function () {


				this.body.enable = false;


			}

		});



		entrandoTimeline.play();
	}

	wallCollision() { //collision con paredes

		//	this.body.velocity.y = 0;
		this.body.gravity.y = 0;
		this.canClimb = true;
		this.wannaJump = true;
		if (!this.isClimbing) {
			this.scene.envi_slidewall_01.play();
			this.isClimbing = true;
		}


	}



	launchingAnimation(catapulta) {

		this.body.enable = false;
		this.PowerX=0;
		this.x = catapulta.x;
		var launchingTimline = this.scene.tweens.createTimeline();
		launchingTimline.add({
			targets: this,
			scale: 1.2,
			duration: 100,
			ease: 'Linear',
			repeat: 0

		});

		launchingTimline.add({
			targets: this,
			scale: 0.1,
			alpha: 0,
			duration: 100,
			ease: 'Linear',
			repeat: 0

		});

		launchingTimline.add({
			targets: this,
			scale: 0.1,
			alpha: 0,
			duration: 400,
			ease: 'Linear',
			repeat: 0

		});


		launchingTimline.add({
			targets: this,
			alpha: 1,
			scale: 1,
			duration: 200,
			ease: 'Linear',
			repeat: 0,
			callbackScope: this,
			onComplete: function () {

				this.scene.envi_slingshot_02.play();

				catapulta.play("catapultaOff", true);
				this.body.enable = true,

				
					this.body.velocity.y = -catapulta.power;
				this.isDropping = false;
				this.wannaLaunch = false;
			}

		});

		launchingTimline.play();


	}


	idle() {
		this.play("supa/idle", true);
	}

	moveSideWays() {

		if (!this.isJetPackActive) {



			if (!this.isBiting) {

				this.body.setAccelerationX(-this.VectorX * this.PowerX / 6);

			} else {

				var veloSign = Math.sign(this.body.velocity.x);
				this.body.setAccelerationX(-veloSign * this.VectorX * this.PowerX / 6);

			}




			if (this.PowerX < 30) {

				if (this.body.velocity.x >= this.maxVelowalking) {
					this.body.velocity.x = this.maxVelowalking;
				}
				if (this.body.velocity.x <= -this.maxVelowalking) {
					this.body.velocity.x = -this.maxVelowalking;
				}

			} else {

				if (this.body.velocity.x >= this.maxVelorunning) {
					this.body.velocity.x = this.maxVelorunning;
				}
				if (this.body.velocity.x <= -this.maxVelorunning) {
					this.body.velocity.x = -this.maxVelorunning;
				}

			}

		} else {

			this.body.velocity.x = this.PowerX * this.VectorX;
		}

	}


	checkAnimStatus() {

		if (this.isJetPackActive) {
			if (!this.body.onFloor()) {

				this.play("supa/jetPack", true);
			} else {
				if (this.body.velocity.x >= 10 || this.body.velocity.x <= -10) {
					this.play("jetPackWalk", true);
				}


			}
		}
		else {

			if (this.willEnterdoor) {
				this.play("supa/entering", true);
			}
			else if (this.isBiting) {
				this.play("supa/roll", true);
			}
			else if (this.enteringPod) {

				this.play("supa/fly", true);

			} else {
				if (this.isDead) {

					if (this.playDeadSound) {

						this.scene.supa_death_01.play();
						this.play("supa_hurt", true);
						this.playDeadSound = false;

					}


				} else {
					if (this.body.onFloor()) { //para cuando esta sobre una plataforma o el piso

						this.isDropping = false;
						this.jumping = false;

						if (this.isSupaRolling) {

							this.play("supa/roll", true);



						} else {
							if (this.body.velocity.x >= this.limitWalk) {
								this.flipX = false;
								if (this.supaDJumps > 0) {

									this.play("runDoubleJump", true);
									this.particles.emitters.list[0].lifespan.propertyValue = 200;

								} else {
									this.play("supa/run", true);
									this.particles.emitters.list[0].lifespan.propertyValue = 200;
								}

							}

							if (this.body.velocity.x <= -this.limitWalk) {
								this.flipX = true;
								if (this.supaDJumps > 0) {

									this.play("runDoubleJump", true);
									this.particles.emitters.list[0].lifespan.propertyValue = 200;
								} else {
									this.play("supa/run", true);
									this.particles.emitters.list[0].lifespan.propertyValue = 200;

								}
							}

							if (this.body.velocity.x > 0 && this.body.velocity.x < this.limitWalk) {
								this.flipX = false;
								if (this.supaDJumps > 0) {

									this.play("walkDoubleJump", true);
									this.particles.emitters.list[0].lifespan.propertyValue = 0;

								} else {

									this.play("supa/walk", true);
									this.particles.emitters.list[0].lifespan.propertyValue = 0;
								}

							}

							if (this.body.velocity.x < 0 && this.body.velocity.x > -this.limitWalk) {
								this.flipX = true;
								if (this.supaDJumps > 0) {

									this.play("walkDoubleJump", true);
									this.particles.emitters.list[0].lifespan.propertyValue = 0;

								} else {

									this.play("supa/walk", true);
									this.particles.emitters.list[0].lifespan.propertyValue = 0;
								}
							}

							if (this.body.velocity.x == 0) {

								if (this.supaDJumps > 0) {
									this.play("idleDoubleJump", true);

								} else {



									this.play("supa/idle", true);

									this.particles.emitters.list[0].lifespan.propertyValue = 0
								}

							}

						}


					} else { //para cuando esta en el aire


						if (this.body.velocity.y > this.minJumpIntentionOnPlatform) {

							if (this.supaDJumps > 0) {

								this.play("fallDoubleJump", true);
							} else {
								this.play("supa/fall", true);
								this.particles.emitters.list[0].lifespan.propertyValue = 500;
							}


							if (this.isDropping) {

								this.play("supa/drop", true);
								this.particles.emitters.list[0].lifespan.propertyValue = 2000;

							}

						}

						if (this.body.velocity.y < 0) {

							this.play("supa/roll", true);
							this.particles.emitters.list[0].lifespan.propertyValue = 300;

						}

						if (this.isTouched) {
							//console.log('istouched on the air');
							this.play("supa_hurt", true);
							this.scene.player.wannaEnterMainDoor = false;
							
						}

					}
				}

			}
		}






	}




	jump() {

		this.jumping = true;
		this.canFallingJump = false;

		if (!this.isJetPackActive) {

			if (this.body.onFloor() && this.wannaJump || this.wannaJump && this.wasOnPlatform) {
				
				const randomFx = Math.abs(Math.round(Math.random() * this.fxjumplist.length - 1));

				this.fxjumplist[randomFx].play();


				this.jumpingPower = this.PowerY * this.jumpingExtra;

				if (this.jumpingPower > this.maxJumpingPower) {
					this.jumpingPower = this.maxJumpingPower;
				}
				if (this.jumpingPower > this.minJumpIntention) {
					this.body.velocity.y = -this.jumpingPower;
				}

				this.wannaJump = false;
				this.canFall = true;
				this.isDJumping = false;

			} else if (!this.body.onFloor() && this.wannaDoubleJump && !this.isTouched) {

				this.isDJumping = true;
				const randomFx = Math.abs(Math.round(Math.random() * this.fxdoublejumplist.length - 1));

				this.fxdoublejumplist[randomFx].play();
				this.particles.emitters.list[0].lifespan.propertyValue = 100;
				this.jumpingPower = this.PowerY * this.jumpingExtra;

				if (this.jumpingPower > this.maxJumpingPower) {
					this.jumpingPower = this.maxJumpingPower;
				}
				if (this.jumpingPower > this.minJumpIntention) {
					this.body.velocity.y = -this.jumpingPower;
				}

				this.wannaDoubleJump = false;
				this.wannaJump = false;
				this.canFall = true;

			}


			if (this.canClimb && this.wannaJump) {
				this.jumpingPower = this.PowerY * this.jumpingExtra;
				if (this.jumpingPower > this.maxJumpingPower) {
					this.jumpingPower = this.maxJumpingPower;
				}
				if (this.jumpingPower > this.minJumpIntention) {
					this.body.velocity.y = -this.jumpingPower;
				}

				this.wannaJump = false;
				this.canFall = true;
			}
		} else {
			//this.body.velocity.y = -this.PowerY;
		}



	}



	checkFallingJump() {
		if (!this.isJetPackActive) {
			if (this.jumping && this.body.velocity.y > 0) {

				this.canFallingJump = true;
				this.body.gravity.y = 1000;

			} else {
				this.body.gravity.y = 500;
			}
		} else {
			this.body.gravity.y = 400;
		}

	}

	shoot() {
		var valaReady = 0;
		this.shotTimer = this.scene.time.addEvent({
			delay: 200,                // ms
			callback: function () {
				this.scene.playerBullets[valaReady].initMovement(this.bulletdir);
				this.scene.playerBullets[valaReady].isActive = true;

				this.scene.supa_shot_01.play();
				valaReady++;
				if (valaReady >= 10) {
					valaReady = 0;
				}

				this.bulletdir *= -1;
			},
			//args: [],
			callbackScope: this,
			loop: true
		});

	}

	reloadBullets() {


		this.restarTimer = this.scene.time.addEvent({
			delay: 1500,                // ms
			callback: function () {
				this.scene.playerBullets.forEach(function (bullet) {

					bullet.restart();
				});
			},
			//args: [],
			callbackScope: this,

		});


	}

	checkIfSupaBite() { //para cuando se lanza del cañon


		if (this.wannaBite) {


		
			this.scene.player.currentArrow = 0;
			this.visible=false;
			this.isBiting = true;
			this.body.setVelocity(0);


			this.body.enable = false;

			this.scene.cameras.main.shake();
			this.waitingfortarget = true;

			this.cannonRoll = new CannonRoll(this.scene, this.x, this.y);
			this.scene.add.existing(this.cannonRoll);
			this.cannonRoll.emit("prefab-awake");
			this.scene.cannonRollPack.push(this.cannonRoll);
			this.scene.cameras.main.stopFollow(this);
			this.scene.cameras.main.startFollow(this.cannonRoll,true, 0.4, 0.04);
			

			this.spriteCircle = this.scene.add.sprite(this.x, this.y, "targetRing"); //el cañon
			let spriteCircle = this.spriteCircle;
			spriteCircle.setOrigin(0.5, 0.5);
			this.spriteKnob = this.scene.add.sprite(this.x, this.y, "knob"); //para jalar 

			var spriteKnob = this.spriteKnob;
			spriteKnob.name = "cheesckake" + Math.random() * 1000;
			spriteKnob.setOrigin(0.5, 0.5);
			spriteKnob.setInteractive();
			this.scene.input.setDraggable(spriteKnob);

			for (let i = 0; i < this.maxarrows; i++) {

				const arrow = new Arrow(this.scene, this.x, this.y);
				this.arrowPack.push(arrow);
				this.scene.add.existing(arrow);

			}

			var rad = 0;
			var deg = 0;


			if (this.firstTimeShot) {

				const handPull = new HandPull(this.scene, this.x, this.y);
				this.scene.add.existing(handPull);
				

				this.scene.input.on('drag', function (pointer, gameObject, dragX, dragY) {


					if(gameObject.texture.key == "knob"){
						gameObject.x = dragX;
						gameObject.y = dragY;
	
						rad = Phaser.Math.Angle.Between(gameObject.x, gameObject.y, gameObject.scene.player.spriteCircle.x, gameObject.scene.player.spriteCircle.y);
						deg = Phaser.Math.RadToDeg(rad);
	
	
						//gameObject.scene.player.pwrup_arrowbite_charge_01.play();
	
						gameObject.scene.player.arrowPack.forEach(arrow => {
	
							arrow.angle = deg + 90;
						});
	
	
						this.knobDistance = Phaser.Math.Distance.Between(gameObject.x, gameObject.y, gameObject.scene.player.spriteCircle.x, gameObject.scene.player.spriteCircle.y);
						gameObject.scene.player.spriteCircle.scaleX = this.knobDistance / 50;
						gameObject.scene.player.spriteCircle.scaleY = this.knobDistance / 50+50;
	
	
				
							gameObject.scene.player.spriteCircle.scaleX = 1;
							gameObject.scene.player.spriteCircle.scaleY = 1;
	
					
	
						gameObject.scene.player.spriteCircle.angle =  deg+90;

					}

				});

				this.scene.input.on('dragend', function (pointer, gameObject, dragX, dragY) {

					if(gameObject.texture.key == "knob"){

						rad = Phaser.Math.Angle.Between(gameObject.x, gameObject.y, gameObject.scene.player.spriteCircle.x, gameObject.scene.player.spriteCircle.y);
						deg = Phaser.Math.RadToDeg(rad);
	
					
						gameObject.scene.supa_cannon_01.play();
	
						var knobreturn = this.scene.tweens.createTimeline();
						knobreturn.add({
							targets: gameObject,
							y: gameObject.scene.player.spriteCircle.y + 10,
							x: gameObject.scene.player.spriteCircle.x + 10,
							duration: 50,
							ease: 'Linear',
							repeat: 0,
							callbackScope: this,
							onComplete: function () {
								if (typeof gameObject != undefined) {
									//console.log(gameObject.scene.cannonRollPack);
									gameObject.scene.physics.velocityFromAngle(deg, 700, gameObject.scene.cannonRollPack[0].body.velocity);//chequear
							
									gameObject.scene.cannonRollPack[0].killFirstRollcanon(gameObject.scene);
									gameObject.scene.cannonRollPack[0].visible=false;
									gameObject.scene.cameras.main.flash();
									gameObject.scene.player.currentArrow++;
									gameObject.scene.player.isFiredfromCannon=true;
								
									if (gameObject.scene.player.currentArrow >= gameObject.scene.player.maxarrows) {
										gameObject.removeInteractive();
										gameObject.scene.player.visible = false;
										gameObject.scene.player.body.enable = false;
										var killTimer = gameObject.scene.time.addEvent({
											delay: 600,                // ms
											callback: function () {
												
	
												gameObject.scene.player.spriteCircle.destroy();
	
	
												gameObject.scene.player.arrowPack.forEach(arrow => {
													arrow.destroy();
												});
												gameObject.scene.player.isBiting = false;
												gameObject.scene.player.body.setAcceleration(0);
												gameObject.scene.player.waitingfortarget = false;
												//gameObject.scene.player.supaBiteChances--;
												gameObject.scene.player.arrowPack = [];
												gameObject.destroy();
											},
											//args: [],
											callbackScope: this,
	
										});
	
	
	
									}
	
	
								}
							}
	
						});
	
	
						knobreturn.add({
	
							targets: gameObject,
							y: gameObject.scene.player.spriteCircle.y - 10,
							x: gameObject.scene.player.spriteCircle.x - 10,
							duration: 50,
							ease: 'Linear',
							repeat: 0
	
						});
	
						knobreturn.add({
	
							targets: gameObject,
							y: gameObject.scene.player.spriteCircle.y,
							x: gameObject.scene.player.spriteCircle.x,
							duration: 50,
							ease: 'Linear',
							repeat: 0,
	
	
						});
	
						knobreturn.play();
					}
				

				});
				this.firstTimeShot = false;
			}




			this.wannaBite = false;
		}


	}

	checkIfSuperRoll() { //Supa Roll
		if (this.wannaRoll) {

			this.isSupaRolling = true;
			this.supa_spinpwrup_01.play();
			this.body.y = this.body.y - 30;
			this.y = this.y - 30; //poner tween en el futuro para que no sea tan grotesco
			this.body.enable = false;
			this.wannaRoll = false;
			this.supaRollsChances--;
			this.shoot();


			var SupaRollActiveTimer = this.scene.time.addEvent({
				delay: 3000,                // ms
				callback: function () {


					this.isSupaRolling = false;
					this.body.enable = true;
					this.shotTimer.destroy();
					this.reloadBullets();
					if (this.rollChances <= 0) {
						this.scene.shootBtn.deactivateBtn();
					}
				},
				//args: [],
				callbackScope: this,

			});


		}
	}

	checkIfCanClimb() {
		this.canClimb = false;
	}

	exitPod() {
		this.alpha = 1;
		this.body.enable = true;
		this.enteringPod = false;
	}

	checkIfEnterPod() {
		if (this.canEnterPod) {
			if (this.wannaEnterPod && !this.enteringPod) {

				this.scene.envi_powerupstation_01.play();

				this.scene.cameras.main.flash();
				this.body.enable = false;
				this.enteringPod = true;


				var enteringpod = this.scene.tweens.createTimeline();
				enteringpod.add({
					targets: this,
					y: this.y + 20,
					duration: 100,
					ease: 'Linear',
					repeat: 0

				});

				enteringpod.add({
					targets: this,
					y: this.y - 30,
					duration: 100,
					ease: 'Linear',
					repeat: 0

				});

				enteringpod.add({
					targets: this,
					scale: 1.2,
					duration: 100,
					ease: 'Linear',
					repeat: 0

				});

				enteringpod.add({
					targets: this,
					scale: 0.7,
					duration: 100,
					ease: 'Linear',
					repeat: 0

				});

				enteringpod.add({
					targets: this,
					scale: 1,
					duration: 100,
					ease: 'Linear',
					repeat: 0,
					callbackScope: this,
					onComplete: function () {
						this.play("supa/puff", true);
					}

				});

				enteringpod.add({
					targets: this,
					alpha: 0,
					duration: 100,
					ease: 'Linear',
					repeat: 0

				});

				enteringpod.add({
					targets: this,

					duration: 450,
					ease: 'Linear',
					repeat: 0,
					callbackScope: this,
					onComplete: function () {
						this.scene.energyPanel.open();
					}

				});

				enteringpod.play();


			}
		}
		this.canEnterPod = false;
	}

	checkIfHasPowerUps() {
		if (this.supaRollsChances > 0) {

			this.scene.shootBtn.activateBtn();

		} else {
			this.scene.shootBtn.deactivateBtn();

		}
		
		if (this.supaBiteChances > 0 && this.isCannonNearby) {
			
			if(!this.scene.biteBtn.isOnScreen){

				this.scene.biteBtn.activateBtn();
			}
			

		} else {
			this.scene.biteBtn.deactivateBtn();

		}
		this.isCannonNearby = false;
	}

	updatePlayer() {


		this.jump();
		this.checkIfCanClimb();
		this.moveSideWays();
		this.checkFallingJump();
		this.checkAnimStatus();
		this.checkIfFall();
		this.timeWhenJustJump();
		this.checkIfSuperRoll();
		this.checkCatapultas();
		this.checkIfEnterPod();
		this.checkIfHasPowerUps();
		this.checkIfSupaBite();

		if (this.isJetPackActive) {
		
			this.PowerX = Math.abs(this.scene.input.x - 160);
			this.VectorX = Math.sign(this.scene.input.x - 160);
			if (this.VectorX > 0) {
				this.flipX = false;
			} else {
				this.flipX = true;
			}


		}

		
	}

	activateJetPack() {

		this.isJetPackActive = true;
	}

	checkCatapultas() {
		if (this.collidingCata) {
			this.canLaunch = true;

		} else {

			this.canLaunch = false;
		}

		this.collidingCata = false;
	}

	timeWhenJustJump() {
		if (this.body.onFloor()) {
			this.wasOnPlatform = true;

		}
		if (this.jumping && this.wasOnPlatform) {

			var jumpingChancewhenfall = this.scene.time.addEvent({
				delay: 200,                // ms
				callback: function () {

					this.wasOnPlatform = false;
				},

				callbackScope: this,

			});

		}

	}

	checkIfFall() {
		if (this.y >= this.scene.layer.height + 100 && !this.isDead) {
			this.scene.supa_spawn01.play();
			this.appearAgain();
		}
	}
	// metodo cuando supa sufre dano 
	playerhurt(player, enemy) {
		//this.dieAnimation();
	

	
		if (this.isDropping) {
			console.log(enemy)
			if(typeof enemy!=="undefined"){

			
			if(!enemy.isBoss){
				if(!enemy.isBossShot){
					enemy.body.enable = false;
				
					if(enemy.name !=="AcidTile"){
						enemy.destroySequence();
					}
				}
			
			}else{
				
				if(enemy.name !=="AcidTile"){
					enemy.destroySequence();
				}
				
			}
		}
			this.scene.cameras.main.shake(60);
			this.isTouched = false;

			var HurtTimeline = this.scene.tweens.createTimeline();

			HurtTimeline.add({
				targets: this,
				callbackScope: this,
				onComplete: function () {

					this.body.velocity.y = -200;
					//const vx = this.body.velocity.x;
					this.body.velocity.x=0;
					this.body.velocity.x = (this.DirX)*200;

				},
				duration: 1000,
				ease: 'Linear',
				repeat: 3

			});


			HurtTimeline.add({
				targets: this,
				alpha: 1,
				duration: 30,
				ease: 'Linear',
				repeat: 0,

			});

			HurtTimeline.play();


		} else if (!this.isTouched) {

			this.playerLife--;

			if(this.playerLife<=0){
				this.playerLife = 0;
			}

			this.scene.game.playerData.life = this.playerLife;

		

			updatear(this.scene.game.playerData);

			this.isTouched = true;
			this.body.velocity;
			this.body.setAccelerationX(0);
			this.PowerX = 0;
			this.scene.cameras.main.shake(60);
			this.scene.cameras.main.flash(200, 172, 29, 41);
			var HurtTimeline = this.scene.tweens.createTimeline();

			HurtTimeline.add({
				targets: this,
				callbackScope: this,
				onComplete: function () {

					this.body.velocity.y = -200;
					//const vx = this.body.velocity.x;
					this.body.velocity.x=0;
					this.body.velocity.x = (this.DirX)*200;
					

				},
				duration: 100,
				ease: 'Linear',
				repeat: 3

			});

			HurtTimeline.add({
				targets: this,
				alpha: 0,
				duration: 30,
				ease: 'Linear',
				repeat: 3,
				callbackScope: this,
				yoyo: true,

			});



			HurtTimeline.add({
				targets: this,
				alpha: 0,
				duration: 80, //tiempo de estar herido
				ease: 'Linear',
				repeat: 9,
				callbackScope: this,
				yoyo: true,
				onComplete: function () {

					this.isTouched = false;
				}
			});

			HurtTimeline.add({
				targets: this,
				alpha: 1,
				duration: 30,
				ease: 'Linear',
				repeat: 0,

			});

			HurtTimeline.play();


			if (this.playerLife <= 0) {

				this.dieAnimation();
				this.scene.game.playerData.timesDead++;
				
				this.playerLife = this.scene.game.playerData.maxLife;

			}

			this.scene.lifepanel.calcularBarrasEncendidas();

			const randomFx = Math.abs(Math.round(Math.random() * this.fxhurtlist.length - 1));

			this.hurtAvailable = this.scene.sound.get(this.fxhurtlist[randomFx]); 
			if(this.hurtAvailable){
				this.fxhurtlist[randomFx].play();
			}
				
			

		}


	}
	playerStomped(player, stomp) {


		if (!stomp.body.touching.down && !player.body.touching.up) {
			this.scene.envi_stomper_01.play();
			this.dieAnimation()

		}



	}


	dieAnimation() {

		if(this.hasCoins){

			this.enemyCoins.forEach(coin => {

				coin.startTimer();
				coin.body.enable=true;
				coin.visible=true;
				coin.x = this.x;
				coin.y = this.y;
				coin.visible = true;
				//coin.body.velocity.y=-500;
				coin.body.velocity.x=Math.random()*50;

			});

			this.hasCoins = false;

		}

		this.isDead = true;
		this.body.enable = false;
		this.scene.cameras.main.flash();
		if(this.scene.game.playerData.coins > 10){
			this.scene.game.playerData.coins -= 10;
		}
	
		this.scene.coinText.text = this.scene.game.playerData.coins;

		var timeline = this.scene.tweens.createTimeline();
		timeline.add({
			targets: this,
			scale: 0.8,
			duration: 100,
			ease: 'Linear',
			repeat: 0

		});

		timeline.add({
			targets: this,
			scale: 1.2,
			duration: 100,
			ease: 'Linear',
			repeat: 0

		});
		timeline.add({
			targets: this,
			scale: 1,
			duration: 100,
			ease: 'Linear',
			repeat: 0

		});
		timeline.add({
			targets: this,
			rotation: 6.3,
			duration: 250,
			ease: 'Linear',
			repeat: 0

		});

		


		timeline.add({
			targets: this,
			y: this.y - 80,
			duration: 250,
			
			ease: 'Linear',
			repeat: 0

		});

		timeline.add({
			targets: this,
			y: this.scene.layer.height + 100,
			alpha: 0,
			delay:1000,

			duration: 450,
			ease: 'Linear',
			repeat: 0,
			callbackScope: this,
			onComplete: function () {

				this.isTouched=true;
			}

		});

		timeline.add({
			targets: this,
			alpha: 0,
			duration: 450,
			ease: 'Linear',
			repeat: 0,
			callbackScope: this,
			onComplete: function () {
				this.PowerX = 0;
				this.PowerY = 0;
				this.restartGame();
			}

		});

		timeline.play();


	}


	entryAnimation() {

		updatear(this.scene.game.playerData); //updatea db
		

		this.visible = true;
		this.setScale(0);
		this.y = this.originalY - 30;
		this.body.enable = false;
		this.scene.cameras.main.stopFollow();
		this.scene.cameras.main.flash();
		this.isSupaRolling = true;
		
		var timeline = this.scene.tweens.createTimeline();
		this.particles.visible = true;
		this.scene.supa_spawn01.play();

		timeline.add({
			targets: this,
			alpha: 0.1,
			scale: 0.1,	
			scale: 1,
			duration: 200,
			repeat: 0,
		});

		timeline.add({
			targets: this,
			alpha: 1,
			scale: 1.2,
			duration: 100,
			repeat: 0,
		});


		timeline.add({
			targets: this,
			scale: 1,
			duration: 100,
			repeat: 0,
		})

		timeline.add({
			targets: this,
			alpha: 0.5,
			duration: 80,
			repeat: 4,
			yoyo:true,
			callbackScope: this,
			onComplete: function () {
				this.isSupaRolling = false;
				
			}
		});

		timeline.add({
			targets: this,
		
			duration: 300,
			ease: 'Back',
			repeat: 0,
			callbackScope: this,
			onComplete: function () {
				this.body.enable = true;
				this.scene.cameras.main.startFollow(this, true, 0.4, 0.1);
				this.canmove = true;
			
			}

		});



		timeline.play();


	}

	playerEntrance() {

		this.playDeadSound = true;
		this.body.enable = false;

		this.scene.cameras.main.flash();

		var entranceTimeline = this.scene.tweens.createTimeline();
		entranceTimeline.add({
			targets: this,
			alpha: 1,
			y: this.originalY,
			duration: 500,
			ease: 'Linear',
			repeat: 0,
			callbackScope: this,
			onComplete: function () {
				this.body.enable = true;
			}
		});
		entranceTimeline.play();

	}

	restartGame() {

		this.scene.restartGame();
		
	}

	appearAgain(){
		this.createCoins();
		this.isDead = false;
		this.isTouched=false;
		this.x = this.originalX;
		this.y = -50;
		this.alpha = 1;
		this.body.enable = false;
		this.playerEntrance();
		updatear(this.scene.game.playerData);
	}



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
