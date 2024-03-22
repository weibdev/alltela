const express = require("express")
const app = express()
const path = require("path") 

const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));

app.use(express.static(path.join(__dirname, "static")))


app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "static"))
    // res.sendFile(path.join(__dirname, "build", "index.html"));

})

app.listen("5000", () => {
    console.log("on")
})
