/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";
import hackernews from "./assets/hackernews.json";
import Navigation from "./components/Navigation";
import NewsList from "./components/NewsList";
import Footer from "./components/Footer";

function App() {
  const newsList = hackernews.hits;

  return (
    <>
      <h1>Some change</h1>
      <Navigation />
      <NewsList newsList={newsList} />
      <Footer />
    </>
  );
}

export default App;
