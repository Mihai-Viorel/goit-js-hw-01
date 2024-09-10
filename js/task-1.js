// _____________________________________________________________________________________________________________________________________
// Sarcina 1. Comanda de droizi
// _____________________________________________________________________________________________________________________________________

// Stația de vânzare a droizilor de reparație este gata de lansare, mai rămâne să scriem software - ul pentru departamentul de vânzări.

// Declară funcția makeTransaction(quantity, pricePerDroid). Această funcție compune și returnează un mesaj despre achiziționarea droizilor de reparație. Funcția are doi parametri, ale căror valori vor fi furnizate la apelarea funcției:
//   - quantity - primul parametru, un număr care conține numărul de droizi comandați
//   - pricePerDroid - al doilea parametru, un număr care conține prețul unui droid

// Completează codul funcției astfel încât să returneze șirul "You ordered <quantity> droids worth <total price> credits!", unde:
//   - <quantity> - numărul de droizi comandați
//   - <totalPrice> - suma totală a comenzii, adică prețul tuturor droizilor comandați

// _____________________________________________________________________________________________________________________________________
// Rezolvare exercitiu:
// _____________________________________________________________________________________________________________________________________

function makeTransaction(quantity, pricePerDroid) {
  totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

// _____________________________________________________________________________________________________________________________________
// Verificare
// _____________________________________________________________________________________________________________________________________
// Criterii de acceptare:
// _____________________________________________
// Este declarată funcția makeTransaction(quantity, pricePerDroid)
// Apelarea funcției makeTransaction(5, 3000) returnează "You ordered 5 droids worth 15000 credits!"
// Apelarea funcției makeTransaction(3, 1000) returnează "You ordered 3 droids worth 3000 credits!"
// Apelarea funcției makeTransaction(10, 500) returnează "You ordered 10 droids worth 5000 credits!"
// Toate rezultatele apelurilor sunt afișate în consolă
// Apelarea funcției makeTransaction cu orice argumente valide returnează valoarea corectăCriterii de acceptare:
// _____________________________________________
// Verificare cod:
// _____________________________________________

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

