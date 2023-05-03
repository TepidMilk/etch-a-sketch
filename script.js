const pixel = document.createElement('div')
const boardSpace = document.querySelector('.board')

pixel.classList.add('pixel')
function createBoard(){
    for(i = 0; i < 16; i++){
        boardSpace.appendChild(pixel)
    }
}

createBoard()