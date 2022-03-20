const express = require('express');
const app = express();
const port = 13771;


app.get("/", (req,res) => {

});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})