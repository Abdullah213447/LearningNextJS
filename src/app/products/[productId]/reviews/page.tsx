export default function ReviewList({params}:{params:{productId:string}}){
    return(
        <div>
            <h1>Review List of product {params.productId}</h1>
            <h2>Review 1</h2>
            <h2>Review 2</h2>
            <h2>Review 3</h2>
        </div>
    )
}