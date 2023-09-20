const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const AuthRoutes = require("./routes/AuthRoutes.js");
const MediaRoutes = require("./routes/MediaRoute.js");
const path = require("path");

//server initialization
const server = express();

// middleware
server.use(express.json());
server.use(bodyParser.json());
server.use(cors());
dotenv.config();
server.use("/public", express.static(path.join(__dirname, "public")));

//databse connection
const monngoDBUrl =
  "mongodb+srv://DrishtiKurmavanshi:Drishti123Mongodb@cluster0.gkqcmrh.mongodb.net/music";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(monngoDBUrl).then(() => console.log("database connected"));
}

server.use("/auth", AuthRoutes);
server.use("/audio", MediaRoutes);


server.listen(8080, () => {
  console.log("server started");
});