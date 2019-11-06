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

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); // mili
    var expires = "expires=" + d.toUTCString(); 
//     out2.textContent = expires; //expires=Fri, 17 May 2019 14:18:22 GMT
    var myCookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    // out3.textContent = myCookie;
    document.cookie = myCookie;
}
// setCookie("language", "de", 2);


console.log(document.cookie); //string 
// let objArr = Object.entries({id: 6, key: true});

// out4.innerText = objArr;
// console.log({id: 6}.toString());

//language=de;expires=Fri, 17 May 2019 14:32:25 GMT;path=/
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}
checkCookie();

function addTodo() {
    getSelected();
    /* navigator.storage.persist().then(persisted => {
        if(persisted) {
          /* … */
       /* }
      }) */
    todos.push(new Todo(todos.length, titleInp.value, false, dlInp.value, collaborators));
    console.log(todos);
    let todosStringsArray = [];
    for (let i = 0; i < todos.length; i++) {
        console.log(Object.entries(todos[i]));        
        todosStringsArray.concat(Object.entries(todos[i]));
        console.log(todosStringsArray);

    }
    setCookie('todos', todosStringsArray.toString(), 2);

    // let cookieArr = [{id: 5},{id: 6}];


    
    console.log(document.cookie);
    // let formObj = window.document.forms[0];
    // console.log(window.document.forms[0]);
    // for(let prop in formObj) {
    //     console.log(prop);
    // }
    // console.info('name');
    // console.log(document.addFormName.addInpName)
    
    // tlAncer.click();
    // showTodoList();
}

document.addFormName.addInpName.addEventListener('click', addTodo);
// getElementById(newFunction()).addEventListener('click', addTodo);

function newFunction() {
    return 'addInp';
}
