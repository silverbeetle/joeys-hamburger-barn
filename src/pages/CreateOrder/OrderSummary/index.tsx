import React, { useContext, useMemo } from 'react';
import { makeStyles, Paper } from '@material-ui/core';

import { OrderContext } from 'context/OrderContextProvider';
import Heading from 'components/Heading';
import OrderRow from '../../../components/OrderRow';
import OrderTotal from './OrderTotal';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
    },
}));

const OrderSummary: React.FC = () => {
    const classes = useStyles();
    const { orders } = useContext(OrderContext);

    let orderTotal = 0;
    const hasOrders = useMemo(() => Boolean(orders.length), [orders]);

    return (
        <>
            <Heading>Order Summary</Heading>
            {!hasOrders && <Paper className={classes.paper}>There are no items in this order</Paper>}
            {hasOrders && (
                <div>
                    {orders.map((order, i) => {
                        orderTotal += order.totalPrice;

                        return <OrderRow key={`${order.id}_${i}`} {...order} />;
                    })}
                    <OrderTotal orderTotal={orderTotal} orders={orders} />
                </div>
            )}
        </>
    );
};

export default OrderSummary;
