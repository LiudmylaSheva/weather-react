import React from "react";
import "./Cities.css";

export default function Cities() {
	return (
		<div className="row-sm Cities">
			<span className="city-stripe">Lviv</span> {""}
			<span>
				<i className="fa-solid fa-location-dot"></i>
			</span>{" "}
			{""}
			<span className="city-stripe">Kyiv</span> {""}
			<span>
				<i className="fa-solid fa-location-dot"></i>
			</span>{" "}
			{""}
			<span className="city-stripe">Dnipro</span> {""}
			<span>
				<i className="fa-solid fa-location-dot"></i>
			</span>{" "}
			{""}
			<span className="city-stripe">Kharkiv</span> {""}
			<span>
				<i className="fa-solid fa-location-dot"></i>
			</span>{" "}
			{""}
			<span className="city-stripe">Odesa</span> {""}
			<span>
				<i className="fa-solid fa-location-dot"></i>
			</span>{" "}
			{""}
			<span className="city-stripe">Kherson</span>{" "}
			<span>
				<i className="fa-solid fa-location-dot"></i>
			</span>{" "}
			{""}
			<br />
			<br />
			<span className="city-stripe fw-semibold text-center">
				<center>
					{" "}
					And all other cities of Independent Ukraine <br /> Let's stand
					together <i class="fa-solid fa-heart fa-beat"></i>
				</center>
			</span>
		</div>
	);
}
