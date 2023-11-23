// creazione archivio
let archivio = ["daniel.digiacomo@gmail.com", "laura75@gmail.com", "marco35@gmail.com", "silvia04@gmail.com"]



// assegnazione bottone
const button = document.querySelector("button");
let email 

    button.addEventListener("click", function(){
       email = document.getElementById("email").value
       console.log(email)
       let esito
        // ricerca email archivio
      for (let i = 0; i < archivio.length; i++){
        if(email == archivio[i]){
            esito = true;
           };
        }
        
        // esito positivo
        if(esito == true){
            document.getElementById("negativo").textContent = ""
            document.getElementById("positivo").textContent = "COMPLIMENTI!"
        }

        // esito negativo
        else{
            document.getElementById("positivo").textContent = ""
            document.getElementById("negativo").textContent = "EMAIL NON TROVATA!"
        }
    })