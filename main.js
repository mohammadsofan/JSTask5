
let count=0;
const addBtn=document.querySelector(".box form input:last-child");
addBtn.onclick=addTask;

document.querySelector(".box form").addEventListener('submit',function(e){
    e.preventDefault();
}
);

function addTask(){
    const tasksDiv =document.querySelector('.tasks');
    const inputTask=document.querySelector(".box form input:first-child").value;
    if(inputTask.length!=0){
    const content=tasksDiv.innerHTML;
    const newTask=`
        <div class='task'>
            <input type='checkbox' onclick='taskFinished(this)' data-id=${count} >
            <p data-id=${count}>${inputTask}</p>
        </div>
    `;
    tasksDiv.innerHTML=content + newTask;
    count++;
    }
    else{
        alert('please enter a new task');
    }
}

function taskFinished(e){
    if(e.checked){
    document.querySelector(`.task p[data-id='${e.dataset.id}']`).style.textDecoration='line-through';
    e.setAttribute('checked','');
    }
    else{
        document.querySelector(`.task p[data-id='${e.dataset.id}']`).style.textDecoration='none';
        e.removeAttribute('checked')
    }

}
