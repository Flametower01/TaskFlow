const formAdicionarTarefa = document.querySelector('#form')
const input = document.querySelector("#taskInput")
const buttonSubmit = document.querySelector('#buttonAdic')

const listagem = document.querySelector('#taskList')

const template = document.querySelector('#taskTemplate');

//Função a fim de criar uma nova card
function createCard() {

  const clone = template.content.cloneNode(true);

  clone.querySelector('.cardTitle').textContent = input.value;

  const botaoRemover = clone.querySelector('.removeButton');
  //Remover Card
  const card = clone.querySelector('.card');
  botaoRemover.addEventListener('click', () => {
    card.remove();
  });

  //Ligar Card
  listagem.appendChild(clone);

  input.value = "";
}
//Adicionar Card
formAdicionarTarefa.addEventListener('submit', (evt) => {

  evt.preventDefault();

  if(input.value.trim() === "") {return}


  createCard()

})




