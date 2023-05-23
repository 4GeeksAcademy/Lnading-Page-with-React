import React from "react";

import Card from "./card/Card";

import Jumbotron from "./jumbotron/Jumbotron";

import Navbar from "./navbar/Navbar";



//create your first component
const Home = () => {
	return (
		<div>
		<Navbar/>
		<Jumbotron title={"Página"} description={"esto es la página"} bottonDescription={"bottonJumbotron"}/>
		<Card title={"Página"} description={"esto es la página"} bottonDescription={"bottonJumbotron"}/>
		</div>
	);
};

export default Home;
