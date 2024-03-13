function functionA() {
    console.log("Hello World");

    let unicorn = document.getElementById("unicorn");
    if (unicorn.innerText) {
        unicorn.innerText = "";
    } else {
        unicorn.innerText = "🦄";
    }
}


function learnPrograming(){
    console.log("I am learning programing");

    const myArray = ["Daga", "Fajna", "jest."];

    const fullSentence = myArray.join(" ");

    console.log(fullSentence);
    
    const today = new Date();

    const birthday = new Date("1994-02-13");

    const numberOfDates = Math.floor((today - birthday) / (1000 * 3600 * 24));
    
    console.log("I ma " + numberOfDates + " dni");
}


learnPrograming();