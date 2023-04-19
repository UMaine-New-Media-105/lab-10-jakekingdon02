// Jake Kingdon 
// Lab 10
// April 19th, 2023.
// In this sketch, I made a sample frogger style game using classes to build the lanes and the cars bouncing across the screen. In order to play the game, 
// you must click on the canvas and use the movement keys to make the frog move up the screen. Note: that the frog is off screen until you start playing the 
// game. 

// Click play to restart the game and the positions of the cars.

class Car {
  constructor() {
    this.x = random(width);
    this.y = random(20, height - 20);
    this.speed = random(1, 4);
    this.color = color(random(255), random(255), random(255));
    this.size = 30;
  }

  display() {
    fill(this.color);
    rect(this.x, this.y, this.size, this.size / 2);
  }

  move() {
    this.x += this.speed;
    if (this.x > width + this.size) {
      this.x = -this.size;
    }
  }
}

let cars = [];
let rectY;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 8; i++) { // changed to 8
    cars.push(new Car());
  }
  rectY = height; // set initial y-coordinate of the rectangle
}

function draw() {
  background(255);

  // set stroke and stroke weight
  stroke(0);
  strokeWeight(20);

  // draw horizontal lanes
  for (let i = 10; i < height; i += 40) {
    line(0, i, width, i);
  }

  // display and move cars
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    // check for collision with walls
    if (cars[i].x < 0 || cars[i].x > width - cars[i].size) {
      cars[i].speed *= -1;
      cars[i].color = color(random(255), random(255), random(255));
    }
  }

  // move the green rectangle up if the up arrow key is pressed
  if (keyIsDown(UP_ARROW)) {
    rectY -= 5;
  }

  // display the green rectangle
  noStroke(2)
  fill("green");
  rect(width / 2 - 15, rectY, 30, 30);
}



