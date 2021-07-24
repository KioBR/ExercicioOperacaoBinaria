function input(operator, b1, b2) {

    const binaryNumber1 = parseInt(b1, 2);
    const binaryNumber2 = parseInt(b2, 2);

    var value = 0;

    switch (operator) {
        case '+':
            value = binaryNumber1 + binaryNumber2;
            break;
        case '-':
            value = binaryNumber1 - binaryNumber2;
            break;
        case '*':
            value = binaryNumber1 * binaryNumber2;
            break;
        case '/':
            value = binaryNumber1 / binaryNumber2;
            break;
        case '%':
            value = binaryNumber1 % binaryNumber2;
            break;

    }
    //Saída após execução com conversão do resultado para binário
    console.log(("00000000" + value.toString(2)).slice(-8));
}

//Entrada dos dados
input('%', '00010100', '00000011');