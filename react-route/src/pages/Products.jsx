import { Link } from "react-router-dom";

const PRODUCTS = [
    {id: 1, title: 'product 1'},
    {id: 2, title: 'product 2'},
    {id: 3, title: 'product 3'},
]
function ProductPages(){
    return(
        <>
            <h1>The Product Page</h1>
            <ul>
                {PRODUCTS.map((product,index)=>(
                    <li key={index}>
                        <Link to={`/products/${product.id}`}>{product.title}</Link>
                    </li>
                ))}
               
            </ul>
        </>
    )
}
export default ProductPages;