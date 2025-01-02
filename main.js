

function addListItem() {
    const listContainer = document.querySelector('.listContainer');

    const item = document.createElement('div');

    const newItem = prompt('Что добавить?');

    item.innerHTML = `${newItem}<button onclick="deleteItem(this)" id="del">⛔</button><br>`;

    listContainer.appendChild(item);

}

function deleteItem(button) {
    const listContainer = document.querySelector('.listContainer');

    if (!listContainer) {
      console.error('No element with class "list" found.');
      return;
    }
    
    const item = button.parentElement;
    listContainer.removeChild(item);
  }

function deleteAll() {
 const listContainer = document.querySelector('.listContainer');
    const answer = prompt('Вы уверены, что хотите удалить все элементы?');
    if (answer === 'да') {
        listContainer.innerHTML = '';
    } else if (answer === 'нет') {
        return;
    } else {
        alert('Введите "да" или "нет"');
    }
}
