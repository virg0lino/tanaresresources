function loadLibrary(elementId) {
    fetch("https://tanaresresouces.imfast.io/livraria.html", {
            method: 'get' // opcional 
        })
        .then(function(response) {
            response.text().then(function(text) {
                const div = document.createElement('div');
                div.innerHTML = text;
                let element = document.getElementById(elementId);
                element.appendChild(div);
            });
        })
        .catch(function(err) { console.log(err); });
}

function download(objeto, nomeArquivo) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(objeto)));
    element.setAttribute('download', nomeArquivo);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}