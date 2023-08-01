/* eslint-disable react/prop-types */
const NewsItem = ({ newsItem }) => {
  return (
    <div>
      <a href={newsItem.url} target="_blank" rel="noreferrer">
        {newsItem.title}
      </a>
    </div>
  );
};

export default NewsItem;
