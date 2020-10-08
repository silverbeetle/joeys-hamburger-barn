import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Comments from './Comments';
import Reactions from './Reactions';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(2),
        paddingTop: 1,
        marginBottom: theme.spacing(4),
    },
    img: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
}));

const Story = ({ story = '', full_picture, comments, reactions }) => {
    const classes = useStyles();

    return (
        <Paper elevation={3} className={classes.container}>
            <h2>{story}</h2>
            {full_picture && <img src={full_picture} alt={story} className={classes.img} />}
            <Reactions reactions={reactions?.data} />
            <Comments comments={comments?.data} />
        </Paper>
    );
};

export default Story;
