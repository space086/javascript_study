// 공룡 그리기 (일단 네모박스로)
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var dino = {
  x : 10,
  y : 200,
  width: 50,
  height : 50,
  draw (){
    ctx.fillStyle = 'green'
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
dino.x += 1;

//장애물 그리기
class Cactus {
  constructor(){
    this.x = 500;
    this.y = 180;
    this.width = 35;
    this.height= 70;
  }
  draw(){
    ctx.fillStyle = 'red'
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
var timer = 0;
var cactusS = [];

function frameRect(){
  requestAnimationFrame(frameRect);
  timer++;

  ctx.clearRect(0,0, canvas.width, canvas.height);

  if(timer % 120 === 0) {
    var cactus = new Cactus();
    cactusS.push(cactus);
  }
  cactusS.forEach((a, i, o)=>{
    //x좌표가 0미만이면 제거
    if (a.x < 0) {
      //제거
      o.splice(i, 1)
    }
    a.x--;
    a.draw();
  })
  dino.y -= 2;
  dino.draw()
}

frameRect();

