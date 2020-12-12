const message: string = 'hello world'
console.log(message)

let trueValue: boolean = true
const falseValue: boolean = false

let intNumber: number = 23

trueValue = false

//array
const numberArray: number[] = [1,2,3,4,5,6]
const numberArray2: Array<number> = [1,2,3,4,5,6]

const words: string[] = ['Hello', 'TypeScript']

//Tuple
const contact: [string, number] = ['Boses', 12345]

//any
let variable: any = 45
variable = 'fdg'


//void
function sayMyName(name: string): void{
    console.log(name)
}
sayMyName('Billy')

//never
function throwError(message: string): never{
    throw new Error(message)
}

throwError('What a fuck man?? Stop doing this!')

//type
type Login = string 
const admin: Login = 'admin'

type ID = string | number

const id1: ID = 2
const id2: ID = "three"