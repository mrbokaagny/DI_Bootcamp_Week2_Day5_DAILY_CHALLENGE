 function singSong() {
    let nbreOfBouttll = prompt("Entrez un nombre de bouteilles de bière pour commencer à chanter :");
    nbreOfBouttll = parseInt(nbreOfBouttll, 10);

    if (nbreOfBouttll < 1) {
        console.log("Aucune bouteille de bière sur le mur");
        return;
    }

    let count = 1; 
    while (nbreOfBouttll > 0) {
        let bottleWord = "bouteilles";
        if (nbreOfBouttll === 1) {
            bottleWord = "bouteille";
        }
        console.log(nbreOfBouttll + " " + bottleWord + " de bière sur le mur");
        console.log(nbreOfBouttll + " " + bottleWord + " de bière");
        console.log("Prenez-en " + count + ", passez-" + (count === 1 ? "la" : "les") + " autour");
        nbreOfBouttll -= count;
        count++;
    }
    console.log("Aucune bouteille de bière sur le mur");
}


