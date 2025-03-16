"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        E-Store
      </Link>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <div className={`md:flex ${isOpen ? "block" : "hidden"}`}>
        <Link href="/products" className="p-2">
          Products
        </Link>
        <Link href="/cart" className="p-2">
          Cart
        </Link>
        <Link href="/login" className="p-2">
          Login
        </Link>
      </div>
    </nav>
  );
}
