import React, { useState } from 'react'

export default function TextForm(props) {

    const[text, setText] = useState("Enter text here...");

    // func to convert text to uppercase  
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase', 'success');
    }

    // func to convert text to lowercase
    const handleLwClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase', 'success');
    }

    // func to copy content
    const handleCopyContent = () => {
        let textArea = document.getElementById("myBox");
        textArea.select();
        textArea.setSelectionRange(0,99999);
        document.execCommand("copy");
        props.showAlert('Copied', 'success');
    }

    // func to clear textarea 
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert('Clear the text', 'success');
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    // {} for js, {{}} for object

  return (
    <>
        <div className='container my-4'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea 
                    className="form-control" 
                    id="myBox" 
                    value={text} 
                    onChange={handleOnChange} 
                    rows="3"
                    style={{backgroundColor: props.mode ==='dark' ? 'grey': 'white', color: props.mode ==='dark' ? 'white': '#042743' }}
                    ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLwClick}>Convert to LowerCase</button>
            <button className="btn btn-primary" onClick={handleClearClick}>Clear Screen</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyContent}>Copy Content</button>

        </div>

        <div className="container my-4">
            <h1>Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.08 * text.split(" ").length} minutes to read.</p>

            <h2>Preview</h2>
            <p>{text.length>0? text: "Enter something to view preview here..."}</p>
        </div>
    </>
  )
}
