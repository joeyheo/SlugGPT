import React from "react";
import { List, ListItem, ListItemText, Paper } from "@mui/material";

interface Message {
  text: string;
  sender: string;
}

interface ChatAreaProps {
  messages: Message[];
  endOfMessagesRef: React.RefObject<HTMLDivElement>;
}

const ChatArea: React.FC<ChatAreaProps> = ({ messages, endOfMessagesRef }) => {
  return (
    <List>
      {messages.map((message, index) => (
        <ListItem key={index}>
          <Paper style={{ padding: 10 }}>
            <ListItemText primary={message.text} />
          </Paper>
        </ListItem>
      ))}
      <div ref={endOfMessagesRef} />
    </List>
  );
};

export default ChatArea;
