/// <reference types="react" />
export interface CuiDialogProps {
    title: string;
    id: string;
    body?: JSX.Element;
    footer?: JSX.Element;
    className?: string;
}
export declare function CuiDialog(props: CuiDialogProps): JSX.Element;
