/* eslint-disable react/prop-types */
import NewsItem from "./NewsItem";

const NewsList = ({ newsList }) => {
  return <div>{newsList && newsList.map((item) => <NewsItem key={item.objectID} newsItem={item} />)}</div>;
};

export default NewsList;
