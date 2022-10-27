// remove a false value from a array

const arrayValue = [1,false, 2, NaN, undefined, 0, null,2,26]

let array = arrayValue.filter(Boolean)
let array2 = arrayValue.filter(function(element){return element && true ;})
console.log(array2)
console.log(array)

//convart any value in boolian
console.log(!!'first')

//resizing any array
let animals = [1,2,3,4,5,6,7,8,9]
let a = animals.length = 3
console.log(animals )

//how to flat a multi-dimantional array
let multiarray = [1,[2,3],4,[5,6],7,8,9,5,3,4,[5,4,[5,2],4,5,2,3]]

console.log(multiarray.flat(Infinity))

// short conditional
const captiain = 'mashrafy'
console.log(captiain==='mashrafy' && 'nice')
console.log(' short conditional',captiain==='mashrafy' || 'nice')

//replace all occurance  of a string
const quote = "React is a framework and this framework is the most popular front end framework right now "

console.log(quote.replace(/framework/g,'library'))

//know performance of a task

const start = performance.now();

for(let i=0;i<=10000; i++){
console.log(i)
}
const end = performance.now();
console.log(end-start)


















// const a = 'amar sonar bangla ame tomai valobashe'

// const spliting = (v)=>{
//     return v.split(' ')
    
// }
// console.log(spliting(a))