window.onload = showTodoList;

function showDocuments() {

    console.log(window);
    console.log(window.document);
}

function showTodoList() {
    /* if (todos) {
        console.log('showTodoList');
    } */
    fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => giveTodosAsTable(json))
    

}
let varDiv2 = document.getElementById('todosTable');

function giveTodosAsTable(todos) {
    

    for (let i = 0; i < todos.length; i++) {
        let newRow = varDiv2.insertRow();
        console.log(newRow);
        newRow.insertCell().textContent = todos[i].id;
        newRow.insertCell().textContent = todos[i].title;
        newRow.insertCell().textContent = todos[i].completed;
    }
}

