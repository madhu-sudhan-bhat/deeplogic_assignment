const https = require('https');

let url = "https://time.com/";
var finalanswer
https.get(url,(res) => {
    let body = "";

    res.on("data", (chunk) => {
        body += chunk;
    });

    res.on("end", () => {
        
            let jsondata = JSON.stringify(body);
            const htmlString = jsondata

           var answer =body.match(/<section.*class="homepage-module latest" data-module_name="Latest Stories".*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]+.*[\n]/igm);
          var resfinal = answer.toString();
           fanswer = resfinal.match(/<h2.*class="title.*[\n]/igm)
           temp=fanswer.toString();
           temp2 =temp.match(/(<a+).*[^</a>]+>[^</h2>]/igm)
           temp3=temp2.toString();
           var finalstr = temp3.replace(/(<\/a+.........)./igm," ");
           finalanswer = finalstr;
           console.log(finalanswer);
    });

})

const express = require('express'),
    app = express()

    

app.post('/getnews', (req, res) => res.json(finalanswer));

app.listen(3000, () => console.log('Server start at port 3000'))
