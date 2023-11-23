// numeri casuali tra 1 e 6
let numero_giocatore = Math.floor(Math.random() * 6) + 1;
let numero_pc = Math.floor(Math.random() * 6) + 1;

// confrontare i risultati
if(numero_giocatore < numero_pc){
    let risultato = "Hai vinto!!"
    console.log(risultato)
}

else if (numero_giocatore > numero_pc){
    let risultato = "Hai perso!!"
    console.log(risultato)
}

else{
    let risultato = "Pareggio"
    console.log(risultato)
}