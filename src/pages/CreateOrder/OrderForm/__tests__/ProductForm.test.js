import React from 'react';
import { screen, render, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';

import ProductForm from '../ProductForm';
import { FeedbackProvider } from 'context/FeedbackContextProvider';
import { OrderHistoryProvider } from 'context/OrderHistoryContextProvider';
import { OrderProvider } from 'context/OrderContextProvider';
import { hamburger } from '__mocks__/products';

test('plus and minus buttons adjust quantity', () => {
    render(
        <FeedbackProvider>
            <OrderHistoryProvider>
                <OrderProvider>
                    <ProductForm {...hamburger} />
                </OrderProvider>
            </OrderHistoryProvider>
        </FeedbackProvider>
    );

    // Default quantity should be 1
    expect(screen.getByText(/Qty 1/i)).toBeInTheDocument();

    // Increase quantity by 2 to equal 3
    fireEvent.click(screen.getByTestId('plus'));
    fireEvent.click(screen.getByTestId('plus'));

    expect(screen.getByText(/Qty 3/i)).toBeInTheDocument();

    // Decrease by one so quantity is 2
    fireEvent.click(screen.getByTestId('minus'));
    expect(screen.getByText(/Qty 2/i)).toBeInTheDocument();
});

test('closes modal on submit', () => {
    render(
        <FeedbackProvider>
            <OrderHistoryProvider>
                <OrderProvider>
                    <ProductForm {...hamburger} />
                </OrderProvider>
            </OrderHistoryProvider>
        </FeedbackProvider>
    );

    const submitButton = screen.getByTestId('submit');
    fireEvent.click(submitButton);
    
    waitForElementToBeRemoved(submitButton);
});