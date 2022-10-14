import { TestData } from "./TestData";
import LineChart from "./LineChart";
import { useState } from "react";

export default function FullLineChartComp() {
  const [testData, setTestData] = useState({
    labels: TestData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: TestData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <LineChart chartData={testData} />
      </div>
    </div>
  );
}
