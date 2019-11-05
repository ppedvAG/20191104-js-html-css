let todos = [];

let collaborators = [];

function getSelected() {
    // outPizza.textContent = '';
    // console.log('hallo aus getSelected');
    const extrasArr = document.getElementsByName('inpCheck'); // NodeList
    // console.log(extrasArr);
    // extrasArr.forEach(function (el) { return outPizza.innerText += el.checked; });   
    extrasArr.forEach(el => {
        if (el.checked === true) {
            collaborators.push(el.value);
        }
    });
}
function showTodoList() {

}

function addTodo() {
    getSelected();
    todos.push(new Todo(todos.length, titleInp.value, false, dlInp.value, collaborators));
    console.log(todos);
    tlAncer.click();
    showTodoList();
}
addInp.addEventListener('click', addTodo);