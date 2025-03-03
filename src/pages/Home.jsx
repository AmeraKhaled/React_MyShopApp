import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../api";
import ProductCard from "../components/productCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    if (category) {
      getProductsByCategory(category).then(setProducts);
    } else {
      getProducts().then(setProducts);
    }
  }, [category]);

  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
