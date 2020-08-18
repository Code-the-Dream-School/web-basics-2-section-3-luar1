const player1 = {
  name: prompt('Name of Player 1'), 
  shipCount: 0,
  gameBoard: [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    ],

};
const player2 = {
  name: prompt('Name of Player 2'),
  shipCount: 0, 
  gameBoard: [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    ],
};

const randomBoard = player => {
      while (player.shipCount < 4) {
        x = Math.floor(Math.random() * 4);
        y = Math.floor(Math.random() * 4);
        if (player.gameBoard[y][x] === 0) {
          player.gameBoard[y][x] += 1;
          player.shipCount += 1;
        }
      }
}


randomBoard (player1);
randomBoard (player2);

console.log(`${player1.name}` + JSON.stringify(player1.gameBoard));
console.log(`${player2.name}` + JSON.stringify(player2.gameBoard));

const battleship = () => {
    let currentPlayer = player1;
    let opponent = player2;
     while(player1.shipCount > 0 && player2.shipCount > 0){
       currentPlayer = currentPlayer === player1 ? player2 : player1;
       opponent = currentPlayer === player1 ? player2 : player1;
       let inputXcoord = prompt(`${currentPlayer.name}: Enter the coordinate X, only numbers between 0-3`);
       let inputYcoord = prompt(`${currentPlayer.name}: Enter the coordinate Y, only numbers between 0-3`) ;
       if(opponent.gameBoard[inputXcoord][inputYcoord] === 1){
         opponent.gameBoard[inputXcoord][inputYcoord] = 0;
         opponent.shipCount -=1;
         alert(`You hit one of the ${opponent.name}'s ships. ${opponent.name}'s! remaining ships: ${opponent.shipCount}`);
       } else {
          alert('Miss hit!');
       }
       console.log(`${player1.name}` + JSON.stringify(player1.gameBoard));
       console.log(`${player2.name}` + JSON.stringify(player2.gameBoard));
     }
      if (player1.shipCount === 0) {
          return `Congratulations! The Winner is ${player2.name}`.toUpperCase();
      } else if (player2.shipCount === 0) {
          return `Congratulations! The Winner is ${player1.name}`.toUpperCase();
     }
  }
  const gameResult = battleship()
  
  const htmlTarget = document.getElementById('result')
  htmlTarget.innerHTML = gameResult;

  