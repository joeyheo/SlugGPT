import React from "react";
import { Button } from "@mui/material";

const suggestions = [
  "Write a SQL query that adds a 'status' column to an 'orders' table",
  "Recommend activities for a team-building day with remote employees",
  "Come up with concepts for a retro-style arcade game",
  "Suggest some names for my cafe-by-day, bar-by-night business",
];

interface SuggestionsProps {
  setInputFocus: (focus: boolean) => void;
}

const Suggestions: React.FC<SuggestionsProps> = ({ setInputFocus }) => {
  return (
    <div style={{ animation: "popIn 0.5s ease-in-out" }}>
      {suggestions.map((suggestion, index) => (
        <Button
          key={index}
          onClick={() => setInputFocus(true)}
          style={{ display: "block", margin: "10px 0" }}
        >
          {suggestion}
        </Button>
      ))}
    </div>
  );
};

export default Suggestions;
