import {
  Container,
  Box,
  Button,
  Image,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";

function NotFound() {
  return (
    <Box className="notfound-page">
      <Container>
        <VStack my={8} gap={4}>
          <Image src="assets/404.svg" maxW={400} />
          <Heading>Page Not Found</Heading>
          <Button display="flex" alignItems="center" gap={2}>
            <MdOutlineArrowBack />
            <Link to="/">Back To Home</Link>
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}
export default NotFound;
