import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../api";

const Navbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then(setCategories);
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark m-auto">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    MyShop
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {categories.map((category) => (
                            <li key={category} className="nav-item">
                                <Link className="nav-link" to={`/?category=${category}`}>
                                    {category}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
