import React from 'react';
import icon from 'data-base64:~../assets/icon.png';

interface AiIconProps {
  toggle: () => void;
}

const AiIcon: React.FC<AiIconProps> = ({ toggle }) => {
  // AI icon located at the end of text field
  return (
    <div id="btn" onClick={toggle}>
      <img className='w-8' src={icon} alt="AI Icon" />
    </div>
  );
}

export default AiIcon;
