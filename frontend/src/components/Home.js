import React from "react";
import { useState, useEffect } from "react";

function Home() {
  const [records, setRecords] = useState([]);
  const [title, setTitle] = useState();

  useEffect(() => {
    (async () => {
      let response = await fetch("http://localhost:3044");
      response = await response.json();
      setRecords(response.exampleRecords);
      setTitle(response.title);
    })();
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      {records.map((record, index) => (
        <div key={index}>
          <h2>{record.ProductID}</h2>
          <p>{record.ProductName}</p>
          <p>{record.UnitPrice}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
