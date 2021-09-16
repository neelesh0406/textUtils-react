import React, {useState} from 'react'

export default function TextForm(props) {
    
    //State variable
    const [text, setText] = useState("");

    //Convert to uppercase 
    const handleUpClick = () => {
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    //Convert to lowercase 
    const handleLoClick = () => {
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }
    //Reverse the text
    const handleRevClick = () => {
        const newText = text.split("").reverse().join("");
        setText(newText);
        props.showAlert("Reversed the text","success");
    }
    //Capitalize text
    const handleCapClick = () => {
        let newText = text.split(" ");
        for (let i in newText){
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].substr(1).toLowerCase();
        }
        newText = newText.join(" ");
        setText(newText);
        props.showAlert("Capitalized the text","success");
    }
    //Remove extra spaces
    const handleSpaceClick = () => {
        const newText = text.replace(/\s+/g,' ').trim();
        setText(newText);
        props.showAlert("Removed extra spaces","success");
    }
    //Clear text
    const handleClearClick = () => {
        const newText = "";
        setText(newText);
        props.showAlert("Text cleared","success");
    }

    //Function which allows us to write in the text area
    const onChangeFunc = (event) => {
        setText(event.target.value);
    }


    return (
        <>
        <div className="container my-5 px-5">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={onChangeFunc}  style={props.mode==='light' ? {color: 'black', backgroundColor: 'white'}:{color: 'wheat', backgroundColor: props.bg}} id="textAreaExample2" rows="8" placeholder="Ente text here..."></textarea>
            <button disabled={text.length===0} className={`btn btn-${props.btnColor} my-2 mx-1`} onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button disabled={text.length===0} className={`btn btn-${props.btnColor} my-2 mx-1`} onClick={handleLoClick}>Convert to lowercase</button>
            <button disabled={text.length===0} className={`btn btn-${props.btnColor} my-2 mx-1`} onClick={handleRevClick}>Reverse Text</button>
            <button disabled={text.length===0} className={`btn btn-${props.btnColor} my-2 mx-1`} onClick={handleCapClick}>Capitalize Text</button>
            <button disabled={text.length===0} className={`btn btn-${props.btnColor} my-2 mx-1`} onClick={handleSpaceClick}>Remove extra spaces</button>
            <button disabled={text.length===0} className={`btn btn-${props.btnColor} my-2 mx-1`} onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container px-5">
            <h2>Text Information</h2>
            <p className="text-muted">{text.split(/\s/).filter(element => element.length>0).length} words and {text.length} characters</p>
            <p className="text-muted">{0.008  * text.split(/\s/).filter(element => element.length>0).length} minutes read</p>
            <h3>Preview</h3>
            <p className="text-muted">{text.length>0 ? text: "Enter something in the textbox above to preview here"}</p>
        </div>
        </>
    )
}
