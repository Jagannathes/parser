import React, { Component }  from 'react';

export default function ShowErrors({error}) {
    console.log("Error in error component", error)
    let errorStr = ""
    if (error && error.toString) {
        errorStr = error.toString()
    } else {
        errorStr = JSON.stringify(error)
    }
    return (
        <textarea className="input-data">
            {errorStr}
        </textarea>
    )
}