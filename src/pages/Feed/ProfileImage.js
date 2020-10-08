import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    img: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: theme.spacing(2),
    },
}));

const ProfileImage = ({ id }) => {
    const classes = useStyles();
    const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
    const imgSrc = useMemo(() => `http://graph.facebook.com/${id}/picture?type=square&access_token=${accessToken}`, [id, accessToken]);

    if (!id) {
        return null;
    }

    return <img src={imgSrc} alt="ProfileImage" className={classes.img} />;
};

export default ProfileImage;
