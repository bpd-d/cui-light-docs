import * as React from "react";
import { capitalize } from "../../../utils/function";

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

export function CuiSelect(props: CuiSelectProps) {
    const [state, setState] = React.useState<SelectState>({
        value: props.current
    })

    let optionsData = props.options.map(opt => {
        return <option key={opt} value={opt}>{capitalize(opt)}</option>
    })

    function handleChange(ev: any) {
        setState({ value: ev.target.value });
        if (props.onChange) {
            props.onChange(ev.target.value)
        }
    }

    return (
        <select className="cui-select" name={props.name} value={state.value} placeholder={props.placeholder} onChange={handleChange}>
            {optionsData}
        </select>);
}