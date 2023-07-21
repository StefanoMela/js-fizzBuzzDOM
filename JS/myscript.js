// SCRIVI UN PROGRAMMA CHE STAMPI IN CONSOLE I NUMERI DA 1 A 100
// FAI IN MODO CHE IL PROGRAMMA RICONOSCA I MULTIPLI DI 3, 5 E 3 & 5

const newDiv = document.getElementById("box-target");

for (let i = 1; i <= 100; i++) {        // CREO CICLO PER STAMPARE IN CONSOLE NUMERI DA 1 A 100

    let output = i;
    let myClass = "number";
    const myDiv = document.createElement("div");

    if (i % 3 == 0 && i % 5 == 0) {

        myClass = "fizzbuzz";
        output = "FizzBuzz";


    } else if (i % 3 == 0) {

        myClass = "fizz";
        output = "Fizz";

    } else if (i % 5 == 0) {

        myClass = "buzz";
        output = "Buzz";
    }

    myDiv.innerHTML = output;
    myDiv.classList.add("classic__box");
    myDiv.classList.add(myClass);
    newDiv.append(myDiv);

};