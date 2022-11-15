let choice, firstNumber, secondNumber, result, restart = false;

//function to add
function addition(numberA, numberB){
    return numberA + numberB;
}

//function to multiply
function multiplication(numberA, numberB){
    return numberA * numberB;
}

// function to subtract
function subtraction(numberA, numberB){
    return numberA - numberB;
}

//function to divide
function division(numberA, numberB){
    if (numberB === 0){
        throw new Error('Impossible de diviser par 0');
    }
    return numberA / numberB;
}

do {
    do {
        choice = parseInt(prompt("Que souhaitez-vous faire ?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n"));
    } while (choice !== 1 && choice !== 2 && choice !== 3 && choice !== 4)

    do {
        firstNumber = parseInt(prompt("Entrez un premier nombre : "));
        secondNumber = parseInt(prompt("Entrez un deuxième nombre : "));
    } while (isNaN(firstNumber) || isNaN(secondNumber))

    try {
        switch (choice) {
            case 1 :
                result = addition(firstNumber, secondNumber);
                break;
            case 2 :
                result = multiplication(firstNumber, secondNumber);
                break;
            case 3 :
                result = subtraction(firstNumber, secondNumber);
                break;
            case 4 :
                result = division(firstNumber, secondNumber);
                break;
            default :
                throw new Error("Une erreur est survenue");
        }
        alert("Voici le résultat : " +result);
    }
    catch (error) {
        alert(error);
    }
    restart = confirm("Souhaitez-vous faire un autre calcul ?");
} while (restart)
