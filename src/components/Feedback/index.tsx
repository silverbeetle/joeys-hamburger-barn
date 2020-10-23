import React, { useContext } from 'react';
import { Snackbar } from '@material-ui/core';

import { FeedbackContext } from 'context/FeedbackContextProvider';
import Alert from './Alert';

const Feedback = () => {
    const { message, severity, open, errors = [], toggleFeedback } = useContext(FeedbackContext);

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={toggleFeedback}>
            <Alert onClose={toggleFeedback} severity={severity} errors={errors}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default Feedback;
