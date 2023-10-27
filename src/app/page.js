"use client";
import React, { useState } from "react";
import "./globals.css";
export default function Home() {
  const [location, setLocation] = useState();
  const [weather, setWeather] = useState();
  const handelChange = (e) => {
    setLocation(e.target.value);
  };
  const handelClick = async () => {
    if (location === undefined || NaN) {
      alert("please enter a valid place name");
      setLocation("");
    }
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=f858035b2a234d3a8f321234232710&q=${location}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    // console.log(data.current, "Current");
    setWeather(data);
  };
  // console.log(weather.current.location.tz_id);
  console.log(weather);
  return (
    <div className="text-white">
      <h1 className="text-center text-3xl font-bold mt-9 text-yellow-400">
        WeatherAPP By GB
      </h1>
      <section className="text-center mt-12">
        <div>
          <label htmlFor="location"></label>
          <input
            className="outline-none text-black p-3 font-semibold rounded-sm"
            type="text"
            placeholder="Enter the Place Name"
            name="location"
            id="location"
            onChange={handelChange}
            value={location}
          />
          <button
            onClick={handelClick}
            className="ml-7 bg-slate-300 p-2 rounded-sm font-semibold text-black/80 cursor-pointer"
          >
            Search
          </button>
        </div>
        <div className="mt-6 text-2xl">
          <p>Timezone : {weather && weather.location.tz_id}</p>
          <p>LocalTime : {weather && weather.location.localtime}</p>
        </div>
        <div className="mt-16">
          <h2 className="font-bold text-6xl text-white">
            {weather && weather.current.temp_c} &#8451;
          </h2>
        </div>
        <div className="mt-10">
          <img
            className="text-center my-auto mx-auto "
            src={weather && weather.current.condition.icon}
            alt=""
          />
          <p className="font-semibold text-4xl">
            {weather && weather.current.condition.text}
          </p>
        </div>
      </section>
    </div>
  );
}
