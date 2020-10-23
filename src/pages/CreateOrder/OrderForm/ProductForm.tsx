import React, { useState, useEffect, useContext, useMemo } from 'react';
import { makeStyles, Typography, Divider, Box, Button, IconButton } from '@material-ui/core';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { OptionProps } from 'types/order';
import { formatCurrency } from 'utils';
import { Item } from '../constants';
import OptionRow from './OptionRow';
import { DialogContext } from 'context/DialogContextProvider';
import { OrderContext } from 'context/OrderContextProvider';

const useStyles = makeStyles((theme) => ({
    productRow: {},
    image: {
        display: 'block',
        maxWidth: 250,
        margin: 'auto',
    },
    title: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    total: {
        flex: 1,
    },
    totalPrice: {
        textAlign: 'right',
    },
    quantityContainer: {
        textAlign: 'center',
    },
    quantity: {
        width: '5ch',
        textAlign: 'center',
    },
    divider: {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1),
    },
    button: {
        width: '100%',
        marginTop: theme.spacing(2),
    },
}));

const ProductRow: React.FC<Item> = ({ title = '', id, image, price, options = [] }) => {
    const classes = useStyles();
    const { closeDialog } = useContext(DialogContext);
    const { addItem } = useContext(OrderContext);

    const [totalPrice, setTotalPrice] = useState(price);
    const [quantity, setQuantity] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState<OptionProps>({});

    const addOption = (id: string, title: string, price: number): void => {
        const optionValue = { title, price };
        const newOptions = { ...selectedOptions, [id]: optionValue };

        setSelectedOptions(newOptions);
    };

    const removeOption = (id: string): void => {
        const newOptions = { ...selectedOptions };
        delete newOptions[id];

        setSelectedOptions(newOptions);
    };

    const handleOrder = () => {
        const productOrder = {
            id,
            totalPrice,
            title,
            price,
            image,
            quantity,
            options: selectedOptions,
        };

        addItem(productOrder);
        closeDialog();
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };
    const decreaseQuantity = () => {
        if (quantity <= 1) return null;

        setQuantity(quantity - 1);
    };

    useEffect(() => {
        const optionKeys = Object.keys(selectedOptions);
        let optionTotal = 0;

        optionKeys.map((key) => {
            optionTotal += selectedOptions[key].price;

            return null;
        });

        setTotalPrice(quantity * (price + optionTotal));
    }, [selectedOptions, price, quantity]);

    const hasOptions = useMemo(() => Boolean(options.length), [options]);

    return (
        <div>
            <Typography variant="h4">{title}</Typography>
            <img src={image} alt={title} className={classes.image} />
            <div className={classes.quantityContainer}>
                <IconButton aria-label="delete" onClick={decreaseQuantity}>
                    <RemoveCircleIcon />
                </IconButton>
                <strong>{quantity}</strong>
                <IconButton aria-label="delete" onClick={increaseQuantity}>
                    <AddCircleIcon />
                </IconButton>
            </div>
            {hasOptions && (
                <>
                    <strong>Options:</strong>
                    {options.map((option) => (
                        <OptionRow
                            key={option.id}
                            id={option.id}
                            title={option.title}
                            image={option.image}
                            price={option.price}
                            addOption={addOption}
                            removeOption={removeOption}
                        />
                    ))}
                </>
            )}
            <Divider className={classes.divider} />
            <Box display="flex">
                <div className={classes.total}>
                    <strong>TOTAL:</strong>
                </div>
                <div className={classes.totalPrice}>{formatCurrency(totalPrice)}</div>
            </Box>
            <Button variant="contained" size="large" color="secondary" className={classes.button} onClick={handleOrder}>
                Add to order
            </Button>
        </div>
    );
};

export default ProductRow;