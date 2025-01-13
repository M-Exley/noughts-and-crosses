'use strict'
const container = document.getElementById('container');
let player;
let res;
let squarePressed;

const board = [ // 8 winning combos
    [0,0,0], // 1
    [0,0,0], // 2
    [0,0,0], // 3
    [0,0,0], // 4
    [0,0,0], // 5
    [0,0,0], // 6
    [0,0,0], // 7
    [0,0,0], // 8
    
];

const winningArrays = [ // length === 8   ---------- cell.id 1 to 9
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,5,9],
    [3,5,7],
]

const playersObject = {
    playerOne: {
        playerId: "one",
        playerSymbol: "X",
        playerColour: "tomato",
        
    },
    playerTwo: {
        playerId: "two",
        playerSymbol: "O",
        playerColour: "lightblue",
        
    },
};          

( function Gameboard () {  
    
    
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = i + 1;
        container.appendChild(cell)
        cell.textContent = i+1
    }
    
    player = playersObject.playerOne;
    console.log(player)
    


 })();

container.addEventListener('click', function(e) {
    const containerArray = [...container.children]
    containerArray.forEach((cell) => {
        // console.log(cell.id)
        res = e.target;
    })
    squarePressed = +(e.target.id);
    res.textContent = `${player.playerSymbol}`
    console.log(squarePressed, typeof squarePressed)
    // board.push(+(squarePressed)); // works
    // board.splice(squarePressed, 1, `${res.textContent}`)
    // board.splice(squarePressed, 1, +(squarePressed))  
         
    
    // Map container vals to board array ---- case
          
        switch(squarePressed) {
            case 1:
                board[0][0] = 1;
                board[3][0] = 1;
                board[6][0] = 1;
                break;  
            case 2:
                board[1][0] = 2;
                board[3][1] = 2;
                break;  
            case 3:
                board[2][0] = 3;
                board[3][2] = 3;
                board[7][0] = 3;
                break;  
            case 4:
                board[0][1] = 4;
                board[4][0] = 4;
                break;  
            case 5:
                board[1][1] = 5;
                board[4][1] = 5;
                board[6][1] = 5;
                board[7][1] = 5;
                break;  
            case 6:
                board[2][1] = 6;
                board[4][2] = 6;
                break;  
            case 7:
                board[0][2] = 7;
                board[5][0] = 7;
                board[7][2] = 7;
                break;  
            case 8:
                board[1][2] = 8;
                board[5][1] = 8;
                break;  
            case 9:
                board[2][2] = 9;
                board[5][2] = 9;
                board[6][2] = 9;
                break;  

                default:
                    console.warn("error");
                    break;
            }
            console.log(board)
        
    
     togglePlayer();
    console.log(compareBoards(board, winningArrays));
    
    
})


// loop through both boards using variables [i][j]
function compareBoards(a, b) {
    if (a.length !== b.length) return false;
    else {

        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false
            }
        }
        return true;
    }
    
};

function togglePlayer(object) {
    if (player === playersObject.playerOne) {
        player = playersObject.playerTwo
    } else if (player === playersObject.playerTwo) {
        player = playersObject.playerOne
    }

}


