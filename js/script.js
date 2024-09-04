const canvas = document.getElementById('canvas').getContext('2d') 

let bg = new Bg(0,0,500,900,'img/sky.png')
let bg2 = new Bg(500,0,500,900,'img/sky.png')
let ground = new Ground(0,700,500,200,'img/ground.png')
let ground2 = new Ground(500,700,500,200,'img/ground.png')
let cano = new Canu (300,500,96,358,'img/pipe1.png' )
let cano2 = new Canu (300,0,96,358,'img/pipe2.png' )
let bird = new Bird (50, 400, 63, 51, 'img/bird0.png')

document.addEventListener('click', function(e){
    bird.velocidade -= 12
})

function draw(){
    bg.draw()
    bg2.draw()
    cano.draw()
    cano2.draw()
    ground.draw()
    ground2.draw()
    
    bird.draw()
}


function update(){
    bg.move(1, -500, 0)
    bg2.move(1, 0, 500)
    ground.move(2,-500, 0)
    ground2.move(2, 0, 500)
    bird.limite() 
    bird.move()
    bird.animacao(3, 4, 'bird')
}



//Chamava as outras funções, porém antes de atualizar, ela limpava a tela para desenhar, etc...
function main(){
    canvas.clearRect(0,0,500,900)
    update()
    draw()  
    requestAnimationFrame(main)
}

main()

