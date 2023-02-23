import React, {useState} from 'react'

export default function Textform(props) {
const handleUpClick=()=>{
    let newtext=text.toUpperCase();
 setText(newtext);
    console.log("clicked");
}
const handleLoClick=()=>{
  let newtext=text.toLowerCase();
setText(newtext);
  console.log("clicked");
}
const handleOnChange=(e)=>{

    console.log("OnChange");
    setText(e.target.value);
}
const handleCopy=()=>{
var text=document.getElementById("myBox");
text.select();
navigator.clipboard.writeText(text.value);

}

const handleSpaces=()=>{
  var newText=text.split(/[ ]+/);
  setText(newText.join(" "));
  }

    const[text, setText]=useState("");
    
  return (
    <><div className='Container' style={{color: props.mode==='dark'?'white':'black'}}><div className="mb-3" >
              <label htmlFor="myBox" className="form-label" >Enter Some Text</label>
              <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" placeholder='Enter some text here' rows="3"></textarea>

          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
          <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
          <button className="btn btn-primary mx-2" onClick={handleSpaces}>Remove Spaces</button>
          </div>
          <div className='Container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1 >your text summary</h1>
            <p >{text.split(" ").length} words and {text.length} charchtors</p>
            <p >{0.0008 * text.split(" ").length} minutes to read</p>
            <h2 >Preview</h2>
            <p >{text}</p>
          </div>
          </>
  )
}
