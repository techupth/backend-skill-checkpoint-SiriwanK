import express from "express";
// add 2 import
import { client } from "./utils/db.js";
import questionRouter from "./apps/questionRouter.js";

async function init() {
  const app = express();
  const port = 4000;
  // client.connect
  await client.connect();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  // in question
  app.use("/questions", questionRouter);

  app.get("/", (req, res) => {
    return res.json("Hello Skill Checkpoint #2");
  });

  app.get("*", (req, res) => {
    return res.status(404).json("Not found");
  });

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

init();
