console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    if (count < 0) {
        for(let i = -1; i >= count; i--) {
            if (i % 2 != 0) {
                console.log(i);
            }
        }
    }
    for(let i = 1; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
let apple = printOdds
apple(21);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
    let aboveSixteen = `Congrats ${userName}, you can drive!`
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`

    if (age >= 16) {
        console.log(aboveSixteen);
    } else if (age < 16) {
        console.log(belowSixteen);
    } else {
        console.log("Please Provide a name and age.");
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function whereAt(x, y) {
    if (x === 0 && y === 0) {
        console.log("Point of Origin (0,0)");
    } else if ( x === 0){
        console.log(`Point (${x}, ${y}) is on the y-axis.`);
    } else if (y === 0){
        console.log(`Point (${x}, ${y}) is on the x-axis.`);
    } else if (x > 0 && y > 0) {
        console.log(`Point (${x}, ${y}) is in the Quadrant 1.`);
    } else if (x < 0 && y > 0) {
        console.log(`Point (${x}, ${y}) is in the Quadrant 2.`);
    } else if (x < 0 && y < 0) {
        console.log(`Point (${x}, ${y}) is in the Quadrant 3.`);
    } else {
        console.log(`Point (${x}, ${y}) is in the Quadrant 4.`);
    }
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triAngle(a, b, c) {
    if((a < c && b < c) || (a < 0 || b < 0 || c < 0)){
        console.log("Makes an invalid triangle");
    } else if(a === b && a === c){
        console.log("Equilateral Triangle");
    } else if((a === b && a != c) || (a === c && a != b) || (b === c && b != a)){
        console.log("Isosceles Triangle");
    } else {
        console.log("Scalene Triangle");
    }
}

triAngle(1, 2, 2); //iso
triAngle(2, 2, 2); //equal
triAngle(1, 1, 4); //invalid
triAngle(4, 3, 2); //scalene
triAngle(-1, -3, -2); //neg check

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");


function cellData(planLimit, day, usage) {
    let daysRemaining = 30 - day;
    let useAvg = usage / day;
    let dailyAvgReq = planLimit / 30;
    let remUse = planLimit - usage;   
    let remData = Math.abs(planLimit - useAvg*30);
    let newAvg = remUse / daysRemaining;

    if (planLimit < usage) {
        console.log("over");
        return;
    }

    console.log(`${day} days used, ${daysRemaining} days remaining`);
    console.log(`Average daily use: ${useAvg.toFixed(2)} GB/day`); 

    if (useAvg > dailyAvgReq) {
        console.log(`You are EXCEEDING your average daily use (${dailyAvgReq.toFixed(2)} GB/Day),
continuing this high usage, you'll exceed your data plan by 11.9 GB.`);
    } else if (useAvg < dailyAvgReq){
        console.log(`You are UNDER your average daily use (${dailyAvgReq.toFixed(2)} GB/Day),
        continuing this current usage, you'll go under your data plan by ${remData} GB. To stay below your data plan, use no more than ${newAvg.toFixed(2)} GB/day.`);
    } else {
        console.log("A-Okay");
    } 

}

cellData(100, 15, 56);