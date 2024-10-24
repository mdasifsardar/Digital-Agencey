import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./skill.css";

const Skill = () => {
  return (
    <section className="skillArea">
      <div className="headingArea text-center">
        {" "}
        <h2>How can we help you?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse
          et <br></br>justo. Praesent mattis commodo augue.
        </p>
      </div>
      <Container>
        <Row>
          <Row>
            <Col lg={4}>
              <div className="skill-area">
                {" "}
                <div className="fontIcon">
                  <i class="fa-solid fa-pen-to-square"></i>
                </div>
                <h4>Design</h4>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Suspendisse et justo. Praesent mattis commodo augue.
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="skill-area">
                {" "}
                <div className="fontIcon">
                  <i class="fa-regular fa-window-restore"></i>{" "}
                </div>
                <h4>Development</h4>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Suspendisse et justo. Praesent mattis commodo augue.
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="skill-area">
                {" "}
                <div className="fontIcon">
                  <i class="fa-regular fa-paper-plane"></i>{" "}
                </div>
                <h4>Design</h4>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Suspendisse et justo. Praesent mattis commodo augue.
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="skill-area">
                {" "}
                <div className="fontIcon">
                  <i class="fa-regular fa-lightbulb"></i>{" "}
                </div>
                <h4>Design</h4>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Suspendisse et justo. Praesent mattis commodo augue.
                </p>
              </div>
            </Col>{" "}
            <Col lg={4}>
              <div className="skill-area">
                {" "}
                <div className="fontIcon">
                  <i class="fa-regular fa-credit-card"></i>{" "}
                </div>
                <h4>Design</h4>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Suspendisse et justo. Praesent mattis commodo augue.
                </p>
              </div>
            </Col>{" "}
            <Col lg={4}>
              <div className="skill-area">
                {" "}
                <div className="fontIcon">
                  <i class="fa-regular fa-circle-user"></i>{" "}
                </div>
                <h4>Design</h4>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Suspendisse et justo. Praesent mattis commodo augue.
                </p>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </section>
  );
};

export default Skill;
