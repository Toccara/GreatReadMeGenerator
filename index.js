console.log("hello");
const inquirer = require("inquirer");
const generateMarkdown = require("./generator.js");
const fs= require("fs");
 const questions = [
     {
         message:"What's the title of this project?",
         name:"title"
     },

     {
         message: "Describe the project",
         name:"description"
     },
     {
         message: "Installation Instructions",
         name: "install"

     },

     {
         message: "Usage Instructions:",
         name:"usage"
     },
     {
         message: "Contribution Guidelines",
         name: "contribute"
     },

     {
         message:"Test instructions",
         name: "test"
     },

     {
         message:"License",
         name:"license",
         type:"list",
         choices:[
             "Apache 2.0","GPL 3.0","MIT"
              ]
    },

    {
        message:"GitHub",
        name: "github"
    },

    {
        message: "Email Address",
        name: "email"
    },

 ];

 inquirer.prompt(questions).then(gotAnswers);
function gotAnswers(answers){
    console.log(answers);
var Markdown = generateMarkdown(answers);
    console.log(Markdown);
    fs.writeFileSync("README.md",Markdown);
}
