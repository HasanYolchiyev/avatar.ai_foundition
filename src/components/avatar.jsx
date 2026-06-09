import React from 'react';
import "./avatar.css"

const AvatarCard = () => {
  return (
    <div className="card-container">
      <div className="card-header">
        <span className="header-title">AVATAR.AI</span>
        <div className="header-circle"></div>
      </div>

      <div className="card-body">
        <div className="inner-box">\
          <div className="text-bar">
            text...
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarCard;