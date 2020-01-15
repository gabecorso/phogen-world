import React from 'react';
import {Image} from'react-bootstrap';
class GalleryItem extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        const {
            show,
            i,
            image_arr,
            video_arr,
            handle_enter_image,
            handle_leave_image,
            handle_leave_video,
            handle_enter_video
        } = this.props;

        const timeout = 1000;

        return (
            <div className={'item-wrapper'}>

                <Image fluid
                       className={'video-mask'}
                       style={{height: '100%', width: '100%',  display: (show ? "none" : 'block')}}
                       onMouseEnter={(e) => {handle_enter_image(this.refs[`Video${i}`], i, timeout)}}
                       onMouseLeave={(e) => {handle_leave_image(false)}}
                       ref={`Cover${i}`}
                       src={`${image_arr[i-1]}`} />
                <video onMouseLeave={(e) => {handle_leave_video(this.refs[`Video${i}`], i);}}
                       onMouseEnter={(e) => {handle_enter_video(i);}}
                       style={{height:  '100%', width: '100%', display: (show ? "block" : 'none')}}
                       className={'video-mask tryut'}
                       ref={`Video${i}`}>
                    <source src={`${video_arr[i-1]}`} type="video/mp4"  />
                    Your browser does not support the video tag.
                </video>
            </div>

        );
    }

}

export default GalleryItem;