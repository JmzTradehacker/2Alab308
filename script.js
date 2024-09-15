
const radius = 5
const PI = 3.1415;
const minSpace = 0.8;
const initialPlants = 20;
const area = PI * radius * radius;
let week = 0;


// Plant growth predictions
let totalPlants = initialPlants * (2 ** week);
let plantsArea = totalPlants * 0.8;


// Thresholds
const eighty = area * 0.8;
const fifty = area * 0.5;



console.log("Week 1:");
console.log("Number of plants:", totalPlants);
if (plantsArea > eighty) {
  console.log("Prune the plants to stop them from exceeding the capacity of the garden.");
} else if (plantsArea >= fifty) {
  console.log("Monitor the plants; they are growing at an acceptable rate.");
} else {
  console.log("Plant more plants; there is room to plant more.");
}

week++;
totalPlants = initialPlants * (2 ** week);
plantsArea = totalPlants * 0.8;
console.log("Week 2:");
console.log("Number of plants:", totalPlants);
if (plantsArea > eighty) {
  console.log("Prune the plants to stop them from exceeding the capacity of the garden.");
} else if (plantsArea >= fifty) {
  console.log("Monitor the plants; they are growing at an acceptable rate.");
} else {
  console.log("Plant more plants; there is room to plant more.");
}
week++;
totalPlants = initialPlants * (2 ** week);
plantsArea = totalPlants * 0.8;
console.log("Week 3:");
console.log("Number of plants:", totalPlants);
if (plantsArea > eighty) {
  console.log("Prune the plants to stop them from exceeding the capacity of the garden.");
} else if (plantsArea >= fifty) {
  console.log("Monitor the plants; they are growing at an acceptable rate.");
} else {
  console.log("Plant more plants; there is room to plant more.");
}



//Part 2
console.log("Part 2 with 100 plants")
const initialPlants2 = 100;

// Calculating the number of plants after 10 weeks
const week10 = initialPlants2 * Math.pow(2, 10);
  console.log("Number of plants after 10 weeks:", week10);

// Calculating the required space
const requiredSpace = week10 * minSpace;
  console.log("Required space after 10 weeks:", requiredSpace, "square meters");

// Calculating the additional space required
const additionalSpaceRequired = requiredSpace - area;
  console.log("Additional space required:", additionalSpaceRequired.toFixed(2), "square meters");

// Calculating the new radius of the expanded garden
const newRadius = Math.sqrt(requiredSpace / PI);
  console.log("New radius of the expanded garden:", newRadius.toFixed(2), "meters");