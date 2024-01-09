const inputs = document.getElementById('input');
const ul = document.querySelector('.ul');
const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (inputs.value != '') {
        const list = document.createElement('li');
        list.innerHTML = `<span id="text">${inputs.value}</span><i class="fa-solid fa-trash"></i> `;
        ul.appendChild(list);
        inputs.value = ''
        const trash = document.querySelectorAll('.fa-trash');
        trash.forEach((element, inde) => {
            element.addEventListener('click', (e) => {
                if (e.target) {
                    list.remove();
                }
            })
        });
    }
});