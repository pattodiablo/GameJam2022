
// You can write more code here

/* START OF COMPILED CODE */

class Player extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "playerAnimations", frame ?? "idle instancia 10000");

		// this (components)
		const thisPhysics = new Physics(this);
		thisPhysics.bodyGravity = 500;
		const thisPhysicsBody = new PhysicsBody(this);
		thisPhysicsBody.bodyX = 6;
		thisPhysicsBody.bodyY = 5;
		thisPhysicsBody.bodyWidth = 25;
		thisPhysicsBody.bodyHeight = 25;
		const thisStartAnimation = new StartAnimation(this);
		thisStartAnimation.animationKey = "idlePlayer";

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
		this.play("idlePlayer", true);
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



									this.play("idlePlayer", true);

							
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

	
	
	


	updatePlayer() {


	


	}

	

	restartGame() {

		this.scene.restartGame();

	}




	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
