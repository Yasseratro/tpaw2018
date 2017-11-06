function validation(){   
    
        if(document.getElementById("nome").value.length<5 || document.getElementById("pre").value.length<5 || document.getElementById("date").value.length<10 || document.getElementById("addres").value.length<5 || document.getElementById("mail").value.length<5)
        {
            document.getElementById("correct").setAttribute("hidden","hidden");
            document.getElementById("erreur").removeAttribute("hidden");
            document.getElementById("erreur").innerHTML = "La saisie de tout les champs est obligatoire";
        }
        else{
            document.getElementById("erreur").setAttribute("hidden","hidden");
            document.getElementById("correct").removeAttribute("hidden");
            document.getElementById("correct").innerHTML = "Bienvenue " + document.querySelector("#nome").value;
        }



    }