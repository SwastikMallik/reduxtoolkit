import { useDispatch, useSelector } from "react-redux"
import { remove } from "../store/cartSlice"


const Cart = () => {
    const cartProducts = useSelector((state)=>state.cart)
    const dispatch = useDispatch()

    const products = cartProducts.map((item)=>(
        <div key={item.id}>
            <img src={item.image} alt={item.title}/>
            <h3>{item.title}</h3>
            <button onClick={(item)=>dispatch(remove(item.id))}>Remove from cart</button>
        </div>
    ))

    return (
      <div>
        <h2>Cart - {cartProducts.length}</h2>
        <div className="all-products" id="cart-card">
            {products}
        </div>
      </div>
    )
  }
  
  export default Cart