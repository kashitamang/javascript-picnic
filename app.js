//for each picnic item: create variables and grab using DOM element
const soda = document.getElementById('soda');
const cheese = document.getElementById('cheese');
const grapes = document.getElementById('grapes');
const bread = document.getElementById('bread');
const watermelon = document.getElementById('watermelon');

console.log(soda, cheese, grapes, bread, watermelon);

//add event listeners for clicking on each elements

soda.addEventListener('click', () => {
    soda.classList.toggle('picked');
});

cheese.addEventListener('click', () => {
    cheese.classList.toggle('picked');
});

grapes.addEventListener('click', () => {
    grapes.classList.toggle('picked');
});

bread.addEventListener('click', () => {
    bread.classList.toggle('picked');
});

watermelon.addEventListener('click', () => {
    watermelon.classList.toggle('picked');
});