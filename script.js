
const boardSpace = document.querySelector('#board')
const size = document.querySelector('#size')

size.addEventListener('mousemove', function(){
    while (boardSpace.firstChild) {
        boardSpace.removeChild(boardSpace.firstChild);
      }
    createBoard(size.value)
})

function createBoard(size){
    for(i = 1; i <= size; i++){
        let pixel = document.createElement('div');
        pixel.textContent = 'Div' + i;
        pixel.classList.add('pixel')
        boardSpace.appendChild(pixel);
    }
}

createBoard(16)