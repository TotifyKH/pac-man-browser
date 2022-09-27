export default class Boundaries {
  static width = 40;
  static height = 40;

  constructor(map){
    this.map = map;
  }

  drawBlock({c, position}){
    c.fillStyle = 'blue'
    c.fillRect(position.x, position.y, Boundaries.width, Boundaries.height)
  }

  draw(c){
    this.map.forEach((row, i) => {
      row.forEach( (symbol, j) => {
        switch(symbol){
          case '-':
              this.drawBlock({c: c, position: {
                  x: Boundaries.width * j,
                  y: Boundaries.height * i,
                }})
            break;
        }
      })
    })
  }
}


