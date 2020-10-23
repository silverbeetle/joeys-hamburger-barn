import React from 'react';
import { makeStyles, TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Paper } from '@material-ui/core';

import { products } from '../constants';
import ProductRow from './ProductRow';
import Heading from 'components/Heading';

const useStyles = makeStyles((theme) => ({
    orderForm: {
        flex: 1,
        paddingBottom: theme.spacing(1),
    },
}));

const OrderForm: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.orderForm}>
            <Heading>Create Order</Heading>
            {products.map(({ id, title, items }) => (
                <div key={id}>
                    {products.length > 1 && <h3>{title}</h3>}
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <strong>Product</strong>
                                    </TableCell>
                                    <TableCell align="right">Item Price</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {items.map((item, i) => (
                                    <ProductRow key={`${item.id}_${i}`} {...item} />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            ))}
        </div>
    );
};

export default OrderForm;
