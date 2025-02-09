const x = 2;
const y = -3;
const z = 5;

if (x > 0 && y > 0 && z > 0) {
    console.log("The sign is +");
} else if (x < 0 && y < 0 && z < 0) {
    console.log("The sign is -");
} else if (x > 0 && y < 0 && z < 0) {
    console.log("The sign is +");
} else if (x < 0 && y > 0 && z < 0) {
    console.log("The sign is +");
} else {
    console.log("The sign is -");
}