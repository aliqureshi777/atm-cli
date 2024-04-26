#! /usr/bin/env node

import inquirer from "inquirer";

let accountBalance = 10000;
let mypin = 1234;

let pinans = await inquirer.prompt([
  {
    message: "Enter your Pin:",
    type: "number",
    name: "pin",
  },
]);

if (pinans.pin === mypin) 
    { 
       let operations = await inquirer.prompt
        ([
            {
            message: "Please choose your option",
            name: "choice",
            type: "list",
            choices: ["Balance", "Withdraw"],
            }
        ]);

        if (operations.choice === "Withdraw")
            {
                let amount = await inquirer.prompt
                ([
                    {
                    message: "Please Enter your amount to withdraw",
                    type: "number",
                    name: "amountw",
                    },
                ]);
                if (amount.amountw <= accountBalance)
                    {
                        accountBalance -= amount.amountw;
                        console.log("Your remaining balance is:" + accountBalance)
                    };
                if (amount.amountw > accountBalance)
                 {console.log("Insuficent balance")};
            };

        if   (operations.choice === "Balance") 
            {console.log("Your account balance is:" + accountBalance)};

    } 
else console.log("Wrong pin!!!");
