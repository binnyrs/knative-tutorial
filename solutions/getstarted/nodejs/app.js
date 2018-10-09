var express = require("express");
var app = express();

// uncomment this line for new revision rollout change
//var msg = (process.env.MESSAGE_PREFIX || "") + "NodeJs::Knative on OpenShift";

var msg = (process.env.MESSAGE_PREFIX || "") + "NodeJs::Knative on OpenShift";

app.get("/", function(req, res, next) {
  res.status(200).send(msg);
});

app.listen(8080, function() {
  console.log("App started in port 8080");
});
