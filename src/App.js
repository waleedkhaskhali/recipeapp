import React, { useEffect, useState } from "react";
import "./App.css";

var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());

const App = () => {
  const APP_ID = "d05276b1";
  const APP_KEY = "f8ceec749f829297da400bf0c9cf868c";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
