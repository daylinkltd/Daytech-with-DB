
// "use client"

// import { useState, useEffect } from "react";

const TagRadioButtons = ({ tags, selectedTags, onChange }) => {
  const handleTagChange = (tag) => {
    const updatedSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter((selectedTag) => selectedTag !== tag)
      : [...selectedTags, tag];

    onChange(updatedSelectedTags);
  };

  return (
    <div className=" grid grid-cols-4 gap-x-52 gap-y-4">
      {tags.map((tag) => (
        <label key={tag} className="flex items-center space-x-2">
          <input
            type="checkbox"
            value={tag}
            checked={selectedTags.includes(tag)}
            onChange={() => handleTagChange(tag)}
            className="form-radio"
          />
          <span>{tag}</span>
        </label>
      ))}
    </div>
  );
};

export default TagRadioButtons;
