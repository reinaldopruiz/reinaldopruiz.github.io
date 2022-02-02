let song;
let BitcoinBubble = {
  x: 0,
  y: 0,
  xspeed: -10,
  yspeed: -10,
};

let t;

function preload () {
  song = loadSound ("/BitcoinBubble.mp3");
  }

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  stroke(0, 15);
  fill(255, 255, 255, 3);
  t = 0;
  song.play()
}

function draw() {
  move();
  bounce();
  display();
  
  translate(width/2, height/2);
  let r = noise(t) *500
  let g = noise(t+100)*500
  let b = noise(t+200)*500
  
  stroke(r, g, b, 55);
  strokeWeight(50)
  beginShape();
    for (let i = 0; i < 100; i++) {
      let ang  = map (i, 0, 100, 0, TWO_PI);
      let ang2 = map (i, 0, 100, 0, TWO_PI + noise (t));
      let rad = 200 * noise(i * 0.01, t * 0.005);
      let x = rad * cos(ang);
      let y = rad * sin(ang2);
      curveVertex(x, y);
    }
  endShape(CLOSE);
  t += 1;
}

function bounce() {
  if (BitcoinBubble.x > width || BitcoinBubble.x < 0) {
    BitcoinBubble.xspeed = BitcoinBubble.xspeed * -1;
  }

  if (BitcoinBubble.y > height || BitcoinBubble.y < 0) {
    BitcoinBubble.yspeed = BitcoinBubble.yspeed * -1;
  }
}

function display() {
  stroke(random(255));
  strokeWeight(4);
  fill(random(233,235), random (189, 191), random (62, 64));
  ellipse(BitcoinBubble.x - random(-150, 100), BitcoinBubble.y - random(-150, 100), random(45), random(45));
}

function move() {
  BitcoinBubble.x = BitcoinBubble.x + BitcoinBubble.xspeed;
  BitcoinBubble.y = BitcoinBubble.y + BitcoinBubble.yspeed;
}
