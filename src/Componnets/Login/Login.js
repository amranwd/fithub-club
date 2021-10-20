import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const Login = () => {
    // geting values from Auth
    const { error, signInWithGoogle, handleRegistration, handleName, handleEmail, handlePassword, toggleLogin, isLogin } = useAuth();
    // changing states after login with google
    const location = useLocation();
    const history = useHistory();
    const redirectUri = location.state?.from || '/';
    const handleGooglelogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirectUri);
            })
    }


    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Please Login First</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Form onSubmit={handleRegistration}>
                        {!isLogin && <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleName} type="text" placeholder="Enter Name" />
                        </Form.Group>}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onChange={toggleLogin} type="checkbox" label="Already Registered ?" />
                        </Form.Group>
                        <p className="text-danger">{error}</p>
                        <Button className="btn-fit" type="submit">
                            {isLogin ? 'Login' : 'Register'}
                        </Button>
                    </Form>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col border text-center footer-login">
                    <h1><FontAwesomeIcon icon={faPlus} /></h1>
                    <div>
                        <button onClick={handleGooglelogin} className="btn btn-lg btn-warning">Login With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;