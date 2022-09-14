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
        this.load.image(['alonso', 'bottas', 'checo', 'gasly', 'hamilton', 'leclerc', 'ricciardo', 'sainz', 'verstappen', 'russell', 'pista2', 'back','ganaste']);
        this.load.audio('Theme', ['./Theme.mp3']);
        this.load.audio('voltear', ['./voltear.wav']);
        this.load.audio('pasar', ['./pop.mp3']);
        this.load.audio('motor', ['./motorSound.mp3']);
    }
    create() {
        //CONTADORES
        let contador = 0;
        this.aciertos = 10;
        //BANDERAS
        this.ganasteB=false;
        //TIMER
        let timedEvent;
        //TEXTO PUNTAJE
        this.text = this.add.text(450,2,'',{fontFamily: 'Consolas',color: 'black',fontSize: '30px'})
        .setDepth(10);
        //ARREGLO QUE GUARDA TARJETAS DESCUBIERTAS
        let cardsInGame = [];
        //CONSTANTE 
        const eventos = Phaser.Input.Events;
        //MÚSICA DE FONDO
        this.music = this.sound.add('Theme', {loop: true, volume: 0.08});
        this.music.play();
        //MÚSICA VOLTEAR TARJETA
        this.voltear = this.sound.add('voltear', {loop:false,volume: 0.3}); 
        //MÚSICA PASAR SOBRE TARJETA
        this.pasar = this.sound.add('pasar', {loop:false,volume: 0.3});
        //MÚSICA GANAR
        this.motor = this.sound.add('motor', {loop:false,volume: 0.3});
        //this.motor.play();
        //FONDO
        this.fondo = this.add.image(625, 500, "pista2");
        this.fondo.setOrigin(0.5,0.5);  
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
        //CUBIERTAS DE TARJETAS
        this.backAlonso = this.add.image(875, 600, "back").setInteractive();
        this.backBottas = this.add.image(375, 150, "back").setInteractive();
        this.backCheco = this.add.image(625, 150, "back").setInteractive();
        this.backGasly = this.add.image(875, 150, "back").setInteractive();
        this.backHamilton = this.add.image(1125, 150, "back").setInteractive();
        this.backLeclerc = this.add.image(125, 375, "back").setInteractive();
        this.backRicciardo = this.add.image(375, 375, "back").setInteractive();
        this.backRussell = this.add.image(625, 375, "back").setInteractive();
        this.backSainz = this.add.image(875, 375, "back").setInteractive();
        this.backVerstappen = this.add.image(125, 600, "back").setInteractive();
        this.backAlonso2 = this.add.image(375, 825, "back").setInteractive();
        this.backBottas2 = this.add.image(625, 600, "back").setInteractive();
        this.backCheco2 = this.add.image(875, 825, "back").setInteractive();
        this.backGasly2 = this.add.image(125, 150, "back").setInteractive();
        this.backHamilton2 = this.add.image(1125, 825, "back").setInteractive();
        this.backLeclerc2 = this.add.image(1125, 375, "back").setInteractive();
        this.backRicciardo2 = this.add.image(125, 825, "back").setInteractive();
        this.backRussell2 = this.add.image(375, 600, "back").setInteractive();
        this.backSainz2 = this.add.image(625, 825, "back").setInteractive();
        this.backVerstappen2 = this.add.image(1125, 600, "back").setInteractive();
        this.backAlonso.name = "Alonso";
        this.backBottas.name = "Bottas";
        this.backCheco.name = "Checo";
        this.backGasly.name = "Gasly";
        this.backHamilton.name = "Hamilton";
        this.backLeclerc.name = "Leclerc";
        this.backRicciardo.name = "Ricciardo";
        this.backRussell.name = "Russell";
        this.backSainz.name = "Sainz";
        this.backVerstappen.name = "Verstappen";
        this.backAlonso2.name = "Alonso";
        this.backBottas2.name = "Bottas";
        this.backCheco2.name = "Checo";
        this.backGasly2.name = "Gasly";
        this.backHamilton2.name = "Hamilton";
        this.backLeclerc2.name = "Leclerc";
        this.backRicciardo2.name = "Ricciardo";
        this.backRussell2.name = "Russell";
        this.backSainz2.name = "Sainz";
        this.backVerstappen2.name = "Verstappen";
        //IMAGEN DE GANADOR
        this.ganaste = this.add.image(650, 400, "ganaste").setInteractive() 
        .setOrigin(0.5,0.5).setAlpha(0); 
        //ARREGLO QUE GUARDA LAS CUBIERTAS DE TARJETAS
        let cardsBack = [this.backAlonso, this.backBottas, this.backCheco, this.backGasly, this.backHamilton, this.backLeclerc, this.backRicciardo, this.backRussell, this.backSainz, this.backVerstappen, this.backAlonso2, this.backBottas2, this.backCheco2, this.backGasly2, this.backHamilton2, this.backLeclerc2, this.backRicciardo2, this.backRussell2, this.backSainz2, this.backVerstappen2];
        //FUNCIÓN QUE MODIFICA EL TAMAÑO Y ORIGEN DE LAS CUBIERTAS
        for (let card of cardsBack){
            card.setDisplaySize(200,200);
            card.setOrigin(0.5,0.5);
        }
        this.alonso.setOrigin(0.5,0.5);
        this.bottas.setOrigin(0.5,0.5);
        this.checo.setOrigin(0.5,0.5);
        this.gasly.setOrigin(0.5,0.5);
        this.hamilton.setOrigin(0.5,0.5);
        this.leclerc.setOrigin(0.5,0.5);
        this.ricciardo.setOrigin(0.5,0.5);
        this.russell.setOrigin(0.5,0.5);
        this.sainz.setOrigin(0.5,0.5);
        this.verstappen.setOrigin(0.5,0.5);
        this.alonso2.setOrigin(0.5,0.5);
        this.bottas2.setOrigin(0.5,0.5);
        this.checo2.setOrigin(0.5,0.5);
        this.gasly2.setOrigin(0.5,0.5);
        this.hamilton2.setOrigin(0.5,0.5);
        this.leclerc2.setOrigin(0.5,0.5);
        this.ricciardo2.setOrigin(0.5,0.5);
        this.russell2.setOrigin(0.5,0.5);
        this.sainz2.setOrigin(0.5,0.5);
        this.verstappen2.setOrigin(0.5,0.5);

        //EVENTO PARA GIRAR TARJETAS
        this.input.on(eventos.GAMEOBJECT_DOWN,(event,gameObject)=>{
            if(cardsBack.includes(gameObject)){
                contador += 1;
                cardsInGame.push(gameObject);
                if(contador <= 2){
                    gameObject.setAlpha(0);
                    if(contador == 2){
                        timedEvent = this.time.delayedCall(1000, verificarMatch, [], this);
                        //verificarMatch();
                    }        
                }
                this.voltear.play();
            }
        });       
        //EVENTO PARA MANEJAR EFECTO AL PASAR SOBRE LAS TARJETAS
        this.input.on(eventos.GAMEOBJECT_OVER,(event,gameObject)=>{
            if(cardsBack.includes(gameObject)){
                this.pasar.play();
                gameObject.setScale(0.22);
            }
        });
        //EVENTO PARA MANEJAR EFECTO AL SALIR LAS TARJETAS
        this.input.on(eventos.GAMEOBJECT_OUT,(event,gameObject)=>{
            if(cardsBack.includes(gameObject)){
                gameObject.setDisplaySize(200,200);
            }
        });

        //FUNCIÓN PARA VERIFICAR MATCH
        let verificarMatch = function(){
            if (cardsInGame[0].name == cardsInGame[1].name) {
                console.log('match')
                this.aciertos += 1;
                for (let i = 0; i < cardsBack.length; i++) {
                    if (cardsBack[i] == cardsInGame[0]) {
                        cardsBack.splice(i, 1)
                    }
                }
                for (let i = 0; i < cardsBack.length; i++) {
                    if (cardsBack[i] == cardsInGame[1]) {
                        cardsBack.splice(i, 1)
                        console.log("soy tarjetas ->", cardsBack)
                    }
                }                
                for (let card of cardsBack) {
                    card.setAlpha(1)
                    contador = 0
                }
                cardsInGame = []
            }
            else {
                //console.log(cardsInGame[0].name, cardsInGame[1].name)
                for (let card of cardsBack) {
                    card.setAlpha(1)
                    contador = 0
                    console.log("no match")
                }
                cardsInGame = []
            }
        };
        //TEXTO DE PUNTUACIÓN
        this.puntaje = function(){
            this.text.text =
                `PUNTAJE    ACIERTOS:${this.aciertos}`;
        }
    }

    update(time, delta) {
        this.puntaje();
        if(this.aciertos == 10 && this.ganasteB == false){
            this.ganasteB = true;
            this.fondo.setDepth(5);
            this.music.stop();
            this.ganaste.setAlpha(1).setDepth(6);
            this.motor.play();
        }
    }
}

export default Bootloader;