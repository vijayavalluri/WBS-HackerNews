import { Flex } from "@chakra-ui/react";

/* eslint-disable react/prop-types */
const NewsItem = ({ newsItem }) => {
  return (
    <Flex flexDirection="column">
      <a href={newsItem.url} target="_blank" rel="noreferrer">
        {newsItem.title}
      </a>
      <p>More text</p>
    </Flex>
  );
};

export default NewsItem;
