import React, { useEffect, useState } from "react";

const WeatherCard = ({ info }) => {

    const [weatherCurMood, setWeatherCurrMood] = useState("");

    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
    } = info;

    // set icon as per weather mood

    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds": setWeatherCurrMood("wi-day-cloudy");
                    break;

                case "Haze": setWeatherCurrMood("wi-fog");
                    break;

                case "Haze": setWeatherCurrMood("wi-day-sunny");
                    break;

                    case "Smoke": setWeatherCurrMood("wi-dust");
                    break;

                default : setWeatherCurrMood("wi-day-sunny");
                    break;
            }
        }
    })

    // converting the seconds in time
    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeNow = date.toLocaleTimeString();

    return (
        <>

            <article>
                <div className="wetherIcon">
                    <i class={`wi ${weatherCurMood}`}></i>
                </div>

                <div className="weatherInfo">

                    <div className="temperture">
                        <span>{temp}&deg;</span>
                    </div>

                    <div className="description">
                        <div className="weatherCondition">{weathermood}</div>
                        <div className="place">{name}, {country}</div>
                    </div>
                    <div className="date"> {new Date().toLocaleString()}</div>
                </div>

                {/* our column section */}

                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p> <i class="wi wi-sunset"></i></p>
                            <p className="extra-info-leftside"> {timeNow} <br /> Sunset</p>
                        </div>

                        <div className="two-sided-section">
                            <p><i class="wi wi-humidity"></i></p>
                            <p className="extra-info-leftside"> {humidity} <br /> Humidity</p>
                        </div>

                        <div className="two-sided-section">
                            <p><i class="wi wi-humidity"></i></p>
                            <p className="extra-info-leftside"> {pressure} <br /> Pressure</p>
                        </div>

                        <div className="two-sided-section">
                            <p><i class="wi wi-humidity"></i></p>
                            <p className="extra-info-leftside"> {speed} <br /> Speed</p>
                        </div>
                    </div>
                </div>

            </article>

        </>
    );
};

export default WeatherCard;