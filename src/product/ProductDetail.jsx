import products from "./product"
import { Link, useParams } from "react-router-dom"
function ProductDetail() {
    const { productId } = useParams()
    const product = products.find((parm) => parm.id === productId)
    const { name, image } = product
    return (
        <div className=" bg-slate-400">
            <h1>Product Detail</h1>
            <p>{name}</p>
            <img src={image} alt={name} className="m-60"/>
            <img src="https://dl.airtable.com/.attachmentThumbnails/7478483f40a2f56662a87b304bd4e104/707d397f" alt="" />
            <Link to='/product'>back to product</Link>
        </div>
    )
}
export default ProductDetail