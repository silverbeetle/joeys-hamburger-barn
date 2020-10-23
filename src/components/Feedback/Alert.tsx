import React, { useMemo } from 'react';
import MuiAlert, { AlertProps as MuiAlertProps } from '@material-ui/lab/Alert';

interface AlertProps extends MuiAlertProps {
    errors?: any;
}

const Alert: React.FC<AlertProps> = ({ errors, severity, children }) => {
    const keys = useMemo(() => Object.keys(errors), [errors]);
    const hasErrors = Boolean(keys.length);

    return (
        <MuiAlert elevation={6} variant="filled" severity={severity}>
            <div>{children}</div>
            {hasErrors && (
                <ul style={{ marginLeft: 0, paddingLeft: 0 }}>
                    {keys.map((key) => {
                        return <li key={key}>{errors[key][0]}</li>;
                    })}
                </ul>
            )}
        </MuiAlert>
    );
};

export default Alert;
