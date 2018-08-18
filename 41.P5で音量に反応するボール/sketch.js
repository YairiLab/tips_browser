"use strict";

let balls = [];
let mic = null;

function setup() {
  createCanvas(800, 600, WEBGL);
  mic = new p5.AudioIn();
  for (let i=0; i<100; ++i) {
    balls.push(new Ball());
  }
  mic.start();
}

function draw() {
  background(40);
  ambientLight(80);
  pointLight(50, 150, 240, 100, -1, 2);

  noStroke();
  let vol = 6000*mic.getLevel();
  balls.forEach(ball => {
    drawBall(ball);
    update(ball, vol);
  });
}

function drawBall(ball) {
  push();
  ambientMaterial(ball.color);
  translate(ball.x, ball.y+1500, ball.z-4000);
  sphere(ball.size);
  pop();
}

function update(ball, vol) {
    ball.update(vol);
    // yが正のとき（ある程度下に来たとき）、バウンドさせる
    if (0 < ball.y) {
      ball.vy = -2*ball.y;
    }
}