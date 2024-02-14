//stack memory and heap memory
let name ="vipin";
let as = name
console.log(as);
as = "yadav"
console.log(as);
name= "gjh"
console.log(as);
console.log(name);

let oneNam = {
    ab : "ghgf",
    bv : "lkhkh"
}
let twoNam = oneNam
twoNam.ab = "gdswudhuh"
twoNam.bv = "fcirweiofgv"
console.log(twoNam.ab);
console.log(twoNam.bv);
console.log(oneNam.ab);
console.log(oneNam.bv);