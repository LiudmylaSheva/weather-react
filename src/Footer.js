import React from "react";
import "./Footer.css";

export default function Footer() {
	return (
		<div className="Footer text-center">
			<strong>
				{" "}
				<small>
					<a
						href="https://github.com/LiudmylaSheva/weather-react"
						target="_blank"
						rel="noreferrer"
						className="open-source"
					>
						Open-source code
					</a>{" "}
					{""}
					and creation by Liudmyla Shevadutska
				</small>{" "}
			</strong>
		</div>
	);
}
