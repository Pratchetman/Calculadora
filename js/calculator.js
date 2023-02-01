let addToScreen = (element) => {
    document.getElementById("screen").value += element;
}

let clearScreen = () => {
    document.getElementById("screen").value = "";
   
}

let imagenError = () => {
    humo.src = "./images/humoeditado.gif";
    humo2.src = "./images/humoeditado.gif";
}

let calculate = () => {
    let operation = document.getElementById("screen").value;
    let result = "E";
   
    let operator = "";
    for (let i = 0; i < operation.length; i++){
        if(isNaN(operation[i]) == false && isNaN(operation[i + 1]) ==  true && operation[i + 2] != "+" && operation[operation.length - 1] != "/"){
            a = operation.slice(0, i + 1);
            operator = operation[i + 1];
            b = operation.slice(i + 2);
            i = operation.length;
            console.log(a);
            console.log(operator);
            console.log(b);
        }
    }
    for (let i = 1; i < b.length; i++){
        if (isNaN(b[i]) == true){
            b = "E";
            i = b.length;
        }
    }

    switch (operator){
        case "*": result = a * b;
        break;
        case "/": result = a / b;
        break;
        case "+": result = parseInt(a) + parseInt(b);
        break;
        case "-": result = parseInt(a) - parseInt(b);
    }
    
    if (isNaN(result) == true){
        result = "E";
        imagenError();
    }

    document.getElementById("screen").value = result;
}