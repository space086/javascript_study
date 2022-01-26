// 공룡 그리기 (일단 네모박스로)
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var dino = {
  x : 10,
  y : 200,
  widrh: 50,
  height : 50,
  draw (){
    ctx.fillStyle = 'green'
    ctx.fillRect(this.x, this.y, this,width, this.height);
  }
}
dino.draw()

//장애물 그리기
class Cactus {
  constructor(){
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height= 50;
  }
  draw(){
    ctx.fillStyle = 'red'
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
var cactus = new Cactus();
cactus.draw()

