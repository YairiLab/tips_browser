"use strict";

class Ball {
  constructor() {
    this.x  = randomGaussian(0, 2*width);
    this.y  = random(-4*height, 2*width);
    this.z  = randomGaussian(0, -width);
    this.vx = 0;
    this.vy = 1;
    this.size  = random(20, 100);
    this.color = color(random(100, 255), random(100, 255), random(100, 255), 255);
    this.t     = random(1000000);
  }

  update(value) {
    let d = dist(this.x, this.y, this.z, 0, 0, 0);
    let f = -1/max(d, 1) * value;
    this.t  += 0.02;
    this.vx  = 5*(noise(this.t)-0.5);
    this.vy += f + 0.1 - 0.01*this.vy;

    this.x += this.vx;
    this.y += this.vy;
  }
}
