export const addMeme = (memeData) => {
    return {
        type: 'ADD_MEME',
        payload: memeData,
    };
};

export const removeMeme = (id) => {
    return {
        type: 'REMOVE_MEME',
        payload: id,
    };
};
