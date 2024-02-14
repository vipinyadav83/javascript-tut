// const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach((item) => {
//      console.log(item);
//      return item
// });
// console.log(values);
const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((nums) =>{
//     return nums>4
// })
// console.log(newNums);

//other method

/*const newNums = []

myNums.forEach((nums) =>{
    if(nums>4){
        console.log(nums);
    }
})*/

const data= [
{
"id": 1,
"employee_name": "Tiger Nixon",
"employee_salary": 320800,
"employee_age": 61,
"profile_image": ""
},
{
"id": 2,
"employee_name": "Garrett Winters",
"employee_salary": 170750,
"employee_age": 63,
"profile_image": ""
},
{
"id": 3,
"employee_name": "Ashton Cox",
"employee_salary": 86000,
"employee_age": 59,
"profile_image": ""
},
{
"id": 4,
"employee_name": "Cedric Kelly",
"employee_salary": 433060,
"employee_age": 22,
"profile_image": ""
},
{
"id": 5,
"employee_name": "Airi Satou",
"employee_salary": 162700,
"employee_age": 59,
"profile_image": ""
},
{
"id": 6,
"employee_name": "Brielle Williamson",
"employee_salary": 372000,
"employee_age": 61,
"profile_image": ""
},
{
"id": 7,
"employee_name": "Herrod Chandler",
"employee_salary": 137500,
"employee_age": 59,
"profile_image": ""
}
];

let ab = data.filter((gh) => gh.employee_age ===59)
   ab = data.filter((ak) => {
    return ak.id>=5
})
console.log(ab)
