import React, { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
    const s1 = {
        "name": "madhuri",
        "role": "developer"
    }
    const [state, setState] = useState(s1);
    const update = () =>{
        setTimeout(() => {
            setState({
                "name": "madhur",
                "role": "teater"
            })
        }, 1000);
    }
console.log(update);
    return (
        <NoteContext.Provider value={{ state, update }}>

            {props.children}
        </NoteContext.Provider>)
}
export default NoteState;