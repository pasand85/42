// Import stylesheets
import './style.css';

// // Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

const clickMeButton = document.querySelector('.btn');
const hideMeButton = document.querySelector('.btn2');

const universalAnswer = document.querySelector('.answer')
const thankYou = document.querySelector('.thankYou')



clickMeButton.addEventListener('click', function() {
  universalAnswer.textContent = '42'
  thankYou.textContent = '^ Thank you :) ^'
})

hideMeButton.addEventListener('click', function() {
  universalAnswer.textContent = <a href> 'asd' </a>
  thankYou.textContent = ''
})
