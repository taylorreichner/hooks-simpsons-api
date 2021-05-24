import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import SimpsonQuoteContainer from './SimpsonsQuote';

const server = setupServer(
	rest.get('https://thesimpsonsquoteapi.glitch.me/quotes', (req, res, ctx) => {
		return res(
			ctx.json([{
				quote: 'This is a test',
				character: 'Homer',
				image: 'not-a-real-image.jpg'
			}])
		)
	})
);

describe('Quote page', () => {
	beforeAll(() => server.listen());
	afterAll(() => server.close());

	it('fetches a quote on click', () => {
		render(<SimpsonQuoteContainer />);
		const button = screen.getByRole('button');
		fireEvent.click(button);

		return waitFor(() => {
			screen.getByAltText('Homer');
			screen.getByText('This is a test');
		});
	});
});