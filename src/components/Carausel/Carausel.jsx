import Carousel from 'react-bootstrap/Carousel';
import Card from '../../assets/images/123.png'
import Card2 from './RAMADAN.png'
function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Card2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={Card2}
          alt="Second slide"
        />
  
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Card2}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;