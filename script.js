// const form = document.querySelector('form');
// const input = document.querySelector('input');
// const lista = document.querySelector('#lista');
// const remover = document.querySelector('#remover');

// // Carrega os dados salvos
// const pessoas = JSON.parse(localStorage.getItem('pessoas')) || [];

// // Função para desenhar a lista
// function renderizarLista() {
//     lista.innerHTML = '';

//     pessoas.forEach((pessoa) => {
//         const li = document.createElement('li');

//         li.textContent = pessoa.nome;

//         lista.appendChild(li);
//     });
// }

// // Mostra a lista ao abrir a página
// renderizarLista();

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     if (input.value.trim() === '') return;

//     const pessoa = {
//         nome: input.value
//     };

//     pessoas.push(pessoa);

//     localStorage.setItem('pessoas', JSON.stringify(pessoas));

//     renderizarLista();

//     input.value = '';
// });

// remover.addEventListener('click', () => {
//     pessoas.pop();

//     localStorage.setItem('pessoas', JSON.stringify(pessoas));

//     renderizarLista();
// });











// lista de nomes salvos no local storage, toda vez que digitar um nome e apertar e dar submit, se ja houver uma lista salva, alocar esse novo nome para lista, se não, criar uma nova e salvar. Apos isso pegar esses nome salvo e alocar para um li que devera ser criada ao submit do prompt, remover deve retirar a ultima li e nome no storage criado.


const form = document.querySelector('form');
const input = document.querySelector('input');
const lista = document.querySelector('#lista');
const remover = document.querySelector('#remover');


form.addEventListener ('submit', (event) => {
 event.preventDefault()
 
 const li = document.createElement('li')
 
 li.innerText = input.value
lista.appendChild(li)

input.value = ''
})

remover.addEventListener('click', () => {
  const lastElement = lista.lastChild

if (lastElement) {
  lastElement.remove()
}
})