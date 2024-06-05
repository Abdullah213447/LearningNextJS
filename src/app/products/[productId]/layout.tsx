export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <p>This is the layout for the product details</p>
      {children}
      <p>It will take productId as props in children</p>
    </div>
  );
}
