const botao = document.querySelector('#button-table');

const closeButton = document.querySelector('#close-button');


const sizes = ['P', 'M', 'G', 'GG', 'XG'];
const numberChest = [92, 98, 102, 106, 114];
const numberWaist = [82, 84, 88, 92, 98];

const cells = document.querySelectorAll('tbody td');

cells.forEach((cell, index) => {
    const size = sizes[index];
    const chest = numberChest[index];
    const waist = numberWaist[index];

    cell.textContent = `${size}`;
});

botao.addEventListener('click', function() {
    const modal = document.querySelector('#myModal');
    const modalOverlay = document.querySelector('#modal-overlay');

    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modalOverlay.style.display = 'flex';
});

closeButton.addEventListener('click', function() {
    const modal = document.querySelector('#myModal');
    const modalOverlay = document.querySelector('#modal-overlay')

    modal.style.display = 'none';
    modal.style.alignItems = '';
    modal.style.justifyContent = '';
    modalOverlay.style.display = 'none';
});


