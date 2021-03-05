/// <reference types="react" />
export interface ClearableInputProps {
    value: string;
    onUpdate?: (value: string) => void;
    className?: string;
    alwaysShow?: true;
    filter?: string;
    disabled?: boolean;
}
export declare function ClearableInput(props: ClearableInputProps): JSX.Element;
