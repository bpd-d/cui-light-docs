import * as React from 'react'

export interface CuiDialogProps {
    title: string;
    id: string;
    body?: JSX.Element;
    footer?: JSX.Element;
    className?: string;
    outClose?: boolean;
}

export function CuiDialog(props: CuiDialogProps) {
    React.useEffect(() => {
    }, [props])
    return (<div className={`cui-dialog ${props.className ?? ""}`} cui-dialog={"escClose: Y" + props.outClose ? "; outClose: Y" : ""} id={props.id}>
        <div className="cui-dialog-container">
            <div className="cui-dialog-header">
                <span className="cui-dialog-title">{props.title}</span>
                <a className="cui-icon" cui-icon="close" cui-close=""></a>
            </div>
            <div className="cui-dialog-body">
                {props.body}
            </div>

            {props.footer && (<div className="cui-dialog-footer">
                {props.footer}
            </div>)}

        </div>
    </div>)
}
