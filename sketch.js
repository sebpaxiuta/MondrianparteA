function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 45, 200);
}
function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background(245, 242, 235);
  noStroke();

  fill(215, 35, 25);
  rect(0, 0, 440, 410);

  fill(245, 210, 20);
  rect(0, 530, 75, 270);

  fill(20, 35, 125);
  rect(440, 530, 260, 235);

  stroke(15, 15, 15);
  strokeCap(SQUARE);
  strokeWeight(12);

  line(440, 0, 440, 800);
  line(700, 530, 700, 800);
  line(75, 530, 75, 800);

  line(0, 410, 800, 410);
  line(0, 530, 800, 530);
  line(440, 765, 700, 765);
}
