import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div className="col-md-4 col-lg-3 d-flex justify-content-center">
    <div className="card h-100 shadow-sm" style={{ width: "18rem" }}>
      <img
        src={product.image}
        className="card-img-top"
        alt={product.title}
        style={{ height: "200px", objectFit: "contain" }}
      />
      <div className="card-body d-flex flex-column text-center">
        <h5 className="card-title">{product.title.substring(0, 20)}...</h5>
        <p className="card-text text-success fw-bold">${product.price}</p>
        <Link to={`/product/${product.id}`} className="btn btn-primary mt-auto">
          View Details
        </Link>
      </div>
    </div>
  </div>
);

export default ProductCard;
