import generate_icon from 'data-base64:~../assets/generate_icon.png';
import regenerate_icon from 'data-base64:~../assets/regenerate_icon.png';
import insert_icon from 'data-base64:~../assets/insert_icon.png';
import { useState } from 'react';

interface ModalProps {
  toggle: () => void;
}

// Modal component to handle the generation, display, and insertion of a response
const Modal: React.FC<ModalProps> = ({ toggle }) => {

  const [generated, setGenerated] = useState<boolean>(false);
  const [input, setInput] = useState<string>("Reply thanking for the opportunity");
  const [prompt, setPrompt] = useState<string>("");
  const [reply, setReply] = useState<string>("Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.");

  // Handles inserting the generated reply into the message box and removing the already present placeholder
  const handleInsert = () => {
    const messageBox = document.querySelector("plasmo-csui")?.parentElement?.querySelector(".msg-form__contenteditable p");
    const placeholderBox = document.querySelector("plasmo-csui")?.parentElement?.querySelector(".msg-form__placeholder");

    if (messageBox) {
      messageBox.innerHTML += `${reply}`;
      messageBox.setAttribute("data-artdeco-is-focused", "true");
    }

    if (placeholderBox) {
      placeholderBox.classList.remove("msg-form__placeholder");
    }
    
    toggle();
  }

  // Updates the prompt input field as the user types
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  // Handles generating a response based on the input
  // Currently put manually from contant variables, can be later achived through api
  const handleGenerate = () => {
    setGenerated(true);
    setPrompt(input);
    setReply(reply);
  }

  return (
    <div id="myModal" className="modal bg-slate-100 p-5 rounded-lg fixed z-[501] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-auto w-[350px] max-h-[500px] overflow-visible block">
      
      {generated && 

        // Chat history which is present over the prompt input field 

        <div id="chat-box" className="flex flex-col items-start gap-2.5">
          <div id="white-chat" className="place-self-end w-3/5 p-4 border-gray-200 bg-slate-300 rounded-lg">
            <p className="text-xl font-normal text-gray-900">{prompt}</p>
          </div>
          <div id="blue-chat" className="w-3/5 p-4 border-gray-200 bg-blue-200 rounded-lg">
            <p className="text-xl font-normal text-gray-900">{reply}</p>
          </div>
        </div>
      }

      {/* Prompt input form */}

      <form className="modal-form mt-2 h-2/6 mb-2">
        <div className="mb-5">
          <input
            type="text"
            id="input_field"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Reply thanking for the opportunity"
            value={input}
            onChange={handleChange}
          />
        </div>
        <div className="buttons flex flex-row justify-end h-5 mb-1">
          

          {generated ? (
            
            // Button for inserting the prompt 

            <button
              type="button"
              className="flex flex-row text-gray-600 bg-white border border-2 border-gray-500 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xl py-4 mb-2 justify-around w-28 relative mr-2"
              onClick={handleInsert}
            >
              <img className="absolute h-1/2 top-1/4 right-3/4" src={insert_icon} alt="Insert Icon" />
              <p className="absolute top-0.5 left-1/3">Insert</p>
            </button>
          ) : 
          (

            // Button for generating the response
            
            <button
              type="button"
              className="flex flex-row text-white bg-blue-500 border border-2 border-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl py-4 mb-2 justify-around w-36 relative mr-2"
              onClick={handleGenerate}
            >
              <img className="absolute top-1/4 right-3/4 h-3/6 w-1/6" src={generate_icon} alt="Generate Icon" />
              <p className="absolute top-0.5 left-1/3">Generate</p>
            </button>
          )}

          {generated && (

            // Button for regenerating the response to new prompt

            <button
              type="button"
              className="flex flex-row text-white bg-blue-500 border border-2 border-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl py-4 mb-2 justify-around w-40 relative"
              onClick={handleGenerate}
            >
              <img className="absolute top-1/4 left-3 h-4/6" src={regenerate_icon} alt="Regenerate Icon" />
              <p className="absolute top-0.5 left-1/4">Regenerate</p>
            </button>
          )}
          
        </div>
      </form>
    </div>
  );
}

export default Modal;
