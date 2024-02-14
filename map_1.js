// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United State of America")
// map.set('Fr',"France")
// console.log(map);
// for (const [key, value] of map) {
//     console.log([key,':-', value]);
// }

const myNumber = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNumber.map((mp) => (mp+10))
const newNum = myNumber.map((mp) => {
    return mp+10
    })
console.log(newNum)
