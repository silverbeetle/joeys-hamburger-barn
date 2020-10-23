export type SeverityType = 'success' | 'info' | 'warning' | 'error' | undefined;
export type MessageType = string | undefined;

export interface FeedbackProps {
    severity: SeverityType;
    message: MessageType;
    open: boolean;
    errors?: any[];
}

export interface AddFeedbackFunc {
    (message: MessageType, severity: SeverityType, errors?: any): void;
}

export interface ToggleFeedbackFunc {
    (): void;
}

export interface FeedbackContextProps extends FeedbackProps {
    addFeedback: AddFeedbackFunc;
    toggleFeedback: ToggleFeedbackFunc;
}
