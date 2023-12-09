import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('App', () => {
    test('renders Meme Generator header', () => {
        const store = mockStore({
            memes: [],
        });

        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        const headerElement = screen.getByText(/MemeGen/i);
        expect(headerElement).toBeInTheDocument();
    });

    test('submits form in MemeForm and adds new meme', () => {
        const initialState = { memes: [] };
        const store = mockStore(initialState);

        render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        // Simulate filling out the form
        fireEvent.change(screen.getByLabelText(/Top Text:/i), {
            target: { value: 'Funny Top' },
        });
        fireEvent.change(screen.getByLabelText(/Bottom Text:/i), {
            target: { value: 'Hilarious Bottom' },
        });
        fireEvent.change(screen.getByLabelText(/Image Src:/i), {
            target: { value: 'http://example.com/image.png' },
        });

        // Simulate form submission
        fireEvent.click(
            screen.getByRole('button', { name: /Add a new meme/i })
        );

        // Check if the 'ADD_MEME' action was dispatched
        const actions = store.getActions();
        expect(actions[0].type).toBe('ADD_MEME');
        expect(actions[0].payload).toEqual({
            topText: 'Funny Top',
            bottomText: 'Hilarious Bottom',
            imgSrc: 'http://example.com/image.png',
            id: expect.any(String), // Since ID is generated dynamically
        });
    });
});
