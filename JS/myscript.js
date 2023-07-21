// SCRIVI UN PROGRAMMA CHE STAMPI IN CONSOLE I NUMERI DA 1 A 100
// FAI IN MODO CHE IL PROGRAMMA RICONOSCA I MULTIPLI DI 3, 5 E 3 & 5


for (let i = 1; i <= 100; i++) { // CREO CICLO PER STAMPARE IN CONSOLE NUMERI DA 1 A 100
    //  console.log(i);            // CONSOLE.LOG DI PROVA
    
    if (i % 3 == 0 && i % 5 == 0) {
        
        console.log(i + "fizzbuzz");    // CONSOLE.LOG DI PROVA
        
    } else if (i % 3 == 0) {
        
        console.log(i + "fizz");    // CONSOLE.LOG DI PROVA
        
    } else if (i % 5 == 0) {
        
        console.log(i + "buzz");    // CONSOLE.LOG DI PROVA
    }
    
    const myDiv = document.createElement(div);   // PROVE DI MODIFICA DEL DOM
    document.appendChild(myDiv);
    myDiv.innerHTML = i;        
};


// const myDiv = document.getElementsByClassName(".box-target");
// function fizzBlock () {
//     const newDiv = document.createElement("div");
//     myDiv.appendChild(newDiv);
// }

