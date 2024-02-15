// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United State of America")
// map.set('Fr',"France")
// console.log(map);
// for (const [key, value] of map) {
//     console.log([key,':-', value]);
// }

//const myNumber = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNumber.map((mp) => (mp+10))
// const newNum = myNumber
//      .map((num) => num+10)
//      .map((num) => num*10)
//      .filter((num) => num>=160)

// console.log(newNum)

//reduce funtion
//const myNums = [1,2,3]
//normal method of reduce
/*const  myTotal = myNums.reduce( function(acc,currval) {
    console.log(`acc : ${acc} and currval : ${currval}`);
    return acc+currval;
}, 3)*/

//with fat arrow functon
/*const  myTotal = myNums.reduce((acc,currval) => {
    console.log(`acc : ${acc} and currval : ${currval}`);
    return acc+currval;
}, 3)
console.log(myTotal);*/

//smal project example
/*const shoppingCart= [
    {
    "id": 1,
    "employee_name": "Tiger Nixon",
    "employee_salary": 320
    },
    {
    "id": 2,
    "employee_name": "Garrett Winters",
    "employee_salary": 170
    },
    {
    "id": 3,
    "employee_name": "Ashton Cox",
    "employee_salary": 860
    },
    {
    "id": 4,
    "employee_name": "Cedric Kelly",
    "employee_salary": 433
    },
    {
    "id": 5,
    "employee_name": "Airi Satou",
    "employee_salary": 162
    },
    {
    "id": 6,
    "employee_name": "Brielle Williamson",
    "employee_salary": 372
    },
    {
    "id": 7,
    "employee_name": "Herrod Chandler",
    "employee_salary": 137
    }
    ];*/

    /*const priceSalary = shoppingCart.reduce((acc,curval) => {
       // console.log(acc);
        return acc+curval.employee_salary
    },0)
    console.log(priceSalary);*/

    
