import express from "express";
import cors from "cors";
import SqliteManager from "./sqliteManager.js";

// const thePath = `${__dirname}/backend/data/assessmentData.sqlite`;
const thePath = "./backend/data/northwind_database.sqlite";
// console.log(thePath);

const sqm = new SqliteManager(thePath);
const records = await sqm.getRecordsWithSql(
  `SELECT * FROM Products`
); // default order ascending
// console.log(records);

const app = express();
const port = process.env.PORT || 3044;

app.use(cors());

app.get("/", (req, res) => {
  res.json(records);
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));