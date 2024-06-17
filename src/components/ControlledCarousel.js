import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
      <Image src="https://png.pngtree.com/thumb_back/fh260/background/20240610/pngtree-concept-healthy-food-and-sports-lifestyle-proper-nutrition-top-view-flat-image_15746299.jpg" width={'100%'} height={'45%'} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src="https://t4.ftcdn.net/jpg/06/06/44/31/360_F_606443118_6Jye4tpTDx0qsahLlEwpDthXlkN41GtD.jpg" width={'100%'} height={'45%'}  />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src="https://t4.ftcdn.net/jpg/05/58/20/05/360_F_558200504_eprRMaBp8d1V7ghCe7PRZIjVpUady2IG.jpg"  width={'100%'} height={'45%'} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;