const darkModeToggle = document.querySelector('#darkModeToggle')

darkModeToggle.addEventListener('click', ()=> {
    document.body.classList.toggle('dark')

    if(document.body.classList.contains('dark')) {
        darkModeToggle.innerText = 'Dark Mode'
    } else {
        darkModeToggle.innerText = 'Light Mode'
    }
})


const formAdicionarTarefa = document.querySelector('#form')
const input = document.querySelector("#taskInput")

const buttonSubmit = document.querySelector('#buttonAdic')
//animação botão submit
buttonSubmit.addEventListener('click', () => {

    buttonSubmit.classList.remove('buttonSubmitClick')

    void buttonSubmit.offsetWidth;

    buttonSubmit.classList.add('buttonSubmitClick')
})


const listagem = document.querySelector('#taskList')

const template = document.querySelector('#taskTemplate');

const sendMessage = document.querySelector('.sendMessage')

//filtros
let filtro = "all";


//Botões filtros 

//botão Filtrar Todos
const buttonAll = document.querySelector('#filterAll')
buttonAll.addEventListener('click', () => {
    filtro = "all";
    buttonAllFilterClick();
    atualizar();
})
//botão Filtrar Pendentes
const buttonPending = document.querySelector('#filterPending')
buttonPending.addEventListener('click', () => {
    filtro = "pending"
    buttonFilterClick(buttonPending, buttonCompleted , buttonAll)
    atualizar()
})
//botão Filtrar Concluidos
const buttonCompleted = document.querySelector('#filterCompleted')
buttonCompleted.addEventListener('click', () => {
    filtro = "completed"
    buttonFilterClick(buttonCompleted, buttonPending, buttonAll)
    atualizar()
})

buttonAllFilterClick()

//span filters
const allTasks = document.querySelector('#allTasks')
const completedTasks = document.querySelector('#completedTasks')
const pendingTasks = document.querySelector('#pendingTasks')

//barras filtragem
const progressComplete = document.querySelector('.progressComplete')
const progressPending = document.querySelector('.progressPending')

//Dados
const data = [];

//ao dar submit no input apos ter digitado algo, push nas informações para a arr Data e e atualizar a tela
formAdicionarTarefa.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const texto = input.value.trim()

    //proibir conteudo vazio
    if(texto === "") {
        return
    }

    //proibir conteudo excessivo
    if(texto.length > 30) {
        return
    } 

    //Pushar conteudo para Banco de dados
    data.push({
        titulo: input.value,
        concluido: false
    })

    //Adicionar mensagem de tarefa enviada
    sendMessage.classList.add("ativar")

    setTimeout(() => {
        sendMessage.classList.remove('ativar')
    },2000)


    atualizar()

    input.value = ""
})


// apaga e refaz todo conteudo quando chamada
function atualizar() {
    listagem.innerHTML = ""

    //filtragem
    let tarefasFiltradas = data.filter((item) => {

        if(filtro === 'all') {return true}
        if(filtro === 'pending') {return item.concluido === false }
        if(filtro === 'completed') {return item.concluido === true}
        
    })

    //Função contabilidade
    contabilizarTarefas()


    
        //Cards Separados
        tarefasFiltradas.forEach((item) => {

            //clone template
            const clone = template.content.cloneNode(true)

            const cardTitle = clone.querySelector('.cardTitle')

            //titulo principal
            cardTitle.innerText = item.titulo

            //remover card
            const removeButton = clone.querySelector('.removeButton')

            removeButton.addEventListener('click', () => {

                const indice = data.indexOf(item)
                
                data.splice(indice, 1)
                atualizar()
            })

            //marcar como concluida 

            const checkBox = clone.querySelector('.checkBox');

            checkBox.checked = item.concluido;

            checkBox.addEventListener('change', function () {
                item.concluido = checkBox.checked;
                atualizar()
            })

            //adiciona para listagem
            listagem.appendChild(clone)

    })
}

 function contabilizarTarefas () {
         //todas as tarefas
         const totalTasks = data.length
         //tarefas finalizadas
         const conTasks = data.filter((con) => { return con.concluido === true}).length
         //tarefas pendentes
         const penTasks = data.filter((pen) => { return pen.concluido === false}).length

         allTasks.innerText = totalTasks
         completedTasks.innerText = conTasks
         pendingTasks.innerText = penTasks

        let completePercent = 0
        let pendingPercent = 0

         if (totalTasks > 0) {
             completePercent = (conTasks / totalTasks) * 100
             pendingPercent = (penTasks / totalTasks) * 100
         }
         //porcentagem Height
     progressComplete.style.height = `${completePercent}%`
     progressPending.style.height = `${pendingPercent}%`    
         //texto interno
     progressComplete.innerText = `${Math.floor(completePercent)}%`   
     progressPending.innerText = `${Math.floor(pendingPercent)}%`   

 }


 //funções animação filtros
 function buttonFilterClick (added, removed, special) {
    removed.classList.remove('buttonFilterClick')
    special.classList.remove('buttonAllFilterClick')

    added.classList.add('buttonFilterClick')

 }

  function buttonAllFilterClick () {
    buttonCompleted.classList.remove('buttonFilterClick')
    buttonPending.classList.remove('buttonFilterClick')

    buttonAll.classList.add('buttonAllFilterClick')

 }