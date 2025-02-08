import React from 'react';
import './Customized.css';

const Customized = () => {
    return (
        <div className="customized-container">
            <h1 className="customized-title">Kindly fill out the Google Form below ⬇️ </h1>
            <div className="google-form-container">
                <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSew1O07p2R5muQ3qKJyYInjy0ZzEM0d2SV9Blu59REf_VzvJg/viewform?embedded=true" 
                    width="640" 
                    height="1234" 
                    frameBorder="0" 
                    marginHeight="0" 
                    marginWidth="0"
                    title="Project Customization Form"
                >
                    Loading…
                </iframe>
            </div>
        </div>
    );
};

export default Customized;