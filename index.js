const fs = require('fs');
const inquirer = require('inquirer');
const mDown = require('./generateMarkdown.js')
// var licenses = {
//         b1: ![GitHub license](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)
//         b2: ![GitHub license](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)
//         b3: ![GitHub license](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg))
//     }
    // Prompt the user
inquirer.prompt([{
        type: 'input',
        name: 'title',
        message: 'What is the title?'
    }, {
        type: 'input',
        message: 'description',
        name: 'description',

    }, {
        type: 'input',
        message: 'Installation Instructions',
        name: 'Installation',

    }, {
        type: 'input',
        message: 'Usage',
        name: 'Usage',

    }, {
        type: 'input',
        message: 'Contributing',
        name: 'Contributing',

    }, {
        type: 'input',
        message: 'Tests',
        name: 'Tests',

    }, {
        type: 'input',
        message: 'Questions',
        name: 'Questions',

    }, {
        type: 'input',
        message: 'Email',
        name: 'Email',

    }, {
        type: 'input',
        message: 'Github Username',
        name: 'Github',

    }, {
        type: 'input',
        message: 'Contact Us',
        name: 'Contact Us',

    }, {
        type: 'list',
        message: 'Select a License',
        name: 'License',
        choices: ["![GitHub license](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)", "![GitHub license](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)", "![GitHub license](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)"]
    }])
    // Write the user response to a file by chaining the below callback method to the prompt above.
    .then(function(data) {
        console.log(data)
            // Bonus: Generate the name of your user file from their input
        const filename =
            data.title
            .toLowerCase()
            .split(' ')
            .join('') + '.md';
        let markDown = mDown(data)
        console.log(markDown)


        fs.writeFile(filename, markDown, function(err) {
            if (err) {
                return console.log(err);
            }

            console.log('Success!');
        });
    });
// {
// "login": "NotJakeF",
// "id": 65273894,
// "node_id": "MDQ6VXNlcjY1MjczODk0",
// "avatar_url": "https://avatars2.githubusercontent.com/u/65273894?v=4",
// "gravatar_id": "",
// "url": "https://api.github.com/users/NotJakeF",
// "html_url": "https://github.com/NotJakeF",
// "followers_url": "https://api.github.com/users/NotJakeF/followers",
// "following_url": "https://api.github.com/users/NotJakeF/following{/other_user}",
// "gists_url": "https://api.github.com/users/NotJakeF/gists{/gist_id}",
// "starred_url": "https://api.github.com/users/NotJakeF/starred{/owner}{/repo}",
// "subscriptions_url": "https://api.github.com/users/NotJakeF/subscriptions",
// "organizations_url": "https://api.github.com/users/NotJakeF/orgs",
// "repos_url": "https://api.github.com/users/NotJakeF/repos",
// "events_url": "https://api.github.com/users/NotJakeF/events{/privacy}",
// "received_events_url": "https://api.github.com/users/NotJakeF/received_events",
// "type": "User",
// "site_admin": false,
// "name": null,
// "company": null,
// "blog": "",
// "location": null,
// "email": null,
// "hireable": null,
// "bio": null,
// "twitter_username": null,
// "public_repos": 10,
// "public_gists": 0,
// "followers": 0,
// "following": 0,
// "created_at": "2020-05-13T06:02:39Z",
// "updated_at": "2020-07-02T03:04:02Z"
// }