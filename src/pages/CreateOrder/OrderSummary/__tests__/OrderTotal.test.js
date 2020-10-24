import React from 'react';
import { screen, render, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';

import OrderTotal from '../OrderTotal';
import { FeedbackProvider } from 'context/FeedbackContextProvider';
import { OrderHistoryProvider } from 'context/OrderHistoryContextProvider';
import { OrderProvider } from 'context/OrderContextProvider';
import { hamburger } from '__mocks__/products';

test('clears order on submit', () => {
    const orderTotal = 5.2;
    const orders = [hamburger];

    render(
        <FeedbackProvider>
            <OrderHistoryProvider>
                <OrderProvider initialOrders={orders}>
                    <OrderTotal orderTotal={orderTotal} orders={orders} />
                </OrderProvider>
            </OrderHistoryProvider>
        </FeedbackProvider>
    );

    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);
    
    waitForElementToBeRemoved(submitButton);
});
