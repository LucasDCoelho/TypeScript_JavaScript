const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const idade = document.getElementById('idade');

function click() {addEventListener('click', (e) => {
    return alert(`Olá meu nome é ${nome} ${sobrenome} e tenho ${idade} anos`);
})};