import express from "express";
import cors from "cors";
import SqliteManager from "./sqliteManager.js";

// const thePath = `${__dirname}/backend/data/assessmentData.sqlite`;
const thePath = "./backend/data/northwind_database.sqlite";
// console.log(thePath);

const sqm = new SqliteManager(thePath);
const exampleRecords = await sqm.getRecordsWithSql(
  `SELECT ProductID, ProductName, UnitPrice FROM Products LIMIT 10`
); // default order ascending
// console.log(records);

const topTen = await sqm.getRecordsWithSql(
    `SELECT ProductName, UnitPrice, ProductID FROM Products ORDER BY UnitPrice DESC LIMIT 10;`
  );

const app = express();
const port = process.env.PORT || 3044;

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    title: 'Northwind API',
    exampleRecords
  });
});

app.get("/top-ten", (req, res) => {
    res.json({
      topTen
    });
  });
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
