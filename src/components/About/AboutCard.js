import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Heet Raval </span>
            from <span className="purple"> Toronto , Canada.</span>
            <br />
            I am currently looking for a job as a software engineer.
            <br />
            I have completed Post-grad in Mobile-Web Development at Conestoga
            College.Also, I did Bachelor's in Computer Engineering.
            <br />
            <br />
           
          </p>
         

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Heet</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
