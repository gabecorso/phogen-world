import React from 'react';
import logo from './logo.svg';
import { Card, Col, Row, Container, Button, ButtonToolbar, Figure } from'react-bootstrap';
import Gallery from './Gallery';

function App() {

  return (
	<div className={'grey-back'}>
		<Gallery />
	</div>     
  );
}

export default App;
