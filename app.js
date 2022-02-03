// variables
let todoInput, errorInfo , addBtn, ulList,newTodos,header,tools,toolsBtn,toolsBtn1,toolsBtn2,toolsBtn3,liElem,popup,popupInfo,todoToEdit,popupInput,popupAddBtn,popupCloseBtn; //variables used later in script 
const main = () => {
    // main function just activating the others 2 functions
    prepareDOMElement();
    prepareDOMEvents();
}
const prepareDOMElement = () => {
    // function having all variables in it
    todoInput=document.querySelector(".todo-input")
    errorInfo=document.querySelector(".error-info")
    addBtn=document.querySelector(".btn-add")
    ulList=document.querySelector(".todolist ul")
    header=document.querySelector(".header")

    popup=document.querySelector(".popup")
    popupInfo=document.querySelector(".popup-info")
    popupInput=document.querySelector(".popup-input")
    popupAddBtn=document.querySelector(".accept")
    popupCloseBtn=document.querySelector(".cancel")
    
}
const prepareDOMEvents = () => {
    // function having all event listeners
    addBtn.addEventListener("click",addTodoItem)
    ulList.addEventListener("click",CheckBtn)
    popupCloseBtn.addEventListener("click",closePopUp)
    popupAddBtn.addEventListener("click",changeTodoText)
    todoInput.addEventListener("keyup",enterKeyCheck)
}
// add todo items or notify the user that he needs to type something in input
const addTodoItem = () => {
    if (todoInput.value!=='') {
        newTodos=document.createElement("li")
        ulList.appendChild(newTodos)
        newTodos.textContent=todoInput.value
        createToolsArea()
        todoInput.value=''
        errorInfo.textContent=''
    } else {
        errorInfo.textContent="Hej! wpisz treść zadania!"
    }
}
const createToolsArea = () => {
    tools=document.createElement("div")
    tools.classList.add("tools")
    newTodos.append(tools)

    toolsBtn1=document.createElement("button")
    toolsBtn1.classList.add("complete")
    toolsBtn1.innerHTML='<i class="fas fa-check"></i>'

    toolsBtn2=document.createElement("button")
    toolsBtn2.classList.add("edit")
    toolsBtn2.innerHTML='EDIT'

    toolsBtn3=document.createElement("button")
    toolsBtn3.classList.add("delete")
    toolsBtn3.innerHTML='<i class="fas fa-times"></i>'
    tools.append(toolsBtn1,toolsBtn2,toolsBtn3)
    
}
// const add = (x,y) => {
//     const score=x+y
//     showScore(score)
// }
// const showScore = (sth) => {
//     console.log(`Twój wynik to: ${sth}`)
// }
// add(5,5)
// just training
const CheckBtn = (e) => {
    if (e.target.matches(".complete")) {
        e.target.closest("li").classList.toggle("completed")
        e.target.classList.toggle("completed")
    } else if(e.target.matches(".edit")) {
        editTodo(e)
    }else if(e.target.matches(".delete")){
        deleteTodo(e)
    }
}
const editTodo = (e) => {
    todoToEdit=e.target.closest('li')
    console.log(todoToEdit)
    popupInput.value=todoToEdit.firstChild.textContent
    console.log(todoToEdit.firstChild)
    popup.style.display="flex"
}
const closePopUp = () => {
    popup.style.display="none"
    popupInfo.textContent=''
}
const changeTodoText = () => {
    if (popupInput.value!=='') {
        todoToEdit.firstChild.textContent=popupInput.value
        popup.style.display='none'
        popupInfo.textContent=''
    }else{
        popupInfo.textContent="musisz podać jakąś treść!"
    }
}
const deleteTodo = (e) => {
    e.target.closest("li").remove()
    const allTodos=ulList.querySelectorAll("li")
    if (allTodos.length===0) {errorInfo.textContent='Brak zadań na liście'}
    
}
const enterKeyCheck = e => {
    if (e.key==='Enter') {
        addTodoItem()
    }
}

// const checkCard = () => {
//     let a;//a to input
//     if (a.value.charAt(0)===1) {
//         console.log("mastercard")
//     }else{
//         console.log("inna karta")
//     }
// }
document.addEventListener("DOMContentLoaded",main) //the script won't work untill DOM is completely loaded