// components
import Messages from "../components/elments/Messages";
import { useEffect, useState } from "react";
import { Heading, Spinner, VStack } from "@chakra-ui/react";

function Home() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      const res = await fetch(
        "https://simple-rich-editor-api.herokuapp.com/api/messages",
        {
          method: "GET",
        }
      );
      const data = await res.json();
      return data.messages.reverse();
    }
    getData().then((data) => {
      setMessages(data);
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <VStack>
        <Spinner mx="auto" size="xl" color="blue.200" />
      </VStack>
    );
  return (
    <div className="home-page">
      <>
        {messages.length >= 1 ? (
          <Messages messages={messages} />
        ) : (
          <Heading size="md" textAlign="center">
            No Messages to show
          </Heading>
        )}
      </>
    </div>
  );
}
export default Home;
