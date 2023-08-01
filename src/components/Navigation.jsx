/* eslint-disable react/prop-types */

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Navigation = ({ handleSearchChange }) => {
  // state and derived variables
  const [mobileNavDisplay, setMobileNavDisplay] = useState("none");
  const [searchBarValue, setSearchBarValue] = useState("");
  const navShadow = mobileNavDisplay === "none" ? "md" : ["none", "none", "md", "md"];

  // navigation items
  const navItems = [
    { title: "React", searchTerm: "React" },
    { title: "JavaScript", searchTerm: "JavaScript" },
    { title: "CSS", searchTerm: "CSS" },
    { title: "ChatGPT", searchTerm: "ChatGPT" },
  ];

  // toggle mobile nav visibility on / off
  const toggleMobileNav = () => {
    const toggleTo = mobileNavDisplay === "none" ? "flex" : "none";
    setMobileNavDisplay(toggleTo);
  };

  // handle change of searchTearm
  const handleSearchTopicChange = (topic) => {
    console.log(`Search for: ${topic}`);
    //handleSearchChange(topic);
  };

  // search bar handler
  const handleSearchBar = (event) => {
    setSearchBarValue(event.currentTarget.value);
  };

  // submit search
  const handleSearchSubmit = (event) => {
    if (event.key === "Enter" && searchBarValue) {
      // TODO: submit needs to be handled here
      console.log("Submitted: ", searchBarValue);
      //handleSearchChange(searchBarValue);
      setSearchBarValue("");
    }

    if (event.key === "Escape") {
      setSearchBarValue("");
    }
  };

  // repeating navigation elements
  const navElements = (
    <>
      {navItems &&
        navItems.length > 0 &&
        navItems.map((navItem) => (
          <Button
            key={navItem.title}
            w={["100%", "100%", "auto", "auto"]}
            onClick={() => handleSearchTopicChange(navItem.searchTerm)}
          >
            {navItem.title}
          </Button>
        ))}

      {!navItems && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Panic!</AlertTitle>
          <AlertDescription>Something went wrong loading the Navigation.</AlertDescription>
        </Alert>
      )}
    </>
  );
  const searchBar = (
    <Input
      type="text"
      placeholder="Search..."
      maxW={["100%", "100%", "15%", "15%"]}
      value={searchBarValue}
      onChange={handleSearchBar}
      onKeyDown={handleSearchSubmit}
    />
  );

  // DEBUG
  console.log(searchBarValue);

  return (
    <>
      <Flex
        position="sticky"
        top="0"
        justifyContent="space-between"
        alignItems="center"
        padding={[".5rem", ".5rem", "1rem", "1rem"]}
        gap={[0, 0, "1rem", "1rem"]}
        boxShadow={navShadow}
      >
        <Box>
          <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="lg" fontWeight="extrabold">
            WBS HackerNews
          </Text>
        </Box>

        {/* Desktop Nav */}
        <Flex display={["none", "none", "flex", "flex"]} justifyContent="space-between" flexGrow="1">
          <Flex w="100%" justifyContent="space-between">
            <Flex display="flex" justifyContent="flex-start" gap="1rem">
              {navElements}
            </Flex>
            {searchBar}
          </Flex>
        </Flex>

        {/* Mobile - Hamburger Button */}
        <IconButton
          icon={<HamburgerIcon />}
          size="lg"
          mr={2}
          display={["flex", "flex", "none", "none"]}
          onClick={toggleMobileNav}
          margin="0"
        />
      </Flex>
      {/* Mobile Nav */}
      <Flex
        display={mobileNavDisplay}
        w="100%"
        flexDir="column"
        alignItems="center"
        gap="0.25rem"
        padding={[".5rem", ".5rem", "1rem", "1rem"]}
        boxShadow="md"
      >
        {navElements}
        {searchBar}
      </Flex>
    </>
  );
};

export default Navigation;
