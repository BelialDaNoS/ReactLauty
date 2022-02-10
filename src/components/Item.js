import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

function Item({cat}){
    useEffect(() => {
    }, [])

    return(
            <Card style={{ width: '20rem', margin: '10px' }}>
            <Card.Body>
                <Card.Title style={{textTransform:"capitalize"}}> {cat.title} </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">  Precio: $ {cat.precio} </Card.Subtitle>
                <Card.Text><img src={cat.front_default} style={{width:'200px', height:'200px'}}/></Card.Text>
                <Row><Link className="btn btn-primary" to={`/item/${cat.id}`}>Detalles</Link></Row>
            </Card.Body>
            </Card>
    )
}
export default Item