export interface IElementRender<T> {
    name: string;
    get(content: string): T;
}
export interface IElementRenderEngine<T> {
    render(element: GeneratorElement): T;
}
export interface ElementGeneratorSetup {
    headerClass?: string;
    subheaderClass?: string;
    paragraphClass?: string;
}
export interface GeneratorElement {
    type: string;
    content?: string;
    children?: GeneratorElement[];
}
export interface IElementBuilder<T> {
    render(...elements: GeneratorElement[]): T[];
}
export interface ElementRenderDict<T> {
    [id: string]: IElementRender<T>;
}
export declare class ElementRenderBase {
    createNodeWithContent(tag: string, content?: string): Element;
}
export declare class SpanElementRender extends ElementRenderBase implements IElementRender<Element> {
    name: string;
    get(content: string): Element;
}
export declare class TextElementRender implements IElementRender<Element> {
    name: string;
    get(content: string): Element;
}
export declare class PreLineRender extends ElementRenderBase implements IElementRender<Element> {
    name: string;
    get(content: string): Element;
}
export declare class PreIndentRender extends ElementRenderBase implements IElementRender<Element> {
    name: string;
    get(content: string): Element;
}
export declare class PreTagRender extends ElementRenderBase implements IElementRender<Element> {
    name: string;
    get(content: string): Element;
}
export declare class PreVarRender extends ElementRenderBase implements IElementRender<Element> {
    name: string;
    get(content: string): Element;
}
export declare class HtmlElementRenderingEngine implements IElementRenderEngine<Element> {
    #private;
    constructor(renders: ElementRenderDict<Element>);
    render(element: GeneratorElement): Element;
}
export declare class ElementBuilder<T> implements IElementBuilder<T> {
    #private;
    constructor(engine: IElementRenderEngine<T>);
    render(...elements: GeneratorElement[]): T[];
}
