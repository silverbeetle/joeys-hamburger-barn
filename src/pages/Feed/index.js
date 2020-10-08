import React, { useEffect, useState } from 'react';
import Request from 'axios-request-handler';

import Story from './Story';

const Feed = () => {
    const [feedData, setFeedData] = useState();
    const [isFetching, setIsFetching] = useState(true);

    const callback = (response) => {
        if (response?.status === 200) {
            setFeedData(response?.data);
        }
    };

    useEffect(() => {
        const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
        const fields =
            'message,picture,story,likes,reactions,created_time,full_picture,comments{reactions{id,type,name},attachment,from,id,is_hidden,live_broadcast_timestamp,message,comments{reactions{id,type,name},attachment,from,id,is_hidden,live_broadcast_timestamp,message}}';
        const limit = 10;
        const intervalTime = 60000;

        const url = `https://graph.facebook.com/v3.3/me/feed?fields=${fields}&access_token=${accessToken}&limit=${limit}`;
        const options = {
            lockable: false, // true if you try to make a request when there is a pending one, the second will not be executed
            cancelable: true, // true if you try to make a request when there is a pending one, the first will be canceled and the new will executed
            errorHandler: (error, method) => {}, // function for handling the errors
        };
        const requestInstance = new Request(url, options);

        requestInstance.poll(intervalTime).get(callback, options);
    }, []);

    useEffect(() => {
        if (isFetching && feedData) {
            setIsFetching(false);
        }
    }, [feedData, isFetching]);

    return (
        <>
            <h2>Feed</h2>
            {isFetching && <div>Fetching your feed...</div>}
            {!isFetching && (
                <>
                    {feedData.data.map((story) => (
                        <Story key={story.id} {...story} />
                    ))}
                </>
            )}
        </>
    );
};

export default Feed;
