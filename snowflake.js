// making random sized snowflakes
function getRandomSize() {
  let r = randomGaussian() * 36;
  return abs(r);
}

// Making snowflake object with velocity, position and acceleration
class Snowflake {
  constructor(sx, sy) {
    let x = sx || random(width);
    let y = sy || random(-100, -10);
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector();
    this.r = getRandomSize();
  }

  applyForce(force) {
    let f = force.copy();
    f.mult(this.r);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.r * 0.2);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  render() {
    stroke(255);
    strokeWeight(this.r);
    point(this.pos.x, this.pos.y);
  }

  offScreen() {
    return (this.pos.y > height + this.r);
  }
}
