import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import p5 from "../assets/images/div.png"
import p2 from "../assets/images/Brainstorm your book easily..png";
import p3 from "../assets/images/World-class companies use Writealy AI writing platform to unlock brainstorming for publishing a book..png";
import p4 from "../assets/images/div (3).png";

const HeroSection = () => {
  return (
    <Container>
      <Row>
        <Col md={8}>
        <img src={p2} alt="" />
        <br />
        <br />
         
        <br />
        <img src={p3} alt="" />
        <br />
        
        <Button variant="primary" className="rounded-circle">Request a Demo</Button>
        <Button variant="primary" className="rounded-circle">Try For Free</Button>
        <br />
        <br />
         
        <br />
        <br />
         
        <br />
        <br />
         
        
        <img src={p5} alt="" style={{ width: '700px', height: '400px' }}/>
        
        {/* <image src="/div.jpg" alt="Description of the image" fluid /> */}
        </Col>

        <Col md={4}>
        <img src={p4} alt=""/>
        <br />
        <h2>Watch The Product Overview</h2>
        <br /><br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h3>Ideate faster</h3>
          <p>Use AI as your brainstorming</p>

          <h3>Write faster</h3>
          <p>Generate first drafts in bre</p>

          <h3>Edit faster</h3>
          <p>Automate brand, editorial and edits</p>

          <h3>Illustrate faster</h3>
          <p>Instantly produce brand, editorial and edits</p>

          <h3>Publish faster</h3>
          <p>Turn a blog post into a case study - or vice versa</p>



          {/* <Button id='but'>Click me</Button> */}

        </Col>
      </Row>
    </Container>
  );
}

export default HeroSection;
