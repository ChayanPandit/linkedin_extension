import React, { useState, useEffect } from "react";
import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo";
import cssText from "data-text:~style.css";

import AiIcon from "~features/AiIcon";
import Modal from "~features/Modal";
import ModalBackground from "~features/ModalBackground";

// Plasmo extension configuration for LinkedIn URLs
export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"],
};

// Inject tailwind CSS config into the document
export const getStyle = (): HTMLStyleElement => {
  const style = document.createElement("style");
  style.textContent = cssText;
  return style;
};

// Determine the inline anchor element for the extension UI
export const getInlineAnchor: PlasmoGetInlineAnchor = async () => {
  const root = document.activeElement as HTMLElement;
  const shadowroot = document.getElementsByTagName("plasmo-csui")[0];
  
  if (!shadowroot) {
    // If no shadow root already exist, check if the active element is a message text field
    return root.classList.contains("msg-form__contenteditable") ? root : null;
  } else {
    // If shadow root already exists for the active element, do not create anothe root
    if (shadowroot && shadowroot.parentNode.contains(root)) {
      return null;
    } else {
      console.log(root)
      // If active element is a new text field, remove the old shadow element and create a new one
      shadowroot.remove();
      return root.classList.contains("msg-form__contenteditable") ? root : null;
    }
  }
};

const ExtensionContext: React.FC = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  // Apply Tailwind CSS classes to the shadow container to override its default css
  useEffect(() => {
    const shadowRootElement = document.getElementsByTagName("plasmo-csui")[0];
    if (shadowRootElement?.shadowRoot) {
      const shadowContainer = shadowRootElement.shadowRoot.getElementById("plasmo-shadow-container");
      
      if (shadowContainer) {
        shadowContainer.classList.add("!absolute", "!bottom-0", "!right-0", "!z-auto");
      }
    }
  }, []);

  // Toggle the state of the modal (visible/hidden)
  const toggle = () => {
    setClicked(!clicked);
  };

  return (
    <div tabIndex={0}>
      {clicked && <ModalBackground toggle={toggle}/>}
      {clicked && <Modal toggle={toggle} />}
      <AiIcon toggle={toggle} />
    </div>
  );
};

export default ExtensionContext;
