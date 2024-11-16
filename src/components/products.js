import React, { useEffect, useState } from "react"
import '../App.css';
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";

const Product = () => {

    const products = useSelector((state)=>state.product.list)
    const pro_err = useSelector((state)=>state.product.error)
    //const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProducts())
        
    },[])
    console.log('products', pro_err)

    const addToCart = (item) =>{
        dispatch(add(item))
    }

    const cardItem = products.length ? products.map((item)=>(
        <div key={item.id}>
            <img src={item.image} alt={item.title}/>
            <h3>{item.title}</h3>
            <button onClick={()=>addToCart(item)}>Add to cart</button>
        </div>
        
    )) : <div>{pro_err}</div>

    return (
        <div>
            <h1>Product List</h1>
                <div className="all-products" >
                {cardItem}
            </div>
            
        </div>
    )
}

export default Product