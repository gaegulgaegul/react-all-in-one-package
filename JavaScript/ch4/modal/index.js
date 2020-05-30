import "style.css";

const open = document.getElementById('open');
const close = document.getElementById('close');
const model = document.querySelector('.model-wrapper');

open.onclick = () => {
    modal.style.display = 'flex';
}

close.onclick = () => {
    modal.style.display = 'none';
}