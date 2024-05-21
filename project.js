// Steps to follow to accomplish the Slot Machine

const { get } = require("http");
const { isUndefined } = require("util");

// 1. Desposit some money
// 2. Determine number of lines to bet on
// 2. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. give the user their winnings
// 7. play again


const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

const SYMBOLS_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}

// 1.  Deposit function
const deposit = () => 
{   
    const depositAmount = prompt("Enter a deposit amount: ")
    const numberDepositAmount = parseFloat(depositAmount);
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0 ) {
        console.log("Invalid depsoit amount, try again.")
        deposit()
    }
    else {
        return numberDepositAmount
    }
};

// 2. Determine the number of lines to bet on.
const getNumberofLines = () => 
{
    const lines = prompt("Enter the number of lines to bet on (1-3): ")
    const numberofLines = parseFloat(lines);
    if (isNaN(numberofLines) || numberofLines <= 0 || numberofLines > 3 ) {
        console.log("Invalid number of lines, try again.")
        getNumberofLines()
    }
    else {
        return numberofLines;
    }

};

// Collect a bet amount.
const getBet = (balance,lines) => 
{
    while (true) {
        const bet  = prompt("Enter the total bet per line: ")
        const numberBet = parseFloat(bet);
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines ) {
            console.log("Invalid bet, try again.")
        }
        else {
            return numberBet;
        }
    }
};

// Spin the slot machine.
const spin = () => {
    
}

let balance = deposit();
const numberofLines = getNumberofLines();
const bet = getBet(balance,numberofLines)