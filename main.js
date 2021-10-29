// CITYSCAPE ASGN START CODE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 300;
cnv.height = 650;

// BLUE BACKGROUND
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, cnv.width, cnv.height);

// DRAW LEFT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(0, 350, 150, 300);
// Middle Section
ctx.fillRect(20, 200, 110, 150);
// Triangle Top
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(130, 200);
ctx.lineTo(130, 100);
ctx.fill();

// DRAW RIGHT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(150, 100, 150, 550);
// Medium Top
ctx.fillRect(170, 40, 110, 60);
// Small Top
ctx.fillRect(190, 20, 70, 20);

// Windows
ctx.fillStyle = "white";
// Top Left Building
for (let y = 200; y < 340; y+= 24) {
    for (let x = 35; x < 130; x += 24) {
        ctx.fillRect(x, y, 12, 12);
    }
}

// Bottom Left Building
for (let y = 380; y < 600; y += 40) {
    ctx.fillRect(20, y, 110, 20);
}

for (let x = 164; x <= 272; x += 27) {
    ctx.fillRect(x, 130, 15, 470);
}