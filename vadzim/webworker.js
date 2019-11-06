let i = 0;

function Counter() {
    i = i + 1;

    //Sendet eine Nachricht zurück an die HTML-Seite

    // https://picsum.photos/v2/list
    /* fetch('https://picsum.photos/v2/list')
    .then(response => response.json())
    .then(json => console.log(json)) */
    postMessage(i);
    setTimeout("Counter()", 1000);
}

Counter();