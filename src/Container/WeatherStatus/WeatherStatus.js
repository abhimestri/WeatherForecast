import React from 'react'
import './WeatherStatus.css'

const WeatherStatus = (props) => {
    let Temperature = JSON.parse(props.Temperature)
    let Humidity = JSON.parse(props.Humidity)
    let Description = JSON.parse(props.Description)
    console.log(Temperature)
    return(
        <div className="inner-box">
            <div>
                    <h3 className="label-temperature">Temperature</h3>
                    <h1 className="Temperature">{Temperature + 'F'}</h1>
            </div>
            <div className="seperator-line"></div>
            <div>
                    <h3 className="label-humidity">Humidity</h3>
                    <h1 className="Humidity">{Humidity + '%'}</h1>
            </div>
            <div className="seperator-line"></div>
            <div>   
                    <h3 className="label-description">Description</h3>
                    <h1 className="Description">{Description}</h1>
            </div>
        </div>
    )
}

export default WeatherStatus