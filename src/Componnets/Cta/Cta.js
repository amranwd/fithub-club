import React from 'react';
import { Link } from 'react-router-dom';
import './Cta.css';

const Cta = () => {
    return (
        <div className="cta-area">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>If You Have any Query. Let us know</h1>
                        <Link className="btn-fit" to="/contact">Contact With Us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cta;