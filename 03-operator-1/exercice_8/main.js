// Exercice 8
let salaireMensuel = 500;
let loyer = salaireMensuel * 0.3;
let nourriture = salaireMensuel * 0.2;
let transport = salaireMensuel * 0.1;
let autresDepenses = 50 + 25;
let totalDepenses = loyer + nourriture + transport + autresDepenses;
let reste = salaireMensuel - totalDepenses;

// Affichage des résultats
console.log("Salaire mensuel :", salaireMensuel);
console.log("Loyer :", loyer);
console.log("Nourriture :", nourriture);
console.log("Transport :", transport);
console.log("Autres dépenses :", autresDepenses);
console.log("Total des dépenses :", totalDepenses);
console.log("Reste après dépenses :", reste);

if (reste >= 100) {
  console.log("budget bien géré");
} else {
  console.log("attention, budget séré");
}
let loisir = salaireMensuel * 0.15;

totalDepenses = totalDepenses + loisir;
reste = salaireMensuel - totalDepenses;

// total De depenses en %
console.log(
  "pourcentage du salaire mensuel utilisé pour le loyer ",+ (loyer / salaireMensuel * 100) + "%"
);
console.log(
  "pourcentage du salaire mensuel utilisé pour la nourriture",+ (nourriture / salaireMensuel * 100 )+ "%"
);
console.log(
  "pourcentage du salaire mensuel utilisé pour le transport", + (transport / salaireMensuel * 100) + "%"
);
console.log(
  "pourcentage du salaire mensuel utilisé pour le loisirs", + (loisir / salaireMensuel * 100) + "%"
);
console.log(
  "pourcentage du salaire mensuel utilisé pour les autres depenses", + (autresDepenses / salaireMensuel * 100 )+ "%"
);
// mis à jour du salaire +10%
salaireMensuel *= 1.10;

loyer = salaireMensuel * 0.3;
nourriture = salaireMensuel * 0.2;
transport = salaireMensuel * 0.1;
loisir = salaireMensuel * 0.15;
totalDepenses = loyer + nourriture + transport + autresDepenses + loisir;
reste = salaireMensuel - totalDepenses;

console.log(
    "nouveau salaire mensuel" , + salaireMensuel
);
console.log(
    "nouveau loyer" , + loyer
);
console.log(
    "nouveau montant pour la nourriture" , + nourriture
);
console.log(
    "nouveau montant pour le transport" , + transport  
);
console.log(
    "nouveau montant pour les loisirs" , + loisir
);
console.log(
    "nouveau montant pour la totalité des dépenses" , + totalDepenses  
);
console.log(
    "nouveau montant du reste" , + reste
);

// verification des si la depense est excessive

if (totalDepenses > salaireMensuel * 0.90){
    console.log("depensense trop élévé, reduisez vos charges ");
}
else {
console.log("depenses sous controle");
}



