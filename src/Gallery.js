import React from 'react';

import { Card, Col, Row, Container, Button, ButtonToolbar, Image, Figure } from'react-bootstrap';

 // 			<svg>
						//   <defs>
						//     <clipPath id="clipping">
						//       <circle cx="284" cy="213" r="213" />
						//     </clipPath>
						//   </defs>
						// </svg>
var myVideo = document.getElementById("video1"); 
class Gallery extends React.Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			hover: false,
			show1: false,
			dimensions: {}

		};
	}




 playPause(ref1, show) { 


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


 

 	console.log(myVideo.clientWidth);

 	if (myVideo) {
	  if (myVideo.paused) 
	    myVideo.play(); 
	  else 
	    myVideo.pause(); 
		} 
	}




render() {

	
	    const {width, height} = this.state.dimensions;
	console.log(this.refs.Cover1ß);
	return (
		<React.Fragment>
		<Container  bsPrefix={'help'} >
        <Row style={{padding: '0px'}}>
          <Col noGutters={true} style={{padding: '0px'}} xs={4} sm={4} md={4} lg={4} xl={4}>
	         
			  	
		    			
						
							<Image  fluid className={'video-mask'} style={{  display: (this.state.show1 ? "none" : 'block')}} onMouseEnter={(e) => {this.playPause(this.refs.Video1, 1); this.setState({hover: 3}); console.log(this.refs.Video1, "here");}}
			    			  ref={'Cover1'} src={'https://phogen-world.s3-us-west-2.amazonaws.com/PHOGENLP_COLLAGE_1.png'} />
						
				
						
				            <video onMouseLeave={(e) => {this.playPause(this.refs.Video1, 1); this.setState({hover: false}); console.log(this.state.hover);}}   style={{height:  '100%', width: '100%', display: (this.state.show1 ? "block" : 'none')}}   className={'video-mask tryut'} ref="Video1">
							  <source src="https://phogen-world.s3-us-west-2.amazonaws.com/ITALYGABESTHEME.mpeg.mov" type="video/mp4"  />
							Your browser does not support the video tag.
							</video>
					

				

		  
		     </Col>


		          
		  
		   
          <Col style={{padding: '0px'}} xs={4} sm={4} md={4} lg={4} xl={4}>
         
		   
			           <Image  fluid onMouseEnter={(e) => {this.playPause(this.refs.Video2, 2); this.setState({hover: 3}); console.log(this.state.hover);}} className={'video-mask'}  style={{  display: (this.state.show2 ? "none" : 'block')}} ref={'Cover2'}  src={'https://phogen-world.s3-us-west-2.amazonaws.com/PHOGENLP_COLLAGE_2.png'} />
						
			            <video onMouseLeave={(e) => {this.playPause(this.refs.Video2, 2); this.setState({hover: false}); console.log(this.state.hover);}} style={{height:  '100%', width: '100%', display: (this.state.show2 ? "block" : 'none')}} className={'video-mask'}  ref="Video2">
						  <source src="https://phogen-world.s3-us-west-2.amazonaws.com/ITALYGABESTHEME.mpeg.mov" type="video/mp4"  />
						Your browser does not support the video tag.
						</video>
			
		          </Col>


		          
		  

          <Col style={{padding: '0px'}} xs={4} sm={4} md={4} lg={4} xl={4}>
         
		    			
			           <Image fluid onMouseEnter={(e) => {this.playPause(this.refs.Video3, 3); this.setState({hover: 3}); console.log(this.state.hover);}} className={'video-mask'}  style={{ display: (this.state.show3 ? "none" : 'block')}} ref={'Cover3'}  src={'https://phogen-world.s3-us-west-2.amazonaws.com/PHOGENLP_COLLAGE_3.png'} />
						
			            <video onMouseLeave={(e) => {this.playPause(this.refs.Video3, 3); this.setState({hover: false}); console.log(this.state.hover);}} style={{height:  '100%', width: '100%', display: (this.state.show3 ? "block" : 'none')}} className={'video-mask'} width="320" height="240" ref="Video3">
						  <source src="https://phogen-world.s3-us-west-2.amazonaws.com/ITALYGABESTHEME.mpeg.mov" type="video/mp4"  />
						Your browser does not support the video tag.
						</video>
			
		          </Col>


		          
		  
		          
		        </Row>



		        <Row>
          <Col style={{padding: '0px', marginTop: '-6px'}}  xs={4} sm={4} md={4} lg={4} xl={4}>
	       
		    			
			           <Image fluid onMouseEnter={(e) => {this.playPause(this.refs.Video4, 4); this.setState({hover: 3}); console.log(this.state.hover);}} className={'video-mask'}  style={{ display: (this.state.show4 ? "none" : 'block')}} ref={'Cover4'}  src={'https://phogen-world.s3-us-west-2.amazonaws.com/PHOGENLP_COLLAGE_4.png'} />
						
			            <video onMouseLeave={(e) => {this.playPause(this.refs.Video4, 4); this.setState({hover: false}); console.log(this.state.hover);}} style={{height:  '100%', width: '100%', display: (this.state.show4 ? "block" : 'none')}} className={'video-mask'} width="320" height="240" ref="Video4">
						  <source src="https://phogen-world.s3-us-west-2.amazonaws.com/ITALYGABESTHEME.mpeg.mov" type="video/mp4"  />
						Your browser does not support the video tag.
						</video>
					
		          </Col>

		          
		  
		   
          <Col style={{padding: '0px',  marginTop: '-6px'}} xs={4} sm={4} md={4} lg={4} xl={4}>
         
		    			
			           <Image fluid onMouseEnter={(e) => {this.playPause(this.refs.Video5, 5); this.setState({hover: 3}); console.log(this.state.hover);}} className={'video-mask'}  style={{ display: (this.state.show5 ? "none" : 'block')}} ref={'Cover5'}  src={'https://phogen-world.s3-us-west-2.amazonaws.com/PHOGENLP_COLLAGE_5.png'} />
						
			            <video onMouseLeave={(e) => {this.playPause(this.refs.Video5, 5); this.setState({hover: false}); console.log(this.state.hover);}} style={{height:  '100%', width: '100%', display: (this.state.show5 ? "block" : 'none')}} className={'video-mask'} width="320" height="240" ref="Video5">
						  <source src="https://phogen-world.s3-us-west-2.amazonaws.com/ITALYGABESTHEME.mpeg.mov" type="video/mp4"  />
						Your browser does not support the video tag.
						</video>
					
		          </Col>

		  

          <Col style={{padding: '0px',  marginTop: '-6px'}} xs={4} sm={4} md={4} lg={4} xl={4}>
         
		    			
			           <Image fluid  onMouseEnter={(e) => {this.playPause(this.refs.Video6, 6); this.setState({hover: 3}); console.log(this.state.hover);}} className={'video-mask'}  style={{ display: (this.state.show6 ? "none" : 'block')}} ref={'Cover6'}  src={'https://phogen-world.s3-us-west-2.amazonaws.com/PHOGENLP_COLLAGE_6.png'} />
						
			            <video onMouseLeave={(e) => {this.playPause(this.refs.Video6, 6); this.setState({hover: false}); console.log(this.state.hover);}} style={{height:  '100%', width: '100%', display: (this.state.show6 ? "block" : 'none')}} className={'video-mask'} width="320" height="240" ref="Video6">
						  <source src="https://phogen-world.s3-us-west-2.amazonaws.com/ITALYGABESTHEME.mpeg.mov" type="video/mp4"  />
						Your browser does not support the video tag.
						</video>
				
		          </Col>



		          
		  
		          
		        </Row>
		        <Row>
          <Col style={{padding: '0px',  marginTop: '-6px'}} xs={4} sm={4} md={4} lg={4} xl={4}>
	         
		    			
			           <Image fluid onMouseEnter={(e) => {this.playPause(this.refs.Video7, 7); this.setState({hover: 3}); console.log(this.state.hover);}} className={'video-mask'}  style={{ display: (this.state.show7 ? "none" : 'block')}} ref={'Cover7'}  src={'https://phogen-world.s3-us-west-2.amazonaws.com/PHOGENLP_COLLAGE_7.png'} />
						
			            <video onMouseLeave={(e) => {this.playPause(this.refs.Video7, 7); this.setState({hover: false}); console.log(this.state.hover);}} style={{height:  '100%', width: '100%', display: (this.state.show7 ? "block" : 'none')}} className={'video-mask'} width="320" height="240" ref="Video7">
						  <source src="https://phogen-world.s3-us-west-2.amazonaws.com/ITALYGABESTHEME.mpeg.mov" type="video/mp4"  />
						Your browser does not support the video tag.
						</video>
					
		          </Col>



		          
		  
		   
          <Col style={{padding: '0px',  marginTop: '-6px'}} xs={4} sm={4} md={4} lg={4} xl={4}>
         
		    			
			           <Image fluid onMouseEnter={(e) => {this.playPause(this.refs.Video8, 8); this.setState({hover: 3}); console.log(this.state.hover);}} className={'video-mask'}  style={{ display: (this.state.show8 ? "none" : 'block')}} ref={'Cover8'}  src={'https://phogen-world.s3-us-west-2.amazonaws.com/PHOGENLP_COLLAGE_8.png'} />
						
			            <video onMouseLeave={(e) => {this.playPause(this.refs.Video8, 8); this.setState({hover: false}); console.log(this.state.hover);}} style={{height:  '100%', width: '100%', display: (this.state.show8 ? "block" : 'none')}} className={'video-mask'} width="320" height="240" ref="Video8">
						  <source src="https://phogen-world.s3-us-west-2.amazonaws.com/ITALYGABESTHEME.mpeg.mov" type="video/mp4"  />
						Your browser does not support the video tag.
						</video>
				
		          </Col>



		          
		  

          <Col style={{padding: '0px',  marginTop: '-6px'}} xs={4} sm={4} md={4} lg={4} xl={4}>
         
		    		
			           <Image fluid onMouseEnter={(e) => {this.playPause(this.refs.Video9, 9); this.setState({hover: 3}); console.log(this.state.hover);}} className={'video-mask'}  style={{ display: (this.state.show9 ? "none" : 'block')}} ref={'Cover9'}  src={'https://phogen-world.s3-us-west-2.amazonaws.com/PHOGENLP_COLLAGE_9.png'} />
						
			            <video onMouseLeave={(e) => {this.playPause(this.refs.Video9, 9); this.setState({hover: false}); console.log(this.state.hover);}} style={{height:  '100%', width: '100%', display: (this.state.show9 ? "block" : 'none')}} className={'video-mask'} width="320" height="240" ref="Video9">
						  <source src="https://phogen-world.s3-us-west-2.amazonaws.com/ITALYGABESTHEME.mpeg.mov" type="video/mp4"  />
						Your browser does not support the video tag.
						</video>
					
		          </Col>



		          
		  
		          
		        </Row>
		        
		          
		      </Container>



		</React.Fragment>

		);
}

}

export default Gallery;