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
        this.load.image(['yoshif', 'yoshi']);
    }

    createOLD() {
        // this.yoshi = this.add.image(100, 100, 'yoshi');
        this.yoshi = this.add.image(100, 100, "yoshi").setInteractive(); //atributo
        this.yoshif = this.add.image(100, 200, "yoshif").setInteractive(); //atributo
        this.yoshi.setOrigin(0.5,0.5);
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
        this.yoshi = this.add.image(100, 100, "yoshi");
        const eventos = Phaser.Input.Events;
        const teclado = Phaser.Input.Keyboard;
        this.input.on(eventos.POINTER_DOWN, () => {
        this.input.mouse.requestPointerLock();
        });
        this.input.keyboard.addKey(teclado.KeyCodes.A).on('down', () => {
        this.input.mouse.releasePointerLock();
        });
        this.input.on(eventos.POINTER_MOVE, (evento) => {
        if (this.input.mouse.locked) {
        this.yoshi.x += evento.movementX;
        this.yoshi.y += evento.movementY;
        }
        });
    }

    update(time, delta) {
        
    }
}

export default Bootloader;