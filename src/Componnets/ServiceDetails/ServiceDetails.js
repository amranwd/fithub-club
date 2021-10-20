import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const ServiceDetails = (props) => {
    const { serviceId } = useParams();
    const [service, setService] = useState([]);
    const [singleService, setSingleService] = useState({});
    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    // call hbe jokon amar shob data load hye state e set hbe
    useEffect(() => {
        const foundService = service.find(
            (service) => service._id === serviceId
        );
        setSingleService(foundService);
    }, [service]);
    return (
        <>
            <div className="py-5 text-center bg-green">
                <h1 className="py-5 text-white">Service Details</h1>
            </div>
            <div className="container my-5" >
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <img src={singleService?.icon} alt={singleService?.name} />
                    </div>
                    <div className="col-lg-7">
                        <h2>{singleService?.name}</h2>
                        <p>Service ID: {singleService?._id}</p>
                        <p>{singleService?.description}</p>
                    </div>
                </div>
            </div >
        </>
    );
};

export default ServiceDetails;