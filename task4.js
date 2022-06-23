const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        data.forEach(names => console.log(names.name));
    }).catch(error => {
        console.log('error')
    })