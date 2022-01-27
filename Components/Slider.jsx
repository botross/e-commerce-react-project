import React from 'react';
import { Carousel} from 'react-bootstrap';
import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"
import image4 from "../images/image4.jpg"
import image5 from "../images/image5.jpg"
import image6 from "../images/image6.jpg"


function Slider() {
  return (
      <>
      <Carousel>
  <Carousel.Item interval={1000}>
    <img className="d-block w-100" src={image1} alt="First slide"/>
  </Carousel.Item>
  
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />

  </Carousel.Item>
   <Carousel.Item>
    <img
      className="d-block w-100"
      src={image4}
      alt="Third slide"
    />

  </Carousel.Item>
   <Carousel.Item>
    <img
      className="d-block w-100"
      src={image5}
      alt="Third slide"
    />

  </Carousel.Item>
   <Carousel.Item>
    <img
      className="d-block w-100"
      src={image6}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
      </>

  )
}

export default Slider;
