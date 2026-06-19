let tasks=[];
const taskinput=document.getElementById("taskInput");
const addtask=document.getElementById("add-task-btn");
const todo=document.getElementById("todo-list");
const progres=document.getElementById("progress");
function addtask(){
    const tasktext=taskinput.value.trim();
    if(tasktext==""){
        alert("Please enter a task");
        return;
    }
    const task={id:Date.now(),text:tasktext,completed:false};
    tasks.push(task);
    taskinput.value="";
    rendertasks();
}