import React from "react";
import Plot from "react-plotly.js";

class Stock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValue: [],
      stockChartYValue: [],
    };
  }

  componentDidMount() {
    this.fetchStock();
  }

  fetchStock() {
    const pointerToThis = this;
    console.log(pointerToThis);
    const API_KEY = "PKCEKZI3NWPG1528";
    let StockSymbol = "FB";
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&interval=5min&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValueFunction = [];
    let stockChartYValueFunction = [];

    fetch(API_Call)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        for (var key in data["Time Series (Daily)"]) {
          stockChartXValueFunction.push(key);
          stockChartYValueFunction.push(
            data["Time Series (Daily)"][key]["1. open"]
          );
        }

        // console.log(stockChartXValueFunction);
        pointerToThis.setState({
          stockChartXValue: stockChartXValueFunction,
          stockChartYValue: stockChartYValueFunction,
        });
      });
  }

  render() {
    return (
      <div style={{ marginLeft: "20%", marginTop: "60px" }}>
        <Plot
          data={[
            {
              x: this.state.stockChartXValue,
              y: this.state.stockChartYValue,
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "blue" },
            },
          ]}
          layout={{ width: 720, height: 440, title: "Stock Price Chart" }}
        />
      </div>
    );
  }
}

export default Stock;
