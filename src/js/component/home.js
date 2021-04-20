import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [btnClassRed, setBtnClassRed] = useState("");
	const [btnClassYellow, setBtnClassYellow] = useState("");
	const [btnClassGreen, setBtnClassGreen] = useState("");

	const handleClickRed = () => {
		setBtnClassRed("selected"), setBtnClassYellow(""), setBtnClassGreen("");
	};

	const handleClickYellow = () => {
		setBtnClassRed(""), setBtnClassYellow("selected"), setBtnClassGreen("");
	};

	const handleClickGreen = () => {
		setBtnClassRed(""), setBtnClassYellow(""), setBtnClassGreen("selected");
	};

	return (
		<div className="container">
			<div className="trafficTop"></div>
			<div className="trafficBottom">
				<button
					onClick={handleClickRed}
					className={`redLight ${btnClassRed}`}></button>
				<button className="yellowLight"></button>
				<button className="greenLight"></button>
			</div>
		</div>
	);
}
