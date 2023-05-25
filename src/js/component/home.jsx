import React from "react";

import Card from "./card/Card";

import Jumbotron from "./jumbotron/Jumbotron";

import Navbar from "./navbar/Navbar";



//create your first component
const Home = () => {
	const Cards = {

		title: ["title1", "title2", "title3", "title4"],
		description:["description1", "description2", "description3", "description4"]
		
	}
	const Aux = [1, 2, 3, 4]
	return (
		<>
		<Navbar/>
		<Jumbotron title={"A Warm Welcome!"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat."} bottonDescription={"Call to action!"}/>
		{Cards.title.map((title, index) => (
        <div className= "d-flex containt-fluid-start row">
		<Card
          key={index}
          title={title}
          description={Cards.description[index]}
          bottonDescription={"bottonJumbotron"}
        /></div>
      ))}

	  
		
		</>
	);
};

export default Home;
