import Link from "next/link";

export default function ProductList() {
  const productId = 100;
  return (
    <div>
      <h2>
        {" "}
        <Link href={`/products/${productId}`}>Product {productId}</Link>
      </h2>
      <h2>
        <Link href="/products/2" replace>
          product 2
        </Link>
      </h2>
      <h2>
        <Link href="/">Back Home</Link>
      </h2>
    </div>
  );
}
