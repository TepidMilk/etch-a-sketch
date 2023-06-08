
const boardSpace = document.querySelector('#board');
const size = document.querySelector('#size');
let basis = createBoard()

size.addEventListener('mousemove', function(){
    while (boardSpace.firstChild) {
        boardSpace.removeChild(boardSpace.firstChild);
    }
    createBoard(size.value);
});

function createBoard(value){
    let area = (value ** 2)
    for(i = 1; i <= area; i++){
        let pixel = document.createElement('div');
        pixel.textContent = 'Div' + i;
        pixel.classList.add('pixel')
        boardSpace.appendChild(pixel);
    };
}

createBoard(2)