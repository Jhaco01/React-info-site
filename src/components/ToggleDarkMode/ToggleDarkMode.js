import React, { useState } from "react";
import "./ToggleDarkMode.css"

export const ToggleDarkMode = ({toggleDark}) => {

    const [nameClass, setNameClass] = useState('');

    const translate = () => {
        setNameClass( prevState => prevState ? '' : 'translate' );
        toggleDark();
    }


    return (
        <div className="toggle-dark1">
                <div onClick={translate} className="toggle-track" role={'button'} >
                    <div className={`track-thumb ${nameClass}`}></div>
                </div>
                <input type={'checkbox'} className="screen-reader" />
        </div>
    )
}