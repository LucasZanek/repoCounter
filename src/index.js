import rp from 'request-promise';

let repoSecret = 'YOUR TOKEN HERE';
let options = {
    uri: 'https://api.github.com/user/repos',
    qs: {
        access_token: repoSecret 
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },

    json: true // Automatically parses the JSON string in the response
};

rp(options)
    .then((element) => {
        
            if(element.length == 3) {
                console.log('There are three repositories');
            }else if(element.length >1){
                console.log('There are a lot of repositories');
            }else if(element.length == 0){
                console.log('No repositories');
            }
    })
    .catch(() =>{
        console.log('I cannot connect to the server');
    });

   