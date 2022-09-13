class Bootloader extends Phaser.Scene{
    constructor(){
        super({
            key: 'Bootloader'
        });
    }

    init() {
        console.log('Escena Bootloader');
    }
    
    preload() {
        this.load.path = './assets/';
        // this.load.image(['yoshif', 'yoshi']);
        this.load.image(['alonso', 'bottas', 'checo', 'gasly', 'hamilton', 'leclerc', 'ricciardo', 'sainz', 'verstappen', 'russell', 'pista2', 'back']);
        this.load.audio('Theme', ['./music/Theme.mp3']);
    }

    createOLD() {
        // this.yoshi = this.add.image(100, 100, 'yoshi');
        // this.yoshi = this.add.image(100, 100, "yoshi").setInteractive(); //atributo
        // this.yoshif = this.add.image(100, 200, "yoshif").setInteractive(); //atributo
        // this.yoshi.setOrigin(0.5,0.5);
        // this.yoshi.setOrigin(1,1);
        const eventos = Phaser.Input.Events;
        // console.log(eventos);
        this.input.on(eventos.POINTER_DOWN, (evento) => {
            // console.log("Se ha hecho clic en el canvas");
            // console.log(evento);
        });
        this.input.on(eventos.POINTER_UP, (evento) => {
            // console.log("Se ha soltado el clic en el canvas");
        });
        // this.input.on(eventos.POINTER_MOVE, (evento) => {
        //     console.log("Se ha movido el puntero sobre el canvas");
        // });
        // this.input.on(eventos.POINTER_MOVE, (evento) => {
        //     this.yoshi.x = evento.worldX;
        //     this.yoshi.y = evento.worldY;
        // });
        this.input.on(eventos.POINTER_MOVE, (evento) => {
            if (evento.isDown)
            {
                this.yoshi.x = evento.worldX;
                this.yoshi.y = evento.worldY;
            }
        });
        this.input.on(eventos.GAME_OVER, (evento) => {
            // console.log("Has entrado en el canvas");
        });
        this.input.on(eventos.GAME_OUT, (evento) => {
            // console.log("Has salido del canvas");
        });
        this.input.on(eventos.POINTER_DOWN_OUTSIDE, (evento) => {
            // console.log("Has hecho clic fuera del canvas");
        });
            this.input.on(eventos.POINTER_UP_OUTSIDE, (evento) => {
            // console.log("Has soltado el clic fuera del canvas");
        });

        // this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, gameObject) => {
        //     console.log(pointer);
        //     console.log(gameObject);
        //     gameObject.setTint(0x00ff00);
        // });
        // this.input.on(eventos.GAMEOBJECT_UP, (pointer, gameObject) => {
        //     gameObject.clearTint();
        // });
        // this.input.on(eventos.GAMEOBJECT_OVER, (pointer, gameObject) => {
        //     gameObject.setTint(0x0000ff);
        // });
        //     this.input.on(eventos.GAMEOBJECT_OUT, (pointer, gameObject) => {
        //     gameObject.clearTint();
        // });
        this.yoshif.on(eventos.POINTER_DOWN, function() {
            this.setTint(0x0000ff);
        });
        this.yoshif.on(eventos.POINTER_UP, function() {
            this.clearTint();
        });
    }
    create() {
        const eventos = Phaser.Input.Events;
        //FONDO
        this.fondo = this.add.image(625, 500, "pista2");
        this.fondo.setOrigin(0.5,0.5)
        //TARJETAS DE MEMORAMA
        this.alonso = this.add.image(875, 600, "alonso").setInteractive();
        this.bottas = this.add.image(375, 150, "bottas").setInteractive();
        this.checo = this.add.image(625, 150, "checo").setInteractive();
        this.gasly = this.add.image(875, 150, "gasly").setInteractive();
        this.hamilton = this.add.image(1125, 150, "hamilton").setInteractive();
        this.leclerc = this.add.image(125, 375, "leclerc").setInteractive();
        this.ricciardo = this.add.image(375, 375, "ricciardo").setInteractive();
        this.russell = this.add.image(625, 375, "russell").setInteractive();
        this.sainz = this.add.image(875, 375, "sainz").setInteractive();
        this.verstappen = this.add.image(125, 600, "verstappen").setInteractive();
        this.alonso2 = this.add.image(375, 825, "alonso").setInteractive();
        this.bottas2 = this.add.image(625, 600, "bottas").setInteractive();
        this.checo2 = this.add.image(875, 825, "checo").setInteractive();
        this.gasly2 = this.add.image(125, 150, "gasly").setInteractive();
        this.hamilton2 = this.add.image(1125, 825, "hamilton").setInteractive();
        this.leclerc2 = this.add.image(1125, 375, "leclerc").setInteractive();
        this.ricciardo2 = this.add.image(125, 825, "ricciardo").setInteractive();
        this.russell2 = this.add.image(375, 600, "russell").setInteractive();
        this.sainz2 = this.add.image(625, 825, "sainz").setInteractive();
        this.verstappen2 = this.add.image(1125, 600, "verstappen").setInteractive();
        this.back = this.add.image(125, 150, "back").setInteractive();
        this.back2 = this.add.image(375, 150, "back").setInteractive();

        this.alonso.setOrigin(0.5,0.5)
        this.bottas.setOrigin(0.5,0.5)
        this.checo.setOrigin(0.5,0.5)
        this.gasly.setOrigin(0.5,0.5)
        this.hamilton.setOrigin(0.5,0.5)
        this.leclerc.setOrigin(0.5,0.5)
        this.ricciardo.setOrigin(0.5,0.5)
        this.russell.setOrigin(0.5,0.5)
        this.sainz.setOrigin(0.5,0.5)
        this.verstappen.setOrigin(0.5,0.5)
        this.alonso2.setOrigin(0.5,0.5)
        this.bottas2.setOrigin(0.5,0.5)
        this.checo2.setOrigin(0.5,0.5)
        this.gasly2.setOrigin(0.5,0.5)
        this.hamilton2.setOrigin(0.5,0.5)
        this.leclerc2.setOrigin(0.5,0.5)
        this.ricciardo2.setOrigin(0.5,0.5)
        this.russell2.setOrigin(0.5,0.5)
        this.sainz2.setOrigin(0.5,0.5)
        this.verstappen2.setOrigin(0.5,0.5)
        this.back.setOrigin(0.5,0.5)
        this.back2.setOrigin(0.5,0.5)
        this.back.setDisplaySize(200,200)
        this.back2.setDisplaySize(200,200)

        this.music = this.sound.add('Theme', {loop: true, volume: 0.1});
        // this.music.play() 
        

        this.back.on(eventos.POINTER_DOWN, function() {
            this.setAlpha(0)
        });

        this.back2.on(eventos.POINTER_DOWN, function() {
            this.setAlpha(0)
        });


        // const eventos = Phaser.Input.Events;
        // const teclado = Phaser.Input.Keyboard;
        // this.input.on(eventos.POINTER_DOWN, () => {
        // this.input.mouse.requestPointerLock();
        // });
        // this.input.keyboard.addKey(teclado.KeyCodes.A).on('down', () => {
        // this.input.mouse.releasePointerLock();
        // });
        // this.input.on(eventos.POINTER_MOVE, (evento) => {
        // if (this.input.mouse.locked) {
        // this.yoshi.x += evento.movementX;
        // this.yoshi.y += evento.movementY;
        // }
        // });
    }

    update(time, delta) {
        
    }
}

export default Bootloader;