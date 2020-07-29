const express = require("express");
const db = require("./config/db");

const app = express();

app.use(express.json({ extended: false }));

app.use("/api/people", require("./routes/person"));

db();

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Sever running in ${PORT}`);
});
