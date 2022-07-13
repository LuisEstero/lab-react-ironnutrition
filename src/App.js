// src/App.js
import './App.css';
import foods from './foods.json';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import React, { useState } from 'react';


function Example() {
  
  const Example = (props) => { 
  }
  return (
    <div><div>
    <p> FOOD_NAME_HERE </p>
    <img src="FOOD_IMAGE_HERE" width={0} />
  </div>
      <Row>
        <Col>
          <Divider>Fancy Input</Divider>
          <Input value={''} onChange={() => {}} />
        </Col>

        <Col>
          <Card title={'Fancy Card'}>
            <Button onClick={() => {}}>Fancy Button</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}



function App() {
  return <div className="App"></div>;
}






export default App;