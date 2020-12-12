class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`
    }
}

class Car {
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(theModel: string){
        this.model = theModel
    }
}

class AnotherCar {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {}
}

//--------------->

class Animal {
    protected voice: string = ''
    public color: string = 'black'

    private go() {
        console.log('Go');
    }
}

class Cat extends Animal{
    public setVoice(voice: string): void{
        this.voice = voice
    }
}

const kingOfAnimals = new Animal()
console.log('King color is ', kingOfAnimals.color);


const cat = new Cat()
cat.color = 'brown'
cat.setVoice('test Miayyy..mhhrrr')
console.log('Cat color is ', cat.color);

//-------------> 

abstract class Component {
    abstract render(): void
    abstract info(): string 
}

class ButtonComponent extends Component {
    render(): void {
        console.log('Component render method')
    }

    info(): string {
        return 'This is info method: some main info about the component'
    }
}

const button = new ButtonComponent()
button.render()
console.log(button.info())