import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const LoadingBackdrop = ({ title }) => {
    return (
        <div className="loading__backdrop">
            <span>
                <h2>{title}</h2>
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />
            </span>
        </div>
    )
}

export default LoadingBackdrop