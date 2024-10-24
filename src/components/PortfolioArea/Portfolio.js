import React from "react";
import "./Portfolio.css";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import portfolio1 from "../../img/portfolio1.png";
import portfolio2 from "../../img/portfolio2.png";
import portfolio3 from "../../img/portfolio3.png";
import portfolio4 from "../../img/portfolio4.png";

const Portfolio = () => {
  return (
    <section className="portfolioArea">
      <div className="allPortfolio">
        <div className="headingText text-center">
          <h2>Portfolio</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Suspendisse et <br />
            justo. Praesent mattis commodo augue.​
          </p>
        </div>
        <Container>
          <div className="allImages">
            <img src={portfolio1} alt="" className="single" />
            <img src={portfolio2} alt="" className="single" />
            <img src={portfolio3} alt="" />
            <img src={portfolio4} alt="" />
          </div>
          <div className="myBtn">
            <Button variant="primary">EXPLORE MORE </Button>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Portfolio;
