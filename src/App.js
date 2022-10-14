import "./App.css";
import React, { useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import { Container } from "@mui/material/";
import { Grid } from "@mui/material/";
import RangeDatePicker from "./components/RangeDatePicker";
import LineChart from "./components/LineChart";
import { TestData } from "./components/TestData";
import FullLineChartComp from "./components/FullLineChartComp";

function App() {
  console.log(TestData);
  const [fetchData, setFetchData] = useState([]);

  const [testData, setTestData] = useState({});

  function handleGenerateClick(fromDate, toDate, word) {
    setFetchData([fromDate, toDate, word]);
  }

  useEffect(() => {
    if (typeof fetchData[0] == "string") {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((json) => console.log(json))
        .then(() => {
          setTestData({
            labels: TestData.map((data) => data.year),
            datasets: [
              {
                label: "UsersGained",
                data: TestData.map((data) => data.userGain),
                hoverBackgroundColor: "red",
                pointBackgroundColor: "blue",
                borderColor: "lime",
              },
            ],
          });
        });
    }
  }, [fetchData]);

  console.log(fetchData);

  return (
    <div className="App">
      <Container maxWidth="md" sx={{ bgcolor: "white" }}>
        <Grid container>
          <Grid item xs={12}>
            <RangeDatePicker onRangeSelect={handleGenerateClick} />
          </Grid>
          <Grid
            item
            xs={12}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {/* {Object.keys(testData).length === 0 &&
            testData.constructor === Object ? (
              <h1>Choose dates and word you are looking for</h1>
            ) : (
              <LineChart data={testData} />
            )} */}
            <FullLineChartComp />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
