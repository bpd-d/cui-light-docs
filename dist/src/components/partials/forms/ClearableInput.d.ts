/// <reference types="react" />
export interface ClearableInputProps {
    value: string;
    onUpdate?: (value: string) => void;
    className?: string;
}
export declare function ClearableInput(props: ClearableInputProps): JSX.Element;
