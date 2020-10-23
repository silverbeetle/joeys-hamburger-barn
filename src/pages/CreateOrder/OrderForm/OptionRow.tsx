import React, { useMemo, useState } from 'react';
import { makeStyles, Checkbox, Box } from '@material-ui/core';

import { formatCurrency } from 'utils';

const useStyles = makeStyles((theme) => ({
    productRow: {},
    image: {
        display: 'block',
        width: 60,
        marginRight: theme.spacing(1),
    },
    title: {
        alignItems: 'center',
        // justifyContent: 'center',
        flex: 1,
    },
    price: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
}));

interface OptionRow {
    id: string;
    title: string;
    image: string;
    price: number;
    addOption: any;
    removeOption: any;
}

const OptionRow: React.FC<OptionRow> = ({ id, title, image, price, addOption, removeOption }) => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    const imgSrc = useMemo(() => `${process.env.PUBLIC_URL}/assets/${image}`, [image]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        setChecked(isChecked);
        isChecked ? addOption(id, title, price) : removeOption(id);
    };

    return (
        <Box display="flex" className={classes.productRow}>
            <Box display="flex" className={classes.title}>
                <Checkbox checked={checked} onChange={handleChange} />
                <img src={imgSrc} alt={title} className={classes.image} />
                {title}
            </Box>
            <Box display="flex" className={classes.price}>
                {formatCurrency(price)}
            </Box>
        </Box>
    );
};

export default OptionRow;
