import React, { useContext } from 'react';
import {
    Button,
    Dialog,
    makeStyles,
    DialogActions,
    DialogContent,
    IconButton,
    DialogTitle,
    useMediaQuery,
    useTheme,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { DialogContext } from 'context/DialogContextProvider';

const ResponsiveDialog = () => {
    const { open, dialogContent, closeDialog } = useContext(DialogContext);
    const theme = useTheme();
    const { actions = [], title = '', content, dialogProps } = dialogContent || {};

    const useStyles = makeStyles((theme) => ({
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    }));

    const classes = useStyles();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Dialog
            fullScreen={fullScreen || Boolean(dialogProps?.fullScreen)}
            open={open}
            onClose={closeDialog}
            aria-labelledby="responsive-dialog-title"
            fullWidth={Boolean(dialogProps?.fullWidth)}
            maxWidth={dialogProps?.maxWidth || 'sm'}
        >
            <DialogTitle id="responsive-dialog-title">
                {title}
                <IconButton aria-label="close" className={classes.closeButton} onClick={closeDialog}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>{content}</DialogContent>
            <DialogActions>
                {actions.map(({ onClick, title }) => (
                    <Button autoFocus onClick={onClick} color="primary">
                        {title}
                    </Button>
                ))}
            </DialogActions>
        </Dialog>
    );
};

export default ResponsiveDialog;
