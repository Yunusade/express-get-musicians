const app = require("./src/app");
const { db } = require("./db/connection");
const { Musician } = require("./models");
const port = 3000;



app.listen(port, () => {
    db.sync();
    console.log(`Listening at http://localhost:${port}/musicians`)
})