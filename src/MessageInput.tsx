import React, { useState } from "react";
import { TextField, IconButton, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        margin: 2,
        padding: "2px 4px",
        elevation: 0, // Set elevation to 0
        backgroundColor: "transparent", // Set background color to transparent
        boxShadow: "none", // Remove box shadow
      }}
    >
      <TextField
        fullWidth
        label="Message SlugGPT..."
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSend()}
      />
      <IconButton onClick={handleSend}>
        <SendIcon />
      </IconButton>
    </Paper>
  );
};

export default MessageInput;
