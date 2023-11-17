const express = require("express");
const cors = require("cors");
const fs = require("fs");
const data = require("./data.json");

const app = express();
app.use(express.json());

app.use(express.static("./public"));
app.use(cors({ origin: "http://localhost:3000" }));

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

app.get("/", (request, response) => {
  response.json(data);
});

app.post("/", (req, res) => {
  const mainText = req.body.mainText;
  const subText = req.body.subText;
  const fProduct = req.body.fProduct;
  const sProduct = req.body.sProduct;
  const tProduct = req.body.tProduct;
  const fProductPrice = req.body.fProductPrice;
  const sProductPrice = req.body.sProductPrice;
  const tProductPrice = req.body.tProductPrice;

  const onlineStore = {
    mainText,
    subText,
    fProduct,
    sProduct,
    tProduct,
    fProductPrice,
    sProductPrice,
    tProductPrice,
  };

  fs.writeFileSync("./data.json", JSON.stringify(onlineStore, null, 2), "utf8");
  res.status(201).json(onlineStore);
});
