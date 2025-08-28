const inputBox=document.getElementById('inputBox');
const addBtn=document.getElementById('addBtn');
const todoList=document.getElementById('todoList');
const addTodo = ()=> {
    const inputText=inputBox.value.trim();
    if(inputText.length<=0){
        alert("Yor must write something in your to do");
   }
   else {
    // Creating p tag 
    const li=document.createElement('li');
    const p=document.createElement('p');
    p.innerHTML=inputText;
    li.appendChild(p);
    todoList.appendChild(li);
     inputBox.value="";

     // creating remove button
    const DeleteBtn= document.createElement('button');
    DeleteBtn.innerText='Remove';
    DeleteBtn.classList.add("btn");
    li.appendChild(DeleteBtn);
    // creating edit button
    const EditBtn= document.createElement('button');
    EditBtn.innerText='Edit';
    EditBtn.classList.add("btn");
    li.appendChild(EditBtn);
   }
}
addBtn.addEventListener('click',addTodo);

