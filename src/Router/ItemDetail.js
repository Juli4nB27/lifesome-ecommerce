
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import React from "react";

const ItemDetail = ({item}) => {

    const [count, setCount] = useState(0)

    const SumarContador = () => {
        setCount(count + 1)
    }
    const RestarContador = () => {
        setCount(count - 1 )
    }


    let [add, setAdd] = useState(0)
    const onAdd = () => {
        add = add + count
        setAdd(add)
        addItem(item, count)
    }
    const { addItem } = useContext(CartContext)
    return(
        <div  className="contenedorCardDetail">
            <img src={item.image} className="imagenCardDetail" alt="ima"/>
            <h2 className="tituloCardDetail">{item.title}</h2>
            <p className="precioCardDetail">${item.precio}</p>
            <p className="precioDescDetail">{item.desc}</p>
            <div className="divContBtns">  
            {
                add > 0 ?
                    <Link to="/cart" className="divFinalizarCompra">
                        <div className="msjOnAdd">
                            Producto añadido!
                            <Link to="/" ><button className="btnSeguirComprando">Seguir Comprando</button></Link>
                        </div>
                        <button className="btnFinalizarCompra">Ir al carrito</button>
                    </Link>
                :    
                <ItemCount onAdd={onAdd} RestarContador={RestarContador} SumarContador={SumarContador} count={count} item={item} inicio={0} stock={item.stock} addItem={addItem} />     
            } 
            </div>
        </div>
    );
}

export default ItemDetail;
