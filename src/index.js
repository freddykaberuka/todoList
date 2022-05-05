const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('.list-todos');

class Todo {
    constructor(description, id, completed) {
        this.description = description;
        this.id = id;
        this.completed = completed;
    }
}

let todos = [];

// display todos
function displayTodos() {
    const data = localStorage.getItem('todos');
    if(data){
        const parsedData = JSON.parse(data);
        todos = parsedData;
        todoList.innerHTML = parsedData.map((el) => 
            `<div>
               
                        <div class="todo-item">
                            <input type="checkbox" class="checkbox">
                            <p>${el.description}</p>
                        </div>
                    
            </div>`
        ).join('');
    }
}

// add todo

todoForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const todoDescription = document.getElementById('description').value;
    const id = todos.length;
    const todo = new Todo(todoDescription, id, false);
    todos = [...todos, todo];
    localStorage.setItem('todos', JSON.stringify(todos));
    document.getElementById('description').value = '';
    displayTodos();
});

window.addEventListener = ('load',()=>{
    displayTodos();
});
