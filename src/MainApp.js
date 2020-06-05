import axios from "axios";

const searchElement = document.querySelector('[data-city-search]')
const searchBox = new google.maps.places.SearchBox(searchElement)
searchBox.addListener('places_changed' , () => {
    const places = searchBox.getPlaces()[0];
    if(places == null) return
    const latitude = places.geometry.location.lat()
    const longitude = places.geometry.location.lng()
    let Coordinates = JSON.stringify({
        latitude : latitude,
        longitude : longitude
    })
    axios.post('./weather' , Coordinates)
            .then(res => res.json())
            .then(data => {
                setWeatherData(data, places.formatted_address);
            })
})