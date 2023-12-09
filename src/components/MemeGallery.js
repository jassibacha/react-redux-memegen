import React from 'react';
import Meme from './Meme';
import { useSelector, useDispatch } from 'react-redux';
import { removeMeme } from '../actions/memeActions';

const MemeGallery = () => {
    const memes = useSelector((state) => state.memes); // Assuming memes is an array

    const dispatch = useDispatch();

    const handleRemoveMeme = (id) => {
        dispatch(removeMeme(id));
    };

    return (
        <div className="MemeGallery">
            {memes.map((meme) => (
                <Meme
                    key={meme.id}
                    id={meme.id}
                    topText={meme.topText}
                    bottomText={meme.bottomText}
                    imgSrc={meme.imgSrc}
                    removeMeme={handleRemoveMeme}
                />
            ))}
        </div>
    );
};

export default MemeGallery;
