import React, { useState } from 'react';

function MemeForm({ addMeme }) {
    const INITIAL_STATE = {
        topText: '',
        bottomText: '',
        imgSrc: '',
    };
    const [formData, setFormData] = useState(INITIAL_STATE);

    /** Send {top, bottom, img} to parent
     *    & clear form. */

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addMeme(formData);
        setFormData(INITIAL_STATE);
    };

    /** Update local state w/curr state of input elem */

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData((fData) => ({
            ...fData,
            [name]: value,
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="topText">Top Text:</label>
            <input
                type="text"
                id="topText"
                name="topText"
                value={formData.topText}
                onChange={handleChange}
            />

            <label htmlFor="bottomText">Bottom Text:</label>
            <input
                type="text"
                id="bottomText"
                name="bottomText"
                value={formData.bottomText}
                onChange={handleChange}
            />

            <label htmlFor="imgSrc">Image Src:</label>
            <input
                type="text"
                id="imgSrc"
                name="imgSrc"
                value={formData.imgSrc}
                onChange={handleChange}
            />

            <button>Add a new box!</button>
        </form>
    );
}

export default MemeForm;
