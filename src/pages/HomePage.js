import React from 'react';
import ControlledCarousel from '../components/ControlledCarousel';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const HomePage = () => {
  return (
    <div>
      <ControlledCarousel /> 
  <Container style={{ marginBottom:20, marginTop:20 }}>
    <h1>The Ultimate Guide to Food and Nutrition</h1>
    <p>
    Transform your Health and reach your Weight Loss Goals!.
    </p>
    <Row>
    <Col xs={6} md={6}>
      <Image src="https://weightloss-solutions.org/wp-content/uploads/2024/05/ultimate-guide-weight-loss-solutions-1024x877.png" width={'70%'} />
    </Col>
    
    <Col xs={6} md={6}>
    <Container>
      <h2>Learn the perfect balance of food and preparing delicious healthy meals to burn fat and lose weight.</h2>
      <p>This comprehensive guide to a healthy diet will teach you how to balance the right combinations of foods to burn fat and achieve optimal health. From understanding macronutrients to creating delicious, nutritious meal plans, this guide is your key to unlocking the secrets of sustainable weight loss. Get your copy today and start your journey to a healthier, happier you!”</p>
    </Container>
    </Col>
    </Row>
  </Container>
  <Container style={{ marginBottom:20, marginTop:20 }}>
    <h1>The Surprising Benefits of Proper Nutrition</h1>
    <Row>
      <Col xs={4} md={4}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://weightloss-solutions.org/wp-content/uploads/2023/06/Scale-Happy-Woman2-1.png" />
      <Card.Body>
        <Card.Title>Sustainable weight loss</Card.Title>
        <Card.Text>
        By understanding the principles of healthy eating and nutrition, you can lose weight in a sustainable and healthy way.
        </Card.Text>
      </Card.Body>
    </Card>
      </Col>
      <Col xs={4} md={4}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://weightloss-solutions.org/wp-content/uploads/2023/06/carefree-free-man-raising-his-arms-1.png" />
      <Card.Body>
        <Card.Title>Increased energy levels</Card.Title>
        <Card.Text>
        Eating a balanced diet that provides your body with the necessary nutrients can help increase energy levels, making it easier to be active.
        </Card.Text>
      </Card.Body>
    </Card>
      </Col>
      <Col xs={4} md={4}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://weightloss-solutions.org/wp-content/uploads/2023/06/close-up-woman-s-hands-made-heart-belly-1.png" />
      <Card.Body>
        <Card.Title>Improved digestion</Card.Title>
        <Card.Text>
        Eating a diet rich in fruits, vegetables, and whole grains can help improve digestion and prevent constipation and other digestive issues.
        </Card.Text>
      </Card.Body>
    </Card>
      </Col>
      <Col xs={4} md={4}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://weightloss-solutions.org/wp-content/uploads/2023/06/casual-couple-smiling-camera-1.png" />
      <Card.Body>
        <Card.Title>Better mood</Card.Title>
        <Card.Text>
        Proper nutrition can also have a positive impact on mental health, helping to reduce symptoms of depression and anxiety.
        </Card.Text>
      </Card.Body>
    </Card>
      </Col>
      <Col xs={4} md={4}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://weightloss-solutions.org/wp-content/uploads/2023/06/Group-113-1.png" />
      <Card.Body>
        <Card.Title>Reduced risk of chronic diseases</Card.Title>
        <Card.Text>
        Eating a healthy diet can help reduce the risk of chronic diseases such as heart disease, diabetes, and certain types of cancer.
        </Card.Text>
      </Card.Body>
    </Card>
      </Col>
      <Col xs={4} md={4}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://weightloss-solutions.org/wp-content/uploads/2023/06/fit-couple-park-1.png" />
      <Card.Body>
        <Card.Title>Improved overall health</Card.Title>
        <Card.Text>
        Maintaining a healthy weight can help improve overall health and well-being, making it easier to stay active, enjoy life, and age gracefully.
        </Card.Text>
      </Card.Body>
    </Card>
      </Col>
    </Row>
   
  </Container>
  
  <Container style={{ marginBottom:20, marginTop:20 }}>
    <h1>Take control of your Health and Lose Weight for good?</h1>
    <p>Chronic weight related diseases are at an epidemic level: High blood pressure, high cholesterol, heart disease, stroke, type 2 diabetes, joint problems, breathing problems, low self-esteem, depression, and even cancer. Better Manage (and Reduce the Risk) of Weight Related Diseases through proper diet and nutrition.</p>
  </Container>
    </div>
  );
};

export default HomePage;
