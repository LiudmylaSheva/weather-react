import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
	let [city, setCity] = useState("");
	let [loaded, setLoaded] = useState(false);
	let [weather, setWeather] = useState({});

	function showWeather(response) {
		setLoaded(true);
		setWeather({
			temperature: response.data.main.temp,
			wind: response.data.wind.speed,
			humidity: response.data.main.humidity,
			icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
			description: response.data.weather[0].description,
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		let apiKey = "b49d82001928d724760116e9d064ee37";
		let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
		axios.get(url).then(showWeather);
	}

	function updateCity(event) {
		setCity(event.target.value);
	}

	let form = (
		<form onSubmit={handleSubmit} className="nav-search">
			<input
				type="search"
				placeholder="Type a city..."
				className="city-form"
				onChange={updateCity}
			/>{" "}
			{""}
			<button type="Submit" className="search">
				{" "}
				◽Search◽{" "}
			</button>
		</form>
	);

	if (loaded) {
		return (
			<div className="row">
				{form}
				<br />
				<br />
				<div className="col=12 fw-semibold text-center">
					Today weather in {city} is...
				</div>
				<br />
				<br />
				<div className="col-sm-6 forecast">
					<p className="fw-semibold">
						Current temp:{" "}
						<span className="fw-normal">
							{Math.round(weather.temperature)} °C{" "}
						</span>
					</p>
					<p className="fw-semibold">
						Humidity: <span className="fw-normal">{weather.humidity} % </span>
					</p>
					<p className="fw-semibold">
						Wind: <span className="fw-normal">{weather.wind} km/h </span>
					</p>
				</div>
				<div className="col-sm-6 forecast">
					<img
						src={weather.icon}
						alt="Weather icon"
						className="fw-semibold text-center"
					/>
					<p className="fw-semibold text-center">
						Description:{" "}
						<span className="fw-normal"> {weather.description} </span>
					</p>
				</div>
			</div>
		);
	} else {
		return form;
	}
}
