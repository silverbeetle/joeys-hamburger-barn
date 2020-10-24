import React from 'react';
import { render } from '@testing-library/react';

import OrderSummary from '../';
import { OrderProvider } from 'context/OrderContextProvider';
import { hamburger } from '__mocks__/products';

test('renders order summary heading', () => {
  const { getByText } = render(<OrderSummary />);
  const headingElement = getByText(/Order Summary/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders no items message', () => {
  const orders = [];

  const { getByText } = render(
      <OrderProvider initialOrders={orders}>
          <OrderSummary />
      </OrderProvider>
  );
  const statusElement = getByText(/There are no items in this order/i);
  expect(statusElement).toBeInTheDocument();
});

test('renders a product', () => {
  const orders = [hamburger];

  const { getByText } = render(
      <OrderProvider initialOrders={orders}>
          <OrderSummary />
      </OrderProvider>
  );
  const burgerElement = getByText(/Hamburger/i);
  expect(burgerElement).toBeInTheDocument();
});