import React from "react";
import Card from "./card/Card";
import Jumbotron from "./jumbotron/Jumbotron";
import Navbar from "./navbar/Navbar";

const Home = () => {
  const Cards = [{title : 'title1', description: "description1"},{title : 'title2', description: "description2"},{title : 'title3', description: "description3"}, {title : 'title4', description: "description4"}];
   
  
  return (
    <>
      <Navbar />
      <Jumbotron
        title={"A Warm Welcome!"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat."
        }
        bottonDescription={"Call to action!"}
      />
      <div className="d-flex container-fluid">
        <div className="row">
          {Cards.map((element, index) => (
            <div key={index} className="col">
              <Card
                title={element.title}
                description={element.description}
                bottonDescription={"botton"}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
