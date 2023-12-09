import React from 'react';
import './Meme.css';

function Meme({ topText, bottomText, imgSrc, id, removeMeme }) {
    return (
        <div className="meme col-xl-4 col-lg-6 mb-4">
            <div className="inner">
                <button
                    className="btn btn-danger btn-sm remove"
                    onClick={() => removeMeme(id)}
                >
                    X
                </button>
                <div className="top-text">{topText}</div>
                <div className="bottom-text">{bottomText}</div>
                <img className="image" src={imgSrc} alt="Meme" />
            </div>
        </div>
    );
}

export default Meme;
