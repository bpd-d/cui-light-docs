/// <reference types="react" />
import { ParserNode } from '../../api/parser/interfaces';
export interface preProps {
    node: ParserNode;
    level: number;
}
export declare function PreNode(props: preProps): JSX.Element;
