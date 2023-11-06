import React from 'react';
import loadingImg from "../../assets/others/cupcake-dribbble.gif"

const LoadingPage = () => {
    return (
        <div>
            <div>
                <img className="mx-auto max-h-screen" src={loadingImg} alt="" />
            </div>
        </div>
    );
};

export default LoadingPage;