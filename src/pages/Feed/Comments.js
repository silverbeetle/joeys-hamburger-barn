import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Attachment from './Attachment';
import ProfileImage from './ProfileImage';
import Replies from './Replies';
import Reactions from './Reactions';

const useStyles = makeStyles((theme) => ({
    container: {
        fontSize: '1em',
    },
    comment: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: theme.spacing(2),
    },
    commentBubble: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 12,
        padding: '5px 12px 7px',
        fontSize: '0.9em',
    },
    reactionContainer: {
        display: 'flex',

        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },

        '& div:first-child': {
            marginRight: theme.spacing(2),
        },
    },
}));

const Comments = ({ comments = [] }) => {
    const classes = useStyles();

    if (!comments.length) {
        return null;
    }

    return (
        <div className={classes.container}>
            {comments.map(({ id, message, from, attachment = {}, is_hidden, reactions, comments: replies = [] }) => {
                if (is_hidden) {
                    return null;
                }

                return (
                    <div key={id} className={classes.comment}>
                        <ProfileImage id={from?.id} />
                        <div>
                            <div className={classes.reactionContainer}>
                                <div className={classes.commentBubble}>
                                    <strong>{from.name}</strong>
                                    <br />
                                    {message}
                                    <Attachment {...attachment} />
                                </div>
                                <Reactions reactions={reactions?.data} />
                            </div>
                            <Replies replies={replies?.data} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Comments;
