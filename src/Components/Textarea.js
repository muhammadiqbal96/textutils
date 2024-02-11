import React, { useState } from 'react'


export default function Textarea(props) {
  const [text, setText] = useState("")

  const handlechange = (e) => {
    setText(e.target.value)
    
  }
  const handleUpClick = () => {
    setText(text.toUpperCase())
    props.showalert("Your text has been converted to upper case.");
  }
  const handleLOClick = () => {
    setText(text.toLowerCase())
    props.showalert("Your text has been converted to lower case.");
  }
  const handleClearClick = () => {
    setText("")
    props.showalert("Your text has been cleared.");
  }
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text)
    props.showalert("Your text has been copied.");
  }

  return (
    <div>
      <div className="mx-20">
        <h2><b style={{color : props.mode === "Dark" ? "black" : "white"}}>Analyze Your Text:</b></h2>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="12"
          placeholder="Enter your text..."
          value={text}
          onChange={handlechange}
          style={
            { background: props.mode === "Light" ? "rgb(42 100 153)" : "white",
              color: props.mode === "Dark" ? "black" : "white"}
          }
        ></textarea>
      </div>
      <button className='btn btn-primary mx-1 my-2' onClick={handleUpClick}>To Uppercase</button>
      <button className='btn btn-primary mx-1 my-2' onClick={handleLOClick}>To Lowercase</button>
      <button className='btn btn-primary mx-1 my-2' onClick={handleClearClick}>Clear Text</button>
      <button className='btn btn-primary mx-1 my-2' onClick={handleCopyClick}>Copy Text</button>
      <div className='my-3'  style={{color : props.mode === "Dark" ? "black" : "white"}}>
        <h3>Text Summary</h3>
        <p>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words and {text.length} character</p>
        <p> {0.008 * text.split(/\s+/).filter((e)=>{return e.length!==0}).length} Minutes to read</p>
      </div>
      <div className='my-3' style={{color : props.mode === "Dark" ? "black" : "white"}}>
        <h3>Preview</h3>
        <p>{text === "" ? "Enter text in above box to preview in here..." : text}</p>
      </div>
    </div>
  );
}