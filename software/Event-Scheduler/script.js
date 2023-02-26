const freetime = document.getElementById('freetime')
const lecture = document.getElementById('lecture')
const revision = document.getElementById('revision')
const game = document.getElementById('game')
const code = document.getElementById('code')
const discussion = document.getElementById('discussion')
const deselect = document.getElementById('deselect')
const taskContainer = document.querySelector('.task__container')
const scheduleContainer = document.querySelector('.schedule__container')
const resetBtn = document.querySelector('.deleteBtn')
const popUp = document.querySelector('.pop-up__container')
const noBtn = document.getElementById('btn__no')
const yesBtn = document.getElementById('btn__yes')

let selectedColor, active

taskContainer.addEventListener('click', selectTask);
scheduleContainer.addEventListener('click', setColors);
deselect.addEventListener('click', resetTasks);
resetBtn.addEventListener('click',openPopup);
noBtn.addEventListener('click', closePopup);
yesBtn.addEventListener('click', deleteTasks);

function selectTask(e){
    resetTasks();

    taskColor = e.target.style.backgroundColor;

    switch(e.target.id){
        case 'freetime':
            activeTask(freetime, taskColor);
            icon = '<i class="fas fa-home"></i>'
            break;
        case 'lecture':
            activeTask(lecture, taskColor);
            icon = '<i class="fa fa-graduation-cap"></i>'
            break;
        case 'revison':
            activeTask(revision, taskColor);
            icon = '<i class="fa fa-book"></i>'
            break;
        case 'game':
            activeTask(game, taskColor);
            icon ='<i class="fas fa-gamepad"></i>'
            break;
        case 'code':
            activeTask(code, taskColor);
            icon = '<i class="fas fa-code"></i>'
            break;
        case 'discussion':
            activeTask(discussion, taskColor);
            icon = '<i class="fas fa-users"></i>'
            break;
    }
}

function setColors(e){
    if(e.target.classList.contains('task') && active === true){
        e.target.style.backgroundColor = selectedColor;
        e.target.innerHTML = icon
    }else if(e.target.classList.contains('fas') && active === true){
        e.target.parentElement.style.backgroundColor = selectedColor;
        e.target.parentElement.innerHTML = icon;
    }
}

function activeTask(task, color){
    task.classList.toggle('selected');

    if(task.classList.contains("selected")){
        active = true;
        selectedColor = color;
        return selectedColor;
    }else{
        active = false;
    }
}

function resetTasks(){
    const allTasks = document.querySelectorAll('.task__name');

    allTasks.forEach((item)=>{
        item.className = 'task__name';
    })
}

// Delete tasks
function deleteTasks(){
    const tasks = document.querySelectorAll('.task');

    tasks.forEach((item)=>{
        item.innerHTML = '';
        item.style.backgroundColor = 'white';
    })

    closePopup();
}

// Open Pop-up
function openPopup(){
    popUp.style.display = 'flex';
}

// Close Pop-up
function closePopup(){
    popUp.style.display = 'none';
}