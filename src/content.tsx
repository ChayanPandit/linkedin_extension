import cssText from "data-text:~style.css"
import type { PlasmoCSConfig, PlasmoGetInlineAnchor} from "plasmo"
import AiIcon from "~features/AiIcon";
import { useState } from "react";
import Modal from "~features/Modal";
 

export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

export const getInlineAnchor: PlasmoGetInlineAnchor = async () =>{
  
  const root = document.activeElement;
  var shadowroot = document.getElementsByTagName("plasmo-csui")[0];
  // console.log(document.getElementsByTagName("plasmo-csui").length)

  if(shadowroot==null )
  {
    if ( root.classList.contains('msg-form__contenteditable')) 
    {
      // console.log("hiii")
      return(root);
    }
    return null;
  }
  else
  {
    // console.log(root)
    if (root.parentNode.contains(shadowroot)) 
    {
      // console.log("root has shadow")
      return null;
    }
    else
    {
      await shadowroot.remove();
      // console.log("removed")
      if( root.classList.contains('msg-form__contenteditable'))
      {
        return root;
      }
      return null;
    }
  }
};


const Result = () => {

  const [clicked, setClicked] = useState(false);

  const toggle = ()=>{
    if( !clicked )
    {
      const background = document.createElement("div");
      background.innerHTML = '<div id="modal-background" style="background-color: black; opacity: 60%; top: 0; left: 0; width: 100%; height: 100%; z-index: 500; position: fixed;"></div>';
      const shadowroot = document.getElementsByTagName("plasmo-csui")[0];
      shadowroot.parentNode.parentNode.appendChild(background);
      setClicked(true);
    }
    else
    {
      const background = document.getElementById("modal-background");
      background.remove();
      setClicked(false);
    }
  }

  window.onclick = function(event) {
    const background = document.getElementById("modal-background");
    if (background && event.composedPath()[0]==background) 
    {
      background.remove();
      setClicked(false);
    }
  }
  

  return (
    <div>
      {clicked && 
        <Modal toggle={toggle}/>
      }
      <AiIcon onClick={toggle}/>
    </div>
  )
}


export default Result
