import React from 'react';
import { render, screen } from '@testing-library/react';
import MemeGallery from './MemeGallery';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('MemeGallery', () => {
    test('renders correctly with no memes', () => {
        const store = mockStore({
            memes: [],
        });

        render(
            <Provider store={store}>
                <MemeGallery />
            </Provider>
        );

        // Test for empty state, e.g., no memes available message
        expect(screen.getByText(/no memes available/i)).toBeInTheDocument();
    });

    test('renders memes when available', () => {
        const store = mockStore({
            memes: [
                {
                    id: '1',
                    topText: 'Top 1',
                    bottomText: 'Bottom 1',
                    imgSrc: 'http://example.com/meme1.png',
                },
                {
                    id: '2',
                    topText: 'Top 2',
                    bottomText: 'Bottom 2',
                    imgSrc: 'http://example.com/meme2.png',
                },
            ],
        });

        render(
            <Provider store={store}>
                <MemeGallery />
            </Provider>
        );

        // Test for rendered memes using top or bottom text
        expect(screen.getByText('Top 1')).toBeInTheDocument();
        expect(screen.getByText('Bottom 1')).toBeInTheDocument();
        expect(screen.getByText('Top 2')).toBeInTheDocument();
        expect(screen.getByText('Bottom 2')).toBeInTheDocument();
    });
});
