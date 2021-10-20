import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Service = (props) => {
    const { _id, icon, name, description } = props.service;
    return (
        <div className="col-lg-4 col-md-6">
            <div className="single-service">
                <div className="service-icon">
                    <img className="img-fluid" src={icon} alt={name} />
                </div>
                <div className="service-content">
                    <h3>{name}</h3>
                    <p>{description.slice(0, 100)}</p>
                    <Link to={`/service/${_id}`} className="btn-fit">View Service <FontAwesomeIcon icon={faArrowRight} /></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;