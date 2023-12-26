import { useCallback, useEffect } from "react";
import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

export function ProductList() {
  const [url, setUrl] = useState(" http://localhost:8000/product");
  const { data: products, loading } = useFetch(url);

  return (
    <>
      <section className="card">
        <button
          className="onStock"
          onClick={() => setUrl("http://localhost:8000/product")}
        >
          All
        </button>
        <button
          className="not-in-stock"
          onClick={() => setUrl("http://localhost:8000/product?in_stock=true")}
        >
          In stock only
        </button>
        {loading && <p>Loading products...</p>}
        {products &&
          products.map((product) => (
            <div className="comp" key={product.id}>
              <p className="id">{product.id}</p>
              <p className="name">{product.name}</p>
              <p>
                <span className="price">{product.price}</span>
                <span
                  className={product.in_stock ? "available" : "unavailable"}
                >
                  {product.in_stock ? "In stock" : "Out of stock"}
                </span>
              </p>
            </div>
          ))}
      </section>
    </>
  );
}
