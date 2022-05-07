export default class Status {
    dataCheck = (data) => {
      const allcheckbox = document.querySelectorAll('.check-box');
      const allToCheck = document.querySelectorAll('.editInput');
      allcheckbox.forEach((el, items) => {
        el.addEventListener('click', () => {
          allToCheck[items].classList.toggle('checked__data');
          data[items].isCompleted = !data[items].isCompleted;
          localStorage.setItem('todostorage', JSON.stringify(data));
        });
      });
    }
}