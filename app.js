//for each picnic item: create variables and grab using DOM element
const soda = document.getElementById('soda');
const cheese = document.getElementById('cheese');
const grapes = document.getElementById('grapes');
const bread = document.getElementById('bread');
const watermelon = document.getElementById('watermelon');

const button = document.getElementById('button');


//add event listeners for clicking on each elements

soda.addEventListener('click', () => {
    soda.classList.toggle('picked');
});
//commit

cheese.addEventListener('click', () => {
    cheese.classList.toggle('picked');
});
//commit

grapes.addEventListener('click', () => {
    grapes.classList.toggle('picked');
});
//commit

bread.addEventListener('click', () => {
    bread.classList.toggle('picked');
});
//commit

watermelon.addEventListener('click', () => {
    watermelon.classList.toggle('picked');
});

//Add a button that will pick a random item from your picnic basket
//and add it to your picnic

button.addEventListener('click', () => {
    const pickRandomItem = Math.floor(Math.random() * 5);
    console.log(pickRandomItem);
    
    if (pickRandomItem === 1){
        soda.classList.toggle('picked');
    } else if (pickRandomItem === 2){
        cheese.classList.toggle('picked');
    } else if (pickRandomItem === 3){
        grapes.classList.toggle('picked');
    } else if (pickRandomItem === 4){
        bread.classList.toggle('picked');
    } else {
        watermelon.classList.toggle('picked');
    }
});

