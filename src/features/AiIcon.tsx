import React from 'react';
import icon from 'data-base64:~../assets/icon.png';

interface AiIconProps {
  toggle: () => void;
}

const AiIcon: React.FC<AiIconProps> = ({ toggle }) => {
  // AI icon located at the end of text field
  return (
    <button className="focus:outline-none" id="btn" onClick={toggle}>
      <img className='w-14' src={icon} alt="AI Icon" />
    </button>
  );
}

export default AiIcon;
