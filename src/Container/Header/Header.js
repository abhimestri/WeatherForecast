import React from 'react'
import './Header.css'

const header = (props) => {

    return (
        <div>
            <input className="form-control location-enter" placeholder="enter location" type="text" />
            <button className="btn btn-outline-dark Get-data-button" onClick={props.getData}>get weather</button>
        </div>
    )
}


export default header