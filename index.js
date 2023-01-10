const express = require("express");
const cors = require("cors");
const { connectDB } = require("./src/database/config/db");
const postRoute = require("./src/routes/post");
const { onError } = require("./src/utils/response");

const app = express();


app.use(express.json());

app.use(cors({origin: "*"}));

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use("/api/", postRoute);


// 404 error routes
  app.post("*", (req, res) => {
    return onError(res, 404, "Page not found");
  });
  app.delete("*", (req, res) => {
    return onError(res, 404, "Page not found");
  });
  app.patch("*", (req, res) => {
    return onError(res, 404, "Page not found");
  });
  app.put("*", (req, res) => {
    return onError(res, 404, "Page not found");
  });


connectDB().then(()=>{
  app.listen(process.env.PORT || 7000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
})

