const server = require("./src/app");
const { conn } = require("./src/db.js");

const PORT = 3001;

conn.sync({ force:true }).then(() => {
    console.log("Database connected");
    server.listen(PORT, () => {
        console.log(`Server listen in the port:${PORT}`)
    });
})
