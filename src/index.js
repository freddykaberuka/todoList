import './style.css';

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
const displayTodos = () => {
  const data = localStorage.getItem('todostorage');
  if (data === undefined || data === null) { return; }

  const parsedData = JSON.parse(data);
  todos = parsedData;
  todoList.innerHTML = parsedData.map((el) => `<div>
                        <div class="todo-item">
                            <div class="item-wrap"><input type="checkbox" class="checkbox">
                            <p>${el.description}</p></div>
                            <div><i class="fa-solid fa-ellipsis-vertical"></i></div>
                        </div>   
            </div>`).join('');
};

// add todo

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoDescription = document.getElementById('description').value;
  const id = todos.length;
  const todo = new Todo(todoDescription, id, false);
  todos = [...todos, todo];
  localStorage.setItem('todostorage', JSON.stringify(todos));
  document.getElementById('description').value = '';
  displayTodos();
});

window.onload(displayTodos());
