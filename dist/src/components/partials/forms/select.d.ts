/// <reference types="react" />
export interface CuiSelectProps {
    current: string;
    options: string[];
    name: string;
    placeholder?: string;
    onChange?: (value: string) => void;
}
export interface SelectState {
    value: string;
}
export declare function CuiSelect(props: CuiSelectProps): JSX.Element;
