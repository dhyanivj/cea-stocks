import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const Dropdown = () => {
  const [myOptions, setMyOptions] = useState([]);

  const getDataFromAPI = () => {
    console.log("Options Fetched from API");

    const APP_KEY = "fC22PpG6fvgEAtTJjXkliRKwl4PexTm1";
    const KEYWORD = "FB";

    fetch(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${KEYWORD}&apikey=${APP_KEY}`
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res.data);
        for (var i = 0; i < res.data.length; i++) {
          myOptions.push(res.data[i].bestMatches["1. symbol"]);
        }
        // bestMatches[0]["1. symbol"]
        setMyOptions(myOptions);
      });
  };

  return (
    <div style={{ marginLeft: "40%", marginTop: "60px" }}>
      <h3>Search For Stocks Symbol</h3>
      <Autocomplete
        style={{ width: 500 }}
        freeSolo
        autoComplete
        autoHighlight
        options={myOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            onChange={getDataFromAPI}
            variant='outlined'
            label='Search Box'
          />
        )}
      />
    </div>
  );
};

export default Dropdown;
