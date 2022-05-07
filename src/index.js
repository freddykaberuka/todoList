import './style.css';
import Todo from './modules/todo.js';

const todo = new Todo();

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
  });
});
