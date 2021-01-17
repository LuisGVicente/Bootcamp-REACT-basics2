import React from 'react';
import './HelloProps.css'

export default function HelloProps (props) {

        return (
            <h1 className="c-hello-props">Hello {props.textToShow}</h1>
        )
}