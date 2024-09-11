const canvas = document.getElementById('canvas').getContext('2d') 

let bg = new Bg(0,0,500,900,'img/Florestinha.jpg')
let bg2 = new Bg(500,0,500,900,'img/Florestinha.jpg')
let ground = new Ground(0,700,500,200,'img/Ground2.png')
let ground2 = new Ground(500,700,500,200,'img/Ground2.png')
let Pkc = new Pikachu (300,750,96,108,'img/PikachuVoando.png')
let Pkc2 = new Pikachu (300,10,96,108,'img/PikachuVoando.png')
let Pkc3 = new Pikachu (340,100,96,108,'img/PikachuVoando.png')
let Pkc4 = new Pikachu (340,700,96,108,'img/PikachuVoando.png')
let dragon = new Dog (50, 400, 200, 400,'img/bird1.png')

document.addEventListener('click', function(e){
    dragon.velocidade -= 12
})

function draw(){
    bg.draw()
    bg2.draw()
    Pkc.draw()
    Pkc2.draw()
    Pkc3.draw()
    Pkc4.draw()
    ground.draw()
    ground2.draw()
    
    dragon.draw()
}


function update(){
    bg.move(1, -500, 0)
    bg2.move(1, 0, 500)
    ground.move(2,-500, 0)
    ground2.move(2, 0, 500)
    dragon.limite() 
    dragon.move()
    dragon.animacao(4, 7, 'bird')
}



//Chamava as outras funções, porém antes de atualizar, ela limpava a tela para desenhar, etc...
function main(){
    canvas.clearRect(0,0,500,900)
    update()
    draw()  
    requestAnimationFrame(main)
}

main()

