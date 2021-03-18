import React, { useEffect, useState } from 'react';
import './style.css';

const TempApp = () => {
    const [city, setCity] = useState(null)
    const [search, setSearch] = useState("Mumbai")

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5b84a81b0de3696d8a4db5eada556fb0`
            const res = await fetch(url)
            const resJson = await res.json();
                console.log(resJson);
            setCity(resJson.main)
        }
        fetchApi();
    }, [search])

    return (
        <div style={{
            background: 'darkslategray',
            minWidth: '300px',
            textAlign: 'center',
            borderRadius: '20px'
        }}>
            
                <div style={{    padding: '30px 0 0px 0px'}}>
                    <input
                        type="search"
                        value={search}
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }}
                    />
               
            </div>
            {
                !city ? (
                    <p>No data found</p>
                ) : (
                        <div>
                            <h2>{search}</h2>
                            <h3> {city.temp} °C</h3>
                            <h4> Min : {city.temp_min}°C    |  max : {city.temp_max}°C</h4>
                      
                        </div>
                    )}

        </div>
    )
}
export default TempApp;