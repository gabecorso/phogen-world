import React from 'react';
import { Col, Row, Container, Button, Modal } from'react-bootstrap';
import GalleryItem from "./GalleryItem";

class Gallery extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			hover: false,
			show1: false,
			show_modal: true,
			dimensions: {}

		};
		this.handleEnterImage = this.handleEnterImage.bind(this);
		this.handleLeaveImage = this.handleLeaveImage.bind(this);
		this.handleEnterVideo = this.handleEnterVideo.bind(this);
		this.handleLeaveVideo = this.handleLeaveVideo.bind(this);
	}

	playPause(ref1, show) { 


 		if(this.state.hover == show) {
		 	switch (show) {

			 	case 1:
			 		this.setState({show1: !this.state.show1});
			 		break;
				case 2: 
					this.setState({show2: !this.state.show2});
					break;
				case 3: 
					this.setState({show3: !this.state.show3});
					break;
				case 4: 
					this.setState({show4: !this.state.show4});
					break;
				case 5: 
					this.setState({show5: !this.state.show5});
					break;
				case 6: 
					this.setState({show6: !this.state.show6});
					break;
				case 7: 
					this.setState({show7: !this.state.show7});
					break;
				case 8: 
					this.setState({show8: !this.state.show8});
					break;
				case 9: 
					this.setState({show9: !this.state.show9});
					break;
				}

		 	var myVideo = ref1;

		 	if (myVideo) {
			  if (myVideo.paused) 
			    myVideo.play(); 
			  else 
			    myVideo.pause(); 
				} 
			}
			
	}

	handleEnterImage(vidRef, i, timeout) {
		this.setState({hover: i}); setTimeout(() => {this.playPause(vidRef, i)}, timeout)
	}
	handleLeaveImage() {
		this.setState({hover: false});
	}
	handleEnterVideo( i) {
		this.setState({hover: i})
	}
	handleLeaveVideo(vidRef, i) {
		this.playPause(vidRef, i);
	}

render() {
	let image_array = ['https://phogen-world.s3-us-west-2.amazonaws.com/PHOGENLP_COLLAGE_1.png', 'https://phogen-world.s3-us-west-2.amazonaws.com/PHOGENLP_COLLAGE_2.png', 'https://phogen-world.s3-us-west-2.amazonaws.com/PHOGENLP_COLLAGE_3.png',
						'https://phogen-world.s3-us-west-2.amazonaws.com/PHOGENLP_COLLAGE_4.png', 'https://phogen-world.s3-us-west-2.amazonaws.com/PHOGENLP_COLLAGE_5.png', 'https://phogen-world.s3-us-west-2.amazonaws.com/PHOGENLP_COLLAGE_6.png',
						'https://phogen-world.s3-us-west-2.amazonaws.com/PHOGENLP_COLLAGE_7.png', 'https://phogen-world.s3-us-west-2.amazonaws.com/PHOGENLP_COLLAGE_8.png', 'https://phogen-world.s3-us-west-2.amazonaws.com/PHOGENLP_COLLAGE_9.png',
						'https://phogen-world.s3-us-west-2.amazonaws.com/PHOGENLP_COLLAGE_10.png', 'https://phogen-world.s3-us-west-2.amazonaws.com/PHOGENLP_COLLAGE_11.png', 'https://phogen-world.s3-us-west-2.amazonaws.com/PHOGENLP_COLLAGE_12.png'];
	let video_array = ['https://phogen-world.s3-us-west-2.amazonaws.com/ITALYGABESTHEME.mpeg.mov', 'https://phogen-world.s3-us-west-2.amazonaws.com/ITALYGABESTHEME.mpeg.mov', 'https://drive.google.com/file/d/1tx7x5BjwQ2Wus_RexHv5eZpHAIsKZYFe/view?usp=sharing',
						'https://drive.google.com/file/d/1tx7x5BjwQ2Wus_RexHv5eZpHAIsKZYFe/view?usp=sharing', 'https://drive.google.com/file/d/1tx7x5BjwQ2Wus_RexHv5eZpHAIsKZYFe/view?usp=sharing',	'https://drive.google.com/file/d/1tx7x5BjwQ2Wus_RexHv5eZpHAIsKZYFe/view?usp=sharing',
						'https://drive.google.com/file/d/1tx7x5BjwQ2Wus_RexHv5eZpHAIsKZYFe/view?usp=sharing', 'https://drive.google.com/file/d/1tx7x5BjwQ2Wus_RexHv5eZpHAIsKZYFe/view?usp=sharing', 'https://drive.google.com/file/d/1tx7x5BjwQ2Wus_RexHv5eZpHAIsKZYFe/view?usp=sharing',
						'https://drive.google.com/file/d/1tx7x5BjwQ2Wus_RexHv5eZpHAIsKZYFe/view?usp=sharing', 'https://drive.google.com/file/d/1tx7x5BjwQ2Wus_RexHv5eZpHAIsKZYFe/view?usp=sharing',	'https://drive.google.com/file/d/1tx7x5BjwQ2Wus_RexHv5eZpHAIsKZYFe/view?usp=sharing'];
	let items = new Array(12).fill(1);
	return (
		<React.Fragment>
			<Container className={"wrap"} fluid>
				<Row className='row1' style={{padding: '0px'}}>
				  {items && items.map((item, key) => {
					return (
						<Col style={{padding: '0px'}} xs={4} sm={4} md={4} lg={4} xl={4}>
							<GalleryItem
								show={this.state[`show${key+1}`]}
								i={key+1}
								image_arr={image_array}
								video_arr={video_array}
								handle_enter_image={this.handleEnterImage}
								handle_leave_image={this.handleLeaveImage}
								handle_leave_video={this.handleLeaveVideo}
								handle_enter_video={this.handleEnterVideo} />
						</Col>
					)
				  })}
		        </Row>
		      </Container>

		      <Modal show={this.state.show_modal} onHide={() => {this.setState({show_modal: false})}} size="lg"
					 aria-labelledby="contained-modal-title-vcenter" centered>
				  <Modal.Header closeButton>
			        <Modal.Title id="contained-modal-title-vcenter">
			          &#127911;
			        </Modal.Title>
			      </Modal.Header>
			      <Modal.Body>
			        <h4>Welcome to phogen-world, pardon our dust... &#128565;</h4>
			      </Modal.Body>
			      <Modal.Footer>
			        <Button onClick={() => {this.setState({show_modal: false})}}>Close</Button>
			      </Modal.Footer>
			    </Modal>
		</React.Fragment>

		);
}

}

export default Gallery;