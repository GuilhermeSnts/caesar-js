const chalk = require("chalk")
const clear = require("clear")
const inquirer = require("inquirer")

clear()

console.log(
	chalk.yellow("Welcome to caesar!")
)

const question = [
	{
		name: "text",
		type: "input",
		message: "what do you want to cypher today?",
		validate: (val)=>{
		console.log(typeof val)
			if(typeof val == 'string') {
				return true
			} else{
				return "please, insert needs to be a text"
			}
		}
	}
]

const alphabet = 'abcdefghijklmnopqrstuvxywz'
const chars = alphabet.split('')

const toCesar = (jump,char) => {
     let find = chars.indexOf(char) +  jump;
     return chars[find];
}
 
const caesarize = word => {
      return word.split("").map( p => toCesar(2,p)).join("");
}

const run = async (questions) => {

	const text = await  inquirer.prompt(questions)
	const cypher =  caesarize(text.text)

	console.log(
		chalk.green("......the cypher is: ")
	)
	console.log(
		chalk.cyan(cypher)
	)
	
	console.log(
		chalk.yellow("that's all folks!")
	)
}

run(question)
