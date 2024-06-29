const button = document.getElementById('buttonCounter');

function counterEvent(event) {
    const toInt = parseInt(document.getElementById('counter').textContent);
    const sum = toInt + 1;
    document.getElementById('counter').textContent = sum;
}


button.addEventListener('click', counterEvent);