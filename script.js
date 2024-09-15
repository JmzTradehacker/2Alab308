
const radius = 5
const PI = 3.1415;
const minSpace = 0.8;
const initialPlants = 20;
const area = PI * radius * radius;
const maxCapacity = area / minSpace;
const week1 = 0;
const week2 = 1;
const week3 = 2;

// Plant growth predictions
let totalPlants1 = initialPlants * (2 ** week1);
let totalPlants2 = initialPlants * (2 ** week2);
let totalPlants3 = initialPlants * (2 ** week3);
let plantsArea = totalPlants * 0.8;

// Thresholds
const eighty = maxCapacity * 0.8;
const fifty = maxCapacity * 0.5;



console.log("\nWeek 1:");
console.log("Number of plants:", totalPlants1);
if (totalPlants1 > eighty) {
  console.log("Prune the plants to stop them from exceeding the capacity of the garden.");
} else if (totalPlants1 >= fifty && totalPlants1 <= eighty) {
  console.log("Monitor the plants; they are growing at an acceptable rate.");
} else {
  console.log("Plant more plants; there is room to plant more.");
}

console.log("\nWeek 2:");
console.log("Number of plants:", totalPlants2);
if (totalPlants2 > eighty) {
  console.log("Prune the plants to stop them from exceeding the capacity of the garden.");
} else if (totalPlants2 >= fifty && totalPlants2 <= eighty) {
  console.log("Monitor the plants; they are growing at an acceptable rate.");
} else {
  console.log("Plant more plants; there is room to plant more.");
}

console.log("\nWeek 3:");
console.log("Number of plants:", totalPlants3);
if (totalPlants3 > eighty) {
  console.log("Prune the plants to stop them from exceeding the capacity of the garden.");
} else if (totalPlants3 >= fifty && totalPlants3 <= eighty) {
  console.log("Monitor the plants; they are growing at an acceptable rate.");
} else {
  console.log("Plant more plants; there is room to plant more.");
}