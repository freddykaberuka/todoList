export default class Todo {
  constructor() {
    this.todostore = JSON.parse(localStorage.getItem('todostorage')) || [];
  }

newTodolist = () => {
  const todoForm = document.querySelector('#todo-form');
  todoForm.addEventListener('keypress', (e) => {
    if (e.code === 'Enter') {
      if (e.target.value.length > 0) {
        const value = {
          description: e.target.value,
          isCompleted: false,
          index: this.todostore.length,
        };
        this.todostore.push(value);
        localStorage.setItem('todostorage', JSON.stringify(this.todostore));
        todoForm.reset();
      }
    }
    this.displayTodo();
  });
}

displayTodo = () => {
  const todoList = document.querySelector('.list-todos');
  todoList.innerHTML = this.todostore.map((el, index) => (`<div>
                        <div class="todo-item">
                            <div class="item-wrap checked"><input type="checkbox" class="check-box">
                            <input type="text" class="editInput ${!!el.isCompleted}"  data-id="${el.index}" value="${el.description}" />
                            </div>
                            <div><i data-id='${index}' class="fa-solid fa-trash delete"></i>
                            <i class="fa-solid fa-ellipsis-vertical" data-id='${index}'></i></div>
                        </div>   
            </div>`)).join('');
}

editTodo = (value, index) => {
  this.todostore[index].description = value;
  localStorage.setItem('todostorage', JSON.stringify(this.todostore));
}

removeTodo = (idx) => {
  this.todostore.splice(idx, 1);
  for (let i = 0; i < this.todostore.length; i += 1) {
    this.todostore[i].index = i;
  }
  localStorage.setItem('todostorage', JSON.stringify(this.todostore));
  this.displayTodo();
  window.location.reload();
}

clearLocalStorage = () => {
  const listToclear = this.todostore.filter((todo) => !todo.isCompleted);
  localStorage.setItem('todostorage', JSON.stringify(listToclear));
  this.todostore = listToclear;
  console.log(listToclear);
  window.location.reload();
}
}