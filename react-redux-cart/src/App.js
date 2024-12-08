import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";

function App() {
  const showCart = useSelector((state) => state.cart.showCart);
  const cart = useSelector(state=> state.product)
  console.log(cart);
  useEffect(()=>{
    
    fetch('https://todolist-db-ff398-default-rtdb.firebaseio.com/cart.json', {
      method:'PUT',
      body: JSON.stringify(cart)
    })
    const getData = async () =>{
      const respond = await fetch('https://todolist-db-ff398-default-rtdb.firebaseio.com/cart.json' )
      const cartData = await respond.json()
      console.log(cartData);
    }
    getData()
  },[cart])
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
