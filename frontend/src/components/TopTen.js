import React from "react";
import { useState, useEffect } from "react";

function TopTen() {
  const [topTen, setTopTen] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await fetch("http://localhost:3044/top-ten");
      response = await response.json();
      setTopTen(response.topTen);
    })();
  }, []);
  return (
    <div>
      <p>top ten</p>
      {topTen.map((topTen, index) => (
        <table key={index}>
        
          <tr>
            <td>{topTen.ProductID}</td>
            <td>  {topTen.ProductName}</td>
            <td>  {topTen.UnitPrice}</td>
          </tr>
        </table>
      ))}
    </div>
  );
}

export default TopTen;
