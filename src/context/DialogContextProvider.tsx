import React, { createContext, useState, useMemo } from 'react';

type DialogActionType = { title: string; onClick: any };
type DialogPropType = {
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
    fullScreen?: boolean | undefined;
    fullWidth?: boolean | undefined;
};

export interface DialogContent {
    title?: string;
    content?: any;
    actions?: DialogActionType[];
    dialogProps?: DialogPropType;
}

export interface DialogProps {
    open: boolean;
    dialogContent?: DialogContent;
    openDialog: any;
    closeDialog: any;
}

export const defaultContext: DialogProps = {
    open: false,
    dialogContent: undefined,
    openDialog: () => {},
    closeDialog: () => {},
};

const DialogContext = createContext<DialogProps>(defaultContext);

const DialogProvider: React.FC = ({ children }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [dialogContent, setDialogContent] = useState<DialogContent>({});

    const defaultValue: DialogProps = useMemo(() => {
        const openDialog = (content: any, title = '', actions = [], dialogProps: DialogPropType | undefined): void => {
            if (!content) {
                return;
            }

            const newContent: DialogContent = {
                title,
                content,
                actions,
                dialogProps,
            };

            setDialogContent(newContent);
            setOpen(true);
        };

        const closeDialog = (): void => {
            setOpen(false);
        };

        return {
            open,
            dialogContent,
            openDialog,
            closeDialog,
        };
    }, [dialogContent, open]);

    return <DialogContext.Provider value={defaultValue}>{children}</DialogContext.Provider>;
};

export { DialogContext, DialogProvider };
