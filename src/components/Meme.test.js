import React from 'react';
import { render, screen } from '@testing-library/react';
import Meme from './Meme';

describe('Meme', () => {
    test('renders the meme with given props', () => {
        const memeProps = {
            topText: 'Funny Top Text',
            bottomText: 'Hilarious Bottom Text',
            imgSrc: 'http://example.com/meme.png',
        };

        render(<Meme {...memeProps} />);

        // Check that the top and bottom texts are rendered
        expect(screen.getByText(memeProps.topText)).toBeInTheDocument();
        expect(screen.getByText(memeProps.bottomText)).toBeInTheDocument();

        // Check that the image is rendered with the correct src
        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('src', memeProps.imgSrc);
    });

    // Additional tests can be added for different scenarios or prop combinations
});
