import "./App.css";
import React from "react";
import "./App.css";
import Cities from "./Cities";
import Search from "./Search";
import Footer from "./Footer";

function Weather() {
	return (
		<div className="Weather weather-body">
			<Cities />
			<hr />
			<Search />
			<hr />
			<Footer />
		</div>
	);
}

export default Weather;
