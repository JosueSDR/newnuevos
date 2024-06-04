import React from 'react'
import { Carousel } from 'antd';
import 'antd/dist/reset.css'; 
const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '400px',
    textAlign: 'center',
    background: '#364d79',
  };
  
  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };
  
function Jola() {
  return (
    
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>
          <img
            src="https://via.placeholder.com/800x400?text=Image+1"
            alt="Image 1"
            style={imageStyle}
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img
            src="https://via.placeholder.com/800x400?text=Image+2"
            alt="Image 2"
            style={imageStyle}
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img
            src="https://via.placeholder.com/800x400?text=Image+3"
            alt="Image 3"
            style={imageStyle}
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img
            src="https://via.placeholder.com/800x400?text=Image+4"
            alt="Image 4"
            style={imageStyle}
          />
        </h3>
      </div>
    </Carousel>
  )
}

export default Jola


