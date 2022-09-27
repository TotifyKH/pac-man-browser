import Boundaries from "./Boundaries.js";
import Player from "./Player.js";

const canvas = document.querySelector('canvas')
const c = canvas.getContext("2d")

canvas.width = innerWidth;
canvas.height = innerHeight;

const map = [
  ['-', '-', '-', '-', '-', '-'],
  ['-', ' ', ' ', ' ', ' ', '-'],
  ['-', ' ', '-', '-', ' ', '-'],
  ['-', ' ', ' ', ' ', ' ', '-'],
  ['-', '-', '-', '-', '-', '-']

]

const boundaries = new Boundaries(map);


const player = new Player({
  position: {
    x: Boundaries.width + Boundaries.width/2,
    y: Boundaries.height + Boundaries.height/2
  },
  velocity: {
    x: 0,
    y: 0
  }
});

const keys = {
  w: {
    pressed: false
  },
  a: {
    pressed: false
  },
  s: {
    pressed: false
  },
  d: {
    pressed: false
  }
}

let lastKey = ''

function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)
  boundaries.draw(c);

  player.update()
  player.draw(c)
  
  player.velocity.x = 0
  player.velocity.y = 0

  if(keys.w.pressed && lastKey === 'w'){
    player.velocity.y = -5;
  } else if(keys.a.pressed && lastKey === 'a'){
    player.velocity.x = -5;
  } else if(keys.s.pressed && lastKey === 's'){
    player.velocity.y = 5;
  } else if(keys.d.pressed && lastKey === 'd'){
    player.velocity.x = 5;
  }
  
}
animate()

addEventListener('keydown', ({key}) => {
  switch(key) {
    case 'w':
      keys.w.pressed = true;
      lastKey = 'w'
      break;
    case 's':
      keys.s.pressed = true;
      lastKey = 's'
      break;
    case 'a':
      keys.a.pressed = true;
      lastKey = 'a'
      break;
    case 'd':
      keys.d.pressed = true;
      lastKey = 'd'
      break;
  }
})

addEventListener('keyup', ({key}) => {
  switch(key) {
    case 'w':
      keys.w.pressed = false;
      break;
    case 's':
      keys.s.pressed = false;
      break;
    case 'a':
      keys.a.pressed = false;
      break;
    case 'd':
      keys.d.pressed = false;
      break;
  }
})

