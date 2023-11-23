
const button = document.querySelector("button");
// bottone
button.addEventListener("click", function(){

    // numeri casuali tra 1 e 6
    let numero_giocatore = Math.floor(Math.random() * 6) + 1;
    document.getElementById("giocatore").textContent = numero_giocatore

    let numero_pc = Math.floor(Math.random() * 6) + 1;
    document.getElementById("pc").textContent = numero_pc



    // confrontare i risultati
    if(numero_giocatore > numero_pc){
        let risultato = "Hai vinto!!"
        console.log(risultato)
        document.getElementById("risultato").textContent = risultato
    }

    else if (numero_giocatore < numero_pc){
        let risultato = "Hai perso!!"
        console.log(risultato)
        document.getElementById("risultato").textContent = risultato
    }

    else{
        let risultato = "Pareggio"
        console.log(risultato)
        document.getElementById("risultato").textContent = risultato
    }})