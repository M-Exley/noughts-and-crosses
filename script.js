'use strict'
const container = document.getElementById('container');
let player;
let res;
let squarePressed;
let resWinner;

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
    res.style.color = `${player.playerColour}`
         
    
    let currentPlayerSymbol = player;
        switch(squarePressed) {
            case 1:
                board[0][0] = `${currentPlayerSymbol.playerSymbol}`;
                board[3][0] = `${currentPlayerSymbol.playerSymbol}`;
                board[6][0] = `${currentPlayerSymbol.playerSymbol}`;
                break;  
            case 2:
                board[1][0] = `${currentPlayerSymbol.playerSymbol}`;
                board[3][1] = `${currentPlayerSymbol.playerSymbol}`;
                break;  
            case 3:
                board[2][0] = `${currentPlayerSymbol.playerSymbol}`;
                board[3][2] = `${currentPlayerSymbol.playerSymbol}`;
                board[7][0] = `${currentPlayerSymbol.playerSymbol}`;
                break;  
            case 4:
                board[0][1] = `${currentPlayerSymbol.playerSymbol}`;
                board[4][0] = `${currentPlayerSymbol.playerSymbol}`;
                break;  
            case 5:
                board[1][1] = `${currentPlayerSymbol.playerSymbol}`;
                board[4][1] = `${currentPlayerSymbol.playerSymbol}`;
                board[6][1] = `${currentPlayerSymbol.playerSymbol}`;
                board[7][1] = `${currentPlayerSymbol.playerSymbol}`;
                break;  
            case 6:
                board[2][1] = `${currentPlayerSymbol.playerSymbol}`;
                board[4][2] = `${currentPlayerSymbol.playerSymbol}`;
                break;  
            case 7:
                board[0][2] = `${currentPlayerSymbol.playerSymbol}`;
                board[5][0] = `${currentPlayerSymbol.playerSymbol}`;
                board[7][2] = `${currentPlayerSymbol.playerSymbol}`;
                break;  
            case 8:
                board[1][2] = `${currentPlayerSymbol.playerSymbol}`;
                board[5][1] = `${currentPlayerSymbol.playerSymbol}`;
                break;  
            case 9:
                board[2][2] = `${currentPlayerSymbol.playerSymbol}`;
                board[5][2] = `${currentPlayerSymbol.playerSymbol}`;
                board[6][2] = `${currentPlayerSymbol.playerSymbol}`;
                break;  

                default:
                    console.warn("error");
                    break;
            }
            console.log(board)
        
    
            togglePlayer();
            console.log(player)

            board.forEach((arr) => {
                if((arr.every((el) => el === 'O')) || (arr.every((el) => el === 'X'))) {
                    const winner = document.getElementById('winner');
                    winner.style.display = 'block';
                    winner.textContent = `${currentPlayerSymbol.playerSymbol}`
                    winner.style.color = `${currentPlayerSymbol.playerColour}`
                    const reset = document.getElementById('reset');
                    reset.style.display = 'block';
                    reset.textContent = 'PLAY AGAIN'
                    reset.style.color = `${currentPlayerSymbol.playerColour}`
                    reset.addEventListener('click', function() {
                        location.reload();

                    })

                }
            })
               
});


function togglePlayer(_) {
    if (player === playersObject.playerOne) {
        player = playersObject.playerTwo
    } else if (player === playersObject.playerTwo) {
        player = playersObject.playerOne
    }

};