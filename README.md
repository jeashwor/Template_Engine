# Template Engine

## Description

A simple command-line based application that will take in team data via prompts, and generate a team.html file that can be viewed on your browser.  Ultimate goal of application is to create a clear and concise location that any team member can see to view information about there teammates.  Application uses a combination of ES6 constructor classes to setup inquire prompts to gain the necessary data.  After this nodes fs module is then used to write template based team.html file to output folder.

## Table of Contents

* [Installation](installation-instructions)  
* [Usage](#usage-instructions)  
* [Test](#test-instructions)  
* [Questions](#questions)

## Installation Instructions

* Follow [Link](https://github.com/jeashwor/Template_Engine) to application GitHub repository.

* Locate Green "Code" button and select the clipboard to copy repo data.

* ![GitHub Page](place link to new screen shot here)

* Using your preferred terminal application navigate to your desired location to copy the repository folder using the git clone command along with the info copied from the GitHub page in the above step.

* ![GitHub Clone](Insert new screen shot file location here)

* Within the terminal navigate to the newly cloned folder and run an npm install command to install necessary modules.

*![NPM Install](./utils/npmInstall.gif)

* You are now ready to run the application!

## Usage Instructions

* Application can be called using your command line from the Template_Engine file directory:
    ```
    node app.js
    -or-
    npm run start
    ```
* Answer questions that follow to generate new team.html file in the output folder in this directory. 
    * See gif below description for walk through!


## Test

* TDD was used for development of this application.
* Below test were used to validate building of constructor classes.
    * Employee.test.js
    * Engineer.test.js
    * Intern.test.js
    * Manager.test.js
* Test can be ran using your command line from the Template_Engine file directory:
    ```
    npm run test
    ```

## Questions

Check out my GitHub page here:  [jeashwor's Page](https://github.com/jeashwor)

If you have additional questions please email me at jeashwor@gmail.com