let compteur = 0;
const number = document.getElementById('compteur');
document.getElementById('increment').addEventListener('click', () => {
    compteur++;
    number.textContent = compteur;
    number.style.color = "green";
    
});

document.getElementById('decrement').addEventListener('click',() =>{
    compteur--;
    number.textContent = compteur;
    number.style.color = "red";
});

document.getElementById('reset').addEventListener('click',() => {
    compteur = 0;
    number.textContent = compteur;
    number.style.color = "orange";
});

