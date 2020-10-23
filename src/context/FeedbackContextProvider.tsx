import React, { createContext, useState, useMemo } from 'react';
import { MessageType, SeverityType, FeedbackContextProps, FeedbackProps } from 'types/feedback';

export const initialFeedbackState: FeedbackProps = {
    message: '',
    severity: 'info',
    open: false,
    errors: [],
};

export const defaultContext: FeedbackContextProps = {
    ...initialFeedbackState,
    addFeedback: (message, severity, errors) => {},
    toggleFeedback: () => {},
};

const FeedbackContext = createContext<FeedbackContextProps>(defaultContext);

const FeedbackProvider: React.FC = ({ children }) => {
    const [feedback, setFeedback] = useState<FeedbackProps>(initialFeedbackState);

    const defaultValue = useMemo(() => {
        const addFeedback = (message: MessageType, severity: SeverityType, errors?: any) => {
            setFeedback({
                message,
                severity,
                errors,
                open: true,
            });
        };

        const toggleFeedback = () => {
            setFeedback({
                ...feedback,
                open: !feedback.open,
            });
        };

        return {
            ...feedback,
            addFeedback,
            toggleFeedback,
        };
    }, [feedback]);

    return <FeedbackContext.Provider value={defaultValue}>{children}</FeedbackContext.Provider>;
};

export { FeedbackContext, FeedbackProvider };
