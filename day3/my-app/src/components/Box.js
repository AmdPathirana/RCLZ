import React from 'react';
import './Box.css';
export default function Box(props) {
    return (
        <div className="box">
            {props.name}
        </div>
    )
}
