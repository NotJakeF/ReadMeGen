// function to generate markdown for README
function generateMarkdown(data) {
    return `
  # ${data.title}
  ${data.License}

  ## Table of Contents
- [Description](#description)
- [Installation Instructions](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions&Contact](#questions_&_contact)

  ## Description
  ${data.description}

    
  ## Installation
  ${data.Installation}
    
   
    
  ## Usage
  ${data.Usage}
    
   
    
  ## Contributing  
  ${data.Contributing}
  
  Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
    
  Please make sure to update tests as appropriate.

  ## Tests
  ${data.Tests}
    
  ## Questions & Contact

  If you have any questions about the repo, open an issue or contact me directly at ${data.Email}. You can find more of my work at [${data.Github}](https://github.com/${data.Github}/).


  `;
  []
}

module.exports = generateMarkdown;