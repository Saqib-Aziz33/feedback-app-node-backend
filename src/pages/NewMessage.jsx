import {
  Box,
  Container,
  Heading,
  Input,
  VStack,
  Button,
  useToast,
} from "@chakra-ui/react";
// editor
import FroalaEditorComponent from "react-froala-wysiwyg";
// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import { useState } from "react";
import { useRef } from "react";

function NewMessage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const name = useRef(null);
  const email = useRef(null);
  const toast = useToast();

  async function handleSubmit(e) {
    e.preventDefault();
    const document = {
      name: name.current.value,
      email: email.current.value,
      message,
    };
    // 📩 send data to server
    try {
      setLoading(true);
      const res = await fetch(
        "https://simple-rich-editor-api.herokuapp.com/api/messages",
        {
          method: "POST",
          body: JSON.stringify(document),
          headers: {
            "Content-Type": "Application/json",
          },
        }
      );
      const data = await res.json();
      toast({
        title: "Message added",
        description: "Thanks for your review",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
      resetValues();
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
    } finally {
      setLoading(false);
    }
  }

  function resetValues() {
    setMessage("");
    name.current.value = "";
    email.current.value = "";
  }

  return (
    <Box my={16}>
      <Container maxW={600}>
        <Heading size="lg" color="blue.500">
          Add New Message😚
        </Heading>
        <VStack mt="8" gap={4} as="form" onSubmit={handleSubmit}>
          <Input
            ref={name}
            placeholder="Name"
            variant="flushed"
            required
            type="text"
          />
          <Input
            ref={email}
            placeholder="Email"
            variant="flushed"
            required
            type="email"
          />
          <FroalaEditorComponent
            config={{ placeholderText: "Enter your message here..." }}
            model={message}
            onModelChange={(e) => setMessage(e)}
          />
          <Button
            isLoading={loading}
            loadingText="Submitting"
            variant="outline"
            colorScheme="facebook"
            alignSelf="start"
            type="submit"
          >
            Submit 👲
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}
export default NewMessage;
