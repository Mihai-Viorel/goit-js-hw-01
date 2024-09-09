// _____________________________________________________________________________________________________________________________________
// Sarcina 3. Lățimea elementului
// _____________________________________________________________________________________________________________________________________

// Declară funcția getElementWidth, care primește trei parametri, ale căror valori vor fi furnizate în momentul apelării:
//   - content - primul parametru, lățimea conținutului
//   - padding - al doilea parametru, dimensiunea padding-ului orizontal pe fiecare parte
//   - border - al treilea parametru, dimensiunea border-ului pe fiecare parte

// Valorile tuturor parametrilor vor fi șiruri de caractere în formatul Npx, unde N este un număr, întreg sau zecimal.

// Completează codul funcției astfel încât să returneze un număr — lățimea totală a elementului. La calcularea lățimii totale, ai în vedere că valoarea box-sizing este egală cu border-box.

// _____________________________________________________________________________________________________________________________________
// Rezolvare exercitiu:
// _____________________________________________________________________________________________________________________________________





// _____________________________________________________________________________________________________________________________________
// Verificare
// _____________________________________________________________________________________________________________________________________
// Criterii de acceptare:
// _____________________________________________
// Este declarată funcția getElementWidth(content, padding, border)
// Apelarea funcției getElementWidth("50px", "8px", "4px") returnează numărul 74
// Apelarea funcției getElementWidth("60px", "12px", "8.5px") returnează numărul 101
// Apelarea funcției getElementWidth("200px", "0px", "0px") returnează numărul 200
// Apelarea funcției getElementWidth cu orice argumente valide returnează valoarea corectă
// _____________________________________________
// Verificare cod:
// _____________________________________________

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200