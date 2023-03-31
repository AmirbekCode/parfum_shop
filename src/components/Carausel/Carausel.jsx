import Carousel from 'react-bootstrap/Carousel';
import Card from './RAMADAN.png'
import Card2 from './img.png'

function IndividualIntervalsExample() {
  return (
    <Carousel className='w-100'>
      <Carousel.Item interval={100} className="w20">
        <img
          className="d-block w-100 rounded"
          src={Card2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500} className="w20">
        <img
          className="d-block w-100 "
          src={Card}
          alt="Second slide"
        />
  
      </Carousel.Item>
      <Carousel.Item className="w20"> 
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