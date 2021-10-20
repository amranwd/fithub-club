import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container my-5">
            <div className="row text-center mb-5">
                <div className="col">
                    <img src="https://image.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" alt="" className="img-fluid" />
                </div>
            </div>
            <div className="row text-center">
                <div className="col">
                    <Link className="btn btn-lg btn-fit" to="/">Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;