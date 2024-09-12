const R = 5
const PI = 3.1415;
const area = PI * R * R;
const minSpace = 0.8;
let week = 2;
let plants = 20;

if (week > 0 ) {
    let week = plants * area * minSpace;
    console.log(week); 
} else if (week === 2){
    let week1 = (plants * area * minSpace) * 2;
    console.log(week1);
} else {
    console.log("invalid")
}