import React from 'react';
import aboutImg from '../../images/about-right.png';

const AboutInfo = () => {
    return (
        <div className="container my-3 py-5">
            <div className="row align-items-center">
                <div className="col-lg-7">
                    <h1 className="fit-size">About <span className="color-green">FitHuB</span></h1>
                    <p>Praesent a diam at velit finibus vehicula sit amet eu dui. Vestibulum rutrum dignissim arcu, vitae convallis libero. Nulla interdum erat nec tincidunt laoreet. In ac consequat risus. Donec a lectus mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In maximus volutpat vehicula. Morbi ut dui iss. Sed eros eros, rutrum eu quam a venenatis.<br /><br />

                        Ut pulvinar mi ac sem sagittis, ut consectetur ipsum porta. Nullam vitae tellus id ante fermentum aliquam quis at metus. Curabitur nec tincidunt purus, sed faucibus dolor. Aliquam erat volutpat.</p>
                </div>
                <div className="col-lg-5">
                    <img src={aboutImg} alt="About Us" />
                </div>
            </div>
        </div>
    );
};

export default AboutInfo;