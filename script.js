
const boardSpace = document.querySelector('#board')
const size = document.querySelector('#size')

size.addEventListener('change', function(){
    while (boardSpace.firstChild) {
        boardSpace.removeChild(boardSpace.firstChild);
      }
    createBoard(size.value)
})

function createBoard(size){
    for(i = 0; i <= size; i++){
        let pixel = document.createElement('div');
        pixel.textContent = 'Div' + i;
        boardSpace.appendChild(pixel);
    }
}