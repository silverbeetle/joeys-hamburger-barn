import React from 'react';
import { makeStyles, Box, Paper } from '@material-ui/core';

import { OrderItem } from 'types/order';
import { formatCurrency } from 'utils';

const useStyles = makeStyles((theme) => ({
    title: {
        flex: 1,
    },
    price: {
        textAlign: 'right',
    },
    option: {
        fontSize: '0.75em',
    },
    paper: {
        fontSize: '0.9em',
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

const OrderRow: React.FC<OrderItem> = ({ title, quantity, options, totalPrice }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Box display="flex">
                <div className={classes.title}>
                    <strong>{title}</strong>
                    <br />
                    {Object.keys(options).map((key) => {
                        const { title, price } = options[key];

                        return (
                            <div key={key} className={classes.option}>
                                {title} +{formatCurrency(price)}
                            </div>
                        );
                    })}
                </div>
                <div className={classes.price}>{formatCurrency(totalPrice)}</div>
            </Box>
            <Box display="flex">
                <div className={classes.title}></div>
                <div className={classes.price}>
                    <strong>Qty: {quantity}</strong>
                </div>
            </Box>
        </Paper>
    );
};

export default OrderRow;
