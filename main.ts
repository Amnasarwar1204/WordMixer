#!/usr/bin/env node

// Import inquirer and chalk
import inquirer from "inquirer";
import chalk from "chalk";


// use function
async  function count (){


// Ask user to write something
const answer: {
    sentence: string

} = await inquirer.prompt(
    [
        {
            name: "sentence",
            type: "input",
            message: "Write some thing so i can count"
        }
    ]
)


// Giving them options
let option:{
    select:string
} = await inquirer.prompt(
    [
        {
             name : "select",
             type : "list",
             choices : ["Count words" , "Count letters" , "Both"],
             message:"What you want"
        }
    ]
)

console.log(answer.sentence);
console.log(option.select);


// If user choose count words
if(option.select === "Count words"){
    const words = answer.sentence.trim().split(" ");
    console.log(chalk.yellow(`Words: ${words}`));
    console.log(chalk.gray(`Total words: ${words.length}`));
}


// IF user choose count letters
if(option.select === "Count letters"){
    const letterWithoutspace =answer.sentence.replace(/ /g,"");
    console.log(chalk.yellow(`Letters: ${letterWithoutspace}`));
  
    console.log(chalk.gray(`Total letters: ${letterWithoutspace.length}`));
}


// If user choose both option
if(option.select === "Both"){
    const words = answer.sentence.trim().split(" ");
    console.log(chalk.yellow(`Words: ${words}`));
    console.log(chalk.gray(`Total words: ${words.length}`));

    const letterWithoutspace =answer.sentence.replace(/ /g,"");
    console.log(chalk.yellow(`Letters: ${letterWithoutspace}`));
  
    console.log(chalk.gray(`Total letters: ${letterWithoutspace.length}`));
}


// Ask user if he want to continue or exit
let last :{
    lasts:string
} = await inquirer.prompt([
    {
        name:"lasts",
        type:"list",
        message:"Do you want to continue?",
        choices: ["continue", "Exit"]
    }
])



if(last.lasts ==="Exit" ){
    console.log(chalk.red("Thank you"));
    
}
else{

       await count()
}

}

// call function
count()

