import { Router } from "express";
import { ObjectId } from "mongodb";
// db
import { db } from "../utils/db.js";

const questionRouter = Router();

questionRouter.get("/", async (req, res) => {
  try {
    const collection = db.collection("questions");
    const questions = await collection.find({}).limit(10).toArray();
    return res.json({ data: questions });
  } catch (error) {
    return res.json({
      message: `${error}`,
    });
  }
});

questionRouter.get("/:id", async (req, res) => {
  try {
    const collection = db.collection("questions");
    const questionId = new ObjectId(req.params.questionId);
    const getQuestionById = await collection.findOne({ _id: questionId });
    return res.json({ data: getQuestionById });
  } catch (error) {
    return res.json({
      message: `${error}`,
    });
  }
});

questionRouter.post("/", async (req, res) => {
  try {
    const collection = db.collection("questions");
    const questionData = { ...req.body };
    // const newQuestionData =
    // (${newQuestionData.insertedId})
    await collection.insertOne(questionData);
    return res.json({
      message: `Question has been created successfully`,
    });
  } catch (error) {
    return res.json({
      message: `${error}`,
    });
  }
});

questionRouter.put("/:id", async (req, res) => {
  try {
    const collection = db.collection("questions");
    const questionId = new ObjectId(req.params.questionId);
    const newQuestionData = { ...req.body };

    await collection.updateOne(
      {
        _id: questionId,
      },
      {
        $set: newQuestionData,
      }
    );

    return res.json({
      message: `Question has been updated successfully`,
    });
  } catch (error) {
    return res.json({
      message: `${error}`,
    });
  }
});

questionRouter.delete("/:id", async (req, res) => {
  try {
    const collection = db.collection("questions");
    const questionId = new ObjectId(req.params.questionId);

    await collection.deleteOne({ _id: questionId });

    return res.json({
      message: `Question has been deleted successfully`,
    });
  } catch (error) {
    return res.json({
      message: `${error}`,
    });
  }
});

export default questionRouter;
