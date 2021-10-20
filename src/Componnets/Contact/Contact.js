import React from 'react';
import { useForm } from 'react-hook-form';


const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <div className="py-5 text-center bg-green">
                <h1 className="py-5 text-white">Contact With Us</h1>
            </div>
            <div className="container mt-5">
                <div className="row mb-5">
                    <div className="col-lg-8">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="form-control form-control-lg mb-3" placeholder="Your Name" {...register("name")} />

                            <input className="form-control form-control-lg mb-3" placeholder="Your Email" {...register("email", { required: true })} />
                            {errors.email && <span className="text-danger">This field is required</span>}
                            <input className="form-control form-control-lg mb-3" placeholder="Address" {...register("address")} />
                            <input className="form-control form-control-lg mb-3" placeholder="Phone" {...register("phone")} />
                            <input className="btn-fit" type="submit" />
                        </form>
                    </div>
                    <div className="col-lg-3 offset-lg-1">
                        <h3>Our Address</h3>
                        <address>
                            Uposohor R/A <br />
                            Sadar,Sylhet-3100, <br />
                            Email: abc@example.com <br />
                            Phone: 01234567890
                        </address>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Contact;