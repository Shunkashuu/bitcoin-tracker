const url = 'https://blockchain.info/ticker';

function recupererPrix() {
    // créer une requete
    let requete = new XMLHttpRequest(); //créer un objet
    requete.open('GET', url);  //premier parametre get (recuperer des données) + deuxieme para url
    requete.responseType = 'json';
    requete.send();

    // dès qu'on reçoit une réponse, cette fonction est executée
    requete.onload = function() {
        if(requete.readyState === XMLHttpRequest.DONE) {
            if(requete.status === 200) {
                let reponse = requete.response; //on stock la réponse
                let prixEnEuros = reponse.EUR.last;
                document.querySelector('#price_label').textContent = prixEnEuros;
            } else {
                alert('Un problème est survenu, merci de réessayer plus tard.');
            }
        }
    }
    console.log('Prix actualisé');
}

setInterval(recupererPrix, 1000);