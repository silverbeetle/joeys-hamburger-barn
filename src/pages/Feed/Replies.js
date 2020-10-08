import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';

import Comments from './Comments';

const useStyles = makeStyles((theme) => ({
    container: {
        fontSize: '1em',
        marginTop: theme.spacing(1),
    },
    replyButton: {
        cursor: 'pointer',
    },
}));

const Replies = ({ replies = [] }) => {
    const classes = useStyles();
    const [showReplies, setShowReplies] = useState(false);

    if (!replies.length) {
        return null;
    }

    const handleClick = () => {
        setShowReplies(true);
    };

    return (
        <div className={classes.container}>
            {!showReplies && (
                <div onClick={handleClick} className={classes.replyButton}>
                    <SubdirectoryArrowRightIcon /> {replies.length} Replies
                </div>
            )}
            {showReplies && <Comments comments={replies} />}
        </div>
    );
};

export default Replies;
