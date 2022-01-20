import React from 'react'
import { Row, Card, Col, Button} from "react-bootstrap";
import DeIdAPrecio from "./DeIdAPrecio";

const ItemCart = ({nombre, item, id, deleteItem}) => {
    const pokeimg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    const cantidad = item.count;
    if(nombre){
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
                                    Precio: $<DeIdAPrecio id={id}/>
                                </Card.Text>
                                <Card.Text>
                                    Cantidad: {item.count}
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
