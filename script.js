let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScore();

function playMove(userMove) {
  const moves = ['rock', 'paper', 'scissors'];
  const computerMove = moves[Math.floor(Math.random() * 3)];

  let result = '';

  if (userMove === computerMove) {
    result = 'Tie';
    score.ties++;
  } else if (
    (userMove === 'rock' && computerMove === 'scissors') ||
    (userMove === 'paper' && computerMove === 'rock') ||
    (userMove === 'scissors' && computerMove === 'paper')
  ) {
    result = 'You Win';
    score.wins++;
  } else {
    result = 'You Lose';
    score.losses++;
  }

  localStorage.setItem('score', JSON.stringify(score));
  updateScore();

  document.querySelector('.js-result').textContent = result;
  document.querySelector('.js-moves').innerHTML = `
    You <img src="${userMove}.png" class="move" alt="${userMove}">
    <img src="${computerMove}.png" class="move" alt="${computerMove}"> Computer
  `;
}

function updateScore() {
  document.querySelector('.js-score').textContent = 
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function resetScore() {
  score = { wins: 0, losses: 0, ties: 0 };
  localStorage.removeItem('score');
  updateScore();
  document.querySelector('.js-result').textContent = '';
  document.querySelector('.js-moves').textContent = '';
}
