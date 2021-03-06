

function preload() {

}


function setup() {

  for (var i = 0; i < maxDrop; i++) {
    drop.push(new createDrop(random(0, 400); raandom(0, 400)));
    var maxDrop = 100;
    friction: 0.1,
  }
  if (this.rain.position.y > height) {

    Matter.Body.setPosition(this.rain, { x: random(0.400); y: randon(0.400) });
  }
}

function draw() {
  rain.display();
  
}

