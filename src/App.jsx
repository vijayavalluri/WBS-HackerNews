/* eslint-disable react/prop-types */
import { useState, useEffect} from "react";
import "./App.css";
import hackernews from "./assets/hackernews.json";
import Navigation from "./components/Navigation";
import NewsList from "./components/NewsList";
import Footer from "./components/Footer";
import axios from 'axios';

function App() {
  const newsList = hackernews.hits;
// ///// json code fetch with axios
const [news, setNews] = useState([]);
useEffect(() => {
  axios.get("http://hn.algolia.com/api/v1/search?query=React").then(res =>setNews(res.data.hits))
  .catch((err) => console.log(err));
}, []);
  console.log(news);
  return (
    <>
      <Navigation />
      <NewsList newsList={newsList} 
     
       />
         {
       news.map( record => {
          return(
            <div className="box" key={record.obectId}>
             <strong>{ record.title }</strong> <br />
             {record.hits} <br />
            </div>
          )
        })
      }
     
      <Footer />
    </>
  );
}

export default App;
