import ProductCard from "@/components/ProductCard";
import iphone from "../styles/images/iPhone15.webp";
import macbook from "../styles/images/mackbook.jpeg";

export default function Home() {
  const products = [
    { id: 1, name: "iPhone 15 Pro", price: "$999", image: iphone },
    { id: 2, name: "MacBook Air", price: "$1299", image: macbook },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Featured Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
