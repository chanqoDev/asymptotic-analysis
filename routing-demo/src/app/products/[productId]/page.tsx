export default async function ProductDetails({
    params, 
}: {
    params: Promise<{ productId: string }>;
}) {
    const productId = (await params).productId; 
    return <h1>Product {productId} Details</h1>;
}