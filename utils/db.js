// Todo: Setup database connection here
// Named Import ตัว MongoClient มาจาก "mongodb"
import { MongoClient } from "mongodb";

// MongoDB จะมี Url ให้เราทำการเชื่อมต่อ
// โดยปกติแล้ว Url จะอยู๋ในรูปแบบ `mongodb://url:port`
const connectionString = "mongodb://127.0.0.1:27017";

// Initlize ตัว `MongoClient` ซึ่งรับ Input 2 ตัว
// 1) Mongo Url ซึ่งเราจะใช้ `mongodb://127.0.0.1:27017`

export const client = new MongoClient(connectionString);

// กำหนดให้ DB ที่จะใช้งานคือ "questions"
export const db = client.db("questions");
