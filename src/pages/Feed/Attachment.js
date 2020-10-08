import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    imgContainer: {
        maxWidth: 400,
    },
    img: {
        maxWidth: '100%',
        maxHeight: 240,
        borderRadius: 12,
    },
}));

const Attachment = ({ media = {} }) => {
    const classes = useStyles();
    const { image } = media;

    if (!image) {
        return null;
    }

    return (
        <div className={classes.imgContainer}>
            <img src={image.src} alt="attachment" className={classes.img} />
        </div>
    );
};

export default Attachment;
