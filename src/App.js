import React from 'react';
import logo from './logo.svg';
import { Card, Col, Row, Container, Button, ButtonToolbar, Figure } from'react-bootstrap';
import Gallery from './Gallery';

function App() {

  return (
	<div className={'phogen-app'}>
	<span class="spotify-link">...check out spotify?</span>
		<Gallery />
	<span class="soundcloud-link">...check out soundcloud?</span>
	</div>     
  );
}

export default App;
