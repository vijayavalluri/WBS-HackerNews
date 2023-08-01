import { Box, Divider, Flex, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex alignItems="center" flexDirection="column" fontSize=".75rem" marginY={["1rem", "1rem", "2rem", "2rem"]}>
      <Divider w="80%" />
      <Box marginTop="1rem">By Vijaya and Christoph</Box>
      <Box marginTop=".25rem">
        Made with{" "}
        <Link href="https://www.react.dev" isExternal>
          React
        </Link>{" "}
        and{" "}
        <Link href="https://chakra-ui.com/" isExternal>
          Chakra UI
        </Link>
      </Box>
    </Flex>
  );
};

export default Footer;
