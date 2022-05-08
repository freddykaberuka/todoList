import './style.css';
import Todo from './modules/todo.js';
import Status from './modules/complete.js';

const todo = new Todo();
const newStatus = new Status();

document.getElementById('btn').addEventListener('click', () => {
  todo.clearLocalStorage();
});
todo.newTodolist();
todo.displayTodo();

const editValue = document.querySelectorAll('.editInput');
editValue.forEach((item) => {
  item.addEventListener('change', (e) => {
    todo.editTodo(e.target.value, e.target.dataset.id);
  });
  item.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      todo.editTodo(e.target.value, e.target.dataset.id);
    }
  });
});

const trash = document.querySelectorAll('.delete');
trash.forEach((el) => {
  el.addEventListener('click', (e) => {
    todo.removeTodo(e.target.dataset.id);
    window.location.reload();
  });
});

newStatus.dataCheck(todo.todostore);
