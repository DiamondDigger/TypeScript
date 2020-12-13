interface Person {
    name: string 
    age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

type User = {
    _is: number
    name: string
    email: string
    createdAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, 'id' | 'createdAt'> // 'name' | 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>

const user1: UserKeysNoMeta1 = 'name'
const user2: UserKeysNoMeta1 = 'email'

const user3: UserKeysNoMeta2 = {name: '', email: ''}