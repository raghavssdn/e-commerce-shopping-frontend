import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="border rounded-lg p-4">
      <Image src={product.image} alt={product.name} width={200} height={200} />
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-600">{product.price}</p>
      <Link href={`/products/${product.id}`} className="text-blue-500">
        View Details
      </Link>
    </div>
  );
}
