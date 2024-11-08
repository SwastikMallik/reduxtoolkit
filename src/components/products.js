import React, { useEffect, useState } from "react"
import '../App.css';
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Product = () => {

    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(data => data.json())
        .then(res => setProducts(res))
        
    },[])
    console.log('products', products)

    const addToCart = (item) =>{
        dispatch(add(item))
    }

    const cardItem = products.map((item)=>(
        <div key={item.id}>
            <img src={item.image} alt={item.title}/>
            <h3>{item.title}</h3>
            <button onClick={()=>addToCart(item)}>Add to cart</button>
        </div>
        
    ))

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