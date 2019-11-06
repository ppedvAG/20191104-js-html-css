var todos = [];

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

function addTodo() {
    getSelected();
    navigator.storage.persist().then(persisted => {
        if(persisted) {
          /* … */
        }
      })
    todos.push(new Todo(todos.length, titleInp.value, false, dlInp.value, collaborators));
    console.log(todos);
    let formObj = window.document.forms[0];
    for(let prop in formObj) {
        console.log(prop);
    }
    console.info('name');
    console.log(document.addFormName.addInpName)
    
    // tlAncer.click();
    // showTodoList();
}

document.addFormName.addInpName.addEventListener('click', addTodo);
// getElementById(newFunction()).addEventListener('click', addTodo);

function newFunction() {
    return 'addInp';
}
