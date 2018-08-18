class FallingWord {
  constructor(content) {
    this.content = content;
    this.radius  = random(10, 80)
    this.theta   = random(TWO_PI);
    this.x0      = randomGaussian(width/3, width/4);
    this.y       = random(height/3);
    this.size    = random(10, 28);
    this.t       = random(10000);
  }

  update() {
    this.t += 0.02;
    this.y += noise(this.t) + 0.5;
  }
  get x() {
    this.theta += 0.02;
    return this.x0 + this.radius*cos(this.theta);
  }
}