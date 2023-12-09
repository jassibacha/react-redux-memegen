// Set initial state
const initialState = []; // Array for memes

function memeReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_MEME':
            return [...state, action.payload];
        case 'REMOVE_MEME':
            // Filter out the meme with the matching id
            return state.filter((meme) => meme.id !== action.payload);
        default:
            return state;
    }
}

export default memeReducer;
