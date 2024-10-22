import products from "./product.js"
import { useParams } from "react-router-dom"
function ProductList(){
    const {productsId} = useParams()
    console.log(productsId)
    return(
        <div>
            <ul>
                <li>D</li>
            </ul>
        </div>
    )
}
export default ProductList