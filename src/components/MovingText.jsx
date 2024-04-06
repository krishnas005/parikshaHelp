import React from 'react';
import './TextMoving.css'; // Import CSS file for styling

const TextMoving = ({ text, delay }) => {
  const containerWidth = '1010px'; // Custom width
  const animationDelay = `${delay / 1000}s`; // Convert delay to seconds for CSS animation

  return (
    <div className="text-moving-container" style={{ width: containerWidth }}>
      <div className="text-moving" style={{ animationDelay }}>
        {text}
      </div>
    </div>
  );
};

export default TextMoving;
