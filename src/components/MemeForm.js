import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMeme } from '../actions/memeActions';
import { v4 as uuidv4 } from 'uuid';

function MemeForm() {
    const dispatch = useDispatch();
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
        dispatch(addMeme({ ...formData, id: uuidv4() }));
        // Dispatch the action
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
        <div className="card">
            <div className="card-body">
                <form onSubmit={handleSubmit} className="form">
                    <div className="mb-3">
                        <label htmlFor="topText" className="form-label">
                            
                        
                            Top Text:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="topText"
                            name="topText"
                            value={formData.topText}
                            onChange={handleChange}
                        />
                    </div>

                            
                        
                    <div className="mb-3">
                        <label htmlFor="bottomText" className="form-label">
                            Bottom Text:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="bottomText"
                            name="bottomText"
                            value={formData.bottomText}
                            onChange={handleChange}
                        />
                            
                        
                    </div>

                    <div className="mb-3">
                        <label htmlFor="imgSrc" className="form-label">
                            Image Src:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="imgSrc"
                            name="imgSrc"
                        
                    
                            value={formData.imgSrc}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Add a new meme
                    </button>
                </form>
            </div>
        </div>
    );
}

export default MemeForm;
