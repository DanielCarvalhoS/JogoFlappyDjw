class obj {
    constructor(posx,posy,largura,altura,imagem){
        this.posx = posx
        this.posy = posy
        this.largura = largura
        this.altura = altura
        this.imagem = imagem
    }


draw(){
    let img = new Image()
    img.src = this.imagem
    canvas.drawImage(img,this.posx,this.posy,this.largura,this.altura)
    }
}

class Bg extends obj{
    move(velocidade,limite,posicao){
        this.posx -= velocidade
    if(this.posx < limite){
        this.posx = posicao
        }
    }
}

    
