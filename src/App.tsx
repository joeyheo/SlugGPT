import React, { useState, useEffect, useRef } from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import ChatArea from "./ChatArea";
import MessageInput from "./MessageInput";
import Suggestions from "./Suggestions";

interface Message {
  text: string;
  sender: string;
}

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(true);
  const endOfMessagesRef = useRef<null | HTMLDivElement>(null);

  const handleSendMessage = (newMessage: string) => {
    setMessages([...messages, { text: newMessage, sender: "user" }]);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = () => {
    setShowSuggestions(false);
  };

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">SlugGPT</Typography>
        </Toolbar>
      </AppBar>

      {/* Main content area */}
      <Box sx={{ pt: 8, pb: 14, height: "100vh", overflow: "auto" }}>
        {showSuggestions ? (
          <Suggestions setInputFocus={handleSuggestionClick} />
        ) : (
          <ChatArea messages={messages} endOfMessagesRef={endOfMessagesRef} />
        )}
      </Box>

      {/* Fixed position for MessageInput */}
      <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
        <MessageInput onSendMessage={handleSendMessage} />
      </Box>
    </>
  );
};

export default App;
