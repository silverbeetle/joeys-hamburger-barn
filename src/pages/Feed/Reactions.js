import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: theme.spacing(2),
    },
    reaction: {
        marginRight: theme.spacing(2),
    },
}));

const Reactions = ({ reactions }) => {
    const classes = useStyles();

    if (!reactions) {
        return null;
    }

    const reducer = (accumulator, { type, name, id }) => {
        if (!accumulator.hasOwnProperty(type)) {
            accumulator[type] = [];
        }

        accumulator[type].push({ id, name });

        return accumulator;
    };
    const postReactions = reactions.reduce(reducer, {});
    const createNames = (names) => names.map(({ name }) => name).join(', ');

    return (
        <div className={classes.container}>
            {Object.keys(postReactions).map((type) => {
                const reactionNames = createNames(postReactions[type]);

                return (
                    <Tooltip title={reactionNames} key={type}>
                        <strong className={classes.reaction}>{type}</strong>
                    </Tooltip>
                );
            })}
        </div>
    );
};

export default Reactions;
