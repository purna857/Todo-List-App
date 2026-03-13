let inputEle = document.getElementById("input-ele");
let addBtn = document.getElementById("add-todo-btn");
let todoItems = document.getElementById("list-Items");


let todoList = [
    { text: "Learn Html" }, {text: "Learn CSS" }, {text: "Learn JavaScript" }
]

function createTodoList(todo){

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item" , "d-flex", "flex-row");
    todoItems.appendChild(todoElement);
     
    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = "checkbox";
    inputElement.classList.add("checkbox-Input");
    todoElement.appendChild(inputElement);
     
    let labelContainer = document.createElement("div");
    labelContainer.classList.add("todo-label" , "d-flex", "flex-row" ,"justify-content-between");

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", "checkbox");
    labelElement.classList.add("label-text");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);
    todoElement.appendChild(labelContainer);

    let deleteContainer = document.createElement("div");
    deleteContainer.classList.add("delete-btn-container");
    labelContainer.appendChild(deleteContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash-can", "delete-icon");
    deleteContainer.appendChild(deleteIcon);
}

for(let todo of todoList){
    createTodoList(todo);
}