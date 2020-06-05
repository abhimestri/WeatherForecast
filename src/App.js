import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import Header from './Container/Header/Header'
import WeatherStatus from './Container/WeatherStatus/WeatherStatus'

class App extends Component{

  state = {
    tempData : 0,
    humidity : 0,
    description : null,
    img : ""
  }

  data = () => {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Bangalore,India&appid=88f4229ac79f389a7645c5b4642ec665')
      .then(res => {
        console.log(res.data)
        this.setState({
          tempData: JSON.stringify(res.data.main.temp),
          humidity : JSON.stringify(res.data.main.humidity),
          description : JSON.stringify(res.data.weather[0].description)
        })
      })
      .catch(err => console.log(err))
  } 

  render(){
    return (
      <div  className="App">
          <div className="container shadow-lg p-3 mb-5 bg-white main-card-to-display-data">
              <WeatherStatus 
                Temperature= {this.state.tempData}
                Humidity = {this.state.humidity}
                Description = {this.state.description}
                />
              <Header getData = {this.data}  />
          </div>
      </div>
    );
  }
}

export default App;
