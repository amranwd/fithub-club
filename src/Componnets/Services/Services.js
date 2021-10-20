import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="services" className="container mt-5">
            <div className="row align-items-center">
                <div className="col-lg-8 offset-lg-2 text-center">
                    <div className="section-title mb-5">
                        <h4>our services for you</h4>
                        <h1>PUSH YOUR LIMITS FORWARD WE OFFER TO YOU</h1>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                {
                    services.slice(0, 6).map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;