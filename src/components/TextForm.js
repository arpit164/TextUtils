import React, {useState} from 'react'

export default function TextForm(props) {
    //when textarea value change
    const handleUpChange = (event) => {
        // alert("textarea change");
        setText(event.target.value);
    }

    //when upper case button clicked
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    //when lower case button clicked
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }

    //when lower case button clicked
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared","success");
    }

    //copy button clicked
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to Clipboard","success");
    }

    //remove extra spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces","success");
    }

    const [text, setText] = useState('');
    
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}} >
            <h2 >{props.heading}</h2>
            <div className="mb-3">
                <textarea 
                    className="form-control" 
                    value={text} 
                    onChange={handleUpChange} 
                    style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}}
                    placeholder="Enter Text Here" 
                    id="myBox" 
                    rows={5}
                    
                />
                <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to Upper Case</button>
                <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to Lower Case</button>
                <button className="btn btn-primary my-2" onClick={handleClearClick}>Clear text</button>
                <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-primary my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
        </div>

        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your test summery :</h2>
            <p>{text.split(" ").length} words and {text.length} character</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h3>Preview :</h3>
            <p>{text.length>0?text:"Enter Something in the textbox above to preview it ..."}</p>   
        </div>
        </>
    )
}
