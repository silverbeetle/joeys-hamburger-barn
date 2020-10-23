import React, { useContext, useMemo } from 'react';
import { makeStyles, Paper } from '@material-ui/core';

import { formatCurrency } from 'utils';
import Heading from 'components/Heading';
import OrderRow from 'components/OrderRow';
import { OrderHistoryContext } from 'context/OrderHistoryContextProvider';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
    },
    order: {
        color: theme.palette.primary.dark,
    },
    total: {
        textAlign: 'right',
    },
}));

const OrderHistory: React.FC = () => {
    const classes = useStyles();
    const { orders } = useContext(OrderHistoryContext);
    const hasOrders = useMemo(() => Boolean(orders.length), [orders]);

    return (
        <div>
            <Heading>Order History</Heading>
            {!hasOrders && <Paper className={classes.paper}>There are no items in this order</Paper>}
            {hasOrders &&
                orders.map((order, i) => (
                    <div key={`${order.id}_${i}`} className={classes.order}>
                        <p>
                            <strong>Order # {order.id}</strong>
                        </p>
                        {order.items.map((item, i) => (
                            <OrderRow key={`${item.id}_${i}`} {...item} />
                        ))}
                        <div className={classes.total}>
                            <strong>Total: {formatCurrency(order.totalPrice)}</strong>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default OrderHistory;
