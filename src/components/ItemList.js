import Item from "./Item";
import { Row } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react"


    const ItemList = ({catalogo}) => {
        const [pokeimg, setPokeimg] = useState([]);
        const [pokpeso, setPokpeso] = useState([]);
        const [pokeinfo, setPokeinfo] = useState([]);

        // useEffect(() => {

        // const promesa = fetch(`https://pokeapi.co/api/v2/pokemon/${catalogo.name}`);

        // promesa
        //     .then((res) => res.json())
        //     .then((res)=>{
        //         setPokeimg(res.sprites);

        //         console.log("Pokeinfo Cargada")
        //     })
        //     .catch(() => {
        //         console.error("Pokeinfo Mal")
        //     })
        // }, [])

        return (
            <Row>
                {catalogo.map((item,index,info)=>
                <Item key={index} cat={item}/>
                )}
            </Row>
        )
    }
export default ItemList