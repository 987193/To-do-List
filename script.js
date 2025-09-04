const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
let editTodo = null;
// Function to add ToDo
const addTodo = () => {
    const inputText = inputBox.value.trim();
    if (inputText.length <= 0) {
        alert("Yor must write something in your to do");
        return false;
    }
    if (addBtn.value === "Edit") {
        editTodo.target.previousElementSibling.innerHTML = inputText;
        addBtn.value = "Add";
        inputBox.value = "";
    }
    else {
        // Creating p tag 
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerHTML = inputText;
        li.appendChild(p);
        todoList.appendChild(li);
        inputBox.value = "";

        // creating edit button
        const EditBtn = document.createElement('button');
        EditBtn.innerText = 'Edit';
        EditBtn.classList.add("btn", "EditBtn");
        li.appendChild(EditBtn);

        // creating remove button
        const DeleteBtn = document.createElement('button');
        DeleteBtn.innerText = 'Remove';
        DeleteBtn.classList.add("btn", "DeleteBtn");
        li.appendChild(DeleteBtn);
        todoList.appendChild(li);
        inputBox.value = "";
        saveLocalTodos(inputText);
    }
}

// function to update ToDo
const updateTodo = (e) => {
    // console.log(e.target.innerHTML);
    if (e.target.innerHTML === "Remove") {
        todoList.removeChild(e.target.parentElement);
        deleteLocalTodos(e.target.parentElement);
    }
    if (e.target.innerHTML === "Edit") {
        inputBox.value = e.target.previousElementSibling.innerHTML;
        editLocalTodos(inputBox);
        inputBox.focus();
        addBtn.value = "Edit";
        editTodo = e;

    }

}
// Function to save Local todos
const saveLocalTodos = (todo) => {
    let todos = [];
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {

        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}
// Function to get Local todos
const getLocalTodos = () => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {

        todos = JSON.parse(localStorage.getItem("todos"));
        todos.forEach(todo => {
            // Creating p tag 
            const li = document.createElement('li');
            const p = document.createElement('p');
            p.innerHTML = todo;
            li.appendChild(p);
            todoList.appendChild(li);
            inputBox.value = "";

            // creating edit button
            const EditBtn = document.createElement('button');
            EditBtn.innerText = 'Edit';
            EditBtn.classList.add("btn", "EditBtn");
            li.appendChild(EditBtn);

            // creating remove button
            const DeleteBtn = document.createElement('button');
            DeleteBtn.innerText = 'Remove';
            DeleteBtn.classList.add("btn", "DeleteBtn");
            li.appendChild(DeleteBtn);
            todoList.appendChild(li);
        })
    }

}
// Function to delete Local todos
const deleteLocalTodos=(todo)=>{
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {

        todos = JSON.parse(localStorage.getItem("todos"));
    }
    let todoText=todo.children[0].innerHTML;
    let todoIndex=todos.indexOf(todoText);
    todos.splice(todoIndex,1);
    localStorage.setItem("todos",JSON.stringify(todos));
    
    
}
// Function to edit in local todos
const editLocalTodos=(todo)=>{
    let todos=JSON.stringify(localStorage.getItem("todos"));
    let todoIndex=todos.indexOf(todo);
    todos[todoIndex]=inputBox.value;
    localStorage.setItem("todos",JSON.stringify(todos));

}
document.addEventListener('DOMContentLoaded',getLocalTodos);
addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', updateTodo);
