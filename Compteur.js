let compteur = 0;
const number = document.getElementById('compteur');
document.getElementById('increment').addEventListener('click', () => {
    compteur++;
    number.textContent = compteur;
});

document.getElementById('decrement').addEventListener('click',() =>{
    compteur--;
    number.textContent = compteur;
});

document.getElementById('reset').addEventListener('click',() => {
    compteur = 0;
    number.textContent = compteur;
});