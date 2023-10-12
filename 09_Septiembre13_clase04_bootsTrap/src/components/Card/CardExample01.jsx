// Tiene la importación de un botón porque lo vamos a usar junto a la tarjeta de react
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Imagen from '../../assets/imgenYoshi.jpg';

// Desarollo del componente funcional de bootstrap
function CardExample() {
  return (
    <div className='my-3'>
    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={Imagen} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default CardExample;