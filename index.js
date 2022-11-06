import express from "express";
import mongoose from "mongoose";
import route from "./routes/index.js"


const URI =
  "mongodb+srv://awalmakka:awalmakka@cluster0.v86wgfg.mongodb.net/?retryWrites=true&w=majority/express-mongo";
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));


const app = express();
app.use(express.json());
app.use('/nilai',route);



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
