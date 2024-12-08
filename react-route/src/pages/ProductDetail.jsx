import { useParams } from "react-router-dom"

export default function ProductDetailPage(){
    const param = useParams()
    return(
        <>
            <h1>Product Detail</h1>
            <p>{param.id}</p>
        </>
    )
}