let myArray = [];
function addTodo() {
  let todo = document.querySelector('.js-name-input');
  let name = todo.value;
  myArray.push(name);
  console.log(myArray);

  todo.value = '';
}


let todoList = [];

function addTodoArray() {

  let inputElement = document.querySelector('.js-name-input-array');
  let name = inputElement.value;

  todoList.push(name);
  console.log(todoList);
  inputElement.value = '';

  let divElement = document.querySelector('.js-todo-names');
  divElement.innerHTML = displayTodoList(todoList);

}


function displayTodoList(list) {
  let htmlString = '';
  for(let i = 0; i < list.length; i++) {
    htmlString += '<p>' + list[i] + '</p>';
  }
  return htmlString;
}

