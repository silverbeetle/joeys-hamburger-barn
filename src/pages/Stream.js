import React, { useEffect, useState, useMemo, useCallback } from 'react';
import axios from 'axios';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    input: {
        marginBottom: theme.spacing(2),
        width: '100%',
    },
}));

const Stream = () => {
    const defaultStatus = 'Fetching your new Facebook Live stream object...';
    const [init, setInit] = useState(false);
    const [streamData, setStreamData] = useState();
    const [status, setStatus] = useState(defaultStatus);
    const classes = useStyles();
    const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

    useEffect(() => {
        if (!init) {
            axios.post(`https://graph.facebook.com/v3.3/me/live_videos?status=LIVE_NOW&access_token=${accessToken}`).then(
                (response) => {
                    if (response?.status === 200) {
                        setInit(true);
                        setStreamData(response.data);
                    } else {
                        setStatus(response.error.message);
                    }
                },
                (e) => {
                    setStatus(`${e.name}: ${e.message}`);
                },
            );
        }
    }, [init, accessToken]);

    const handleEndBroadcast = useCallback(() => {
        const liveVideoId = streamData?.id;

        axios.post(`https://graph.facebook.com/v3.3/${liveVideoId}?end_live_video=true&access_token=${accessToken}`).then((response) => {
            if (response?.status === 200) {
                setStreamData(undefined);
                setInit(false);
            }
        });
    }, [accessToken, streamData]);

    const streamKey = useMemo(() => {
        const { secure_stream_url = '' } = streamData || {};
        return secure_stream_url.replace('rtmps://rtmp-pc.facebook.com:443/rtmp/', '');
    }, [streamData]);

    return (
        <div>
            <h2>Create a stream</h2>
            {!streamData && <p>{status}</p>}
            {streamData && (
                <>
                    <p>Your Facebook stream key is below:</p>
                    <TextField type="text" value={streamKey} readOnly variant="filled" className={classes.input} />
                    <br />
                    <Button variant="contained" onClick={handleEndBroadcast}>
                        End live broadcast
                    </Button>
                </>
            )}
        </div>
    );
};

export default Stream;
