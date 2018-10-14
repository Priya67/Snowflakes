let snow = [];
let gravity; // To control the speed of the snowflake

// Used to create canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0, 0.03);
}

// We are drawing snowflake in this function
function draw() {
  background(0); // Black background
  snow.push(new Snowflake()); // making new snowflakes on canvas

  // applying gravity and force on every snowflake
  for (flake of snow) {
    flake.applyForce(gravity);
    flake.update();
    flake.render();
  }

  // If snowflake has reached the end of the screen, then take them out
  for (let i = snow.length; i >= 0; i--) {
    if (flake.offScreen()) {
      snow.splice(i, 1);
    }
  }
}
