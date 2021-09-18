
// button 

const buttons = document.querySelector('.btn');

// conatainer 

const contain = document.querySelector('.container');
// console.log(contain);

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'voilet']


contain.style.backgroundcolor = 'red'


buttons.addEventListener('click', selector);


function selector(){
    const randoms = Math.trunc(Math.random() * colors.length);
    // console.log(randoms);
    contain.style.backgroundColor = colors[randoms];
}