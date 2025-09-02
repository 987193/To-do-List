const inputBox=document.getElementById('inputBox');
const addBtn=document.getElementById('addBtn');
const todoList=document.getElementById('todoList');
let editTodo = null;
const addTodo = ()=> {
    const inputText=inputBox.value.trim();
    if(inputText.length<=0){
        alert("Yor must write something in your to do");
        return false;
   }
//    if(addBtn.value==="Edit"){
//     editTodo.target.pre
//    }
    // Creating p tag 
    const li=document.createElement('li');
    const p=document.createElement('p');
    p.innerHTML=inputText;
    li.appendChild(p);
    todoList.appendChild(li);
     inputBox.value="";

     // creating edit button
    const EditBtn= document.createElement('button');
    EditBtn.innerText='Edit';
    EditBtn.classList.add("btn","EditBtn");
    li.appendChild(EditBtn);

     // creating remove button
    const DeleteBtn= document.createElement('button');
    DeleteBtn.innerText='Remove';
    DeleteBtn.classList.add("btn","DeleteBtn");
    li.appendChild(DeleteBtn);
    
   }
}
const updateTodo=(e)=>{
    // console.log(e.target.innerHTML);
    if(e.target.innerHTML=== "Remove"){
        todoList.removeChild(e.target.parentElement);
    }
    if(e.target.innerHTML=== "Edit"){
        inputBox.value=e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value="Edit";
        editTodo=e;

    }
    
}
addBtn.addEventListener('click',addTodo);
todoList.addEventListener('click',updateTodo);
