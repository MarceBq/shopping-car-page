import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import { carts } from "./mocks/products.json";
import { useState } from "react";

function App() {
  const products = carts.flatMap((cart) => cart.products);

  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  const productsFilter = filterProducts(products);

  return (
    <>
      <h1>Shopping Cart 🛒</h1>
      <Header />
      <Products products={productsFilter} />
    </>
  );
}

export default App;
