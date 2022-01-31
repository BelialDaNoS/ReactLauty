import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { Row } from "react-bootstrap";
import {Container} from "react-bootstrap";
import { useParams } from "react-router-dom";
import {db} from "./firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({}) => {

    const [catalogo, setCatalogo] = useState([]);

    const [loading, setLoading] = useState(false)

    const { tipos } = useParams();

    useEffect(() => {
    const coleccionProductos = collection(db, "product")
        if(!tipos){
            const pedido = getDocs(coleccionProductos)
            pedido
            .then((resultado)=>{
                const docs = resultado.docs
                const docs_formeateado = docs.map(doc=>{
                    const producto ={
                    idfirebase: doc.id,
                    ...doc.data()
                    }
                    return producto
                })
                setCatalogo(docs_formeateado)
            })
            .catch((error)=>{
                console.error(error)
            })
            .finally(() => setLoading(true))
        }else{
            const filtro = where("categoria","==",tipos)
            const consulta = query(coleccionProductos,filtro)
            const pedido = getDocs(consulta)

            pedido
            .then((resultado)=>{


                const docs = resultado.docs
                const docs_formeateado = docs.map(doc=>{
                    const producto ={
                    idfirebase: doc.id,
                    ...doc.data()
                    }
                    return producto
                })

                setCatalogo(docs_formeateado)
            })
            .catch((error)=>{
                console.error(error)
            })
            .finally(() => setLoading(true))
        }
    },[tipos])


    if(!loading){
        return (
            <Container fluid>
            <Row className="justify-content-md-center">
                <img src="/loadgif.gif" alt="" style={{width:'500px', height:'500px'}}/>
            </Row>
            </Container>
        )
    }else{
        return (
            <Row className="pt-5"> 
                <ItemList catalogo={catalogo}/>
            </Row>
        )
    }
}
  
  export default ItemListContainer;