// SCRIVI UN PROGRAMMA CHE STAMPI IN CONSOLE I NUMERI DA 1 A 100
// FAI IN MODO CHE IL PROGRAMMA RICONOSCA I MULTIPLI DI 3, 5 E 3 & 5

    const newDiv = document.getElementById("box-target");

for (let i = 1; i <= 100; i++) { // CREO CICLO PER STAMPARE IN CONSOLE NUMERI DA 1 A 100
    //  console.log(i);            // CONSOLE.LOG DI PROVA
    
    let output = i;
    
    if (i % 3 == 0 && i % 5 == 0) {
        
        // output = "fizzbuzz";    // CONSOLE.LOG DI PROVA
        const myDiv = document.createElement("div");
        myDiv.innerHTML = output; 
        myDiv.classList.add("fizzBuzz");
        newDiv.append(myDiv);


        
    } else if (i % 3 == 0) {
        
        output = "fizz";    // CONSOLE.LOG DI PROVA
        const myDiv = document.createElement("div");
        myDiv.innerHTML = output; 
        myDiv.classList.add("fizz");
        newDiv.append(myDiv);
        
    } else if (i % 5 == 0) {
        
        output = "buzz";    // CONSOLE.LOG DI PROVA
        const myDiv = document.createElement("div");
        myDiv.innerHTML = output; 
        myDiv.classList.add("buzz");
        newDiv.append(myDiv);
    } 
    output = output;
    const myDiv = document.createElement("div");
    myDiv.innerHTML = output; 
    myDiv.classList.add("number");
    newDiv.append(myDiv);
    
};