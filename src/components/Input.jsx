
import { useState } from 'react';
import './InputStyles.css';


const Input = ({row = 1, disabled, error, helperText, startIcon, endIcon, id="", value="", size='md', fullWidth, multiline}) => {
    
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div className="input-type">
            {
                multiline && row > 1 ?
                <textarea rows={row} placeholder="Placeholder" className="multiline" ></textarea>
                :
                <input 
                    className={ (error ? "error" : null ) + " " + (startIcon ? "start-icon" : null || endIcon ? "end-icon" : null) + " " + size + " " + (fullWidth ? "full-width" : null) + " " + (multiline ? "multiline" : null)} 
                    placeholder="Placeholder" 
                    disabled={disabled ? true : false} 
                    type="text" 
                    id={id}
                    value={text === "" ? value : text}
                    onChange={handleChange}
                />
            }
            <label 
            className={ (error ? "error" : null)   } 
            disabled={disabled ? true : false} 
            >Label</label>
            {
                helperText !== "" ?
                 <p className={ (error ? "error" : null)   } >{helperText}</p>
                
                :
                ""
            }
        </div>

    )
}

export default Input;


// + (disabled ? "disabled" : "")