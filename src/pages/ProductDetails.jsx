import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <h2 className="text-center mt-5">Loading...</h2>;

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="row w-75">
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src={product.image}
            className="img-fluid"
            alt={product.title}
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h1 className="text-center">{product.title}</h1>
          <h4 className="text-success text-center">${product.price}</h4>
          <p className="text-center">{product.description}</p>
          <button className="btn btn-primary align-self-center">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
