import React from 'react';
import { render } from '@testing-library/react';

import { OrderProvider } from 'context/OrderContextProvider';
import OrderSummary from '../';

test('renders order summary heading', () => {
  const { getByText } = render(<OrderSummary />);
  const headingElement = getByText(/Order Summary/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders no items message', () => {
    const { getByText } = render(
        <OrderProvider>
            <OrderSummary />
        </OrderProvider>
    );
    const statusElement = getByText(/There are no items in this order/i);
    expect(statusElement).toBeInTheDocument();
  });