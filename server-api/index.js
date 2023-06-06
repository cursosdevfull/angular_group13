const http = require("http");
const express = require("express");
const cors = require("cors");

const data = [
  { country: "PERÚ", confirmed: 1000 },
  { country: "ECUADOR", confirmed: 1300 },
  { country: "COLOMBIA", confirmed: 1500 },
  { country: "BOLIVIA", confirmed: 2000 },
  { country: "CHILE", confirmed: 100 },
  { country: "VENEZUELA", confirmed: 3400 },
  { country: "URUGUAY", confirmed: 500 },
  { country: "PARAGUAY", confirmed: 2300 },
  { country: "MEXICO", confirmed: 80 },
  { country: "PANAMA", confirmed: 900 },
  { country: "ARGENTINA", confirmed: 700 },
];

const app = express();

app.use(cors());
app.get("/", (req, res) => {
  res.json(data);
});

http
  .createServer(app)
  .listen(8080, () => console.log("Server is running on port 8080"));
