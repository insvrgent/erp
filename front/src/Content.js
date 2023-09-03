import React from 'react';
import './Content.css'; // Create a CSS file for styling

function Content({ id }) {
  return (
    <div id={id} className="content">
        <img src='/env4.png' alt="Your Image" style={{maxWidth: "100%", height: "auto", display: "block", }} />
    </div>
  );
}

export default Content;