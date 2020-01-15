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
	if(window.innerWidth < 500)
		return '';

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
				case 10:
					this.setState({show10: !this.state.show10});
					break;
				case 11:
					this.setState({show11: !this.state.show11});
					break;
				case 12:
					this.setState({show12: !this.state.show12});
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
	let video_array = ['https://phogen-world.s3-us-west-2.amazonaws.com/videos/AMSTERDAMPEER_forig.mp4', 'https://phogen-world.s3-us-west-2.amazonaws.com/videos/KRAKOW2080_forig.mp4', 'https://phogen-world.s3-us-west-2.amazonaws.com/videos/KENNETTPUDDLES_forig.mp4',
						'https://phogen-world.s3-us-west-2.amazonaws.com/videos/LAWKS_forig.mp4', 'https://phogen-world.s3-us-west-2.amazonaws.com/videos/PRAGUEMIRACLE_forig.mp4',	'https://phogen-world.s3-us-west-2.amazonaws.com/videos/TIJUANATFJ_foriig.mp4',
						'https://phogen-world.s3-us-west-2.amazonaws.com/videos/NYTHEDUKE_forig.mp4', 'https://phogen-world.s3-us-west-2.amazonaws.com/videos/PRAGUEMIRACLE_forig.mp4', 'https://phogen-world.s3-us-west-2.amazonaws.com/videos/STOCKHOLMINDIGO_forig.mp4',
						'https://phogen-world.s3-us-west-2.amazonaws.com/videos/ITALYGABESTHEME_forig.mp4', 'https://phogen-world.s3-us-west-2.amazonaws.com/videos/VIENNAVIENNAWAITS_forig.mp4',	'https://phogen-world.s3-us-west-2.amazonaws.com/videos/HANOVERPUTITON_foriig.mp4'];
	let items = new Array(12).fill(1);

	let height = 1000;
	let width = height*3;

	return (
		<React.Fragment>
			<Container className={"wrap"}  fluid>
				<Row className='row1' >
				  {items && items.map((item, key) => {
					  if(key > 2)
						  return '';
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
				<Row className='row2' >
					{items && items.map((item, key) => {
						if(key <= 2 || key > 5)
							return '';
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
				<Row className='row3' >
					{items && items.map((item, key) => {
						if(key <= 5 || key > 8)
							return '';
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
				<Row className='row4' >
					{items && items.map((item, key) => {
						if(key <= 8)
							return '';
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
			          <h4>Welcome to Phogen World</h4>
					  <p>pardon our dust... &#128565; and check out these dope links</p>
					  <ul>
						  <li> Stream the entire LP on <a  target={"_blank"} rel={'noopener noreferrer'} href={'https://open.spotify.com/album/3dHoaAn1NW6eWa2NibyInW'}>Spotify</a></li>
						  <li>Follow phogen on <a target={"_blank"} rel={'noopener noreferrer'} href={'https://soundcloud.com/phogenbeats'}>Soudcloud</a></li>
					  </ul>
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