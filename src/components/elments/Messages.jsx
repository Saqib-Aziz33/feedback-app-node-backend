import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";

function Messages({ messages }) {
  return (
    <Box my={16}>
      <Container maxW={1000}>
        <Heading size="xl" mb={4}>
          Messages{" "}
          <Text as="span" color="blue.500">
            List
          </Text>
        </Heading>
        <Grid
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={8}
        >
          {messages.map((message) => (
            <GridItem key={message._id} shadow="lg" rounded="lg" p={4}>
              <Text
                p={4}
                textAlign="left"
                rounded="md"
                bg="gray.100"
                dangerouslySetInnerHTML={{ __html: message.message }}
              />
              <Text mt={2}>📧: {message.email}</Text>
              <Text>
                by{" "}
                <b>
                  <em>{message.name}</em>
                </b>
              </Text>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
export default Messages;
