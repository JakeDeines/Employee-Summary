const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const {render, renderManager, renderEngineer, renderIntern} = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


 inquirer.prompt(
    [
        {
            type: "input",
            message:"please give manager name:",
            name: "managerName",
            validate: function (answer) {
                if (answer !=="") {
                    return true;
                }
            return "Please enter at least 1 character"
            }
        },
    
    
    {
        type: "input",
        message:"please give manager id:",
        name: "managerID",
        
        
    },


    {
        type: "input",
        message:"please give manager email:",
        name: "managerEmail",
       
            
        },
    
    {
    type: "input",
    message:"please give manager office Number:",
    name: "managerOfficeNumber",
  
    },

    ]
).then(function(answers) {
const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
console.log(manager)

const managerHtml =renderManager(manager);
console.log(managerHtml);
})











inquirer.prompt(
    [
        {
            type: "input",
            message:"please give engineer's name:",
            name: "engineerName",
            validate: function (answer) {
                if (answer !=="") {
                    return true;
                }
            return "Please enter at least 1 character"
            }
        },
    
    
    {
        type: "input",
        message:"please give engineer's id:",
        name: "engineerID",
        
        
    },


    {
        type: "input",
        message:"please give engineer's email:",
        name: "engineerEmail",
       
            
        },
    
    {
    type: "input",
    message:"please give engineer's GitHub:",
    name: "engineerGithub",
  
    }
    
    ]



    

    ).then(function(answers) {
const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
console.log(engineer)

const engineerHtml =renderEngineer(engineer);
console.log(engineerHtml);
})



inquirer.prompt(
    [
        {
            type: "input",
            message:"please give intern's name:",
            name: "internName",
            validate: function (answer) {
                if (answer !=="") {
                    return true;
                }
            return "Please enter at least 1 character"
            }
        },
    
    
    {
        type: "input",
        message:"please give intern's id:",
        name: "internID",
        
        
    },


    {
        type: "input",
        message:"please give intern's email:",
        name: "internEmail",
       
            
        },
    
    {
    type: "input",
    message:"please give intern's school:",
    name: "internSchool",
  
    }
    
    ]
).then(function(answers) {
const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
console.log(intern)

const internHtml =renderIntern(intern);
console.log(internHtml);
})



function generateHTML(answers) {
    return `

    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                    {{ team }}
                </div>
            </div>
        </div>
    </body>
    
    </html>
    
`
  
  
  
  
  
  
  ;
  }
  
  promptUser()
    .then(function(answers) {
      const html = generateHTML(answers);
  
      return writeFileAsync("index.html", html);
    })
    .then(function() {
      console.log("Successfully wrote to index.html");
    })
    .catch(function(err) {
      console.log(err);
    });
  