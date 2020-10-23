import React, { useContext } from 'react';
import { makeStyles, Box, Paper, Button } from '@material-ui/core';

import { OrderItem } from 'types/order';
import { formatCurrency } from 'utils';
import { FeedbackContext } from 'context/FeedbackContextProvider';
import { OrderHistoryContext } from 'context/OrderHistoryContextProvider';
import { OrderContext } from 'context/OrderContextProvider';

const useStyles = makeStyles((theme) => ({
    title: {
        flex: 1,
    },
    price: {
        textAlign: 'right',
    },
    paper: {
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    addOrder: {
        marginTop: theme.spacing(3),
        marginRight: theme.spacing(2),
        width: '100%',
    },
}));

interface OrderTotalProps {
    orderTotal: number;
    orders: OrderItem[];
}

const OrderTotal: React.FC<OrderTotalProps> = ({ orderTotal, orders }) => {
    const classes = useStyles();
    const { addOrder } = useContext(OrderHistoryContext);
    const { clearItems } = useContext(OrderContext);
    const { addFeedback } = useContext(FeedbackContext);

    const handleAddOrder = () => {
        addOrder(orders);
        clearItems();
        addFeedback('Order has been placed', 'success');
    };

    return (
        <Paper className={classes.paper}>
            <Box display="flex">
                <div className={classes.title}>
                    <strong>Order total</strong>
                </div>
                <div className={classes.price}>
                    <strong>{formatCurrency(orderTotal)}</strong>
                </div>
            </Box>
            <Button variant="contained" color="primary" className={classes.addOrder} onClick={handleAddOrder}>
                Add Order
            </Button>
        </Paper>
    );
};

export default React.memo(OrderTotal);
