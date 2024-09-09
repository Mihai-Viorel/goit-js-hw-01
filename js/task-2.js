// _____________________________________________________________________________________________________________________________________
// Sarcina 2. Livrarea droizilor
// _____________________________________________________________________________________________________________________________________

// Declară funcția getShippingMessage, care primește trei parametri, ale căror valori vor fi furnizate în momentul apelării:
//   - country - primul parametru, un șir de caractere ce conține țara de destinatar
//   - price - al doilea parametru, un număr ce reprezintă prețul total al produsului
//   - deliveryFee - al treilea parametru, un număr ce indică prețul livrării produsului

// Completează codul funcției astfel încât să returneze un șir de caractere cu un mesaj despre livrarea bunurilor în țara utilizatorului "Shipping to <country> will cost <totalPrice> credits", unde:
//   - <country> - țara de livrare
//   - <totalPrice> - costul total al comenzii, inclusiv prețul produselor și al livrării acestora

// _____________________________________________________________________________________________________________________________________
// Rezolvare exercitiu:
// _____________________________________________________________________________________________________________________________________





// _____________________________________________________________________________________________________________________________________
// Verificare
// _____________________________________________________________________________________________________________________________________
// Criterii de acceptare:
// _____________________________________________
// Este declarată funcția getShippingMessage(country, price, deliveryFee)
// Apelarea funcției getShippingMessage("Australia", 120, 50) returnează "Shipping to Australia will cost 170 credits"
// Apelarea funcției getShippingMessage("Germany", 80, 20) returnează "Shipping to Germany will cost 100 credits"
// Apelarea funcției getShippingMessage("Sweden", 100, 20) returnează "Shipping to Sweden will cost 120 credits"
// Apelarea funcției getShippingMessage cu orice argumente valide returnează valoarea corectă
// _____________________________________________
// Verificare cod:
// _____________________________________________

console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"