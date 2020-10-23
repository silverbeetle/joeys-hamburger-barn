import React, { useMemo, useContext } from 'react';
import { makeStyles, TableCell, TableRow, Box } from '@material-ui/core';

import { formatCurrency } from 'utils';
import { Item } from '../constants';
import { DialogContext } from 'context/DialogContextProvider';
import ProductForm from './ProductForm';

const useStyles = makeStyles((theme) => ({
    productRow: {
        cursor: 'pointer',
    },
    image: {
        display: 'inline-block',
        width: 60,
        marginRight: theme.spacing(2),
    },
    title: {
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

const ProductRow: React.FC<Item> = ({ id, title, image, price, options }) => {
    const classes = useStyles();
    const { openDialog } = useContext(DialogContext);
    const imgSrc = useMemo(() => `${process.env.PUBLIC_URL}/assets/${image}`, [image]);

    const handleClick = () => {
        const content = <ProductForm title={title} image={imgSrc} price={price} options={options} id={id} />;
        openDialog(content);
    };

    return (
        <TableRow className={classes.productRow} onClick={handleClick}>
            <TableCell>
                <Box display="flex">
                    <img src={imgSrc} alt={title} className={classes.image} />
                    <Box display="flex" className={classes.title}>
                        {title}
                    </Box>
                </Box>
            </TableCell>
            <TableCell align="right">{formatCurrency(price)}</TableCell>
        </TableRow>
    );
};

export default ProductRow;
