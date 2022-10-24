import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item(props) {
  return (
    <Card style={{ width: '35rem' }}>
      <Card.Img className='imgCard' variant="top" img src= {props.imgurl} alt="Producto img"/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>${props.price}</Card.Text>
        <Button variant="secondary">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;