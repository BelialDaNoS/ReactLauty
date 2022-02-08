import React from 'react'
import { Row, Card, Col, Button} from "react-bootstrap";



const ItemCart = ({nombre, item, id, deleteItem}) => {
    const pokeimg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    const cantidad = item.count;
    if(item){
    return (
            <Card>
                <Card.Body>
                    <Row>
                        <Col className='align-self-center'>
                            <Card.Title style={{textTransform:"capitalize"}}>
                                {nombre}
                            <img src={pokeimg} alt="Imagen de un Pokemon" style={{width:'100px', height:'100px'}} className='ml-5'/>
                            </Card.Title>
                        </Col>
                        <Col className='align-self-center'>
                            <Row>
                            <Card.Text>
                                    Cantidad: {item.count}
                                </Card.Text>
                                <Card.Text>
                                    Precio Individual: $ {item.precioIndividual}
                                </Card.Text>
                                <Card.Text>
                                    Precio total: $ {item.precioTotal}
                                </Card.Text>
                            </Row>
                        </Col>
                        <Col className="d-flex justify-content-end" >
                            <Button variant="danger" onClick={() => deleteItem(id, cantidad)}>
                            <img src="/deleteicon.png" alt="" />
                            </Button>
                        </Col>

                    </Row>
                </Card.Body>
            </Card>
    )}
}

export default ItemCart;
