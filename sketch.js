let snow = [];
let gravity;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0, 0.03);
}

function draw() {
  background(0);
  snow.push(new Snowflake());

  for (flake of snow) {
    flake.applyForce(gravity);
    flake.update();
    flake.render();
  }

  for (let i = snow.length; i >= 0; i--) {
    if (flake.offScreen()) {
      snow.splice(i, 1);
    }
  }
}
