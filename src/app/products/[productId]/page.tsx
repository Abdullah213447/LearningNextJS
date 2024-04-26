export default function ProductDetails({
    params
} : {
    params: { productId: string }
})
{
    return(
        <h1>Product Details of product {params.productId}</h1>
    )

}