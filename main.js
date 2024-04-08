import inquirer from "inquirer";
console.log("*****CURRENCY CONVERTOR*****");
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    RIYAL: 3.75,
    TAKA: 109.81,
    YUAN: 7.23,
    LIRA: 32.03,
    AFGANI: 71.37
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "SELECT YOUR CURRENCY WHICH YOU WANT TO CONVERT",
        type: "list",
        choices: ["USD", 'EUR', "GBP", "INR", "PKR", "RIYAL", "TAKA", "YUAN", "LIRA", "AFGANI"]
    },
    {
        name: "to",
        message: "SELECT YOUR CURRENCY  IN WHICH YOU WANT TO CONVERT",
        type: "list",
        choices: ["USD", 'EUR', "GBP", "INR", "PKR", "RIYAL", "TAKA", "YUAN", "LIRA", "AFGANI"]
    },
    {
        name: "Amount",
        message: "HOW MUCH AMOUNT YOU WANT TO CONVERT",
        type: "number",
    },
]);
let userFromCurrency = user_answer.from;
let fromAmount = currency[userFromCurrency];
let userToCurrency = user_answer.to;
let toAmount = currency[userToCurrency];
let Amount = user_answer.Amount;
let baseAmount = Amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
// console.log(convertedAmount);
let roundedConvertedAmount = Math.round(convertedAmount); // Round to the nearest integer
console.log(roundedConvertedAmount);
