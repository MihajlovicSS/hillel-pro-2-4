const ACTIONS = {'+': add, '-': subtract, '*': multiply, '/': divide};
const OPERATORS = Object.keys(ACTIONS);
const NAMES_OF_NUMBERS = ['first', 'second', 'third', 'fourth', 'fifth'];
const OPERATOR = getOperator();
const NUMBER_OF_OPERANDS = getNumberOfOperand();
const OPERANDS = getOperands(NUMBER_OF_OPERANDS);
const RESULT = calculation(OPERATOR, OPERANDS);
showResult(OPERANDS, OPERATOR, RESULT);

function getOperator(){
    let operator;
    do {
        operator = prompt('Please, enter an operand');
        if (OPERATORS.includes(operator)) break;
        else alert('You have entered wrong operand. Please try again!');
    } while(1);
    return operator;
}
function getNumberOfOperand(){
    let operands;
    do {
        operands = prompt('Please, enter an number of operands from 1 to 5');
        if (operands > 1 && operands < 5) break;
        else alert('You have entered wrong number of operands. Please try again!');
    } while(1);
    return operands;
}
function getOperands(numberOperands){
    let operands = [];
    let number;
    for (i = 0; i < numberOperands; i++){
        do {
            number = prompt(`Please enter ${NAMES_OF_NUMBERS[i]} operand.`);
            if (validation(number)){
                console.log(number);
                operands.push(number); 
                break;
            }
            else alert('You have entered wrong operand. Please try again!');
        } while(1);
    }
    return operands;
}
function calculation(operator, operands) {
    let result = operands[0];
    for(i = 1; i < operands.length; i++){
        result = ACTIONS[operator](result, operands[i]);
    }
    return result;
}
function showResult (operands, operator, result){
    alert(`${operands.join(operator)} = ${result}`);
}
function validation(number){
    if(isNaN(number) || number.trim() === '') return false;
    else return true;
}
function add(a, b){return Number(a) + Number(b)}
function subtract(a, b){return a - b}
function multiply(a, b){return a * b}
function divide(a, b){return a / b}