import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MemeForm from './MemeForm';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const store = mockStore({
    memes: [],
});

describe('MemeForm', () => {
    test('renders MemeForm inputs and submit button', () => {
        render(
            <Provider store={store}>
                <MemeForm />
            </Provider>
        );

        expect(screen.getByLabelText(/Top Text:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Bottom Text:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Image Src:/i)).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: /Add a new meme/i })
        ).toBeInTheDocument();
    });

    test('allows user to fill and submit form', () => {
        render(
            <Provider store={store}>
                <MemeForm />
            </Provider>
        );

        fireEvent.change(screen.getByLabelText(/Top Text:/i), {
            target: { value: 'Top Text' },
        });
        fireEvent.change(screen.getByLabelText(/Bottom Text:/i), {
            target: { value: 'Bottom Text' },
        });
        fireEvent.change(screen.getByLabelText(/Image Src:/i), {
            target: { value: 'http://example.com/image.png' },
        });

        expect(screen.getByDisplayValue('Top Text')).toBeInTheDocument();
        expect(screen.getByDisplayValue('Bottom Text')).toBeInTheDocument();
        expect(
            screen.getByDisplayValue('http://example.com/image.png')
        ).toBeInTheDocument();

        // Note: Testing the actual dispatch of the form submission action might require additional mocking
        // of the Redux store's dispatch function.
    });
});
