import React from 'react';

interface ModalBackgroundProps {
    toggle: () => void;
}

const ModalBackground: React.FC<ModalBackgroundProps> = ({ toggle }) => {
    const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (event.target === event.currentTarget) {
            toggle();
        }
    };

    return (
        <div
            id="modal-background"
            className="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-50"
            onClick={handleBackgroundClick}
        />
    );
}

export default ModalBackground;
