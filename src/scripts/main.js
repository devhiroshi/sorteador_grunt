document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sorteador').addEventListener('submit', function(e) {
        e.preventDefault();
        let numMax = document.getElementById('numero-max').value;
        numMax = parseInt(numMax);

        let numRandom = Math.random() * numMax;
        numRandom = Math.floor(numRandom + 1);
        document.getElementById('resultado-valor').innerText = numRandom;
        document.querySelector('.resultado').style.display = 'block';

    })
})
