import React from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from '../../images/Banner/Banner1.jpg'
import Banner2 from '../../images/Banner/Banner2.jpg'
import Banner3 from '../../images/Banner/Banner3.jpg'


const Banner = () => {
    return (
        <>
          <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={Banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>DENTALCARE</h3>
      <p>WE CARE YOUR TRUST</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={Banner2}
      alt="Second slide"
    />
    <Carousel.Caption>
    <h3>DENTAL CARE</h3>
      <p>WE CARE YOUR TRUST</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Banner3}
      alt="Third slide"
    />
    <Carousel.Caption>
    <h3>DENTAL CARE</h3>
      <p>WE CARE YOUR TRUST</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>  
        </>
    );
};

export default Banner;