export default function ReviewDetails({ params}:
    {params:{reviewId: string, productId: string}}
){
    return(
        <div>
            <h1>Review {params.reviewId} for product {params.productId}</h1>
        </div>
    )

}