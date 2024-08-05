const todoList = [
  {
    name: 'Wash dish',
    dueDate: '2022-12-22'
  }, 
  {
    name: 'Run',
    dueDate: '2023-03-23'
  }
];
console.log(todoList);
renderTodoList();

//generating the html
function renderTodoList() {
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const {name, dueDate} = todoObject;
    const html = `
      <div>
        ${name}
      </div>
      <div>
        ${dueDate}
      </div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();"
        class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  }
  console.log(todoListHTML);

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}



function addTodo(){
  const nameInputElement = document
    .querySelector('.js-name-input');

  const name = nameInputElement.value;

  const dateInputElement = document
    .querySelector('.js-due-date-input');

  const dueDate = dateInputElement.value;  
  todoList.push(
    {
    //name: name,
    //dueDate: dueDate
    //using shorthand property in an object
      name,
      dueDate
    }
  );

  console.log(todoList);
  //clear the value in the text box
  nameInputElement.value = '';
  renderTodoList();
}

function handleInputKeyDown(event) {
  if(event.key === 'Enter')
    addTodo();
}