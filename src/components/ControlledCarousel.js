import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
      <Image src={require('../assets/banner1.jpg')} width={'100%'} />
       
      </Carousel.Item>
      
    </Carousel>
  );
}

export default CarouselFadeExample;