var cont = 0;
var database = firebase.database();


var textRef = firebase.database().ref('texto/');
textRef.on('value', function (snapshot) {  
    updateText(snapshot.val());
});


var numRef = firebase.database().ref('numero/');
numRef.on('value', function (snapshotm) {
    textRef.on('value', function (snapshot) {  
        updateText(snapshot.val());
    });
});

function contador() {
    cont++;
    document.getElementById("num").innerHTML = cont;
    firebase.database().ref('numero/').set(cont);
    
}

function text(event, campo) {
    var texto = event.value;
    firebase.database().ref('texto/' + cont + '/' +campo).set(texto);
}


function updateText(text) {
    document.querySelector("#textid2").value = text.cont.idade;
    document.querySelector("#textid").value = text.cont.idade;
}





