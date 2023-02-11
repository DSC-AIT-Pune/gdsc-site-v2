import React from 'react'
import '../styles/Button.css';

export default function Button(props) {
    return (
        <button className="btn"
            // style={{background:`${props.color}`}}
            style={props.css}
            onClick={(e) => { console.log('button is clicked') }}
        >
            {props.text}
        </button>);
}
