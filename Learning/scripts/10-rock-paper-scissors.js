let gameScore = {
        win : 0,
        lose : 0,
        tie : 0
      };

     // localStorage.setItem('score',JSON.stringify(gameScore));

      updateScoreElement();   

      function pickComputerMove() {
        let minCeiled = Math.ceil(1);
        let maxFloored = Math.floor(3);
        let computerChoice = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
        let computerMove = '';
        if(computerChoice === 1) {
            computerMove = 'rock';
        } else if(computerChoice === 2) {
            computerMove = 'paper';
        } else {
            computerMove = 'scissors';
        }
        return computerMove;
      }

      function gameResult(userMove, computerMove) {
        if(userMove === computerMove) {
          return 'It is a Tie!';
        } else if(
          (userMove === 'rock' && computerMove === 'scissors') ||
          (userMove === 'paper' && computerMove === 'rock') ||
          (userMove === 'scissors' && computerMove === 'paper')
        ) {
          return 'You Win!';
        } else {
          return 'You Lose!';
        }
      }
      //let computerMove = '';
      //let result = '';
      function playGame(userMove) {
        let computerMove = pickComputerMove();
        let result = gameResult(userMove, computerMove);
        scoreCalculator(result);

        //alert(`You choose ${userMove}. Computer chose ${computerMove}. ${result}.\nThe Scores: Wins: ${gameScore.win}, Losses: ${gameScore.lose}, Ties: ${gameScore.tie}`);
        
        updateScoreElement();
        document.querySelector(".js-result")
          .innerHTML = `${result}`;
        document.querySelector(".js-moves")
          .innerHTML = `You 
      <img src="images/${userMove}-emoji.png" class="move-icon"> Computer
      <img src="images/${computerMove}-emoji.png" class="move-icon">`;
      }

      function updateScoreElement(){
        document.querySelector('.js-score')
          .innerHTML = `Wins: ${gameScore.win}, Losses: ${gameScore.lose}, Ties: ${gameScore.tie}`;
      }


      
      function scoreCalculator(res) {
          if (res === "You Win!") {
            gameScore.win++;
          } else if(res === "You Lose!") {
            gameScore.lose++;
          } else {
            gameScore.tie++;
          }
      }

      function resetScore() {
        gameScore.win = 0;
        gameScore.lose = 0;
        gameScore.tie = 0;
        //localStorage.removeItem('score');
      }