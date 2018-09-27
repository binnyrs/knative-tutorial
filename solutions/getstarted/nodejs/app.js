var express = require('express');
var asciiart = require('ascii-art');
var app = express();

var msg = "Node.js::"+ (process.env.MESSAGE || "Knative on OpenShift");

app.get("/", function(req, res, next) {
    asciiart
       .font(msg,'Doom',(txt) =>{
        res
        .status(200)
        .type("html")
        .send(`
        <html>
            <head>
              <title>Knative Demo::Node.js</title>
            </head>
            <style>
                pre {
                   font-family: "Courier New", Courier, monospace;
                }
            </style>
          <body>
             <pre>
                ${txt}
             </pre>
          </body>        
        </html>`);
    });
   
});


app.listen(8080,function() {
console.log("App started in port 8080");
});