import icon from 'data-base64:~../assets/icon.png'


const AiIcon = (props) => {
    return (
      <div id="btn" onClick={props.onClick} >
          <img style={{width:"32px"}} src={icon} alt="icon" />
      </div>
    )
  }
  
  
export default AiIcon