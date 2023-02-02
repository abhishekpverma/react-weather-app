//https://api.openweathermap.org/data/2.5/weather?q=pune&appid=efd1b160520ad86c95c015297e7784e3

import React, { useEffect, useState } from "react";
import "./style.css";
import WeatherCard from "./WeatherCard";

const Weather = () => {

    const [searchValue, setSearchValue] = useState("Pune");

    const [info, setInfo] = useState({});

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=efd1b160520ad86c95c015297e7784e3`;

            let res = await fetch(url);
            let data = await res.json();

            const { temp, humidity, pressure } = data.main;
            const {main: weathermood} = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country, sunset} = data.sys;


            const myNew = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset
            };
            setInfo(myNew);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getWeatherInfo();
    }, []);


    return (
        <>
            <div className="main">
            <h1>World Weather</h1>
                <div className="search">
                    <input type="search" placeholder="Enter city name..." autoFocus id="search"
                        value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} />
                    <button type="button" onClick={getWeatherInfo}>Search</button>
                </div>

                {/* our temperature card */}

               <WeatherCard info={info}/>
            </div>
        </>
    );
};

export default Weather;