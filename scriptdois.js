/* opção abrir e fechar menu
//habilitar input para incluir tarefa
function enableInput(){
    const txtTarefa = document.getElementById('addTarefa');

    if(document.getElementById('btnAdd').click){
        txtTarefa.style.display = "flex";
    }
}
//remove o input de criar tarefa
function removeInput(){
    const txtTarefa = document.getElementById('addTarefa');

    if(document.getElementById('btnRemoveDiv').click){
        txtTarefa.style.display = "none";
    }
}


/*
adicionar tarefa na lista quando clicar no botao add
remover tarefa da lista quando clicar no botao remove
confirmar tarefa realizada
*/
//----------------------------------------- 


// 1 - adicionar tarefa na lista qnd clicar no btn
function focusClick(){
    const elementoInput = document.getElementById('txtTarefa')
    elementoInput.style.borderBottom='1px solid #873EFF'
    elementoInput.placeholder =''
}
function adcTarefa(){
    /*  - pegar o elemento input
        - pegar o texto da tarefa no valor do input
        - criar a li
        - colocar o texto em uma li
        - criar botao de remover tarefa
        - resetar o input
        - colocar li dentro da ul
        -
    */
    const elementoInput = document.getElementById('txtTarefa') // pegando o input
    const textoTarefa = elementoInput.value // pegando texto do input
        if(textoTarefa === ''){
            elementoInput.style.borderBottom ='1px solid red'
            elementoInput.placeholder ='Please enter the task...'
            return
        }

    //------------------------
    const elementoTarefa = document.createElement('li') // li criada
    const span = document.createElement('span')// span criado para texto não ficar solto no html
    span.textContent = textoTarefa // colocando o texto no span
    elementoTarefa.appendChild(span)  // aqui ele vai pegar o texto digitado, e colocar dentro da li


    //------------------------
    const btnRemove = document.createElement('button') // botao de remover criado
    function clickListener(event){ // função para verificar quando ocorrer o evento de click no botao de remover
        removeTask(elementoTarefa) // executa a função de remover o elemento
    }
    btnRemove.className = 'btnRemove' // classe criada para estilar o botao de remover
    btnRemove.addEventListener('click', clickListener)
    

    //------------------------
    const btnDone = document.createElement('button') // botao confirmar tarefa feito
    function clickListenerDone(event){
        doneTaks(elementoTarefa)
    }
    btnDone.className = 'btnDone'
    btnDone.addEventListener('click', clickListenerDone)
    //------------------------
    const divBtn = document.createElement('div') // div criada para deixar os botoes separado da li
    divBtn.appendChild(btnDone) // incluindo o botao de confirmar
    divBtn.appendChild(btnRemove) // incluindo o botao remover
    
    elementoTarefa.appendChild(divBtn) // colocando a div de botoes romver/confirmar junto com a li
    divBtn.className = 'divBtn'

    //------------------------
    elementoInput.value = '' // reseta o input
    elementoInput.placeholder = 'Enter the task...' // retorna placeholder original
    

    //------------------------
    const elementoUl = document.getElementById('lista') // pegando o elemento ul do html
    elementoUl.appendChild(elementoTarefa)// colocando o li dentro da ul

}

// 2 - remover tarefa

function removeTask(li){ // funçao criada para remover li
    li.remove() // metodo remove() que remove os objetos, no caso a li
}

//3 - botao de enter adicionar tarefa

function clickEnter(event){
    if (event.key === 'Enter')
    adcTarefa()
}

//4 - botao de confirmar tarefa
    // pegar a tarefa inserida
    // tirar da lista de tarefas
    // enviar para lista de confirmadas
    // ter um botao de remover
    // ter botao de voltar tarefa na lista de fazeres
function doneTaks(li){
    const clone = li.cloneNode(true) // clonando a li criada
    const listaConfirmada = document.getElementById('lista-confirmada') // pegando a div do box 3
    listaConfirmada.appendChild(clone) // incluido a  li na div do box 3
    li.remove()// removando a antiga li da lista de tarefas

    const btns = clone.querySelectorAll('button')// seleciona os botoes do clone
    
    function clickListenerRemove(event){// função para remover a tarefa da lista concluida
        removeTask(clone) // metodo para remover a tarefa clone
    }
    btns[1].addEventListener('click', clickListenerRemove) 
    
    function clickListenerBack(){ // função para voltar a tarefa na lista
        const lista = document.getElementById('lista') // pegando a div lista da box-2
        lista.appendChild(li) // incluindo a lista clone na div principal
        removeTask(clone) // removendo da lista de tarefa concluida
    }
    btns[0].className = 'btnRestartLi'// classe criada para o botao back
    btns[0].addEventListener('click', clickListenerBack)
    
    
}






  