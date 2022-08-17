const todoList = document.querySelector('#todo-list');
const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const newLi = document.createElement("li");
    newLi.addEventListener('click', function(e){
        newLi.className = 'completed'
    })
    const button = document.createElement('button');
    button.innerText = 'REMOVE'
    button.addEventListener('click', function(e){
        e.target.parentElement.remove();
    })
    newLi.innerText = input.value + '  ';
    const spacing = document.createElement('p')
    newLi.appendChild(button)
    todoList.appendChild(newLi);
    todoList.append(spacing)
    form.reset();
})

