import { Box, Container, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box as="footer" className="footer" p={4} bg="#eee">
      <Container maxW="1200px">
        <Text textAlign="center">
          &copy;2022 react.js boilerplate Chakra ui
        </Text>
      </Container>
    </Box>
  );
}
export default Footer;
