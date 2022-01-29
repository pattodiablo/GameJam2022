
class BaseScene extends Phaser.Scene {
	
	constructor(key) {
		super(key);
		
		this.doorsEnabled = [];
		this.coinsPositions = [];
		this.emptyWalls = [];
		this.acidTiles = [];
		this.sideDoors = [];
		this.tolls = [];
		this.finalBossActiveParts = [];
		
	
	}

	

	onBlur(){
	
		this.scene.pause(); //pausa el juego
	}

	onFocus(){

		this.scene.resume(); //resume el juego
	}

	onResume(){
		//console.log("resuming");
	}

	create(){
		
		

		//console.log("level key " + this.scene.key);
		activeLeveles.push(this.scene.key);
		//console.log("active leveles " + activeLeveles);
		// this.game.events.addListener(Phaser.Core.Events.FOCUS, this.onFocus, this);
		// this.game.events.addListener(Phaser.Core.Events.BLUR, this.onBlur, this);
		this.game.events.addListener(Phaser.Core.Events.RESUME, this.onResume, this);
	

		this.physics.world.TILE_BIAS = 40;
		this.game.sound.stopAll();
		this.playerBullets = [];
		this.cannonRollPack = [];
		this.portalCannons = [];
		this.emptyWallsRack = [];
		this.acidWallsRack = [];
		this.wasMusicLaunched = false;
	
		this.wallsID = 49; //si en el mapa dice 21 entonces aca es 22
		this.coinsID = 93; //si en el mapa dice 21 entonces aca es 22
		this.emptyWallsId = 47 

		this.coinsCollected = 0;

		this.isRestartingGame = false;
	

        this.editorCreate();
		this.initColliders();
		this.initCamera();
		this.replaceTilesWithCoins();
		this.createCoins();
		this.createEmptyWalls();
		this.createAcidWalls();
		this.createPlayerBullets();
		this.initTutorials();

		this.mainDoorActive = true;
		this.isfirstMainScene = true;


		if(this.bgLevel1 !== undefined){
			console.log(this.bgLevel1);
			this.bgratio=this.cameras.main.width/this.bgLevel1.width
			this.bgLevel1.setScale(this.bgratio);
		}


		if(this.tilespriteBG !== undefined){
		
			this.tilespriteBG.width= this.layer.width;
			this.tilespriteBG.height=this.layer.height;

			if(this.scene.key=="NewLevel0" ){
		
				this.tilespriteBG.x=0
				this.tilespriteBG.y=20;
			}else{
				this.tilespriteBG.y=this.player.y+100;
			}
		
			
		}
		
		
		//MUSIC
		this.superbravo_gameplay_chip01 = this.sound.add('superbravo_gameplay_chip01');
		this.superbravo_gameplay_chip02 = this.sound.add('superbravo_gameplay_chip02');
		this.superbravo_gameplay_chip03 = this.sound.add('superbravo_gameplay_chip03');
		this.superbravo_gameplay_chip04 = this.sound.add('superbravo_gameplay_chip04');
		this.superbravo_gameplay_chip05 = this.sound.add('superbravo_gameplay_chip05');
		this.superbravo_gameplay_chip06 = this.sound.add('superbravo_gameplay_chip06');
		this.superbravo_gameplay_chip07 = this.sound.add('superbravo_gameplay_chip07');
		this.superbravo_gameplay_chip08 = this.sound.add('superbravo_gameplay_chip08');
		this.superbravo_gameplay_chip09 = this.sound.add('superbravo_gameplay_chip09');
		this.superbravo_gameplay_chip10 = this.sound.add('superbravo_gameplay_chip10');
		this.superbravo_gameplay_tutorial = this.sound.add('superbravo_gameplay_tutorial');
		this.superbravo_gameplay_finalboss2 = this.sound.add('superbravo_gameplay_finalboss2');
		
		this.supajukebox = [this.superbravo_gameplay_tutorial,this.superbravo_gameplay_chip01,this.superbravo_gameplay_chip04,this.superbravo_gameplay_chip08,this.superbravo_gameplay_chip09,this.superbravo_gameplay_chip02,this.superbravo_gameplay_chip03,this.superbravo_gameplay_chip10,this.superbravo_gameplay_chip06,this.superbravo_gameplay_finalboss2,this.superbravo_gameplay_chip05,this.superbravo_gameplay_chip07];


		this.superbravo_gameplay_chip01.loop = true;
		this.superbravo_gameplay_chip02.loop = true;
		this.superbravo_gameplay_chip03.loop = true;
		this.superbravo_gameplay_chip04.loop = true;
		this.superbravo_gameplay_chip05.loop = true;
		this.superbravo_gameplay_chip06.loop = true;
		this.superbravo_gameplay_chip07.loop = true;
		this.superbravo_gameplay_chip08.loop = true;
		this.superbravo_gameplay_chip09.loop = true;
		this.superbravo_gameplay_chip10.loop = true;
		this.superbravo_gameplay_tutorial.loop = true;
		this.superbravo_gameplay_finalboss2.loop = true;
		
		//______________________________________________________________________________________________________________________________________________________________
		
		//FX
		this.fxcontainer=[];

		this.superbravo_ready_01 = this.sound.add('superbravo_ready_01');
		this.superbravo_ready_01.loop = false;
		this.fxcontainer.push(this.superbravo_ready_01);


		this.samposhooter_damage_01 = this.sound.add('samposhooter_damage_01');
		this.samposhooter_damage_01.loop = false;
		this.fxcontainer.push(this.samposhooter_damage_01);

		

		//FX SUPA
		this.supa_voicejump_03 = this.sound.add('supa_voicejump_03');
		this.supa_voicejump_03.loop = false;
		this.fxcontainer.push(this.supa_voicejump_03);

		this.supa_voicejump_04 = this.sound.add('supa_voicejump_04');
		this.supa_voicejump_04.loop = false;
		this.fxcontainer.push(this.supa_voicejump_04);

		this.supa_voicejump_05 = this.sound.add('supa_voicejump_05');
		this.supa_voicejump_05.loop = false;
		this.fxcontainer.push(this.supa_voicejump_05);

		this.supa_death_01 = this.sound.add('supa_death_01');
		this.supa_death_01.loop = false;
		this.fxcontainer.push(this.supa_death_01);

		this.supa_spawn01 = this.sound.add('supa_spawn01');
		this.supa_spawn01.loop = false;
		this.fxcontainer.push(this.supa_spawn01);

		this.supa_voicehurt_01 = this.sound.add('supa_voicehurt_01');
		this.supa_voicehurt_01.loop = false;
		this.fxcontainer.push(this.supa_voicehurt_01);

		this.supa_voicehurt_02 = this.sound.add('supa_voicehurt_02');
		this.supa_voicehurt_02.loop = false;
		this.fxcontainer.push(this.supa_voicehurt_02);

		this.supa_doublejump_04 = this.sound.add("supa_doublejump_04");
		this.supa_doublejump_04.loop = false;
		this.fxcontainer.push(this.supa_doublejump_04);

		this.supa_doublejump_05 = this.sound.add("supa_doublejump_05");
		this.supa_doublejump_05.loop = false;
		this.fxcontainer.push(this.supa_doublejump_05);

		this.supa_doublejump_06 = this.sound.add("supa_doublejump_06");
		this.supa_doublejump_06.loop = false;
		this.fxcontainer.push(this.supa_doublejump_06);

		this.supa_pickupheart_01 = this.sound.add('supa_pickupheart_01');
		this.supa_pickupheart_01.loop = false;
		this.fxcontainer.push(this.supa_pickupheart_01);

			//JETPACK
		this.supa_jetpack_01 = this.sound.add("supa_jetpack_01");
		this.supa_jetpack_01.loop = true;
		this.fxcontainer.push(this.supa_jetpack_01);

		this.supa_jetpack_02 = this.sound.add("supa_jetpack_02");
		this.supa_jetpack_02.loop = true;
		this.fxcontainer.push(this.supa_jetpack_02);

		//FX VARIOS
		this.envi_powerupstation_01 = this.sound.add('envi_powerupstation_01');
		this.envi_powerupstation_01.loop = false;
		this.fxcontainer.push(this.envi_powerupstation_01);

		this.envi_slingshot_02 = this.sound.add('envi_slingshot_02');
		this.envi_slingshot_02.loop = false;
		this.fxcontainer.push(this.envi_slingshot_02);

		this.supa_spinpwrup_01 = this.sound.add('supa_spinpwrup_01');
		this.supa_spinpwrup_01.loop = false;
		this.fxcontainer.push(this.supa_spinpwrup_01);

		this.supa_shot_01 = this.sound.add('supa_shot_01');
		this.supa_shot_01.loop = false;
		this.fxcontainer.push(this.supa_shot_01);

		this.envi_stomper_01 = this.sound.add('envi_stomper_01');
		this.envi_stomper_01.loop = false;
		this.fxcontainer.push(this.envi_stomper_01);

		this.envi_saw_01 = this.sound.add('envi_saw_01');
		this.envi_saw_01.loop = false;
		this.fxcontainer.push(this.envi_saw_01);

		this.envi_slidewall_01 = this.sound.add('envi_slidewall_01');
		this.envi_slidewall_01.loop = false;
		this.fxcontainer.push(this.envi_slidewall_01);

		this.pwrup_arrowbite_charge_01 = this.sound.add('pwrup_arrowbite_charge_01');
		this.pwrup_arrowbite_charge_01.loop = false;
		this.fxcontainer.push(this.pwrup_arrowbite_charge_01);

		this.pwrup_arrowbite_shot_01 = this.sound.add("pwrup_arrowbite_shot_01");
		this.pwrup_arrowbite_shot_01.loop = false;
		this.fxcontainer.push(this.pwrup_arrowbite_shot_01);

		this.supa_cannon_01 = this.sound.add("supa_cannon_01");
		this.supa_cannon_01.loop = false;
		this.fxcontainer.push(this.supa_cannon_01);

		this.wdrone_shot_01 = this.sound.add("wdrone_shot_01");
		this.wdrone_shot_01.loop = false;
		this.fxcontainer.push(this.wdrone_shot_01);

		this.wdrone_lock_01 = this.sound.add("wdrone_lock_01");
		this.wdrone_lock_01.loop = false;
		this.fxcontainer.push(this.wdrone_lock_01);

		//FX COINS
		
		this.Envi_PickupCoin_05_01 = this.sound.add("Envi_PickupCoin_05_01");
		this.Envi_PickupCoin_05_01.loop = false;
		this.fxcontainer.push(this.Envi_PickupCoin_05_01);

		this.Envi_PickupCoin_05_02 = this.sound.add("Envi_PickupCoin_05_02");
		this.Envi_PickupCoin_05_02.loop = false;
		this.fxcontainer.push(this.Envi_PickupCoin_05_02);

		this.Envi_PickupCoin_05_03 = this.sound.add("Envi_PickupCoin_05_03");
		this.Envi_PickupCoin_05_03.loop = false;
		this.fxcontainer.push(this.Envi_PickupCoin_05_03);

		//FX OTHERS
		
		this.envi_proxyspike_01 = this.sound.add('envi_proxyspike_01');
		this.envi_proxyspike_01.loop = false;
		this.fxcontainer.push(this.envi_proxyspike_01);

		this.envi_grabcard01 = this.sound.add('envi_grabcard01');
		this.envi_grabcard01.loop = false;
		this.fxcontainer.push(this.envi_grabcard01);

		this.samposhooter_destroy_01 = this.sound.add('samposhooter_destroy_01');
		this.samposhooter_destroy_01.loop = false;
		this.fxcontainer.push(this.samposhooter_destroy_01);

		this.envi_slingcharge_02 = this.sound.add('envi_slingcharge_02');
		this.envi_slingcharge_02.loop = false;
		this.fxcontainer.push(this.envi_slingcharge_02);

		this.envi_leavepowerupstation_01 = this.sound.add('envi_leavepowerupstation_01');
		this.envi_leavepowerupstation_01.loop = false;
		this.fxcontainer.push(this.envi_leavepowerupstation_01);

		this.envi_error_01 = this.sound.add('envi_error_01');
		this.envi_error_01.loop = false;
		this.fxcontainer.push(this.envi_error_01);

		this.envi_success_03 = this.sound.add('envi_success_03');
		this.envi_success_03.loop = false;
		this.fxcontainer.push(this.envi_success_03);

		this.envi_monsterspawn01 = this.sound.add('envi_monsterspawn01');
		this.envi_monsterspawn01.loop = false;
		this.fxcontainer.push(this.envi_monsterspawn01);

		// cannon fx
		this.pwrup_activate_03 = this.sound.add('pwrup_activate_03');
	    this.pwrup_activate_03.loop = false;
		this.fxcontainer.push(this.pwrup_activate_03);

		//fx plataform 2
		this.envi_elevator_01 = this.sound.add('envi_elevator_01');
	    this.envi_elevator_01.loop = false;
		this.fxcontainer.push(this.envi_elevator_01);

		//fx toll
		this.envi_sideswitch_01 = this.sound.add('envi_sideswitch_01');
	    this.envi_sideswitch_01.loop = false;
		this.fxcontainer.push(this.envi_sideswitch_01);

		this.envi_sideswitch_tier01 = this.sound.add('envi_sideswitch_tier01');
	    this.envi_sideswitch_tier01.loop = false;
		this.fxcontainer.push(this.envi_sideswitch_tier01);

		this.envi_sideswitch_tier02 = this.sound.add('envi_sideswitch_tier02');
	    this.envi_sideswitch_tier02.loop = false;
		this.fxcontainer.push(this.envi_sideswitch_tier02);

		this.envi_sideswitch_tier03 = this.sound.add('envi_sideswitch_tier03');
	    this.envi_sideswitch_tier03.loop = false;
		this.fxcontainer.push(this.envi_sideswitch_tier03);

		this.envi_sideswitch_tier04 = this.sound.add('envi_sideswitch_01');
	    this.envi_sideswitch_tier04.loop = false;
		this.fxcontainer.push(this.envi_sideswitch_tier04);

		this.envi_tollerror_01 = this.sound.add('envi_tollerror_01');
	    this.envi_tollerror_01.loop = false;
		this.fxcontainer.push(this.envi_tollerror_01);

		this.envi_tollerror_02 = this.sound.add('envi_tollerror_02');
	    this.envi_tollerror_02.loop = false;
		this.fxcontainer.push(this.envi_tollerror_02);

		// egg bom
		this.eggbomb_deploy_01 = this.sound.add('eggbomb_deploy_01');
	    this.eggbomb_deploy_01.loop = false;
		this.fxcontainer.push(this.eggbomb_deploy_01);

		this.eggbomb_explotion_01 = this.sound.add('eggbomb_explotion_01');
	    this.eggbomb_explotion_01.loop = false;
		this.fxcontainer.push(this.eggbomb_explotion_01);

		// missile
		this.envi_missile_warning_01 = this.sound.add('envi_missile_warning_01');
	    this.envi_missile_warning_01.loop = false;
		this.fxcontainer.push(this.envi_missile_warning_01);

		// swich puerta
		this.envi_switch_02 = this.sound.add('envi_switch_02');
		this.fxcontainer.push(this.envi_switch_02);

		//BOSSES FX

		this.bossguard_alert01 = this.sound.add('bossguard_alert01');
		this.bossguard_alert01.loop = false;
		this.fxcontainer.push(this.bossguard_alert01);

		this.bossguard_charge01 = this.sound.add('bossguard_charge01');
		this.bossguard_charge01.loop = false;
		this.fxcontainer.push(this.bossguard_charge01);

		this.bossguard_charge02 = this.sound.add('bossguard_charge02');
		this.bossguard_charge02.loop = false;
		this.fxcontainer.push(this.bossguard_charge02);

		this.bossguard_charge03 = this.sound.add('bossguard_charge03');
		this.bossguard_charge03.loop = false;
		this.fxcontainer.push(this.bossguard_charge03);

		this.bossguard_destroy01 = this.sound.add('bossguard_destroy01');
		this.bossguard_destroy01.loop = false;
		this.fxcontainer.push(this.bossguard_destroy01);

		this.bossguard_destroy02 = this.sound.add('bossguard_destroy02');
		this.bossguard_destroy02.loop = false;
		this.fxcontainer.push(this.bossguard_destroy02);

		this.bossguard_destroy03 = this.sound.add('bossguard_destroy03');
		this.bossguard_destroy03.loop = false;
		this.fxcontainer.push(this.bossguard_destroy03);

		this.bossguard_destroy04 = this.sound.add('bossguard_destroy04');
		this.bossguard_destroy04.loop = false;
		this.fxcontainer.push(this.bossguard_destroy04);

		this.bossguard_fall01 = this.sound.add('bossguard_fall01');
		this.bossguard_fall01.loop = false;
		this.fxcontainer.push(this.bossguard_fall01);

		this.bossguard_fall02 = this.sound.add('bossguard_fall02');
		this.bossguard_fall02.loop = false;
		this.fxcontainer.push(this.bossguard_fall02);

		this.bossguard_fall03 = this.sound.add('bossguard_fall03');
		this.bossguard_fall03.loop = false;
		this.fxcontainer.push(this.bossguard_fall03);

		this.bossguard_fall04 = this.sound.add('bossguard_fall04');
		this.bossguard_fall04.loop = false;
		this.fxcontainer.push(this.bossguard_fall04);

		this.bossguard_hurt01 = this.sound.add('bossguard_hurt01');
		this.bossguard_hurt01.loop = false;
		this.fxcontainer.push(this.bossguard_hurt01);

		this.bossguard_hurt02 = this.sound.add('bossguard_hurt02');
		this.bossguard_hurt02.loop = false;
		this.fxcontainer.push(this.bossguard_hurt02);

		this.bossguard_shot01 = this.sound.add('bossguard_shot01');
		this.bossguard_shot01.loop = false;
		this.fxcontainer.push(this.bossguard_shot01);

		this.bossguard_shot02 = this.sound.add('bossguard_shot02');
		this.bossguard_shot02.loop = false;
		this.fxcontainer.push(this.bossguard_shot02);

		// FX PIRANHA
		this.piranha_bite_01 = this.sound.add('piranha_bite_01');
		this.piranha_bite_01.loop = false;
		this.fxcontainer.push(this.piranha_bite_01);

		this.piranha_bite_02 = this.sound.add('piranha_bite_02');
		this.piranha_bite_02.loop = false;
		this.fxcontainer.push(this.piranha_bite_02);

		this.piranha_jump_01 = this.sound.add('piranha_jump_01');
		this.piranha_jump_01.loop = false;
		this.fxcontainer.push(this.piranha_jump_01);

		//FX FINALBOSS

		this.finalboss_armhit_01 = this.sound.add('finalboss_armhit_01');
		this.finalboss_armhit_01.loop = false;
		this.fxcontainer.push(this.finalboss_armhit_01);

		this.finalboss_destroy_01 = this.sound.add('finalboss_destroy_01');
		this.finalboss_destroy_01.loop = false;
		this.fxcontainer.push(this.finalboss_destroy_01);

		this.finalboss_eyelaser_01 = this.sound.add('finalboss_eyelaser_01');
		this.finalboss_eyelaser_01.loop = false;
		this.fxcontainer.push(this.finalboss_eyelaser_01);

		this.finalboss_handstomp_01 = this.sound.add('finalboss_handstomp_01');
		this.finalboss_handstomp_01.loop = false;
		this.fxcontainer.push(this.finalboss_handstomp_01);

		this.finalboss_hurt_01 = this.sound.add('finalboss_hurt_01');
		this.finalboss_hurt_01.loop = false;
		this.fxcontainer.push(this.finalboss_hurt_01);

		this.finalboss_idle_01 = this.sound.add('finalboss_idle_01');
		this.finalboss_idle_01.loop = false;
		this.fxcontainer.push(this.finalboss_idle_01);

		this.finalboss_laugh_01 = this.sound.add('finalboss_laugh_01');
		this.finalboss_laugh_01.loop = false;
		this.fxcontainer.push(this.finalboss_laugh_01);

		this.finalboss_minedestroy_01 = this.sound.add('finalboss_minedestroy_01');
		this.finalboss_minedestroy_01.loop = false;
		this.fxcontainer.push(this.finalboss_minedestroy_01);

		this.finalboss_spawn_01 = this.sound.add('finalboss_spawn_01');
		this.finalboss_spawn_01.loop = false;
		this.fxcontainer.push(this.finalboss_spawn_01);

		this.finalboss_upanddown_02 = this.sound.add('finalboss_upanddown_02');
		this.finalboss_upanddown_02.loop = false;
		this.fxcontainer.push(this.finalboss_upanddown_02);

		this.finalboss_moltenrain_01 = this.sound.add('finalboss_moltenrain_01');
		this.finalboss_moltenrain_01.loop = false;
		this.fxcontainer.push(this.finalboss_moltenrain_01);

		this.finalboss_moltenrain_02 = this.sound.add('finalboss_moltenrain_02');
		this.finalboss_moltenrain_02.loop = false;
		this.fxcontainer.push(this.finalboss_moltenrain_02);

		this.finalboss_crystalcrack_01 = this.sound.add('finalboss_crystalcrack_01');
		this.finalboss_crystalcrack_01.loop = false;
		this.fxcontainer.push(this.finalboss_crystalcrack_01);
		

		//check for key
		this.game.playerData.levelsPassed.forEach(level => {
			if(level==this.scene.key){
				console.log("coincidencia")
				this.game.playerData.gotCard = true;
			}
		});


		//const shootBtn = new SupaShotBtn(this, 30, 430);
		const shootBtn = new SupaShotBtn(this, 30, this.layer.height);
		this.add.existing(shootBtn);
		this.shootBtn = shootBtn;

		//const biteBtn = new SupaBiteBtn(this, 50, 430); //es el icono del canon
		const biteBtn = new SupaBiteBtn(this, 50, this.layer.height);
		this.add.existing(biteBtn);
		this.biteBtn = biteBtn;
		this.biteBtn.depth = 11;

		const menuPanel = new MenuPanel(this, this.cameras.main.centerX, -170);
		this.add.existing(menuPanel);
			// menuPanel (prefab fields)
			menuPanel.emit("prefab-awake");
			this.menuPanel = menuPanel;

		const warning = new Warning(this, this.cameras.main.centerX, -170);
		this.add.existing(warning);
		// menuPanel (prefab fields)
		warning.emit("prefab-awake");
		this.Warning = warning;

	


		// coinDisplay
		const coinDisplay = this.add.sprite(40, 32, "coinDisplay");
		
		// text
		const coinText = this.add.text(22, 36, "", {});
		coinText.text = "0000";
		coinText.setStyle({"fontFamily":"Arial","fontSize":"16px","fontStyle":"bold","align":"center", });
		
		// coinDisplay (components)
		new FixedToCamera(coinDisplay);
		coinDisplay.emit("components-awake");
			
		// text (components)
		new FixedToCamera(coinText);
		coinText.emit("components-awake");

		// exitJetPack
		const exitJetPack = new ExitJetPackBtn(this,  this.cameras.main.width-60,  this.cameras.main.width-60);
		this.add.existing(exitJetPack);
		exitJetPack.emit("components-awake");
		this.exitJetPack =  exitJetPack;
		this.exitJetPack.visible=false;
		this.exitJetPack.depth=12;
		this.coinText = coinText;


		// lifepanel
		const lifepanel = new LifePanel(this, this.cameras.main.centerX, 30);
		this.add.existing(lifepanel);
		new FixedToCamera(lifepanel);
		this.lifepanel = lifepanel;
		lifepanel.emit("components-awake");
		

		// fuelBarFrame
		const fuelBarFrame = new FuelBar(this, this.cameras.main.centerX-80, 66);
		this.add.existing(fuelBarFrame);
		// fuelBarFrame (components)
		new FixedToCamera(fuelBarFrame);
		this.fuelBarFrame = fuelBarFrame;
		fuelBarFrame.emit("components-awake");

		// readyText (components)
		const readyText = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY, "readyText");
		new FixedToCamera(readyText);
		readyText.emit("components-awake");
		this.readyText = readyText;

			// menuBtn
			const menuBtn = new MenuBtn(this, this.cameras.main.width-30, 37);
			this.add.existing(menuBtn);
			// menuBtn (prefab fields)
		menuBtn.emit("prefab-awake");
		// menuBtn (components)
		menuBtn.emit("components-awake");
		this.menuBtn = menuBtn;

				// menuPanel

		// hasCardIcon
		const hasCardIcon = this.add.image(41, 87, "propsNew", "newCard instance 10000");	
		// hasCardIcon (components)
		new FixedToCamera(hasCardIcon);
		this.hasCardIcon = hasCardIcon;

		if(this.game.playerData.gotCard){
			this.hasCardIcon.visible=true;
		}else{
			this.hasCardIcon.visible=false;
		}

		

		this.checkSoundStatus();
		this.initLevel();

		
		this.coinText.text = this.game.playerData.coins;
		
		console.log("vces mori: "+ this.game.playerData.timesDead);
	
	
	
	}

	createTextBox(x,y,textToDisplay){

		this.textBox=createTextBox(this, x , y, {
			wrapWidth: 180,
			background:true
		})
		.start(textToDisplay, 50);


	}

	initTutorials(){

			if(this.tutorials!==undefined){

						this.tutorials.forEach(tutorial => {
							var blink = this.tweens.createTimeline();
							blink.add({
								targets: tutorial,
								y: tutorial.y+10,
								duration: 2000,
								ease: 'Linear',
								
								yoyo:true,
								
								repeat: -1

							});

							blink.play();
						});
			}


	
	}
	
	checkSoundStatus(){

		if(this.game.playerData.isFxMuted){
	
			this.disableFx();
			this.menuPanel.fxBtn.setTint(0x6d6d6d);
		}else{
			this.enableFxOnLoad();	
		}

		//console.log("is music muted " + this.game.playerData.isMusicMuted);
		if(this.game.playerData.isMusicMuted){
	
			this.disableMusic();
			this.menuPanel.musicBtn.setTint(0x6d6d6d);
		}else{
			
			this.enableMusicOnLoad();	
		}

	}

	disableFx(){
		//console.log("disabling fx");
		this.game.playerData.isFxMuted = true;
		this.fxcontainer.forEach(fx => {
			
				fx.setVolume(0);
				fx.setMute(true);

			
		});
	}

	enableFx(){

		this.game.playerData.isFxMuted = false;
		this.fxcontainer.forEach(fx => {

				fx.setVolume(1);
				fx.setMute(false);
		});
	}


	disableMusic(){
		///console.log("disabling music");
		this.game.playerData.isMusicMuted = true;
		
		this.supajukebox.forEach(song => {
			
			
			song.setVolume(0);
			song.setMute(true);
		
		});

	}

	enableMusic(){
		//console.log("enabling music");
		this.game.playerData.isMusicMuted = false;

		if(this.wasMusicLaunched){
		
			this.supajukebox.forEach(song => {
				song.setVolume(1);
				song.setMute(false);
			});
			
		}else{
			this.enableMusicOnLoad();
			
		}
		

	}

	enableMusicOnLoad(){
		console.log("estoy entrando a music on load");
		//console.log("music on load");
		//if(this.scene.key=="niveles");
		const randomFx = Math.abs(Math.round(Math.random()*this.supajukebox.length-1));
			//Math.random() * (max - min) + min;
			//this.randomFx = Math.round((Math.random()*(7-6)+6));
		
		if(this.scene.key=="NewLevel0" || this.scene.key=="NewLevel0A" || this.scene.key=="NewLevel0B" || this.scene.key=="NewLevel0C"|| this.scene.key=="NewLevel0D"){
			this.randomFx = 0;
					
		}else if(this.scene.key=="NewLevel1" || this.scene.key=="NewLevel1A" || this.scene.key=="NewLevel1B" || this.scene.key=="NewLevel1C" || this.scene.key=="NewLevel1D" || this.scene.key=="NewLevel1E" || this.scene.key=="NewLevel1F" || this.scene.key=="NewLevel1X" || this.scene.key=="NewLevel1Y" || this.scene.key=="NewLevel2" || this.scene.key=="NewLevel2A" || this.scene.key=="NewLevel2B" || this.scene.key=="NewLevel2C" || this.scene.key=="NewLevel2D" || this.scene.key=="NewLevel2E" || this.scene.key=="NewLevel2F" || this.scene.key=="NewLevel2G"){
			this.randomFx = 1;
			

		}else if(this.scene.key=="NewLevel3" || this.scene.key=="NewLevel3A" || this.scene.key=="NewLevel3B" || this.scene.key=="NewLevel3C" || this.scene.key=="NewLevel3D" || this.scene.key=="NewLevel3E" || this.scene.key=="NewLevel3F" || this.scene.key=="NewLevel3X" || this.scene.key=="NewLevel3Y" || this.scene.key=="NewLevel4" || this.scene.key=="NewLevel4A" || this.scene.key=="NewLevel4B" || this.scene.key=="NewLevel4C" || this.scene.key=="NewLevel4D"){
			this.randomFx = Math.round((Math.random()*(4-3)+3));
			

		}else if(this.scene.key=="NewLevel5" || this.scene.key=="NewLevel5A" || this.scene.key=="NewLevel5B" || this.scene.key=="NewLevel5C" || this.scene.key=="NewLevel5X" || this.scene.key=="NewLevel6" || this.scene.key=="NewLevel6A" || this.scene.key=="NewLevel6B" || this.scene.key=="NewLevel6C" || this.scene.key=="NewLevel6D"){
			this.randomFx = Math.round((Math.random()*(6-5)+5));
			
		
		}else if(this.scene.key=="NewLevel7" || this.scene.key=="NewLevel7A" || this.scene.key=="NewLevel7B" || this.scene.key=="NewLevel7C" || this.scene.key=="NewLevel7X" || this.scene.key=="NewLevel8" || this.scene.key=="NewLevel8A" || this.scene.key=="NewLevel8B" || this.scene.key=="NewLevel8C" || this.scene.key=="NewLevel8D" || this.scene.key=="NewLevel8S"){
			this.randomFx = Math.round((Math.random()*(8-7)+7));

	    }else if(this.scene.key=="NewLevel10X"){
			this.randomFx = 9;
		
		}else{
			this.randomFx = Math.round((Math.random()*(8-7)+7));
				
		}
	console.log("random fx " + this.randomFx);
		this.supajukebox[this.randomFx].play();
		
	
		this.wasMusicLaunched = true;

		this.supajukebox.forEach(song => {
			song.setVolume(1);
			song.setMute(false);
		});
		
	}

	enableFxOnLoad(){
		this.fxcontainer.forEach(fx => {

			fx.setVolume(1);
			fx.setMute(false);
		});
	}


	setSceneType(isMain){ //permite definir el tipo de escena que es si es mainScene o no para entrar con animacion de texto o no
		//console.log("definign main scene")
		this.isMainScene=isMain;
	}

	initLevel(){

		this.player.visible=false;
	
	//	this.player.PhysicsBody.enable=false;

		//console.log("is main scene " + this.isMainScene)

	if(typeof this.isMainScene == "undefined"){
			this.isMainScene = true;
	}
	if(this.isMainScene){
		this.readyText.visible=true;
		var showReadyText = this.tweens.createTimeline();
		showReadyText.add({
			targets: this.readyText,
			y: this.cameras.main.centerY-100,
			alpha:0,
			duration: 400,
			delay: 500,
			ease: 'Bounce.easeIn',
			repeat: 0,
			callbackScope: this,
			onComplete: function () {
				
				this.superbravo_ready_01.play();
			}

		});

		showReadyText.add({
			targets: this.readyText,
			alpha: 0,
			duration: 200,
			repeat: 1,
			loop: true,
			yoyo:true,
			callbackScope: this,
			onComplete: function () {
				this.player.body.enable=false;
			}
		});

		showReadyText.add({
			targets: this.readyText,
			alpha: 0,
			delay:500,
			duration: 400,
			repeat: 0,
			callbackScope: this,
			onComplete: function () {

			
	

				
				}

		});
		
		showReadyText.play();
	}else{
		this.readyText.visible=false;
		var timer = this.time.addEvent({
			delay: 1500,                // ms
			callback: function(){

		
				this.player.entryAnimation();
			},
			//args: [],
			callbackScope: this,
			loop: false
		});

			
		

	}
	

	}

	createPlayerBullets(){

		for(var i=0; i<10; i++){

			const playerBullet = new PlayerBullet(this, this.player.x, this.player.y);
			this.add.existing(playerBullet);
			playerBullet.isActive=false;
			this.playerBullets.push(playerBullet);

		}
		

	}
	iniciarMusica(){
		songLoader.start()

	}
	createCoins(){
	
		

		this.coinsPositions.forEach(function(coinPosition) {
		
			
			const coin = new Coin(this, coinPosition[0], coinPosition[1]);
			this.coins.push(coin);
			//coin.setDepth(-2);
			coin.setDepth(this.player.supaCurrentDepth-1);
			coin.alpha = 100;
			this.add.existing(coin);
			

		},this);
		
	}

	createEmptyWalls(){
	
		

		this.emptyWalls.forEach(function(wall) {
		
			
			const emptyWall = new EmptyWall(this, wall[0], wall[1]);
			emptyWall.alpha = 0;
			this.add.existing(emptyWall);
			this.emptyWallsRack.push(emptyWall);
			

		},this);
		
	}


	createAcidWalls(){
	
		

		this.acidTiles.forEach(function(wall) {
	
			
			const emptyWall = new AcidTile(this, wall[0], wall[1]);

			this.add.existing(emptyWall);
			this.acidWallsRack.push(emptyWall);
			

		},this);
		
	}


	
	replaceTilesWithCoins(){

		//console.log(this.mapa.layer.data);
		//var coins = this.mapa.createFromObjects('capa', { id: 63, classType: Coin });
		
		this.mapa.layer.data.forEach(function(tileData) { //convierto todos los dots del mapa en dots fisicos reales
			tileData.forEach(function(tileOnly) {

			
				if(tileOnly.properties.name=="coin"){ //de lo que te senala el id sumar 1

					var tilePos = [ tileOnly.x*tileOnly.width,tileOnly.y*tileOnly.height];
					this.coinsPositions.push(tilePos);					
					tileOnly.tilemapLayer.removeTileAt(tileOnly.x,tileOnly.y);

					
				}

				if(tileOnly.properties.name=="invisible"){
								
					
					var tilePos = [ tileOnly.x*tileOnly.width,tileOnly.y*tileOnly.height];
					this.emptyWalls.push(tilePos);					
					tileOnly.tilemapLayer.removeTileAt(tileOnly.x,tileOnly.y);

					
				}



				if(tileOnly.properties.name=="acid"){
								
					
					var tilePos = [ tileOnly.x*tileOnly.width,tileOnly.y*tileOnly.height];
					this.acidTiles.push(tilePos);					
					tileOnly.tilemapLayer.removeTileAt(tileOnly.x,tileOnly.y);

					
				}


				
	
			},this);
		},this);
	}

	checkElevator(){
		
		if(this.game.playerData.gotCard && this.mainDoorActive){
			if(this.door !== undefined){
			
				this.door.mainDoor.play('bigDoorOpened',true)
				
			}
			this.mainDoorActive = false;
		}
		
	}


    initCamera() {

		const cam = this.cameras.main;
		
		cam.setBounds(0, 0, this.layer.width, this.layer.height);
		cam.setRoundPixels(true);
		cam.disableCull = true; 
		
		cam.startFollow(this.player, true, 10, 10);
		//cam.clampX(this.layer.width);
	
		cam.setLerp(0.1);
		this.fadeInAndCheck();
		
	}



	initColliders() {

		
		this.mapa.setCollisionByExclusion([0, -1]);
		
		this.physics.add.collider(this.player, this.layer, this.layerCollidingCallback, null, this);
	
		this.physics.add.collider(this.enemies, this.layer);	

		this.physics.add.collider(this.player, this.platforms, this.onPlatform);
		
		this.physics.add.collider(this.playerBullets, this.enemies, this.hitEnemy);	
		this.physics.add.collider(this.enemies, this.platforms);	
		
		this.physics.add.overlap(this.player, this.enemies, this.touchingEnemy);
	}

	hitEnemy(bullet,enemy){
	
		bullet.visible=false;

		if(bullet.isActive){
			enemy.enemyLife--;
			bullet.isActive = false;
			enemy.samposhooter_damage_01.play();
		}
		
		if(enemy.enemyLife<=0){
			enemy.body.enable=false;
			enemy.destroySequence();
		}
	
		
	}

	hitEnemyWithJetpack(bullet,enemy){
	

	
			enemy.enemyLife--;
		
			enemy.samposhooter_damage_01.play();
		
		
		if(enemy.enemyLife<=0){
			enemy.body.enable=false;
			enemy.destroySequence();
		}

		
	}


	layerCollidingCallback(player, tile){
	
		if(tile.properties.name == "speed"){
			player.wallCollision();
		}
	}

	onPlatform(player, platform){
		
		if(platform.name=="Elevator"){
			
			platform.goingUp();
		}
		
		player.overPlatform = true;
		player.wasOnPlatform = true;
		
		
		
	}

	touchingEnemy(player,enemy){

	
			if(enemy.name !=="AngrySpin"){
					player.playerhurt(player,enemy);
			}else{
				if(enemy.spiking){
					player.playerhurt(player,enemy);
				}
			}
	
	}

	enableDoorID(doorId){
	
		this.doorsEnabled.push(doorId);
		this.doors.forEach(function(aDoorID){ //por cada puerta activada
			
			if(aDoorID.doorID == doorId){ //si es que el ID de esta puerta esta en lista entonces le activa
				aDoorID.pointerDown.visible = true;
				aDoorID.smallDoor.play("newSmallDoorOpened", true);
			}
		},this);

	}

	fadeInAndCheck(){


		
		this.cameras.main.fadeIn(2000);
		this.cameras.main.once('camerafadeincomplete', function () {	

		this.player.willEnterdoor = false;	
		this.player.body.enable = true;
		this.lifepanel.calcularBarrasEncendidas();
		//console.log(this.scene.key);
		this.game.playerData.level = this.scene.key;

		updatear(this.game.playerData); //updatea db
		
			}, this);

		
	}

	createMisileAlert(yPos, misile){
		// alertInstance
		if(misile.scaleX>0){
			var xAlertPos = this.cameras.main.scrollX + 300;
		}else{
			var xAlertPos = this.cameras.main.scrollX+30;
		}
		
		var alertInstance = new AlertSign(this, xAlertPos, yPos);
		this.add.existing(alertInstance);
		alertInstance.emit("prefab-awake");
		alertInstance.initAnimaion(misile);

	}


	restartGame() {

		if(!this.isRestartingGame){
			this.gotoLevel = this.scene.key;
			this.isRestartingGame=true;
			this.cameras.main.fadeOut(1000);

			this.player.body.enable = false;

				
		
			this.cameras.main.once('camerafadeoutcomplete', function (camera) {	
			
				
					this.scene.remove(this.scene.keys);
					var sceneToGo = this.scene.get("gameOverScene");
				
					sceneToGo.setLevel(this.gotoLevel ,1,1,0,0,false); //nombre de la escena a cargar, casillero en el mapa para trasladarse y casillero donde debe partir
					sceneToGo.isMainScene = false;

					
			

					activeLeveles.forEach(level => {
						this.scene.remove(level)
					});

					activeLeveles=[];
					this.scene.start("gameOverScene");


			},this);

		}
		
		
	}


	update(){
	
		this.checkElevator();
	

		if(this.launchMusic){
			this.iniciarMusica();
			this.launchMusic = false;
		}
		
	}
	
}
