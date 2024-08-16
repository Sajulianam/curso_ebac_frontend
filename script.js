const form = document.getElementById('myForm');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const campoA = parseInt(document.getElementById('campoA').value);
    const campoB = parseInt(document.getElementById('campoB').value);

    if (campoB <= campoA) {
        messageDiv.textContent = 'O valor de B deve ser maior que o valor de A.';
        messageDiv.style.color = 'red';
    } else {
        messageDiv.textContent = 'Formulário válido! Os dados foram enviados.';
        messageDiv.style.color = 'green';

    }
});  