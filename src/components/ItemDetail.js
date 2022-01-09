import { Container, Modal, Row } from "react-bootstrap";
import { useState, useEffect } from "react"
import { Button } from "react-bootstrap";


  

const ItemDetail = ({product}) => {
const pokenombre = product.name;
    
    return (
        <Container>
            <Row>
                <h1>{pokenombre}</h1>
            </Row>
        </Container>
        )
    }
export default ItemDetail