//Minimize Navigation on scroll
document.addEventListener("scroll", function(){
    const nav = document.querySelector('nav');
    if(window.scrollY > 200){
        nav.classList.add('minimize')
    } else {
        nav.classList.remove('minimize')
    }
});

// const cards = document.querySelector('.alien-cards');

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }

// for(let i = 0; i < 7; i++){
//     const image = document.createElement('img')
//     image.src = `https://gateway.pinata.cloud/ipfs/QmTYk2DHKWsUuGvznGGa6VUnaD3BRuvrkUFcrTrKtGaM3X/${getRandomInt(510)}.png`
//     cards.appendChild(image)
// }


// console.log(cards)
