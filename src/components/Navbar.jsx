import React from 'react';
import formatPrice from "../utils/formatPrice";

const Navbar = () => {
    const total = 25000;
    const token = false;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">🍕 Pizzería Mamma Mia!</a>
                <div className="ml-auto">
                    <button className="btn btn-outline-primary">🏠 Home</button>
                    {token ? (
                        <>
                            <button className="btn btn-outline-secondary">🔓 Profile</button>
                            <button className="btn btn-outline-danger">🔒 Logout</button>
                        </>
                    ) : (
                        <>
                            <button className="btn btn-outline-success">🔐 Login</button>
                            <button className="btn btn-outline-warning">🔐 Register</button>
                        </>
                    )}
                    <button className="btn btn-outline-dark">🛒 Total: {formatPrice(total)}</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
