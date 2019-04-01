/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let score, roundScore, activePlayer,gamePlay;
init();


document.querySelector('.btn-roll').addEventListener('click', function () {
	if(gamePlay){
		//random number
	let dice = Math.floor(Math.random() * 6) + 1;
	console.log(dice);

	//display the reasult 
	let diceDom = document.querySelector('.dice');
	diceDom.style.display = 'block';
	diceDom.src = 'dice-' + dice + '.png';


	//update the round only when the number is not 1 
	if (dice !== 1) {
		//add score
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	} else {
		//Next player
		nextPlayer();
	}

	}
	
});

document.querySelector('.btn-hold').addEventListener('click', function () {
	if(gamePlay){
		//Add current score to global score
	score[activePlayer] += roundScore;

	//Update ui
	document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
	//check if the player won game
	if (score[activePlayer] >= 20) {
		document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
		
		gamePlay=false;
	} 
	
	else {
		//Next player
		nextPlayer();

	}

	}
});


document.querySelector('.btn-new').addEventListener('click', init);


function init() {
	score = [0, 0];
	activePlayer = 0;
	roundScore = 0;
	gamePlay=true;

	document.querySelector('.dice').style.display = 'none';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';

	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}

function nextPlayer() {
	//next player
	//ternary opertaor
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.querySelector('.player-0-panel').classList.toggle('active');

	document.querySelector('.player-1-panel').classList.toggle('active');

	//when palyer roll 1 dice is hide
	document.querySelector('.dice').style.display = 'none';

}









/*setter i.e we are setting a value 
document.querySelector('#current-'+activePlayer).textContent=dice;

//document.querySelector('#current-'+activePlayer).innerHTML='<em>'+dice+'</em>';


// getter i.e we are getting a value.
let x=document.querySelector('#score-0').textContent;
console.log(x);
*/


//This code is for ame as the ternary operator	 
//		 if(activePlayer===0){
//			 activePlayer=1;
//		 }
//		 else{
//			 activePlayer=0;
//		 }
