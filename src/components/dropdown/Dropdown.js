import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const Dropdown = () => {
  const [myOptions, setMyOptions] = useState([]);

  const getDataFromAPI = (e) => {
    console.log(e.target.value);
    if (e.target.value && e.target.value.trim().length > 1) {
      const searchedArray = [];
      const APP_KEY = "fC22PpG6fvgEAtTJjXkliRKwl4PexTm1";
      const KEYWORD = e.target.value.trim();

      fetch(
        `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${KEYWORD}&apikey=${APP_KEY}`
      )
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          for (var i = 0; i < res.bestMatches.length; i++) {
            searchedArray.push(res.bestMatches[i]["1. symbol"]);
          }

          console.log(searchedArray);
          setMyOptions(searchedArray);
        });
    }
  };

  return (
    <div style={{ marginLeft: "30%", marginTop: "60px" }}>
      <h3>(Working) Search For Stocks Symbol : (but there is little delay from testing api end in showing result)</h3>
     
     <h6>This search box is temporary. it will be shifted at the top. </h6>
      <Autocomplete
        style={{ width: 500 }}
        freeSolo
        autoComplete
        autoHighlight
        options={myOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            onChange={(e) => {
              setTimeout(() => {
                getDataFromAPI(e);
              });
            }}
            variant="outlined"
            label="Search Stocks Symbol"
          />
        )}
      />
    </div>
  );
};

export default Dropdown;
