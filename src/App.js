import { useState } from "react";
import products from "./products";
import "./App.css";

function App() {
  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter(p => p.category === filter);

  return (
    <div className="container">
      <h1>Product Filter</h1>

      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All Products</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
      </select>

      <div className="grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="card">
            <img
              src={product.image}
              alt={product.name}
              className="product-img"
            />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <span className={`tag ${product.category}`}>
              {product.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
