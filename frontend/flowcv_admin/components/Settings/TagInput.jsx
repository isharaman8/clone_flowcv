import React, { useState, useRef, useEffect } from "react";
import { Chip, TextField } from "@mui/material";

const TagInput = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [tags]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyPress = (event) => {
    if (event.key === "Enter" && inputValue && tags.length < 30) {
      setTags([...tags, inputValue]);
      setInputValue("");
      event.preventDefault();
    }
  };

  const handleChipDelete = (index) => () => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
    inputRef.current.focus();
  };

  const renderTags = () => {
    return tags.map((tag, index) => (
      <Chip
        key={index}
        label={tag}
        onDelete={handleChipDelete(index)}
        style={{ marginRight: "8px", marginBottom: "8px" }}
      />
    ));
  };

  return (
    <TextField
      value={inputValue}
      onChange={handleInputChange}
      onKeyPress={handleInputKeyPress}
      fullWidth
      variant="outlined"
      multiline
      rows={5}
      disabled={tags.length === 30}
      InputProps={{
        inputRef,
        style: {
          padding: "12px",
          borderRadius: "4px",
          boxShadow: "0 0 2px rgba(0, 0, 0, 0.3)",
          overflow: "hidden",
          lineHeight: "1.6",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
        },
        startAdornment: <div>{renderTags()}</div>,
      }}
    />
  );
};

export default TagInput;
