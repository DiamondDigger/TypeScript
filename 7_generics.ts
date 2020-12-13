const arrayOfNumber: Array<number> = [1,2,3,4,5,6]
const arrayOfStrings: Array<string> = ['Hello', 'Man']

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(arrayOfNumber)
reverse(arrayOfStrings)

arrayOfNumber.forEach((item) => console.log(item))
arrayOfStrings.forEach((item) => console.log(item))
