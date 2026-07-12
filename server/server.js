const app  = require( "./app.js");
const dotenv  = require( "dotenv");
const {db,connectDB}  = require("./config/db.js");

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});