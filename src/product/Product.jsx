import { Link } from "react-router-dom"
import dataProduct from "./product"
function Product() {
    return (
        <section>
            <h1>Product</h1>
            <div>
                {dataProduct.map((product) => {
                    return (
                        <section>
                            <p>{product.id}</p>
                            <p>{product.name}</p>
                            <Link to={`/product/${product.id}`}>more</Link>
                        </section>
                    )
                }
                )}</div>
        </section >
    )
}
export default Product