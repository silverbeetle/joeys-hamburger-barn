import React from 'react';
import { Grid } from '@material-ui/core';

import OrderForm from './OrderForm';
import OrderSummary from './OrderSummary';
import Dialog from 'components/Dialog';

import { OrderProvider } from 'context/OrderContextProvider';
import { DialogProvider } from 'context/DialogContextProvider';

const CreateOrder: React.FC = () => (
    <DialogProvider>
        <OrderProvider>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={8}>
                    <OrderForm />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <OrderSummary />
                </Grid>
            </Grid>
            <Dialog />
        </OrderProvider>
    </DialogProvider>
);

export default CreateOrder;
