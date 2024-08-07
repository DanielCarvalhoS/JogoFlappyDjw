const canvas = document.getElementById('canvas').getContext('2d') 

let bg = new Bg(0,0,500,900,'img/sky.png')
let bg2 = new Bg(500,0,500,900,'img/sky.png')
let ground = new Bg(0,700,500,200,'img/ground.png')
let ground2 = new Bg(500,700,500,200,'img/ground.png')

function draw(){
    bg.draw()
    bg2.draw()
    ground.draw()
    ground2.draw()
}

function update(){
    bg.move(10, -500, 0)
    bg2.move(10, 0, 500)
    ground.move(10,-500, 0)
    ground2.draw(10, 0, 500)
}

//Chamava as outras funções, porém antes de atualizar, ela limpava a tela para desenhar, etc...
function main(){
    canvas.clearRect(0,0,500,900)
    update()
    draw()  
}

setInterval(main, 100)

